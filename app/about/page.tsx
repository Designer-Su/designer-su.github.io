import Experience from "@/components/Experience";
import Education from "@/components/Education";

export default function AboutPage() {
  return (
    <div className="py-24">
      <section className="px-6 pb-20">
        <div className="max-w-5xl mx-auto">
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-foreground/50 mb-4">
            About me
          </p>
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight leading-tight max-w-3xl">
            Experience and education
          </h1>
        </div>
      </section>
      <Experience />
      <Education />
    </div>
  );
}
