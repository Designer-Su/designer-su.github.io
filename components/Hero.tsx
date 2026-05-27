import { portfolioData } from "@/data/portfolio";

export default function Hero() {
  const { hero } = portfolioData;

  return (
    <section className="pt-32 pb-24 px-6">
      <div className="max-w-5xl mx-auto flex flex-col gap-8">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-foreground/30 cursor-default leading-[1.1] max-w-5xl transition-colors duration-500">
          <span className="text-foreground">{hero.greeting}</span> is a{" "}
          <span className="hover:text-blue-600 transition-colors duration-300">UX/UI Designer</span>{" "}
          <span className="hover:text-orange-500 transition-colors duration-300">delivering intuitive</span>,{" "}
          <span className="hover:text-emerald-500 transition-colors duration-300">data-driven experiences</span>{" "}
          through <span className="hover:text-purple-500 transition-colors duration-300">user-centered design</span> and <span className="hover:text-rose-500 transition-colors duration-300">full product ownership</span>.
        </h1>
        <p className="text-base md:text-lg text-foreground/60 max-w-2xl mt-4 leading-relaxed">
          {hero.about}
        </p>
        
        <div className="mt-12 flex flex-wrap gap-3">
          {hero.skills.map((skill) => (
            <span
              key={skill}
              className="px-4 py-2 rounded-full border border-foreground/10 text-sm font-medium bg-foreground/5 transition-colors duration-300 hover:bg-black hover:text-white hover:border-black"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
