"use client";
const PeopleSwitch = ({ personId, setActivePerson, activePerson }) => {
  return (
    <div
      onClick={() => setActivePerson(personId)}
      className={`cursor-pointer w-5 h-5 ${activePerson == personId ? "bg-accent1" : "bg-text"}`}
    ></div>
  );
};

export default PeopleSwitch;
