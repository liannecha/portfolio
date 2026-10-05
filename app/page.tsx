"use client";

import Image from "next/image";
import { useRef, useState } from "react";

export default function Home() {
  const allerKeyPresentationDialog = useRef<HTMLDialogElement>(null);
  const [allerKeySlide, setAllerKeySlide] = useState(1);
  const allerKeySlideCount = 11;

  return (
    <main className="relative overflow-x-clip">
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
      <section
        id="selected-work"
        aria-labelledby="projects-heading"
        className="min-h-screen px-6 py-24 sm:px-10"
      >
        <div className="mx-auto grid w-full max-w-6xl gap-12 lg:grid-cols-[minmax(18rem,0.7fr)_minmax(0,1.3fr)] lg:gap-16">
          <div className="self-start lg:sticky lg:top-24 lg:translate-x-12">
            <h2 id="projects-heading" className="type-h1">
              Projects
            </h2>
          </div>

          <div className="space-y-32 lg:translate-y-5">
            <article className="space-y-4">
              <a
                href="https://tcmnet-nine.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="group block"
              >
                <div className="relative aspect-[16/9] overflow-hidden border border-[var(--surface-warm)] bg-[var(--surface-cool)]/50">
                  <Image
                    src="/images/tcmnet-home-page-v2.png"
                    alt="TCMNet home page"
                    fill
                    sizes="(min-width: 1024px) 60vw, 100vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-[1.02]"
                  />
                </div>
                <div className="mt-4 flex items-baseline justify-between gap-4">
                  <h3 className="type-h2 text-[2.25rem]">TCMNet</h3>
                  <p className="type-small shrink-0">Visit site ↗</p>
                </div>
                <p className="type-body mt-4 max-w-2xl">
                  End to end web app featuring a neural network from scratch that takes in symptoms
                  and outputs associated Traditional Chinese Medicine concepts,
                  disease, and herbal prescriptions.
                </p>
              </a>
            </article>

            <article className="space-y-4">
              <button
                type="button"
                onClick={() => allerKeyPresentationDialog.current?.showModal()}
                className="group block w-full text-left"
              >
                <div className="relative aspect-[16/9] overflow-hidden border border-[var(--surface-warm)] bg-[var(--surface-warm)]/35">
                  <Image
                    src="/images/allerkey-home-page.png"
                    alt="AllerKey sign-in screen"
                    fill
                    sizes="(min-width: 1024px) 60vw, 100vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-[1.02]"
                  />
                </div>
                <div className="mt-4 flex items-baseline justify-between gap-4">
                  <h3 className="type-h2 text-[2.25rem]">AllerKey</h3>
                  <p className="type-small shrink-0">View presentation ↗</p>
                </div>
              </button>
              <p className="type-body max-w-2xl">
                Contact AllerKey is a companion app for a novel at-home contact
                dermatitis patch testing solution designed with the help of a
                dermatologist. It is full stack and supports both the patient
                flow and the practitioner flow.
              </p>
            </article>

            <article className="space-y-4">
              <div className="mx-auto aspect-[9/19] w-full max-w-[19.5rem] overflow-hidden rounded-[2rem] border-[6px] border-[var(--text-primary)] bg-black shadow-lg">
                <video
                  autoPlay
                  loop
                  muted
                  playsInline
                  controls
                  preload="metadata"
                  className="h-full w-full object-contain"
                >
                  <source src="/videos/cityfix-demo.mp4" type="video/mp4" />
                  Your browser does not support this video.
                </video>
              </div>
              <a
                href="https://github.com/StanfordCS194/spr26-Team-7/wiki"
                target="_blank"
                rel="noopener noreferrer"
                className="group block"
              >
                <div className="flex items-baseline justify-between gap-4">
                  <h3 className="type-h2 text-[2.25rem]">CityFix</h3>
                  <p className="type-small shrink-0">View wiki ↗</p>
                </div>
              </a>
              <p className="type-body max-w-2xl">
                CityFix is a mobile app that lets users report civic issues
                (e.g. potholes, broken streetlights, or illegal dumping) by
                simply taking a photo. The app automatically identifies the
                problem, captures the location, and routes the report to the
                right government agency. No forms, no figuring out which
                department to contact.
              </p>
            </article>
          </div>
        </div>
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

      <dialog
        ref={allerKeyPresentationDialog}
        aria-label="AllerKey presentation"
        className="m-auto w-[min(92vw,58rem)] max-w-none overflow-hidden border border-[var(--surface-warm)] bg-[var(--background)] p-0 shadow-2xl backdrop:bg-black/40"
      >
        <div className="flex items-center justify-between border-b border-[var(--surface-warm)] px-5 py-3">
          <p className="type-small text-[1rem]">AllerKey presentation</p>
          <button
            type="button"
            onClick={() => allerKeyPresentationDialog.current?.close()}
            className="type-small rounded-full border border-[var(--surface-warm)] px-3 py-1.5 hover:bg-[var(--surface-cool)]"
          >
            Close ×
          </button>
        </div>
        <div className="relative aspect-video bg-white">
          <Image
            src={`/presentations/allerkey-slides/slide-${String(
              allerKeySlide,
            ).padStart(2, "0")}.png`}
            alt={`AllerKey presentation, slide ${allerKeySlide}`}
            fill
            sizes="(min-width: 768px) 58rem, 92vw"
            className="object-contain"
          />
        </div>
        <div className="flex items-center justify-between gap-4 border-t border-[var(--surface-warm)] px-5 py-3">
          <button
            type="button"
            onClick={() => setAllerKeySlide((slide) => Math.max(1, slide - 1))}
            disabled={allerKeySlide === 1}
            className="type-small rounded-full border border-[var(--surface-warm)] px-3 py-1.5 disabled:cursor-not-allowed disabled:opacity-40"
          >
            ← Previous
          </button>
          <p className="type-small">
            Slide {allerKeySlide} of {allerKeySlideCount}
          </p>
          <button
            type="button"
            onClick={() =>
              setAllerKeySlide((slide) =>
                Math.min(allerKeySlideCount, slide + 1),
              )
            }
            disabled={allerKeySlide === allerKeySlideCount}
            className="type-small rounded-full border border-[var(--surface-warm)] px-3 py-1.5 disabled:cursor-not-allowed disabled:opacity-40"
          >
            Next →
          </button>
        </div>
      </dialog>

    </main>
  );
}
