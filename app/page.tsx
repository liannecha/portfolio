import Image from "next/image";

export default function Home() {
  return (
    <main className="relative">
      <div
        aria-hidden="true"
        className="grid-overlay pointer-events-none absolute inset-0"
      />

      {/* Section 1: Hero */}

      <section
        id="home"
        aria-labelledby="hero-heading"
        className="relative z-10 flex min-h-screen items-center px-6 py-24 sm:px-10"
      >
        <div className="mx-auto grid w-full max-w-6xl items-center gap-8 lg:grid-cols-[minmax(44rem,1fr)_18rem]">
          <div className="lg:translate-x-12">
            <h1 id="hero-heading" className="type-hero max-w-3xl">
              Lianne Cha
            </h1>
            <p className="type-body mt-6 max-w-xl">
              I&apos;m a full-stack software engineer with an AI focus. I dabble
              in design.
            </p>
          </div>

          <div className="justify-self-center lg:justify-self-start">
            <Image
              src="/images/hero_profile_image.png"
              alt="Image of Lianne Cha"
              width={1890}
              height={1417}
              priority
              className="h-auto w-full max-w-[600px] lg:w-[600px] -translate-x-100 -translate-y-20"
            />
          </div>
        </div>
      </section>

      {/* Section 2: Projects */}
      <section id="selected-work">

      </section>

      {/* Section 3: About */}
      <section id="about">

      </section>

      {/* Section 4: Skills */}
      <section id="skills">

      </section>

      {/* Section 5: Experience */}
      <section id="experience">

      </section>
      
      {/* Section 6: Contact */}
      <section id="contact">

      </section>

    </main>
  );
}
