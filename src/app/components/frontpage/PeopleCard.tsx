"use client";
// Utils

// Next
import Image from "next/image";
import { FaXTwitter, FaFacebookF, FaInstagram } from "react-icons/fa6";
import { useState } from "react";

// Components
import PeopleSwitch from "./PeopleSwitch";

const PeopleCard = ({ people }) => {
  const [activePerson, setActivePerson] = useState(1);
  const person = people.find((p) => p.id === activePerson);
  return (
    <>
      <div className="flex flex-col items-center py-16">
        <Image
          width={person.asset.width}
          height={person.asset.height}
          src={`${process.env.NEXT_PUBLIC_API_URL}${person.asset.url}`}
          alt={person.asset.alt}
          className=""
        ></Image>
        <h3 className="py-8">{person.name}</h3>
        <p className="text-center max-w-3xl mt-0 text-subtle-text">
          {person.content}
        </p>
        <div className="flex gap-6 justify-center mt-8 mb-16">
          <FaFacebookF className="border-solid border-2 border-text size-10 p-2" />
          <FaXTwitter className="border-solid border-2 border-text size-10 p-2" />
          <FaInstagram className="border-solid border-2 border-text size-10 p-2" />
        </div>
        <div className="flex gap-3">
          {people.map((p) => (
            <PeopleSwitch
              key={p.id}
              personId={p.id}
              activePerson={activePerson}
              setActivePerson={setActivePerson}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default PeopleCard;
