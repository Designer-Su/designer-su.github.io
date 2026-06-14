import Link from "next/link";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full pt-3">
      <div className="max-w-6xl mx-auto px-6">
        <div className="relative overflow-hidden rounded-[24px] px-6 py-3.5 ios-glass-nav">
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/12 to-transparent opacity-45" />
          <div className="relative z-10 flex items-center justify-between">
            <Link href="/" className="font-bold text-lg tracking-tight hover:opacity-80 transition-opacity">
              Sukyeong Lee
            </Link>
            <nav className="flex gap-6 text-sm font-semibold">
              <Link href="/about" className="text-[var(--ios-text-secondary)] hover:text-[var(--ios-text)] transition-colors duration-200">
                About me
              </Link>
              <Link href="/#uxui" className="text-[var(--ios-text-secondary)] hover:text-[var(--ios-text)] transition-colors duration-200">
                UX/UI
              </Link>
              {/*
              <Link href="/#branding" className="text-[var(--ios-text-secondary)] hover:text-[var(--ios-text)] transition-colors duration-200">
                Branding
              </Link>
              */}
              <Link href="/#product" className="text-[var(--ios-text-secondary)] hover:text-[var(--ios-text)] transition-colors duration-200">
                Product
              </Link>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
}
