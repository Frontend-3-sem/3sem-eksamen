"use client";

import React from "react";

/**
 * Whether the pointer is over an element (`mouseenter` to `mouseleave`).
 * An element that renders after the hook, or replaces the first one, is
 * picked up on the next render of the component that calls it, and the
 * value goes back to `false` when the element goes away.
 * @param elementRef - A ref to the element to watch.
 * @returns `true` while the pointer is over the element.
 */
export function useHover<T extends HTMLElement = HTMLElement>(
  elementRef: React.RefObject<T | null>
): boolean {
  const [isHovered, setIsHovered] = React.useState<boolean>(false);
  const attached = React.useRef<T | null>(null);
  const detach = React.useRef<(() => void) | null>(null);

  // A ref says nothing when it fills or changes, so look after every
  // render and move the listeners only when the element did.
  React.useEffect(() => {
    const element = elementRef.current;

    if (element === attached.current) {
      return;
    }

    detach.current?.();
    detach.current = null;
    attached.current = element;

    // A new element starts from where the pointer is now (it may already
    // rest on it); a removed one gets no `mouseleave`, so it starts over.
    const hovered = element ? element.matches(":hover") : false;
    if (hovered !== isHovered) {
      setIsHovered(hovered);
    }

    if (!element) {
      return;
    }

    const handleMouseEnter = () => {
      setIsHovered(true);
    };

    const handleMouseLeave = () => {
      setIsHovered(false);
    };

    element.addEventListener("mouseenter", handleMouseEnter);
    element.addEventListener("mouseleave", handleMouseLeave);

    detach.current = () => {
      element.removeEventListener("mouseenter", handleMouseEnter);
      element.removeEventListener("mouseleave", handleMouseLeave);
    };
  });

  // Unmounting lets go of the element, so a remount attaches afresh.
  React.useEffect(
    () => () => {
      detach.current?.();
      detach.current = null;
      attached.current = null;
    },
    []
  );

  return isHovered;
}
