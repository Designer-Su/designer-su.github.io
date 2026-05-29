import Experience from "@/components/Experience";
import Education from "@/components/Education";

const profileKeywords = [
  "UX Strategy",
  "Product Design",
  "User Research",
  "A/B Testing",
  "Design Systems",
  "Cross-functional Collaboration",
  "Data-informed Decisions",
  "Production Handoff",
];

export default function AboutPage() {
  return (
    <div className="py-24">
      <section className="px-6 pb-20">
        <div className="max-w-5xl mx-auto flex flex-col gap-8">
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-foreground/50 mb-4">
            About me
          </p>
          <div className="flex flex-col gap-6">
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight leading-tight max-w-3xl">
              Professional profile
            </h1>
            <p className="text-lg md:text-xl leading-relaxed text-foreground/65 max-w-3xl">
              UX/UI Designer with hands-on experience in product redesign, user research, A/B testing, and design system execution. I translate user needs and behavioral data into clear flows, polished interfaces, and production-ready solutions with measurable impact.
            </p>
          </div>

          <div className="flex flex-wrap gap-3 max-w-4xl">
            {profileKeywords.map((keyword) => (
              <span
                key={keyword}
                className="rounded-full border border-foreground/10 bg-foreground/5 px-4 py-2 text-sm font-semibold text-foreground/75"
              >
                {keyword}
              </span>
            ))}
          </div>
        </div>
      </section>
      <Experience />
      <Education />
    </div>
  );
}
