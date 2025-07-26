import React, { useRef, useEffect } from "react";
import { motion, useInView, useAnimation } from "framer-motion";

const container = {
  hidden: { opacity: 0 },
  visible: (i = 1) => ({
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.3 * i,
    },
  }),
};

const child = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export default function CTASection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, threshold: 0.2 });
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [isInView, controls]);

  return (
    <section className="py-20 bg-gradient-to-r from-amber-600 to-red-600" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          variants={container}
          initial="hidden"
          animate={controls}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
            {["Begin Your Journey with", "Kathak Nrityashala"].map((line, index) => (
              <motion.div
                key={index}
                variants={child}
                className={index === 1 ? "block font-pacifico text-white text-5xl mt-2" : ""}
              >
                {line}
              </motion.div>
            ))}
          </h2>
        </motion.div>

        <motion.p
          className="text-xl text-amber-100 mb-8 max-w-3xl mx-auto"
          variants={child}
          initial="hidden"
          animate={controls}
          transition={{ delay: 0.8 }}
        >
          Dive into the world of classical dance with us. Experience tradition,
          grace, and storytelling through every step.
        </motion.p>

        <motion.div
          className="flex flex-col sm:flex-row gap-4 justify-center"
          variants={container}
          initial="hidden"
          animate={controls}
          custom={2}
        >
          <motion.a
            href="/contact"
            variants={child}
            className="bg-white text-red-600 px-8 py-4 rounded-full text-lg font-semibold hover:bg-amber-50 transition-colors cursor-pointer whitespace-nowrap"
          >
            Book Your First Class
          </motion.a>
          <motion.a
            href="/classes"
            variants={child}
            className="border-2 border-white text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-white hover:text-red-600 transition-colors cursor-pointer whitespace-nowrap"
          >
            View Class Schedule
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}


