"use client";

// Utils

// Next
import { motion } from "motion/react";
import Image from "next/image";

// Components
import SectionGeneral from "./SectionGeneral";
import { Corners } from "./Corners";

const images = [
  {
    src: "/assets/content-img/thumb1.jpg",
    alt: "Restaurant table",
    title: "Night club",
    text: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.",
  },
  {
    src: "/assets/content-img/reastaurant_1.jpg",
    alt: "Restaurant table",
    title: "Restaurant",
    text: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution.",
  },
  {
    src: "/assets/content-img/thumb2.jpg",
    alt: "Restaurant table",
    title: "Bar",
    text: "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin.",
  },
];

function WelcomeHover({
  src,
  alt,
  title,
  text,
}: {
  src: string;
  alt: string;
  title: string;
  text: string;
}) {
  return (
    <motion.section
      className="group relative overflow-hidden"
      initial="rest"
      animate="rest"
      whileHover="hover"
    >
      <Image src={src} width={458} height={573} alt={alt} />
      <motion.div
        className="absolute inset-0 bg-background z-0"
        variants={{
          rest: { opacity: 0 },
          hover: { opacity: 1 },
        }}
        transition={{ duration: 0.4 }}
      ></motion.div>
      <motion.span
        className="absolute inset-0 border-accent1 border-y-2 z-10"
        variants={{ rest: { opacity: 0 }, hover: { opacity: 1 } }}
        transition={{ duration: 0.8 }}
      >
        <Corners />
      </motion.span>

      <motion.div
        className="absolute inset-0 flex flex-col items-center justify-center z-20 "
        variants={{ rest: { opacity: 0 }, hover: { opacity: 1, scale: 1.1 } }}
        transition={{ duration: 0.5, ease: "easeIn" }}
      >
        <div className="flex items-center justify-center shrink-0 border border-accent1 rounded-xs aspect-square size-14 mb-5">
          <svg
            className="size-6"
            xmlns="http://www.w3.org/2000/svg"
            width=""
            height=""
            viewBox="0 0 104 156"
            fill="none"
          >
            <path
              d="M37.2993 28.5946C41.8362 31.9959 52.212 29.6994 60.4864 23.4737C68.7677 17.244 71.7932 9.44288 67.2605 6.04299C65.1618 4.46345 61.7983 4.1274 57.9777 4.81854C56.4899 3.55735 54.1376 2.95465 51.8297 3.44035L44.0582 5.07703C40.8416 5.75728 38.9603 8.26196 39.8635 10.6837L41.0105 13.7666C35.1244 19.4262 33.3776 25.656 37.2993 28.5946ZM55.3899 19.5732C61.2082 17.6018 64.3708 13.3203 62.7957 9.76804C62.9259 9.94354 63.0575 10.1122 63.1698 10.2946C65.3585 13.9434 62.1668 18.5841 56.0396 20.6561C49.9111 22.7323 43.1661 21.4602 40.9787 17.814C40.8693 17.6317 40.7834 17.4453 40.7002 17.259C43.1993 20.4929 49.5717 21.5486 55.3899 19.5732ZM55.4855 33.551H51.6316V35.9046H55.4855V33.551ZM55.6379 71.1076V38.2596H51.7868V71.1076L53.6569 76.389L55.6379 71.1076ZM27.1465 139.65C20.3627 145.496 30.7677 154.642 37.5542 148.799C43.1328 143.995 47.6281 138.594 51.4183 132.836C48.7086 128.142 45.5931 122.717 44.6373 117.559C40.5894 125.291 34.2254 133.56 27.1465 139.65ZM54.6155 97.455C61.1528 108.627 59.6871 107.229 62.9204 111.335C66.9959 102.956 69.707 92.0593 70.3054 82.5698C70.5825 81.8147 70.4924 81.2025 70.1059 80.6923C70.3664 80.3399 70.5409 79.8638 70.5409 79.1169V54.2061L104 6.54773C100.977 -0.601699 93.649 0.0132481 93.649 0.0132481C86.8597 9.16398 74.2604 25.6941 66.09 33.7945C65.1992 33.4625 64.2212 33.2734 63.1947 33.2734H61.9687L58.5387 40.5099V78.7005C55.5437 78.7876 52.3076 79.0434 49.2226 79.3645V40.9412L45.3022 33.2775H41.3804C40.6698 33.2775 40.0021 33.3918 39.3593 33.5537C30.6998 25.909 17.2181 12.7462 10.5714 3.7968C10.5714 3.7968 -1.7868 0.77785 0.220498 9.29459C3.02157 12.6292 21.3947 37.5155 34.0231 51.7477V79.1182C34.0231 79.7046 34.1409 80.1141 34.3071 80.4488C34.3487 81.4052 34.7116 83.65 35.7631 88.3927C37.2162 100.05 52.7149 131.639 52.7703 131.552C56.4746 138.889 60.636 146.037 65.4375 152.927C70.3747 160.031 83.1 153.538 78.1351 146.399C71.3292 136.616 57.0703 105.436 54.6155 97.455ZM35.2366 81.2923C35.2366 81.2923 35.2339 81.2882 35.2339 81.2841C35.2366 81.2882 35.2394 81.2909 35.2436 81.2923H35.2366Z"
              fill="none"
              className="fill-accent1"
            />
          </svg>
        </div>
        <p className="text-text text-center uppercase">{title}</p>
        <motion.p
          className="text-xs text-center font-light max-w-64 text-balance mt-5"
          variants={{
            rest: { x: 100 },
            hover: { x: 0 },
          }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          {text}
        </motion.p>
      </motion.div>
    </motion.section>
  );
}

function WelcomeCard() {
  return (
    <SectionGeneral title="Welcome in nightclub">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 place-items-center max-w-5xl mx-auto cursor-pointer">
        {images.map((img) => (
          <WelcomeHover
            key={img.src}
            src={img.src}
            alt={img.alt}
            title={img.title}
            text={img.text}
          />
        ))}
      </div>
    </SectionGeneral>
  );
}

export default WelcomeCard;
