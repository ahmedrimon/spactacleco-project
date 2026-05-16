"use client";

import { NavigationMenuDemo } from "@/components/Navbar";
import { useGSAP } from "@gsap/react";
import Image from "next/image";
import { useRef } from "react";
import gsap from 'gsap';
import { SplitText } from "gsap/SplitText";
import Footer from "@/components/Footer";

gsap.registerPlugin(SplitText)

export default function Home() {

  const textAnimation = useRef(null);
  const wholeText = useRef(null);

  useGSAP(() => {
    gsap.fromTo('.marvell', { opacity: 0 }, {
      opacity: 1, y: 50, duration: 2,
      ease: "power4.out",
    });

    SplitText.create(".wholeText", {
      type: "words",
      autoSplit: true,

      onSplit(self) {
        return gsap.from(self.words, {
          y: 20,
          autoAlpha: 0,
          stagger: 0.05
        });
      }
    });
  });

  return (
    <div>
      <header className="p-6 flex justify-center">
        <NavigationMenuDemo />
      </header>
      {/* 1st section */}
      <section>
        <h1 ref={textAnimation} className="marvell text-center text-3xl md:text-5xl lg:text-9xl">Marvell Style & Stone</h1>
      </section>
      {/* 2nd section */}
      <section className="mt-35 relative w-full">
        <div className="flex justify-around">
          <div >
            <Image
              src="/Production-Image4.webp"
              alt="Hero"
              width={500}
              height={300}
            />
          </div>
          <div>
            <Image
              className="mt-48"
              src="/Production-Image6.webp"
              alt="Hero"
              width={500}
              height={300}
            />

          </div>
        </div>
      </section>
      {/* 3rd section */}
      <section className="mt-35 p-15">
        <div className="flex justify-around">
          <div>
            <h1 className="text-[1.5rem]">Nicole Moody</h1>
            <p className="mt-4 text-[1rem]">Creative Director</p>
          </div>
          <div className="ml-12">
            <p ref={wholeText} className="wholeText text-[2.3rem]">
              "We engaged Will to undertake a complex paving job in our backyard using natural stone. His attention to detail, quality of workmanship and friendly attitude was outstanding. It is evident he is a craftsman who takes enormous pride in his work. His communication was excellent and he brought proactive and much welcomed ideas to the project. It was a large job that took several weeks - we were almost sad it was complete as we loved having him as part of our project team."
            </p>
          </div>
        </div>
        <div className="mt-12">
          <p ref={wholeText} className="wholeText text-[2.3rem]">
            'For an East Fremantle residence on Ainslie Street, we collaborated with Red Cloud Building and Robeson Architects to deliver a fully integrated stonework package. Spanning indoor and outdoor spaces, the project celebrates materiality, technical know-how, and a Mediterranean inspired aesthetic, resulting in one of the most rewarding projects we’ve ever completed.'
          </p>
        </div>
      </section>
      {/* 4th section */}
      <section className="flex justify-center p-14 mx-auto">
          <Image
              src="/Production-Image7.webp"
              alt="Hero"
              width={800}
              height={300}
                  className="object-cover"
            />
      </section>
      {/* 5th Section */}
      <Footer/>
    </div>
  );
}
