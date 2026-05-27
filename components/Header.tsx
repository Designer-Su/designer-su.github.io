import Link from "next/link";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full pt-3">
      <div className="max-w-6xl mx-auto px-6">
        <div className="relative overflow-hidden rounded-full border border-white/35 bg-white/10 px-5 py-4 shadow-[0_14px_40px_rgba(0,0,0,0.08)] backdrop-blur-3xl backdrop-saturate-200 ring-1 ring-white/30">
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/40 via-white/10 to-transparent" />
          <div className="pointer-events-none absolute inset-0 rounded-full border border-white/20" />
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
