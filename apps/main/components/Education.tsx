import { portfolioData } from "@/data/portfolio";

export default function Education() {
  const { education } = portfolioData;

  return (
    <section className="py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold mb-16 tracking-tight">Education</h2>
        <div className="flex flex-col gap-12">
          {education.map((edu) => (
            <div key={edu.id} className="grid grid-cols-1 md:grid-cols-[1fr_3fr] gap-4 md:gap-12">
              <div className="text-foreground/60 font-medium pt-1">
                {edu.period}
              </div>
              <div className="flex flex-col gap-2">
                <h3 className="text-xl font-semibold">{edu.degree}</h3>
                <span className="text-lg text-foreground/80">{edu.institution}</span>
                {edu.details && (
                  <ul className="mt-3 flex flex-col gap-1">
                    {edu.details.map((detail, idx) => (
                      <li key={idx} className="text-foreground/60 flex items-start">
                        <span className="mr-2 mt-1.5 h-1.5 w-1.5 rounded-full bg-foreground/40 flex-shrink-0" />
                        <span className="leading-relaxed">{detail}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
