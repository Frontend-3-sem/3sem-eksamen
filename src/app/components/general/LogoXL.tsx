// Utils

// Next
import Image from "next/image";

// Components

const LogoXL = () => {
  return (
    <>
      <a href="/">
        <Image
          width={500}
          height={500}
          src="/logoxl.svg"
          alt="Nightclub Logo"
          loading="eager"
          className="h-auto w-80 sm:w-100 md:w-125 lg:w-150 xl:w-180 2xl:w-200"
        ></Image>
        <Image
          width={500}
          height={500}
          src="/bottom_line.png"
          alt="Neon pink line"
          loading="eager"
          className="h-auto w-80 sm:w-100 md:w-125 lg:w-150 xl:w-180 2xl:w-200 mt-2"
        ></Image>
      </a>
    </>
  );
};

export default LogoXL;
