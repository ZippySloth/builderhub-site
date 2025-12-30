import os
import re
import time
import requests
import datetime
import feedparser
from dotenv import load_dotenv
from supabase import create_client, Client

# ✅ Load environment variables
# This looks one directory up for the .env file as per your original structure
env_path = os.path.join(os.path.dirname(__file__), '..', '.env')
load_dotenv(dotenv_path=env_path)

SUPABASE_URL = os.getenv("SUPABASE_URL")
SUPABASE_KEY = os.getenv("SUPABASE_KEY")

# 🛑 Safety check
if not SUPABASE_URL or not SUPABASE_KEY:
    raise ValueError("❌ Missing Supabase URL or Key. Check your .env file.")

# ✅ Initialize Supabase
supabase: Client = create_client(SUPABASE_URL, SUPABASE_KEY)

# ✅ Subreddits to scrape
subreddits = [
    "Entrepreneur", "smallbusiness", "startups", "business", "ecommerce",
    "artificial", "ChatGPT", "OpenAI", "GPT3", "MachineLearning",
    "marketing", "digitalmarketing", "SEO", "content_marketing",
    "PPC", "socialmedia", "advertising", "Showerthoughts", "dataisbeautiful"
]

# ✅ Configuration
# Using old.reddit.com often bypasses "New Reddit" bot-detection blocks
BASE_URL = "https://old.reddit.com"
HEADERS = {
    "User-Agent": "PortfolioTrendingBot/1.0 (Contact: your@email.com; Dev: /u/YourUser)"
}
FEED_TYPE = "top"  # Options: "top", "rising", "hot"
LIMIT = 50        # Reddit RSS allows up to 100

# ✅ Helper Functions
def extract_post_id(permalink):
    """Extracts the unique Reddit ID (e.g., '1h7abc') from a permalink."""
    match = re.search(r"/comments/([a-z0-9]+)/", permalink)
    return match.group(1) if match else None

def extract_subreddit(permalink):
    """Extracts the subreddit name from a permalink."""
    match = re.search(r"/r/([^/]+)/comments", permalink)
    return match.group(1) if match else None

def fetch_rss_posts(subreddit):
    """Fetches and parses the RSS feed for a specific subreddit."""
    # .rss?t=day ensures we get the top posts from the last 24 hours
    url = f"{BASE_URL}/r/{subreddit}/{FEED_TYPE}/.rss?limit={LIMIT}&t=day"
    print(f"📡 Fetching RSS: {url}")
    
    try:
        response = requests.get(url, headers=HEADERS, timeout=10)
        if response.status_code != 200:
            print(f"❌ Failed r/{subreddit} — Status: {response.status_code}")
            return []

        feed = feedparser.parse(response.content)
        posts = []

        for rank, entry in enumerate(feed.entries, start=1):
            post_id = extract_post_id(entry.link)
            if not post_id:
                continue
            
            # Format published_at from the RSS time tuple
            dt_tuple = entry.get("published_parsed") or entry.get("updated_parsed")
            if dt_tuple:
                published_at = datetime.datetime(*dt_tuple[:6]).isoformat()
            else:
                published_at = datetime.datetime.utcnow().isoformat()

            post = {
                "reddit_post_id": post_id,
                "title": entry.title,
                "permalink": entry.link,
                "subreddit": extract_subreddit(entry.link) or subreddit,
                "published_at": published_at,
                "first_seen_at": datetime.datetime.utcnow().isoformat(),
                "rank_hint": rank,
                "source_feed": url
            }
            posts.append(post)
        return posts
    except Exception as e:
        print(f"❌ Error fetching r/{subreddit}: {e}")
        return []

def send_to_supabase(posts):
    """Sends a list of posts to Supabase using upsert to avoid duplicates."""
    if not posts:
        return
    
    try:
        # on_conflict uses the primary key 'reddit_post_id' to prevent duplicates
        supabase.table("posts").upsert(posts, on_conflict="reddit_post_id").execute()
        print(f"✅ Upserted {len(posts)} posts.")
    except Exception as e:
        print(f"❌ Supabase Error: {e}")

def run_scraper():
    """Loops through all subreddits and runs the scrape job."""
    for sub in subreddits:
        posts = fetch_rss_posts(sub)
        send_to_supabase(posts)
        # 🛑 Be polite to Reddit servers to avoid IP blocks
        time.sleep(2) 
    
    print("🚀 All subreddits processed successfully.")

# Main Execution
if __name__ == "__main__":
    run_scraper()s