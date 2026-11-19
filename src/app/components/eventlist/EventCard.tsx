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
      <article className="grid grid-cols-2">
        <Image
          width={w}
          height={h}
          src={src}
          alt={alt}
          className="w-full"
        ></Image>
        <div className="">
          <h3>{title}</h3>
          <div className="flex divide-x-2 divide-subtle">
            <p className="text-accent1">
              {date} · {open}
            </p>

            <p className="m-0">{location}</p>
          </div>
          <p className="text-subtle-text">{description}</p>
          <Button variant="primary">Read More</Button>
        </div>
      </article>
    </>
  );
};

export default EventCard;
