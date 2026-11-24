// Utils

// Next
import Image from "next/image";

// Components
import PeopleCard from "./PeopleCard";

const People = () => {
  return (
    <>
      <FetchPeople />
    </>
  );
};

export default People;

const FetchPeople = async () => {
  const url = `${process.env.NEXT_PUBLIC_API_URL}/testimonials`;
  const response = await fetch(url);
  const people = await response.json();

  return (
    <>
      <section className="footerbg">
        <PeopleCard people={people} />
      </section>
    </>
  );
};
