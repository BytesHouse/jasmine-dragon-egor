"use client";
import { motion } from "framer-motion";

const AnimatedText = ({ children }: { children: string }) => {
  return (
    <p className="col-span-full text-[82px] font-Playfair-Display italic font-semibold text-blue _1240:text-h3 _768:text-h4 _375:text-[34px]">
      {children.split("").map((letter, index) => {
        return (
          <motion.span
            key={index}
            initial={{ color: "#2F4A4C" }}
            viewport={{ once: true }}
            whileInView={{
              color: "#5E9599",
              transition: {
                delay: index * 0.025,
              },
            }}
          >
            {letter}
          </motion.span>
        );
      })}
    </p>
  );
};

export default AnimatedText;
