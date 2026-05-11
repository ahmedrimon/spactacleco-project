"use client";

import { NavigationMenuDemo } from "@/components/Navbar";
import { useGSAP } from "@gsap/react";
import Image from "next/image";
import { useRef } from "react";
import gsap from 'gsap';

export default function Home() {

  const textAnimation = useRef(null);

  useGSAP(() => {
    gsap.to('.marvell', { y: 50, duration:1.5,
ease: "power4.out", });
  });

  return (
    <div>
      <div className="p-6 flex justify-center">
        <NavigationMenuDemo />
      </div>
      <div>
        <h1 ref={textAnimation} className="marvell text-[23vh] text-center">Marvell Style & Stone</h1>
      </div>
    </div>
  );
}
