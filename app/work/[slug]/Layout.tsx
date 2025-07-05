"use client";

import React from "react";
import projects from "@/lib/projects";
import Image from "next/image";
import Link from "next/link";
import CardWork from "@/components/cards/CardWork";
import type { Project } from "@/lib/projects";
import { useRef } from "react";
import { gsap, useGSAP } from "@/lib/gsap";

export default function Layout({ project }: { project: Project }) {
  const container = useRef(null);

  useGSAP(
    () => {
      gsap.set(".imagediv", { scale: 1.4 });
      const timer = setTimeout(() => {
        const images = gsap.utils.toArray(".imagediv");
        images.forEach((el) => {
          gsap.to(el as Element, {
            autoAlpha: 1,
            duration: 3,
            scale: 1,
            ease: "power4.out",
            scrollTrigger: {
              trigger: el as Element,
              start: "top 60%",
            },
          });
        });

        gsap.from(".line", {
          width: "0%",
          duration: 3,
          ease: "power4.out",
          scrollTrigger: {
            trigger: ".line",
            start: "top 80%",
          },
        });

        gsap.from(".line--detail", {
          width: "0%",
          duration: 3,
          ease: "power4.out",
          stagger: 0.15,
          scrollTrigger: {
            trigger: ".detail-lines",
            start: "top 85%",
          },
        });
      }, 50);

      // Cleanup function
      return () => {
        clearTimeout(timer);
        // Manual cleanup in addition to useGSAP's automatic cleanup
      };
    },
    {
      scope: container, // Force re-run on navigation
    }
  );

  return (
    <article
      ref={container}
      className="flex flex-col gap-16 px-5 sm:px-10 sm:py-80 py-40 w-full"
    >
      <section>
        <div className="flex flex-col">
          <h1>{project.title}</h1>
        </div>
        <div className="w-full aspect-[16/9] relative overflow-hidden">
          <Image
            src={project.cover}
            alt={project.title}
            fill
            className="object-cover imagediv"
          />
        </div>
      </section>

      <section className="flex flex-col gap-24">
        {/* Responsive: Project Info above excerpt on mobile, side on desktop */}
        <div className="flex flex-col sm:grid sm:grid-cols-3 w-full">
          <h3 className="mb-4 sm:mb-0">Project Info</h3>
          <div className="sm:col-span-2 sm:col-start-2 flex flex-col gap-8">
            <h2>{project.excerpt}</h2>
            <dl className="detail-lines flex flex-col gap-4">
              <div className="w-full flex flex-col items-left">
                <div className="line--detail bg-foreground h-[1px] w-full"></div>
              </div>
              <div className="grid grid-cols-2 gap-2">
                <dt>Client</dt>
                <dd>{project.client}</dd>
              </div>
              <div className="w-full flex flex-col items-left">
                <div className="line--detail bg-foreground h-[1px] w-full"></div>
              </div>
              <div className="grid grid-cols-2 gap-2">
                <dt>Location</dt>
                <dd>{project.location}</dd>
              </div>
              <div className="w-full flex flex-col items-left">
                <div className="line--detail bg-foreground h-[1px] w-full"></div>
              </div>
              <div className="grid grid-cols-2 gap-2">
                <dt>Year</dt>
                <dd>{project.year}</dd>
              </div>
              <div className="w-full flex flex-col items-left">
                <div className="line--detail bg-foreground h-[1px] w-full"></div>
              </div>
              <div className="grid grid-cols-2 gap-2">
                <dt>Deliverables</dt>
                <dd>{project.deliverables?.join(", ") ?? ""}</dd>
              </div>
              <div className="w-full flex flex-col items-left">
                <div className="line--detail bg-foreground h-[1px] w-full"></div>
              </div>
              <div className="grid grid-cols-2 gap-2">
                <dt>Site</dt>
                <dd>
                  <Link href={project.site}>{project.site}</Link>
                </dd>
              </div>
            </dl>
          </div>
        </div>
      </section>

      <div className="flex flex-col gap-4">
        {project.content?.map((block, idx) => {
          if (block.type === "image") {
            return (
              <div
                key={idx}
                className="w-full aspect-[16/9] relative overflow-hidden"
              >
                <Image
                  src={block.src}
                  alt={block.alt || project.title}
                  fill
                  className="object-cover imagediv"
                />
              </div>
            );
          }
          if (block.type === "video") {
            return (
              <div
                key={idx}
                className="w-full aspect-[16/9] relative overflow-hidden"
              >
                <video
                  className="w-full h-full object-cover imagediv"
                  autoPlay
                  loop
                  muted
                  preload="none"
                  poster={block.poster}
                >
                  <source src={block.src} type="video/mp4" />
                  {block.alt && (
                    <track kind="descriptions" label="Description" />
                  )}
                </video>
              </div>
            );
          }
          return null;
        })}
      </div>

      <section className="flex flex-col gap-4">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <h3>More Projects</h3>
          {projects
            .filter((p) => p.slug !== project.slug)
            .slice(0, 2)
            .map((project) => (
              <CardWork
                key={project.id}
                title={project.title}
                slug={project.slug}
                cover={project.cover}
                date={new Date(project.date).toDateString()}
                aspect="square"
              />
            ))}
        </div>
      </section>
    </article>
  );
}
