"use client";

import { NavigationMenuDemo } from "@/components/Navbar";
import { useGSAP } from "@gsap/react";
import Image from "next/image";
import { useRef } from "react";
import gsap from 'gsap';
import { SplitText } from "gsap/SplitText";

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
      <footer className="footer sm:footer-horizontal bg-neutral text-neutral-content p-10">
        <nav>
          <h6 className="footer-title">Services</h6>
          <a className="link link-hover">Branding</a>
          <a className="link link-hover">Design</a>
          <a className="link link-hover">Marketing</a>
          <a className="link link-hover">Advertisement</a>
        </nav>
        <nav>
          <h6 className="footer-title">Company</h6>
          <a className="link link-hover">About us</a>
          <a className="link link-hover">Contact</a>
          <a className="link link-hover">Jobs</a>
          <a className="link link-hover">Press kit</a>
        </nav>
        <nav>
          <h6 className="footer-title">Legal</h6>
          <a className="link link-hover">Terms of use</a>
          <a className="link link-hover">Privacy policy</a>
          <a className="link link-hover">Cookie policy</a>
        </nav>
      </footer>
      <footer className="footer sm:footer-horizontal bg-neutral text-neutral-content items-center p-4">
        <aside className="grid-flow-col items-center">
          <svg
            width="36"
            height="36"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            fillRule="evenodd"
            clipRule="evenodd"
            className="fill-current">
            <path
              d="M22.672 15.226l-2.432.811.841 2.515c.33 1.019-.209 2.127-1.23 2.456-1.15.325-2.148-.321-2.463-1.226l-.84-2.518-5.013 1.677.84 2.517c.391 1.203-.434 2.542-1.831 2.542-.88 0-1.601-.564-1.86-1.314l-.842-2.516-2.431.809c-1.135.328-2.145-.317-2.463-1.229-.329-1.018.211-2.127 1.231-2.456l2.432-.809-1.621-4.823-2.432.808c-1.355.384-2.558-.59-2.558-1.839 0-.817.509-1.582 1.327-1.846l2.433-.809-.842-2.515c-.33-1.02.211-2.129 1.232-2.458 1.02-.329 2.13.209 2.461 1.229l.842 2.515 5.011-1.677-.839-2.517c-.403-1.238.484-2.553 1.843-2.553.819 0 1.585.509 1.85 1.326l.841 2.517 2.431-.81c1.02-.33 2.131.211 2.461 1.229.332 1.018-.21 2.126-1.23 2.456l-2.433.809 1.622 4.823 2.433-.809c1.242-.401 2.557.484 2.557 1.838 0 .819-.51 1.583-1.328 1.847m-8.992-6.428l-5.01 1.675 1.619 4.828 5.011-1.674-1.62-4.829z"></path>
          </svg>
          <p>Copyright © {new Date().getFullYear()} - All right reserved</p>
        </aside>
        <nav className="grid-flow-col gap-4 md:place-self-center md:justify-self-end">
          <a>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              className="fill-current">
              <path
                d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path>
            </svg>
          </a>
          <a>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              className="fill-current">
              <path
                d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path>
            </svg>
          </a>
          <a>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              className="fill-current">
              <path
                d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path>
            </svg>
          </a>
        </nav>
      </footer>
    </div>
  );
}
