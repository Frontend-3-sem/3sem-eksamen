"use client";
// Utils
import { color, hover, motion } from "motion/react";
import { linearGradient } from "motion/react-client";
// Next

// Components

const Button = ({ className, type, children, variant = "primary" }) => {
  // Base styles shared by all buttons
  const baseStyles =
    "font-medium text-base uppercase tracking-[0.2em] w-35 h-12 cursor-pointer";
  // Variant-specific styles
  const shine =
    "relative before:absolute before:-inset-[2px] before:border-2 before:border-text before:mask-(--corner-shine)";
  const variants = {
    primary: "bg-transparent relative",
    secondary: `bg-transparent border-2 ${shine}`,
    gradient: `bg-linear-(--gradient) border-transparent border-2 ${shine}`,
  };
  const animations = {
    gradient: {
      rest: {
        backgroundImage:
          "linear-gradient(118deg, #ff2a70 7.75%, #b822b5 98.44%)",
      },
      hover: {
        backgroundImage:
          "linear-gradient(118deg, #b822b5 7.75%, #b822b5 98.44%)",
      },
    },
    primary: {
      rest: { color: "#ffffff" },
      hover: { color: "#ff2a70" },
    },
    secondary: {
      rest: { borderColor: "#383838" },
      hover: { borderColor: "#ffffff" },
    },
  };
  // Combine base styles with variant styles
  const buttonClasses = `${baseStyles} ${variants[variant]}`;
  return (
    <motion.button
      variants={animations[variant]}
      initial="rest"
      animate="rest"
      whileHover="hover"
      transition={{
        duration: 0.4,
      }}
      className={`${buttonClasses} ${className}`}
      type={type}
    >
      {children}
      {variant === "primary" && (
        <>
          <motion.span
            className="absolute top-0 left-0 h-0.5 w-full bg-text origin-left"
            variants={{
              rest: { scaleX: 1, transition: { duration: 0.4, delay: 0.1 } },
              hover: { scaleX: 0 },
            }}
            transition={{ duration: 0.4 }}
          />
          <motion.span
            className="absolute top-0 left-0 h-0.5 w-full bg-accent1 origin-right"
            variants={{
              rest: { scaleX: 0 },
              hover: { scaleX: 1, transition: { duration: 0.4, delay: 0.1 } },
            }}
            transition={{ duration: 0.4 }}
          />
          <motion.span
            className="absolute bottom-0 left-0 h-0.5 w-full bg-text origin-right"
            variants={{
              rest: { scaleX: 1, transition: { duration: 0.4, delay: 0.1 } },
              hover: { scaleX: 0 },
            }}
            transition={{ duration: 0.4 }}
          />
          <motion.span
            className="absolute bottom-0 left-0 h-0.5 w-full bg-accent1 origin-left"
            variants={{
              rest: { scaleX: 0 },
              hover: { scaleX: 1, transition: { duration: 0.4, delay: 0.1 } },
            }}
            transition={{ duration: 0.4 }}
          />
        </>
      )}
    </motion.button>
  );
};
export default Button;
