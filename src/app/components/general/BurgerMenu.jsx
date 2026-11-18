// Utils
"use client";

// Next
import Link from "next/link";
import { useActivePath } from "@/app/helper";

// Components

const BurgerMenu = () => {
  const isActivePath = useActivePath();
  return (
    <>
      <div className="group md:hidden">
        <button
          type="button"
          popoverTarget="my-popover"
          aria-label="Open menu"
          className="relative cursor-pointer flex items-center justify-center [anchor-name:--burger] group-has-[:popover-open]:opacity-0"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="28"
            height="28"
            viewBox="0 0 44 32"
            fill="none"
          >
            <path
              d="M1.54907 5.87755H41.825C42.6805 5.87755 43.374 5.29282 43.374 4.57143V1.30612C43.374 0.584735 42.6805 0 41.825 0H1.54907C0.693501 0 0 0.584735 0 1.30612V4.57143C0 5.29282 0.693501 5.87755 1.54907 5.87755ZM1.54907 18.9388H41.825C42.6805 18.9388 43.374 18.354 43.374 17.6327V14.3673C43.374 13.646 42.6805 13.0612 41.825 13.0612H1.54907C0.693501 13.0612 0 13.646 0 14.3673V17.6327C0 18.354 0.693501 18.9388 1.54907 18.9388ZM1.54907 32H41.825C42.6805 32 43.374 31.4153 43.374 30.6939V27.4286C43.374 26.7072 42.6805 26.1224 41.825 26.1224H1.54907C0.693501 26.1224 0 26.7072 0 27.4286V30.6939C0 31.4153 0.693501 32 1.54907 32Z"
              fill="white"
            />
          </svg>
        </button>

        <div
          id="my-popover"
          popover="auto"
          className="fixed bg-transparent text-white inset-0 w-full h-full m-0 md:hidden backdrop:bg-black/90"
        >
          <button
            type="button"
            popoverTarget="my-popover"
            popoverTargetAction="hide"
            aria-label="Close menu"
            className="fixed flex cursor-pointer -translate-x-1/2 -translate-y-1/2 items-center justify-center
                     [position-anchor:--burger] [top:anchor(center)] [left:anchor(center)]"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M16.5491 12L23.372 5.17705C24.2093 4.33977 24.2093 2.98227 23.372 2.14432L21.8557 0.627955C21.0184 -0.209318 19.6609 -0.209318 18.823 0.627955L12 7.45091L5.17705 0.627955C4.33977 -0.209318 2.98227 -0.209318 2.14432 0.627955L0.627955 2.14432C-0.209318 2.98159 -0.209318 4.33909 0.627955 5.17705L7.45091 12L0.627955 18.823C-0.209318 19.6602 -0.209318 21.0177 0.627955 21.8557L2.14432 23.372C2.98159 24.2093 4.33977 24.2093 5.17705 23.372L12 16.5491L18.823 23.372C19.6602 24.2093 21.0184 24.2093 21.8557 23.372L23.372 21.8557C24.2093 21.0184 24.2093 19.6609 23.372 18.823L16.5491 12Z"
                fill="white"
              />
            </svg>
          </button>

          <ul className="flex flex-col h-full justify-center text-center items-center text-xl font-medium gap-8 m-auto">
            {navigation.map(({ href, name }) => (
              <li key={href}>
                <Link
                  href={href}
                  className={isActivePath(href) ? "text-accent1" : "text-white"}
                >
                  <span>{name}</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};

export default BurgerMenu;
