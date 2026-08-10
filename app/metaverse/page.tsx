import type { Metadata } from "next";
import Link from "next/link";
import MetaverseHeroTitle from "@/components/MetaverseHeroTitle";

export const metadata: Metadata = {
  title: "Metaverse & Spatial UX | Sukyeong Lee",
  description: "Explore Metaverse, 3D environments, and spatial UX design projects by Sukyeong Lee.",
};

export default function MetaversePage() {
  return (
    <div className="py-24">
      {/* Hero Section */}
      <section className="px-6 pb-16">
        <div className="max-w-5xl mx-auto flex flex-col gap-8">
          <div className="flex flex-col gap-6">
            <MetaverseHeroTitle />
            <p className="text-lg md:text-xl leading-relaxed text-foreground/65 max-w-3xl font-normal">
              Designing the next dimension of digital interaction. Bringing human-centered design principles into 3D virtual worlds, spatial navigation, digital fashion ecosystems, and immersive narrative experiences.
            </p>
          </div>
        </div>
      </section>

      {/* Video Simulation Showcase */}
      <section className="pb-20 w-full">
        <div className="flex flex-col gap-6 w-full">
          <div className="max-w-5xl mx-auto w-full px-6 flex items-center justify-between">
            <div className="flex flex-col gap-1">
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-foreground/50">
                Interactive Simulation
              </span>
              <h2 className="text-2xl md:text-3xl font-bold tracking-tight">
                White Space: Metaverse 3D Walkthrough
              </h2>
            </div>
            <span className="hidden sm:inline-flex items-center gap-2 rounded-full border border-foreground/10 bg-foreground/5 px-3 py-1 text-xs font-medium text-foreground/70">
              CLO 3D & SketchUp & C4D
            </span>
          </div>

          <div className="w-full overflow-hidden bg-black rounded-none border-y border-foreground/10">
            <video
              src="/Metaverse/white%20space%20UXUI.mp4"
              controls
              autoPlay
              loop
              playsInline
              className="w-full h-auto object-cover min-h-[450px] md:min-h-[650px] lg:min-h-[800px] rounded-none"
            >
              <track
                kind="captions"
                src="/Metaverse/white_space_en.vtt"
                srcLang="en"
                label="English Subtitles"
                default
              />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      </section>

      {/* Project Case Study: White Space */}
      <section className="px-6 py-16">
        <div className="max-w-5xl mx-auto flex flex-col gap-16">
          
          {/* Section Header with CMYK Color Indicators */}
          <div className="flex flex-col gap-4 border-b border-foreground/10 pb-8">
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-[#06b6d4]" title="Cyan (Outfit Market)" />
                <span className="w-2.5 h-2.5 rounded-full bg-[#ec4899]" title="Magenta (Texture Market)" />
                <span className="w-2.5 h-2.5 rounded-full bg-[#eab308]" title="Yellow (NFT Market)" />
                <span className="w-2.5 h-2.5 rounded-full bg-[#171717]" title="Key / Black" />
              </div>
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-foreground/50">
                Project Case Study
              </span>
            </div>

            <div className="flex flex-col md:flex-row md:items-end justify-between gap-3">
              <div>
                <h2 className="text-3xl md:text-5xl font-bold tracking-tight">
                  White Space
                </h2>
                <p className="text-foreground/60 text-base md:text-lg mt-1 font-medium">
                  NFT Fashion Market & Worldview Design
                </p>
              </div>
              <span className="text-xs font-medium text-foreground/40 uppercase tracking-widest">
                Life System Design | Design Convergence
              </span>
            </div>
          </div>

          {/* Minimal Overview */}
          <div className="max-w-4xl">
            <p className="text-xl md:text-2xl font-light text-foreground/85 leading-relaxed">
              A sustainable digital fashion platform replacing physical garment pollution with 3D apparel, neural visor AR interactions, and a CMYK-inspired NFT trade economy in 3056 AD.
            </p>
          </div>

          {/* Core Storytelling & Narrative Premise */}
          <div className="flex flex-col gap-6 pt-4 border-t border-foreground/10">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#171717]" />
              <span className="text-xs font-bold uppercase tracking-wider text-foreground/50">
                Storytelling & Core Concept
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="flex flex-col gap-2">
                <span className="text-xs font-bold text-foreground/40 uppercase tracking-widest">01 / Core Question</span>
                <h3 className="text-lg font-bold tracking-tight">The White World Idea</h3>
                <p className="text-foreground/70 text-sm md:text-base leading-relaxed">
                  "If everyone lived in a monochrome white world, couldn't we eliminate physical clothing waste?" Digital fashion replaces physical textile manufacturing.
                </p>
              </div>

              <div className="flex flex-col gap-2">
                <span className="text-xs font-bold text-foreground/40 uppercase tracking-widest">02 / Narrative Premise</span>
                <h3 className="text-lg font-bold tracking-tight">3056 AD: Degenerated Vision</h3>
                <p className="text-foreground/70 text-sm md:text-base leading-relaxed">
                  In 3056 AD, human visual cone cells have vanished. Physical reality is entirely monochrome, rendering real-world fabric dyes obsolete.
                </p>
              </div>

              <div className="flex flex-col gap-2">
                <span className="text-xs font-bold text-foreground/40 uppercase tracking-widest">03 / Interaction</span>
                <h3 className="text-lg font-bold tracking-tight">Color-Restoration Visor</h3>
                <p className="text-foreground/70 text-sm md:text-base leading-relaxed">
                  Wearing AR/VR visor masks acts as artificial cone cells—allowing users to view, style, and trade digital apparel layers in real time.
                </p>
              </div>
            </div>
          </div>

          {/* CMYK 3-Market Architecture */}
          <div className="flex flex-col gap-6 pt-4 border-t border-foreground/10">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#eab308]" />
              <span className="text-xs font-bold uppercase tracking-wider text-foreground/50">
                System Architecture & CMYK Markets
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-5">
              <div className="flex flex-col gap-2 p-6 rounded-2xl bg-foreground/[0.02] border border-foreground/5">
                <span className="text-xs font-bold text-foreground/40">01</span>
                <h4 className="font-bold text-base">Narrative Concept</h4>
                <p className="text-xs md:text-sm text-foreground/65 leading-relaxed">
                  Dystopian 3056 world where color is perceived digitally via AR/VR visor masks.
                </p>
              </div>

              <div className="flex flex-col gap-2 p-6 rounded-2xl bg-foreground/[0.02] border-t-2 border-t-[#06b6d4] border-x border-b border-foreground/5">
                <span className="text-xs font-bold text-[#06b6d4]">02 / Cyan</span>
                <h4 className="font-bold text-base">Outfit Market</h4>
                <p className="text-xs md:text-sm text-foreground/65 leading-relaxed">
                  Garment geometry, silhouette selection, and 3D outfit customization.
                </p>
              </div>

              <div className="flex flex-col gap-2 p-6 rounded-2xl bg-foreground/[0.02] border-t-2 border-t-[#ec4899] border-x border-b border-foreground/5">
                <span className="text-xs font-bold text-[#ec4899]">03 / Magenta</span>
                <h4 className="font-bold text-base">Texture & Color</h4>
                <p className="text-xs md:text-sm text-foreground/65 leading-relaxed">
                  Surface textures, fabric materials, and custom color palette applications.
                </p>
              </div>

              <div className="flex flex-col gap-2 p-6 rounded-2xl bg-foreground/[0.02] border-t-2 border-t-[#eab308] border-x border-b border-foreground/5">
                <span className="text-xs font-bold text-[#eab308]">04 / Yellow</span>
                <h4 className="font-bold text-base">NFT Exchange</h4>
                <p className="text-xs md:text-sm text-foreground/65 leading-relaxed">
                  Ownership verification, barter trading, and digital fashion asset exchange.
                </p>
              </div>
            </div>
          </div>

          {/* Design Tech Stack */}
          <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-foreground/10 text-sm text-foreground/60">
            <span className="font-medium">Design Stack:</span>
            <div className="flex flex-wrap gap-2 text-xs font-semibold text-foreground/80">
              <span className="px-3.5 py-1.5 rounded-full bg-foreground/5 border border-foreground/10">CLO 3D</span>
              <span className="px-3.5 py-1.5 rounded-full bg-foreground/5 border border-foreground/10">SketchUp</span>
              <span className="px-3.5 py-1.5 rounded-full bg-foreground/5 border border-foreground/10">Cinema 4D</span>
              <span className="px-3.5 py-1.5 rounded-full bg-foreground/5 border border-foreground/10">Adobe XD</span>
            </div>
          </div>

        </div>
      </section>

      {/* Call to Action */}
      <section className="px-6 pt-8 pb-16">
        <div className="max-w-5xl mx-auto">
          <div className="relative overflow-hidden rounded-3xl border border-foreground/10 bg-gradient-to-b from-foreground/[0.03] to-transparent p-8 md:p-14 text-center flex flex-col items-center gap-6">
            <h2 className="text-2xl md:text-4xl font-bold tracking-tight max-w-2xl">
              Interested in Spatial & Metaverse UX Collaboration?
            </h2>
            <p className="text-foreground/60 text-base md:text-lg max-w-xl">
              I love discussing 3D interaction models, virtual spatial design, and building the future of immersive digital environments.
            </p>
            <div className="flex flex-wrap gap-4 justify-center mt-2">
              <a
                href="mailto:sukyeongleee@gmail.com"
                className="rounded-full bg-foreground text-background px-8 py-3.5 text-sm font-semibold hover:opacity-90 transition-opacity shadow-md"
              >
                Get in Touch
              </a>
              <Link
                href="/about"
                className="rounded-full border border-foreground/20 bg-background px-8 py-3.5 text-sm font-semibold hover:bg-foreground/5 transition-colors"
              >
                View About Me
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
