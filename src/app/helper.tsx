// Utils

// Next
import { usePathname } from "next/navigation";

// Components

export type NavigationItem = {
  href: string;
  name: string;
};

export const navigation: NavigationItem[] = [
  { href: "/", name: "Home" },
  { href: "/events", name: "Events" },
  { href: "/book", name: "Book Table" },
  { href: "/contact", name: "Contact us" },
];

export function useActivePath(): (path: string) => boolean {
  const pathname = usePathname();

  const isActivePath = (path: string) => {
    if (path === "/" && pathname !== path) {
      return false;
    }
    return pathname.startsWith(path);
  };

  return isActivePath;
}
