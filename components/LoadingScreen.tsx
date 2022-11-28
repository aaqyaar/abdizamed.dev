"use client";

import NProgress from "nprogress";
import { useEffect, useMemo } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
//

// ----------------------------------------------------------------------

export function ProgressBarStyle() {
  return (
    <style jsx global>{`
      #nprogress {
        pointer-events: none;
      }

      #nprogress .peg {
        display: block;
        position: absolute;
        right: 0px;
        width: 100px;
        height: 100%;
        box-shadow: 0 0 10px #111827, 0 0 5px #111827;
        opacity: 1;
        transform: rotate(3deg) translate(0px, -4px);
      }
    `}</style>
  );
}

function ProgressBar() {
  NProgress.configure({
    showSpinner: false,
  });

  useMemo(() => {
    NProgress.start();
  }, []);

  useEffect(() => {
    NProgress.done();
  }, []);

  return null;
}

export default function LoadingScreen({ ...other }) {
  return (
    <>
      <ProgressBar />

      <section
        {...other}
        className="flex h-screen items-center justify-center bg-gray-800"
      >
        <motion.div
          initial={{ rotateY: 0 }}
          animate={{ rotateY: 360 }}
          transition={{
            duration: 2,
            ease: "easeInOut",
            repeatDelay: 1,
            repeat: Infinity,
          }}
        >
          <Image
            src="/images/abdizamed.svg"
            alt="logo"
            width={64}
            height={64}
          />
        </motion.div>

        <motion.div
          animate={{
            scale: [1.2, 1, 1, 1.2, 1.2],
            rotate: [270, 0, 0, 270, 270],
            opacity: [0.25, 1, 1, 1, 0.25],
            borderRadius: ["25%", "25%", "50%", "50%", "25%"],
          }}
          transition={{ ease: "linear", duration: 3.2, repeat: Infinity }}
          style={{
            width: 100,
            height: 100,
            borderRadius: "25%",
            position: "absolute",
            border: "2px solid #fff",
          }}
        />

        <motion.div
          animate={{
            scale: [1, 1.2, 1.2, 1, 1],
            rotate: [0, 270, 270, 0, 0],
            opacity: [1, 0.25, 0.25, 0.25, 1],
            borderRadius: ["25%", "25%", "50%", "50%", "25%"],
          }}
          transition={{
            ease: "linear",
            duration: 3.2,
            repeat: Infinity,
          }}
          style={{
            width: 120,
            height: 120,
            borderRadius: "25%",
            position: "absolute",
            border: "8px solid #fff",
          }}
        />
      </section>
    </>
  );
}
