import Image from "next/image";
import LogoXL from "./components/general/LogoXL";
import Featured from "./components/frontpage/Featured";
import People from "./components/frontpage/People";
import PeopleCard from "./components/frontpage/PeopleCard";

export default function Home() {
  return (
    <>
      <h1>Hej verden</h1>
      <LogoXL />
      <People />
      <Featured />
    </>
  );
}
