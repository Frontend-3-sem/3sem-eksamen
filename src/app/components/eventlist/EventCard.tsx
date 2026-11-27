// Utils

// Next
import Image from "next/image";
import Button from "../general/Button";

// Components

const EventCard = ({
  w,
  h,
  src,
  alt,
  title,
  date,
  open,
  location,
  description,
}) => {
  return (
    <>
      <article className="grid grid-cols-2 event">
        <Image
          width={w}
          height={h}
          src={src}
          alt={alt}
          className="w-full"
        ></Image>
        <div className="p-8">
          <h3>{title}</h3>
          <div className="flex divide-x-2 divide-subtle-text mb-8">
            <p className="text-accent1 pr-3">
              {date} · {open}
            </p>

            <p className="m-0 pl-3">{location}</p>
          </div>
          <p className="text-subtle-text mb-16">{description}</p>
          <div className="flex justify-end">
            <Button type="" className="" variant="primary">
              Read More
            </Button>
          </div>
        </div>
      </article>
    </>
  );
};

export default EventCard;
