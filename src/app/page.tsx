import Image from "next/image";
import LogoXL from "./components/general/LogoXL";
import Featured from "./components/frontpage/Featured";
import People from "./components/frontpage/People";
import Newsletter from "./components/frontpage/Newsletter";

export default function Home() {
  return (
    <>
      <h1>Hej verden</h1>
      <LogoXL />
      <People />
      <Newsletter />
      <Featured />
    </>
  );
}
