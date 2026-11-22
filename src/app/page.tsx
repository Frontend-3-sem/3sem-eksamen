import Image from "next/image";
import LogoXL from "./components/general/LogoXL";
import Featured from "./components/frontpage/Featured";

export default function Home() {
  return (
    <>
      <h1>Hej verden</h1>
      <LogoXL />
      <Featured />
    </>
  );
}
