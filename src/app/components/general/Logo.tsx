// Utils

// Next
import Link from "next/link";

// Components

const Logo = () => {
  return (
    <>
      <Link href="/" className="block w-57 uppercase md:py-4">
        <div className="font-bold md:text-[38px] text-[32px] trim">
          <span>Night</span>
          <span className="text-accent1">Club</span>
        </div>
        <div className="md:text-[16px] text-[13.5px] uppercase font-normal pt-4 tracking-[0.28em] trim">
          have a good time
        </div>
      </Link>
    </>
  );
};

export default Logo;
