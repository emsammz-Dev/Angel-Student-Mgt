"use client";
import { motion, useScroll } from "framer-motion";

export default function Contact() {
  const { scrollYProgress } = useScroll();
  return (
    <>
      <div className="bg-slate-500 h-screen relative overflow-auto scrollbar-hide">
        <motion.div
          className="bg-slate-200 fixed top-0 left-0 right-0 h-1"
          style={{ scaleX: scrollYProgress }}
        ></motion.div>

        {/* <motion.div
          className="rounded-full bg-orange-500 w-32 h-32 fixed -bottom-10 -left-10"
          animate={{
            scale: [1, 2, 2, 1, 1],
            rotate: [0, 0, 180, 180, 0],
            borderRadius: ["0%", "0%", "50%", "50%", "0%"],
          }}
          transition={{
            duration: 2,
            ease: "easeInOut",
            times: [0, 0.2, 0.5, 0.8, 1],
            repeat: Infinity,
            repeatDelay: 1,
          }}
        ></motion.div> */}
      </div>
      <div className="bg-red-500 h-screen"></div>
    </>
  );
}
