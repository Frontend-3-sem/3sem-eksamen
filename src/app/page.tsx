import LogoXL from "./components/general/LogoXL";
import Welcome from "./components/general/Welcome";
import Featured from "./components/frontpage/Featured";
import People from "./components/frontpage/People";
import Newsletter from "./components/frontpage/Newsletter";

export default function Home() {
  return (
    <>
      <h1>Hej verden</h1>
      <LogoXL />
      <Welcome/>
      <Featured />
      <People />
      <Newsletter />
    </>
  );
}
