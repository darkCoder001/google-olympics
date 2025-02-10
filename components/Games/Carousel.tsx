"use client";
import Image from "next/image";
import React from "react";
import { Carousel, Card } from "@/components/ui/apple-cards-carousel";

export function CarouselCard() {
  const cards = data.map((card, index) => (
    <Card key={card.src} card={card} index={index} />
  ));

  return (
    <div className="w-full h-full py-20">
      <h2 className="max-w-7xl pl-4 mx-auto text-xl md:text-5xl font-bold font-sans text-stone-50">
        Lorem ipsum dolor sit amet.
      </h2>
      <Carousel items={cards} />
    </div>
  );
}

const Content = () => {
  return (
    <>
      {[...new Array(3).fill(1)].map((_, index) => {
        return (
          <div
            key={"content" + index}
            className="bg-[#F5F5F7] p-8 md:p-14 rounded-3xl mb-4"
          >
            <p className="text-neutral-600 text-base md:text-2xl font-sans max-w-3xl mx-auto">
              <span className="font-bold text-stone-50">
                Lorem ipsum dolor sit amet.
              </span>{" "}
              Consectetur adipiscing elit. Vivamus lacinia odio vitae vestibulum.
            </p>
            <Image
              src="https://images.unsplash.com/photo-1738762388661-f09b9b9b5df2?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Macbook mockup from Aceternity UI"
              height="500"
              width="500"
              className="md:w-1/2 md:h-1/2 h-full w-full mx-auto object-contain"
            />
          </div>
        );
      })}
    </>
  );
};

const data = [
  {
    category: "Lorem",
    title: "Sed ut perspiciatis.",
    src: "https://images.unsplash.com/photo-1738762388661-f09b9b9b5df2?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    content: <Content />,
  },
  {
    category: "Ipsum",
    title: "Nemo enim ipsam.",
    src: "https://images.unsplash.com/photo-1738762388661-f09b9b9b5df2?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    content: <Content />,
  },
  {
    category: "Dolor",
    title: "Ut enim ad minima veniam.",
    src: "https://images.unsplash.com/photo-1738762388661-f09b9b9b5df2?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    content: <Content />,
  },
  {
    category: "Dolor",
    title: "Ut enim ad minima veniam.",
    src: "https://images.unsplash.com/photo-1738762388661-f09b9b9b5df2?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    content: <Content />,
  },

];
