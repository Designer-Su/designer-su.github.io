import Link from "next/link";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full pt-3">
      <div className="max-w-6xl mx-auto px-6">
        <div className="relative overflow-hidden rounded-full border border-white/40 bg-white/30 px-6 py-3.5 shadow-[0_12px_30px_rgba(0,0,0,0.04),inset_0_1px_1px_rgba(255,255,255,0.5)] backdrop-blur-2xl backdrop-saturate-[190%] transition-all duration-300">
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/30 to-transparent" />
          <div className="relative z-10 flex items-center justify-between">
            <Link href="/" className="font-semibold text-lg tracking-tight">
              Sukyeong Lee
            </Link>
            <nav className="flex gap-6 text-sm font-medium text-foreground/80">
              <Link href="/about" className="hover:text-foreground transition-colors">
                About me
              </Link>
              <Link href="/#uxui" className="hover:text-foreground transition-colors">
                UX/UI
              </Link>
              {/*
              <Link href="/#branding" className="hover:text-foreground transition-colors">
                Branding
              </Link>
              */}
              <Link href="/#product" className="hover:text-foreground transition-colors">
                Product
              </Link>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
}
