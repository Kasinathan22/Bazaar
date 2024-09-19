"use client";
import { useEffect, useState } from "react";
import React from "react";
import { motion, animate, useMotionValue } from "framer-motion";
import useMeasure from "react-use-measure";


const Infitescroll = () => {
  let [ref, { width }] = useMeasure();

  const xTranslation = useMotionValue(0);

  useEffect(() => {
    let controls;
    let finalPosition = -width / 2 - 8;

    controls = animate(xTranslation, [0, finalPosition], {
      ease: "linear",
      duration: 25,
      repeat: Infinity,
      repeatType: "loop",
      repeatDelay: 0,
    });

    return controls?.stop;
  }, [xTranslation, width]);

  const images = [
    "https://s3no.cashify.in/estore/6b62e37c95e04ea28df2e4ecb148b95b.webp?p=default&s=lg",
     "https://s3no.cashify.in/estore/e148f87dee934d308576090c81bc807e.webp?p=default&s=lg",
    "https://s3no.cashify.in/estore/2d070f10356049d1b2ce515c9b512b78.webp?p=default&s=lg",
    "https://s3no.cashify.in/estore/7f38fba7b800486797e3daa5e3e382ac.webp?p=default&s=lg",
    "https://s3no.cashify.in/estore/a2e34a6d8a9e4b679db292da08fb1848.webp?p=default&s=lg",
    "https://s3no.cashify.in/estore/21e1fe99e6084445bf65537f8c587d13.webp?p=default&s=lg",
    "https://s3no.cashify.in/estore/40a4aae2315a4ca59eb9c4bf9cf88e41.webp?p=default&s=lg",
    // "https://assets.algoexpert.io/spas/main/prod/g523bdeb478-prod/dist/images/7ae42bac3b34999c0db3.png",
    // "https://assets.algoexpert.io/spas/main/prod/g523bdeb478-prod/dist/images/b2bd91d7b87b2181ca45.png",
    // "https://assets.algoexpert.io/spas/main/prod/g523bdeb478-prod/dist/images/6591cdc0702b32310306.png",
    // "https://assets.algoexpert.io/spas/main/prod/g523bdeb478-prod/dist/images/3b7d9f4b073deb6a9b74.png",
    // "https://assets.algoexpert.io/spas/main/prod/g523bdeb478-prod/dist/images/3cd767dea94a85078ca4.png",
    

  ];
  return (
    <div className=" bg-black">
      <div className="relative  flex items-center justify-center w-full max-w-md p-2 mx-auto overflow-hidden border-1 border-transparent border-black rounded-full whitespace-nowrap sm:max-w-lg md:max-w-xl lg:max-w-4xl">
        <div className="inline-flex items-center gap-10 mx-auto mt-2 lg:justify-center md:justify-around">
          <main className="py-8">
            <motion.div
              className="absolute left-0 flex gap-16 top-2 "
              style={{ x: xTranslation }}
              ref={ref}
            >
              {[...images, ...images].map((item, i) => (
                <div className="flex items-center justify-center w-[70px] h-[60px]  " key={i}>
                  <img src={item} />
                </div>
              ))}
            </motion.div>
          </main>
        </div>
      </div>
    </div>
  );
};

export default Infitescroll;
