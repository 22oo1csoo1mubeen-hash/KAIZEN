import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

interface BlurTextProps {
  text: string;
  className?: string;
}

export function BlurText({ text, className }: BlurTextProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-10%" });
  const words = text.split(" ");

  const container = {
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.04 * i },
    }),
  };

  const child = {
    visible: {
      opacity: 1,
      y: 0,
      filter: 'blur(0px)',
      transition: {
        duration: 0.7,
      },
    },
    hidden: {
      opacity: 0,
      y: 50,
      filter: 'blur(10px)',
    },
  };

  return (
    <motion.p
      style={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}
      className={className}
      variants={container}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      ref={ref}
    >
      {words.map((word, index) => (
        <motion.span
          variants={child}
          style={{ display: "inline-block", marginRight: "0.28em" }}
          key={index}
          className="text-glow-hover text-glow-click cursor-default select-none"
        >
          {word}
        </motion.span>
      ))}
    </motion.p>
  );
}
