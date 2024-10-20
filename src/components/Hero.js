"use client";

import React, { useRef, useEffect, useState } from "react";
import Projects from "./Projects";
import Image from "next/image";

import { gsap } from "gsap";
import { useGsap } from "@gsap/react";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(useGsap);
gsap.registerPlugin(ScrollTrigger);

const RotatingText = () => {
  const textRef = useRef(null);

  useEffect(() => {
    if (textRef.current) {
      gsap.to(textRef.current, {
        rotation: 360,
        duration: 25,
        repeat: -1,
        ease: "linear",
      });
    }
  }, []);

  return (
    <div className="relative w-40 h-40 mx-auto md:mx-0">
      <div
        ref={textRef}
        className="absolute inset-0 w-full h-full"
        style={{ transformOrigin: "center center" }}
      >
        <svg viewBox="0 0 100 100" width="100%" height="100%">
          <path
            id="curve"
            fill="transparent"
            d="M 50 50 m -25, 0 a 25,25 0 1,1 50,0 a 25,25 0 1,1 -50,0"
          />
          <text fontSize="8">
            <textPath xlinkHref="#curve">
              Crafting Brands • Design Excellence • Innovation •
            </textPath>
          </text>
        </svg>
      </div>
      <div className="absolute inset-0 flex items-center justify-center">
        <Image
          width={65}
          height={65}
          src="/NE Arrow Icon.svg"
          alt="North East Arrow"
          className="rounded-full border-2 border-black"
        />
      </div>
    </div>
  );
};

const Hero = () => {
  const videoRef = useRef(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play();
    }
  }, []);

  return (
    <>
      <section className="sticky-container flex md:flex-row items-center justify-between text-black h-[91vh] w-full">
        <div className="w-full text-center md:text-left space-y-6 p-10 text-textGray relative">
          <h1 className="text-3xl md:text-[7rem] leading-tight px-20">
            <span>Crafting</span>

            <span className="flex items-center">
              <div className=" inset-0 flex items-center justify-center z-10 hover:cursor-pointer">
                <Image
                  width={65}
                  height={65}
                  src="/NE Arrow Icon.svg"
                  alt="North East Arrow"
                  className="rounded-full border-2 border-black"
                />
              </div>
              <p className=" text-accent px-2 font-semibold">
                <span className="poppins-semibold-italic">I</span>MP
                <span className="poppins-semibold-italic">A</span>CTFU
                <span className="poppins-semibold-italic">L</span>
              </p>
            </span>
            <span className="">Brand Experience</span>
          </h1>

          <div className="flex flex-col justify-center items-end px-[10rem] py-6 ">
            <div className="text-lg md:text-xl">
              We focus on transforming your vision into{" "}
              <p className="text-accent inline-block font-medium">
                {" "}
                Unmatched Results{" "}
              </p>{" "}
              by
            </div>
            <div className="text-lg md:text-xl ">
              shaping the Future of Your Brand with{" "}
              <p className="text-accent inline-block font-medium">
                Cutting-Edge Design and Excellence.{" "}
              </p>
            </div>
          </div>

          <div className="h-[25rem] w-[23rem] absolute top-16 right-24 z-10 hover:cursor-pointer">
            <video
              ref={videoRef}
              className="object-cover rounded-xl"
              muted
              loop
              playsInline
            >
              <source src="/videos/videos1.mp4" type="video/mp4" />
            </video>
          </div>

          <div className="flex items-center absolute top-0 right-96 z-10 hover:cursor-pointer">
            <RotatingText />
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
