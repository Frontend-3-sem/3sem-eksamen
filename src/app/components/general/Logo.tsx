// Utils

// Next
import Link from "next/link";

// Components

const Logo = () => {
  return (
    <>
      <Link href="/" className="block w-57 uppercase">
        <div className="font-bold md:text-[38px] text-[32px]">
          <span>Night</span>
          <span className="text-accent1">Club</span>
        </div>
        <div className="md:text-[16px] text-[13.5px] uppercase font-normal tracking-[0.30em]">
          have a good time
        </div>
      </Link>
    </>
  );
};

export default Logo;
