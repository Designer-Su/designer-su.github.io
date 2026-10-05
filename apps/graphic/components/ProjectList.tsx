import Link from "next/link";
import Image from "next/image";
import { portfolioData } from "@/data/portfolio";

export default function ProjectList() {
  const { projects, brandingProjects, productProjects } = portfolioData;

  return (
    <section id="projects" className="py-24 px-6 bg-foreground/5">
      <div className="max-w-5xl mx-auto flex flex-col gap-32">
        
        {/* UX/UI Section */}
        <div id="uxui" className="scroll-mt-32">
          <h2 className="text-3xl font-bold mb-16 tracking-tight">UX/UI</h2>
          <div className="flex flex-col gap-24">
            {projects.map((project) => (
              <Link 
                key={project.id} 
                href={`/projects/${project.slug}`}
                className="group block"
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center">
                    <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl bg-foreground/10">
                      <Image 
                      src={project.thumbnail || project.image} 
                      alt={project.title}
                      fill
                      className={`object-cover transition-transform duration-700 group-hover:scale-105 ${project.imagePosition || "object-center"}`}
                    />
                  </div>
                  <div className="flex flex-col gap-4">
                    <span className="text-sm font-medium text-foreground/60 tracking-wider uppercase">
                      {project.category}
                    </span>
                    <h3 className="text-3xl md:text-4xl font-bold transition-colors group-hover:text-foreground/80">
                      {project.title}
                    </h3>
                    <p className="text-lg text-foreground/60 leading-relaxed mt-2">
                      {project.summary}
                    </p>
                    <div className="mt-4 flex items-center font-medium text-foreground">
                      {project.slug === 'solid-connection' || project.slug === 'camerafi-studio' ? 'View Project' : 'View Case Study'}
                      <svg className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* Branding Section (Temporarily Hidden) */}
        {/*
        <div id="branding" className="scroll-mt-32">
          <h2 className="text-3xl font-bold mb-16 tracking-tight">Branding</h2>
          {brandingProjects && brandingProjects.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {brandingProjects.map((project) => (
                <Link 
                  key={project.id} 
                  href={`/projects/${project.slug}`}
                  className="group flex flex-col gap-5"
                >
                  <div className="relative aspect-[4/5] w-full overflow-hidden rounded-lg bg-foreground/10">
                    <Image 
                      src={project.thumbnail || project.image} 
                      alt={project.title}
                      fill
                      className={`object-cover transition-transform duration-700 group-hover:scale-105 ${project.imagePosition || "object-center"}`}
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <span className="text-xs font-semibold text-foreground/40 tracking-wider uppercase">
                      {project.category}
                    </span>
                    <h3 className="text-xl font-bold transition-colors group-hover:text-foreground/80">
                      {project.title}
                    </h3>
                    <p className="text-foreground/60 leading-relaxed line-clamp-3">
                      {project.summary}
                    </p>
                    <div className="mt-3 flex items-center text-sm font-medium text-foreground">
                      View Case Study 
                      <svg className="w-4 h-4 ml-1.5 transition-transform duration-300 group-hover:translate-x-1.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          ) : (
            <div className="py-24 text-center border-2 border-dashed border-foreground/10 rounded-2xl">
              <p className="text-xl text-foreground/50 font-medium">Coming Soon</p>
            </div>
          )}
        </div>
        */}

        {/* Product Section */}
        <div id="product" className="scroll-mt-32">
          <h2 className="text-3xl font-bold mb-16 tracking-tight">Product</h2>
          {productProjects && productProjects.length > 0 ? (
            <div className="flex flex-col gap-24">
              {productProjects.map((project) => (
                <Link 
                  key={project.id} 
                  href={`/projects/${project.slug}`}
                  className="group block"
                >
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center">
                    <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl bg-foreground/10">
                      <Image 
                        src={project.thumbnail || project.image} 
                        alt={project.title}
                        fill
                        className={`object-cover transition-transform duration-700 group-hover:scale-105 ${project.imagePosition || "object-center"}`}
                      />
                    </div>
                    <div className="flex flex-col gap-4">
                      <span className="text-sm font-medium text-foreground/60 tracking-wider uppercase">
                        {project.category}
                      </span>
                      <h3 className="text-3xl md:text-4xl font-bold transition-colors group-hover:text-foreground/80">
                        {project.title}
                      </h3>
                      <p className="text-lg text-foreground/60 leading-relaxed mt-2">
                        {project.summary}
                      </p>
                      <div className="mt-4 flex items-center font-medium text-foreground">
                        View Case Study 
                        <svg className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                        </svg>
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          ) : (
            <div className="py-24 text-center border-2 border-dashed border-foreground/10 rounded-2xl">
              <p className="text-xl text-foreground/50 font-medium">Coming Soon</p>
            </div>
          )}
        </div>

      </div>
    </section>
  );
}
