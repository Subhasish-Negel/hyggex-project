"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { MdLightbulbOutline } from "react-icons/md";
import { MdVolumeUp } from "react-icons/md";

const AnimatedCard = () => {
  const [isFlipped, setIsFlipped] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);

  function handleFlip() {
    if (!isAnimating) {
      setIsFlipped(!isFlipped);
      setIsAnimating(true);
    }
  }
  return (
    <div
      onClick={handleFlip}
      className=" h-[280px] sm:h-[320px] w-[380px] sm:w-[420px] xl:h-[380px] xl:w-[580px] cursor-pointer"
    >
      <motion.div
        className="flip-card-inner w-full h-full"
        initial={false}
        animate={{ rotateY: isFlipped ? 180 : 360 }}
        transition={{ duration: 0.01, animationDirection: "normal" }}
        onAnimationComplete={() => setIsAnimating(false)}
      >
        <div className="w-full h-full group relative flip-card-front bg-cover bg-center text-white  p-4">
          <div className="absolute inset-0 w-full h-full bg-gradient-to-bl from-[#051b92] to-[#2081ed] rounded-[2.5rem] z-[-1]" />
          <div className="flex justify-between items-center p-3 z-[29] my-auto">
            <MdLightbulbOutline className="text-4xl font-bold" />
            <MdVolumeUp className="text-4xl font-bold" />
          </div>
          <h1 className="flex justify-center items-center h-52 text-white text-3xl font-semibold">
            9 + 6 + 7x - 2x - 3
          </h1>
        </div>
        <div className="w-full h-full group relative flip-card-back bg-cover bg-center text-white p-4">
          <div className="absolute inset-0 w-full h-full rounded-[2.5rem] bg-gradient-to-bl from-[#091e4a] to-[#2d87b6] z-[-1]" />
          <div className="flex justify-between items-center p-3 z-[29] my-auto">
            <MdLightbulbOutline className="text-4xl font-bold" />
            <MdVolumeUp className="text-4xl font-bold" />
          </div>
          <h1 className="flex justify-center items-center h-52 text-white text-3xl font-semibold">
            5x + 12
          </h1>
        </div>
      </motion.div>
    </div>
  );
};

export default AnimatedCard;
