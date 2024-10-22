import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import SplitType from "split-type";
import { useGSAP } from "@gsap/react";
import RotatingText from "@/components/common/RotatingText";
import Button from "../common/Button";
import { initializeCounters } from "../../utils/animationGSAP/gsapCounter";
import {
  FaWhatsapp,
  FaTelegramPlane,
  FaPhone,
  FaInstagram,
} from "react-icons/fa";

gsap.registerPlugin(ScrollTrigger);

const ContactUs = () => {
  const videoRef = useRef(null);
  const blobRef = useRef(null);

  useGSAP(() => {
    gsap.to(blobRef.current, {
      rotation: 360,
      duration: 8,
      repeat: -1,
      ease: "linear",
    });
  });

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play();
    }
  }, []);

  // useEffect(() => {
  //   const counterElements = document.querySelectorAll("#numberAnimation");
  //   initializeCounters(counterElements);
  // }, []);

  useGSAP(() => {
    const myText = new SplitType("#text-split");
    gsap.to(".char", {
      y: 0,
      stagger: 0.09,
      duration: 0.8,
      ease: "power1.out",
      scrollTrigger: {
        trigger: "#text-split",
        start: "top 90%",
        end: "top 40%",
        scrub: true,
      },
    });
  });

  return (
    <div className="w-full min-h-screen flex flex-col justify-start items-center relative p-8">
      <div className="absolute bottom-0 right-0 z-0 overflow-visible">
        <div
          ref={blobRef}
          className="z-0 w-[700px] h-[700px] rounded-full bg-gradient-to-r from-purple-400 via-pink-500 to-yellow-500 opacity-30 blur-3xl gradient-blob"
        ></div>
      </div>

      <div className="absolute bottom-20 right-20 w-[23rem] hover:cursor-pointer">
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

      <div className="flex items-center absolute bottom-[22vh] right-[24vw] z-10 hover:cursor-pointer">
        <RotatingText
          text="Crafting Brands • Design Excellence • Innovation •"
          imageSrc="/NE Arrow Icon.svg"
        />
      </div>

      <div className="w-[90%] text-center pt-5 md:pt-10 mb-5 md:mb-20 z-10 overflow-hidden">
        <p
          id="text-split"
          className="text-5xl md:text-[4rem] font-medium text-fontColor leading-tight md:leading-[6rem] text-left relative z-10"
        >
          We design, build, and ship
          <span>world-class digital products for</span>
          <span className="text-accent"> forward-thinking brands.</span>
        </p>
      </div>

      <div className="flex flex-row w-fit gap-20 mb-16 md:mx-20 z-20 self-start">
        <div className="flex flex-col items-start">
          <p id="numberAnimation" className="text-2xl font-medium text-fontColor">
            20+
          </p>
          <p className="text-xl text-gray-500">Projects</p>
        </div>
        <div className="flex flex-col items-start">
          <p id="numberAnimation" className="text-2xl font-medium text-fontColor">
            10+
          </p>
          <p className="text-xl text-gray-500">Clients</p>
        </div>
        <div className="flex flex-col items-start">
          <p id="numberAnimation" className="text-2xl font-medium text-fontColor">
            5+
          </p>
          <p className="text-xl text-gray-500">Years Experience</p>
        </div>
      </div>

      <div className="bg-white md:mx-16 self-start rounded-xl p-7 flex flex-col gap-5 z-10">
        <p className="font-medium text-[0.9rem] text-fontColor">
          Get in touch with us to discuss your next project — let's create
          something amazing together!
        </p>
        <div className="z-10 flex gap-3">
          <Button label="E-mail Us" />
          <Button
            label={
              <>
                <FaPhone size={18} />
              </>
            }
          />
          <Button
            label={
              <>
                <FaWhatsapp size={18} />
              </>
            }
          />
          <Button
            label={
              <>
                <FaTelegramPlane size={18} />
              </>
            }
          />
          <Button
            label={
              <>
                <FaInstagram size={18} />
              </>
            }
          />
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
