export default function Footer() {
  return (
    <footer className="border-t border-foreground/5 py-12 mt-24">
      <div className="max-w-5xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-foreground/60">
        <p>© {new Date().getFullYear()} Sukyeong Lee. All rights reserved.</p>
        <div className="flex gap-4">
          <a href="mailto:sukyeongleee@gmail.com" className="hover:text-foreground transition-colors">Email</a>
          <a href="https://www.linkedin.com/in/sukyeong-lee/" target="_blank" rel="noopener noreferrer" className="hover:text-foreground transition-colors">LinkedIn</a>
          <a href="https://www.behance.net/sukyeonglee3" target="_blank" rel="noopener noreferrer" className="hover:text-foreground transition-colors">Behance</a>
        </div>
      </div>
    </footer>
  );
}
