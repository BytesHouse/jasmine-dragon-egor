"use client";
import { motion } from "framer-motion";

const AnimatedText = ({ children }: { children: string }) => {
  return (
    <p className="col-span-full text-[91px] font-Playfair-Display italic font-semibold text-blue _1240:text-h3 _768:text-h4">
      {children.split("").map((letter, index) => {
        return (
          <motion.span
            key={index}
            initial={{ color: "#2F4A4C" }}
            whileInView={{ color: "#5E9599" }}
            transition={{
              delay: index * 0.025,
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
