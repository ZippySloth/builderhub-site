const Footer = () => {
  return (
    <footer className="w-full border-t bg-background py-6">
      <div className="container flex flex-col items-center justify-between gap-4 px-4 md:flex-row md:px-6">
        <div className="flex items-center gap-2">
          <svg className="h-5 w-5 animate-pulse-slow" viewBox="0 0 24 24" fill="none">
            <path d="M..." stroke="currentColor" strokeWidth="2" />
          </svg>
          <p className="text-sm font-medium">© 2025 Buildrhub. All rights reserved.</p>
        </div>
        <nav className="flex gap-4 sm:gap-6">
          <a href="#" className="text-xs hover:underline underline-offset-4 transition-colors hover:text-primary">
            Terms
          </a>
          <a href="#" className="text-xs hover:underline underline-offset-4 transition-colors hover:text-primary">
            Privacy
          </a>
          <a href="#" className="text-xs hover:underline underline-offset-4 transition-colors hover:text-primary">
            Cookies
          </a>
        </nav>
        <div className="flex items-center gap-2">
          {/* Facebook Icon */}
          <a href="#" aria-label="Facebook">
            <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M22 12a10 10 0 1 0-11.6 9.9v-7h-2v-2.9h2V9.5c0-2 1.2-3.1 3-3.1.9 0 1.8.1 1.8.1v2h-1c-1 0-1.3.6-1.3 1.2v1.4h2.2l-.4 2.9H14v7A10 10 0 0 0 22 12Z" />
            </svg>
          </a>
          {/* LinkedIn Icon */}
          <a href="#" aria-label="LinkedIn">
            <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M19 0h-14c-2.8 0-5 2.2-5 5v14c0 2.8 2.2 5 5 5h14c2.8 0 5-2.2 5-5v-14c0-2.8-2.2-5-5-5zm-11 19h-3v-9h3v9zm-1.5-10.3c-1 0-1.7-.7-1.7-1.6s.7-1.6 1.6-1.6 1.7.7 1.7 1.6-.7 1.6-1.6 1.6zm13.5 10.3h-3v-4.6c0-1.1-.4-1.9-1.3-1.9-.7 0-1.1.5-1.3 1-.1.2-.1.6-.1.9v4.6h-3v-9h3v1.2c.4-.7 1.1-1.6 2.7-1.6 2 0 3.5 1.3 3.5 4v5.4z" />
            </svg>
          </a>
        </div>
      </div>
    </footer>
  )
}

export default Footer
