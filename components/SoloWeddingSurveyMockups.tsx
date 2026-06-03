import Image from "next/image";

const surveySteps = Array.from({ length: 12 }, (_, index) => {
  const step = index + 1;

  return {
    step,
    src: `/SW/survey/${step}.png`,
    title: `Personal Survey ${String(step).padStart(2, "0")}`,
  };
});

export default function SoloWeddingSurveyMockups() {
  return (
    <section className="w-full bg-white px-6 pb-28 pt-4 text-neutral-950">
      <div className="mx-auto flex max-w-6xl flex-col gap-14">
        <div className="mx-auto max-w-3xl text-center">
          <div className="mb-4 flex items-center justify-center gap-3">
            <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#A93E32] text-xs font-black text-white">
              01
            </span>
            <span className="text-xs font-bold uppercase tracking-[0.22em] text-neutral-400">
              Personalized Survey
            </span>
          </div>
          <h3 className="text-3xl font-black tracking-tight md:text-5xl">
            12-Step Personalization Flow
          </h3>
          <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-neutral-500 md:text-lg">
            A guided survey turns the user&apos;s memories, emotions, and self-promises into a personalized solo wedding ritual.
          </p>
        </div>

        <div className="-mx-6 overflow-x-auto px-6 pb-6">
          <div className="grid w-max grid-flow-col grid-rows-2 gap-x-6 gap-y-12 md:w-full md:grid-flow-row md:grid-cols-4 lg:grid-cols-6">
            {surveySteps.map((screen, index) => (
              <div key={screen.step} className="group flex w-[178px] flex-col items-center gap-4 md:w-full">
                <div className="relative aspect-[453/912] w-full overflow-visible transition-transform duration-500 group-hover:-translate-y-2">
                  <div className="absolute inset-[3.4%_5.7%] overflow-hidden rounded-[1.75rem] bg-white">
                    <div className="absolute bottom-0 left-0 h-[calc(100%-1.5rem)] w-full">
                      <Image
                        src={screen.src}
                        alt={screen.title}
                        fill
                        sizes="(max-width: 768px) 178px, 16vw"
                        className="object-contain object-top"
                        priority={index < 6}
                      />
                    </div>
                  </div>
                  <Image
                    src="/iPhone%20bezel.png"
                    alt=""
                    fill
                    sizes="(max-width: 768px) 178px, 16vw"
                    className="pointer-events-none z-10 object-contain drop-shadow-[0_18px_32px_rgba(169,62,50,0.18)]"
                  />
                </div>
                <span className="text-[10px] font-black uppercase tracking-[0.18em] text-[#A93E32]">
                  Step {String(screen.step).padStart(2, "0")}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
