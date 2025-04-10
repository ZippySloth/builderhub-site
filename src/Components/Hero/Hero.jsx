import React from "react"
import { ArrowRight, Database } from "lucide-react"
import { Button } from "../ui/button" // <-- relative path
import { useNavigate } from "react-router-dom";
import SynthwaveBackground from "../SynthwaveBackground";
import { useTheme } from "../../context/ThemeContext";

const Hero = () => {
  const navigate = useNavigate();
  const { isDarkMode } = useTheme();
  
  console.log("✅ Redeploy test");


  return (
    <section className="relative w-full py-12 md:py-24 lg:py-32 xl:py-48 px-5 lg:px-8 xl:px-[8%]">
      <div className="absolute inset-0 z-0">
        <SynthwaveBackground isDarkMode={isDarkMode} /> {/* Pass the prop */}
      </div>
      <div className="container relative z-10 px-4 md:px-6">
        <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
          <div className="flex flex-col justify-center space-y-4">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                Build, Connect, Discover
              </h1>
              <p className="max-w-[600px] text-muted-foreground md:text-xl">
                Your creative developer hub for web services and daily viral content from the tech world.
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Button size="lg" className="gap-1" onClick={() => navigate('/web')}>
                Explore Services <ArrowRight className="h-4 w-4" />
              </Button>

              <Button size="lg" variant="outline" className="gap-1" onClick={() => navigate('/viral')}>
  Access Database <Database className="h-4 w-4" />
</Button>
            </div>
          </div>
          <div className="mx-auto aspect-video w-full max-w-[600px] overflow-hidden rounded-xl border bg-muted/50 p-2">
            <div className="flex h-full w-full flex-col rounded-lg bg-background p-4">
              <div className="flex items-center gap-2 border-b pb-2">
                <div className="h-3 w-3 rounded-full bg-red-500" />
                <div className="h-3 w-3 rounded-full bg-yellow-500" />
                <div className="h-3 w-3 rounded-full bg-green-500" />
                <div className="ml-2 text-xs font-medium">buildrhub.terminal</div>
              </div>
              <div className="flex-1 p-2 text-sm">
                <div className="text-green-500">$ buildrhub --init</div>
                <div className="mt-2">Initializing Buildrhub environment...</div>
                <div className="mt-1">Loading web services...</div>
                <div className="mt-1">Connecting to Reddit API...</div>
                <div className="mt-1">Fetching latest viral posts in tech categories...</div>
                <div className="mt-2 text-green-500">$ Ready to explore! Welcome to Buildrhub.</div>
                <div className="mt-4 animate-pulse">_</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
