"use client";

import posts from "@/lib/posts";
import CardPost from "./cards/CardPost";
import { gsap, useGSAP } from "@/lib/gsap";
import { useRef } from "react";

export default function SectionPosts() {
  const ref = useRef(null);

  useGSAP(() => {
    gsap.from(ref.current, {
      y: 100,
      opacity: 0,
      duration: 1,
      ease: "power2.out",
      stagger: 0.2,
      scrollTrigger: {
        trigger: ref.current,
        start: "top 50%",
      },
    });
  }, []);

  return (
    <section ref={ref} className="grid sm:grid-cols-3 grid-cols-1 gap-8 w-full">
      {posts.slice(0, 3).map((post) => (
        <CardPost
          key={post.id}
          title={post.title}
          slug={post.slug}
          cover={post.cover}
          date={new Date(post.date).toDateString()}
        />
      ))}
    </section>
  );
}
