"use client";

import Image from "next/image";
import Link from "next/link";

type CardWorkProps = {
  title: string;
  date: string;
  slug: string;
  cover: string;
  aspect?: "square" | "portrait";
};

const CardWork = ({ title, slug, cover, aspect }: CardWorkProps) => {
  return (
    <Link href={`/work/${slug}`}>
      <article className="group flex flex-col items-left justify-center gap-4">
        <div
          className={`w-full relative overflow-hidden aspect-square ${
            aspect === "portrait" ? "sm:aspect-[3/4]" : "sm:aspect-square"
          }`}
        >
          <Image
            src={cover}
            alt={title}
            fill
            className="object-cover hover:scale-110 transition-transform duration-400 ease-in-out"
          />
        </div>
        <div className="flex flex-col gap-2">
          <h3>{title}</h3>
        </div>
      </article>
    </Link>
  );
};

export default CardWork;
