import os
import requests
import datetime
from dotenv import load_dotenv
from supabase import create_client, Client

# ✅ Load environment variables from root folder
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

def fetch_top_posts(subreddit, limit=5):
    url = f"https://www.reddit.com/r/{subreddit}/top.json?limit={limit}&t=day"
    headers = {"User-agent": "Mozilla/5.0"}
    response = requests.get(url, headers=headers)
    if response.status_code == 200:
        return response.json()["data"]["children"]
    else:
        print(f"❌ Failed to fetch r/{subreddit}")
        return []

def send_to_supabase(posts):
    for post in posts:
        data = {
            "title": post["data"]["title"],
            "link": f"https://reddit.com{post['data']['permalink']}",
            "subreddit": post["data"]["subreddit"],
            "created_at": datetime.datetime.utcfromtimestamp(post["data"]["created_utc"]).isoformat()
        }
        supabase.table("posts").insert(data).execute()

def run_scraper():
    for sub in subreddits:
        posts = fetch_top_posts(sub)
        send_to_supabase(posts)
    print("✅ Scraping completed and data sent to Supabase.")

# Run it
if __name__ == "__main__":
    run_scraper()
