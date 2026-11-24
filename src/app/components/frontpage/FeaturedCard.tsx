"use client";
// Utils

// Next
import Image from "next/image";
import * as motion from "motion/react-client";

// Components
import Button from "../general/Button";

const FeaturedCard = ({
  w,
  h,
  src,
  alt,
  title,
  date,
  open,
  excerpt,
  location,
}) => {
  const animations = {
    rest: {},
    hover: {},
  };
  return (
    <>
      <motion.article
        variants={animations}
        initial="rest"
        animate="rest"
        whileHover="hover"
        transition={{
          duration: 0.4,
        }}
        className="stackcontainer w-full overflow-hidden"
      >
        <Image
          width={w}
          height={h}
          src={src}
          alt={alt}
          className="stackitem"
        ></Image>
        <motion.div
          className="stackitem w-full h-full relative"
          variants={{
            rest: {},
            hover: { background: "#00000080" },
          }}
          transition={{ duration: 0.4 }}
        >
          <motion.div
            className="w-full flex justify-center stackitem"
            variants={{
              rest: { y: "-100%" },
              hover: { y: "120%" },
            }}
            transition={{ duration: 0.4 }}
          >
            <Button type="" variant="gradient" className="absolute">
              Book now
            </Button>
          </motion.div>
          <motion.div
            className="stackitem absolute bottom-0 left-0 w-full origin-bottom h-fit p-6 pb-20 bg-background/80"
            variants={{
              rest: { y: "100%" },
              hover: { y: 0 },
            }}
            transition={{ duration: 0.4 }}
          >
            <h3>{location}</h3>
            <p>{excerpt}</p>
          </motion.div>
          <motion.span
            className="absolute left-0 top-0 [clip-path:polygon(0%_0%,100%_0%,0%_100%)] bg-accent1 h-16 aspect-square"
            variants={{
              rest: { y: "-100%" },
              hover: { y: 0 },
            }}
            transition={{ duration: 0.4 }}
          ></motion.span>
          <motion.span
            className="absolute right-0 bottom-5 [clip-path:polygon(0%_100%,100%_0%,100%_100%)] bg-accent1 h-16 aspect-square origin-bottom"
            variants={{
              rest: { y: "100%" },
              hover: { y: 0 },
            }}
            transition={{ duration: 0.4 }}
          ></motion.span>
        </motion.div>
        <div className="z-10 flex justify-between bg-accent1 py-3 px-6 stackitem h-fit self-end">
          <p>{title}</p>
          <p className="mt-0">
            {date} · {open}
          </p>
        </div>
      </motion.article>
    </>
  );
};

export default FeaturedCard;
