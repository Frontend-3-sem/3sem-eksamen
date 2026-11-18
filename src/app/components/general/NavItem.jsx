"use client";
// Utils

// Next
import { useActivePath } from "@/app/helper";
import { motion } from "motion/react";

// Components
import Logo from "./Logo";
import BurgerMenu from "@/app/components/general/BurgerMenu";

const SquareBefore =
  "before:content-[''] before:absolute before:top-0 before:left-0 before:h-1/2 before:aspect-square before:bg-accent1 before:[clip-path:polygon(0%_0%,100%_0%,0%_100%)]";

const SquareAfter =
  "after:content-[''] after:absolute after:bottom-0 after:right-0 after:h-1/2 after:aspect-square after:bg-accent1 after:[clip-path:polygon(0%_100%,100%_0%,100%_100%)]";

const DURATION = 0.2;
const STAGGER = 0.025;

const AnimationLink = ({ href, children }) => {
  const isActivePath = useActivePath();

  return (
    <li key={href}>
      <motion.a
        initial="initial"
        whileHover="hover"
        whileFocus="hover"
        href={href}
        className={`relative block overflow-hidden whitespace-nowrap ${isActivePath(href) ? "text-accent1" : "text-white"}`}
      >
        <div>
          {children.split("").map((lenght, index) => {
            return (
              <motion.span
                variants={{
                  initial: { y: 0 },
                  hover: { y: "-100%" },
                }}
                transition={{
                  duration: DURATION,
                  ease: "easeInOut",
                  delay: STAGGER * index,
                }}
                className="inline-block whitespace-pre"
                key={index}
              >
                {lenght}
              </motion.span>
            );
          })}
        </div>
        <div className="absolute inset-0 hover:text-accent1">
          {children.split("").map((lenght, index) => {
            return (
              <motion.span
                variants={{
                  initial: { y: "100%" },
                  hover: { y: 0 },
                }}
                transition={{
                  duration: DURATION,
                  ease: "easeInOut",
                  delay: STAGGER * index,
                }}
                className="inline-block whitespace-pre"
                key={index}
              >
                {lenght}
              </motion.span>
            );
          })}
        </div>
      </motion.a>
    </li>
  );
};

export function NavItem() {
  return (
    <nav
      className={`${SquareBefore} ${SquareAfter} relative flex w-full items-center justify-between gap-8 border border-accent1 px-12 py-5 md:py-1 lg:px-24 xl:px-40`}
    >
      <Logo />
      <ul className="hidden shrink-0 list-none items-center gap-4 whitespace-nowrap text-sm font-bold md:flex lg:gap-6 lg:text-base xl:gap-10">
        <AnimationLink href="/">Home</AnimationLink>
        <AnimationLink href="events">Events</AnimationLink>
        <AnimationLink href="about">About</AnimationLink>
        <AnimationLink href="contact">Contact us</AnimationLink>
      </ul>
      <BurgerMenu />
    </nav>
  );
}
