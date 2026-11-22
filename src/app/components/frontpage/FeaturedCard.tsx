// Utils

// Next
import Image from "next/image";
// Components

const FeaturedCard = ({ w, h, src, alt, title, date, open }) => {
  return (
    <>
      <article className="stackcontainer w-full">
        <Image
          width={w}
          height={h}
          src={src}
          alt={alt}
          className="stackitem"
        ></Image>
        <div className="flex justify-between bg-accent1 py-3 px-6 stackitem h-fit self-end">
          <p>{title}</p>
          <p className="mt-0">
            {date} · {open}
          </p>
        </div>
      </article>
    </>
  );
};

export default FeaturedCard;
