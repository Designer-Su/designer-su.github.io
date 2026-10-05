import { portfolioData } from "@/data/portfolio";

export default function Experience() {
  const { experience } = portfolioData;

  return (
    <section id="experience" className="py-24 px-6 bg-foreground/5">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold mb-16 tracking-tight">Experience</h2>
        <div className="flex flex-col gap-12">
          {experience.map((job) => (
            <div key={job.id} className="grid grid-cols-1 md:grid-cols-[1fr_3fr] gap-4 md:gap-12">
              <div className="text-foreground/60 font-medium pt-1">
                {job.period}
              </div>
              <div className="flex flex-col gap-2">
                <h3 className="text-xl font-semibold">{job.role}</h3>
                <span className="text-lg text-foreground/80">{job.company}</span>
                <p className="text-foreground/60 mt-2 leading-relaxed">
                  {job.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
