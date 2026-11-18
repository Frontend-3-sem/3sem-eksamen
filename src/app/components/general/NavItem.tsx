"use client";
// Utils

// Next
import { useActivePath, navigation } from "@/app/helper";
import { motion } from "motion/react";
import { useState } from "react";

// Components
import Logo from "./Logo";
import BurgerMenu from "@/app/components/general/BurgerMenu";

const SquareBefore =
  "before:content-[''] before:absolute before:top-0 before:left-0 before:h-8 md:before:h-1/2 before:aspect-square before:bg-accent1 before:[clip-path:polygon(0%_0%,100%_0%,0%_100%)]";

const SquareAfter =
  "after:content-[''] after:absolute after:bottom-0 after:right-0 after:h-8 md:after:h-1/2 after:aspect-square after:bg-accent1 after:[clip-path:polygon(0%_100%,100%_0%,100%_100%)]";

const DURATION = 0.2;
const STAGGER = 0.025;

type AnimationLinkProps = {
  href: string;
  children: string;
  hovered: string | null;
  setHovered: (value: string | null) => void;
};

const AnimationLink = ({
  href,
  children,
  hovered,
  setHovered,
}: AnimationLinkProps) => {
  const isActivePath = useActivePath();
  const active = isActivePath(href);

  const showLine = hovered === null ? active : hovered === href;

  const letters = children.split("");

  return (
    <li>
      <motion.a
        initial="initial"
        whileHover={active ? undefined : "hover"}
        whileFocus={active ? undefined : "hover"}
        onMouseEnter={() => setHovered(href)}
        onMouseLeave={() => setHovered(null)}
        onFocus={() => setHovered(href)}
        onBlur={() => setHovered(null)}

        href={href}
        className={`relative block overflow-hidden whitespace-nowrap ${active ? "text-accent1" : "text-white"}`}
      >
        <div>
          {letters.map((c, index) => {
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
                {c}
              </motion.span>
            );
          })}
        </div>
        <div className="absolute inset-0 text-accent1">
          {letters.map((c, index) => {
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
                {c}
              </motion.span>
            );
          })}
        </div>
      </motion.a>

      <div className="mt-2 h-0.5">
        {showLine && (
          <motion.div
            layoutId="nav-underline"
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className="h-full w-full bg-linear-(--gradient-line)"
          />
        )}
      </div>
    </li>
  );
};

export function NavItem() {
  const [hovered, setHovered] = useState<string | null>(null);
  return (
    <nav
      className={`${SquareBefore} ${SquareAfter} relative flex w-full items-center justify-between gap-8 border border-accent1 px-12 py-5 md:py-1 lg:px-24 xl:px-40`}
    >
      <Logo />
      <ul className="hidden shrink-0 list-none items-center gap-4 whitespace-nowrap text-sm font-bold md:flex lg:gap-6 lg:text-base xl:gap-10">
        {navigation.map(({ href, name }) => (
          <AnimationLink
            key={href}
            href={href}
            hovered={hovered}
            setHovered={setHovered}
          >
            {name}
          </AnimationLink>
        ))}
      </ul>
      <BurgerMenu />
    </nav>
  );
}
