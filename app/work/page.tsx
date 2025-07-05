"use client";

import projects from "@/lib/projects";
import CardWork from "@/components/cards/CardWork";

export default function WorkPage() {
  return (
    <main className="flex flex-col pb-40">
      {/* Hero Section */}
      <div className="sm:grid sm:grid-cols-3 grid-cols-1 gap-4 w-full pt-96 pb-8 sm:px-8 px-5 text-left h-fit sm:items-end">
        <h1 className="font-bold mb-4 col-span-2">My Work</h1>
        <p className=" text-gray-300">
          Here&apos;s a selection of projects that showcase my skills and
          passion for creating meaningful and impactful digital experiences.
          Each project represents a unique challenge and an opportunity to learn
          and grow as a designer.
        </p>
      </div>

      <section className="px-5 sm:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-12 gap-x-6">
          {projects.map((project) => (
            <CardWork
              key={project.id}
              title={project.title}
              slug={project.slug}
              cover={project.cover}
              date={new Date(project.date).toDateString()}
            />
          ))}
        </div>
      </section>
    </main>
  );
}
