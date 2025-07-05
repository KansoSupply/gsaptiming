"use client";

import Link from "next/link";
import Image from "next/image";
import CardWork from "../components/cards/CardWork";
import projects from "@/lib/projects";
import { useRef } from "react";
import { gsap, SplitText, useGSAP } from "@/lib/gsap";

export default function Home() {
  const container = useRef(null);
  const heroImage = useRef(null);

  const aspectPattern: Array<"square" | "portrait"> = [
    "square",
    "square",
    "portrait",
    "portrait",
    "portrait",
    "square",
  ];

  useGSAP(
    () => {
      // Wait for fonts to be loaded
      const timer = setTimeout(() => {
        // FOUC prevention: ensure hero and hero image are hidden initially
        gsap.set(".hero", { autoAlpha: 1 });
        gsap.set(heroImage.current, { opacity: 0, scale: 1.1 });

        // For h2/h3
        const H2s = gsap.utils.toArray("h2, h3");
        H2s.forEach((el) => {
          const split = SplitText.create(el as Element, {
            type: "lines",
            linesClass: "lineH2",
            mask: "lines",
          });

          gsap.from(split.lines, {
            yPercent: 100,
            stagger: 0.08,
            duration: 1,
            ease: "power4.out",
            autoAlpha: 0,
            scrollTrigger: {
              trigger: el as Element,
              start: "top 80%",
            },
          });
        });

        // Line animation
        gsap.utils.toArray(".line").forEach((el) => {
          gsap.from(el as Element, {
            width: "0%",
            duration: 1.5,
            ease: "power1.out",
            scrollTrigger: {
              trigger: el as Element,
              start: "top 80%",
            },
          });
        });

        // Hero H1 SplitText
        const splitH1 = new SplitText(".hero-h1", {
          type: "chars",
          linesClass: "lineParent",
          charsClass: "lineChild",
          mask: "chars",
        });

        const tl = gsap.timeline();
        tl.to(heroImage.current, {
          opacity: 1,
          scale: 1.1,
          duration: 1,
          ease: "power1.out",
          delay: 0.5,
        })
          .from(splitH1.chars, {
            yPercent: 100,
            stagger: 0.03,
            duration: 1.2,
            ease: "power1.out",
          })
          .from(
            ".hero-h3",
            {
              yPercent: 100,
              autoAlpha: 0, // fade in
              stagger: 0.1,
              duration: 0.8,
              ease: "power1.out",
            },
            "-=0.6" // overlap with h1 animation if desired
          );

        gsap.to(heroImage.current, {
          scale: 1,
          // Remove opacity from scroll effect to prevent image from fading out on scroll
          scrollTrigger: {
            trigger: heroImage.current,
            start: "top top",
            end: "bottom top",
            scrub: true,
          },
        });

        gsap.to(".hero-img-overlay", {
          opacity: 0.8, // adjust for desired darkness
          ease: "none",
          scrollTrigger: {
            trigger: heroImage.current,
            start: "top top",
            end: "bottom top",
            scrub: 0.3,
          },
        });
      }, 50);
      return () => {
        clearTimeout(timer);
      };
    },
    {
      scope: container, // Force re-run on navigation
    }
  );

  return (
    <main ref={container} className="w-full h-full overflow-visible">
      {/* Hero section */}
      <div className="hero w-full h-screen flex flex-col gap-8 items-left justify-between py-4 sm:px-10 px-5 sticky top-0 overflow-visible z-0">
        <div className="absolute inset-0 z-0 overflow-hidden">
          <Image
            ref={heroImage}
            src="/hero.jpeg"
            alt="Hero Image"
            fill
            priority
            className="absolute inset-0 object-cover select-none pointer-events-none"
          />
          <div className="hero-img-overlay pointer-events-none absolute inset-0 z-10 bg-black opacity-0" />
        </div>
        <div></div>
        <div className="flex flex-col gap-4 items-center justify-center z-20">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 w-full">
            <h3 className="text-left text-white col-start-1 hero-h3">(2025)</h3>
            <h3 className="text-left text-white col-start-2 hero-h3">
              Portfolio
            </h3>
          </div>
        </div>
        <div className="flex flex-col gap-8 z-30">
          <h1 className="text-white hero-h1 whitespace-pre-line">
            Taylor Morgan
          </h1>
        </div>
      </div>

      <div className="bg-background w-full h-fit flex flex-col z-10">
        {/* About section */}
        <div className="w-full flex flex-col gap-8 px-5 py-40 sm:px-10">
          <div className="w-full flex flex-col items-left">
            <div className="line bg-foreground h-[1px] w-full"></div>
          </div>
          <div className="w-full grid grid-cols-1 sm:grid-cols-3 gap-8 items-start relative">
            <div className="flex flex-row gap-4 items-center justify-left">
              <div className="w-[16px] h-[16px] bg-foreground rounded-full"></div>
              <h3>About</h3>
            </div>
            <div className="flex flex-col col-span-2 gap-8 items-left justify-center">
              <h2>
                A passionate and innovative designer dedicated to crafting
                compelling visual experiences that bridge creativity with
                functionality. With a keen eye for detail and a user-centric
                approach, I transform complex ideas into intuitive and engaging
                designs.
              </h2>
            </div>
          </div>
        </div>

        {/* Work section */}
        <div className="flex flex-col gap-8 items-left justify-center py-40 px-5 sm:px-10">
          <div className="w-full flex flex-col items-left">
            <div className="line bg-foreground h-[1] w-full"></div>
          </div>
          <div className="w-full grid grid-cols-2 sm:grid-cols-3 gap-8 items-start relative">
            <div className="flex flex-col sm:flex-row w-full gap-16 items-left justify-left sm:justify-between sm:col-span-2">
              <div className="flex flex-row gap-4 items-center justify-left">
                <div className="w-[16] h-[16] bg-foreground rounded-full"></div>
                <h3>Selected Work</h3>
              </div>
              <div className="flex flex-col col-span-1 gap-8 items-left justify-center">
                <h2>22/25</h2>
              </div>
            </div>
            <div className="flex flex-col col-span-1 gap-8 items-end justify-start">
              <Link href="/work" className="relative text-link">
                <h3>View All</h3>
              </Link>
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 sm:gap-x-6 sm:gap-y-16 gap-8">
            {projects.slice(0, 6).map((project, idx) => {
              const aspect = aspectPattern[idx % aspectPattern.length];
              return (
                <CardWork
                  key={project.id}
                  title={project.title}
                  slug={project.slug}
                  cover={project.cover}
                  date={new Date(project.date).toDateString()}
                  aspect={aspect}
                />
              );
            })}
          </div>
        </div>

        {/* Services section */}
        <div className="w-full flex flex-col gap-8 px-5 py-40 sm:px-10">
          <div className="w-full flex flex-col items-left">
            <div className="line bg-foreground h-[1] w-full"></div>
          </div>
          <div className="w-full grid grid-cols-1 sm:grid-cols-3 gap-8 items-start relative">
            <div className="flex flex-row gap-4 items-center justify-left">
              <div className="w-[16] h-[16] bg-foreground rounded-full"></div>
              <h3>Services</h3>
            </div>
            <div className="flex flex-col col-span-2 gap-8 items-left justify-center">
              <h2>
                A passionate and innovative designer dedicated to crafting
                compelling visual experiences that bridge creativity with
                functionality. With a keen eye for detail and a user-centric
                approach, I transform complex ideas into intuitive and engaging
                designs.
              </h2>
            </div>
          </div>
        </div>

        {/* Thoughts section */}
        <section className="flex flex-col gap-8 items-left justify-center py-40 px-5 sm:px-10">
          <div className="flex flex-row justify-between items-end">
            <h2>Recent Thoughts</h2>
            <Link href="/blog">View all</Link>
          </div>
        </section>
      </div>
    </main>
  );
}
