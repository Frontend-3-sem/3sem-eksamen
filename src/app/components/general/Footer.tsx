// Utils

// Next
import {
  FaAngleDown,
  FaXTwitter,
  FaFacebookF,
  FaInstagram,
} from "react-icons/fa6";

// Components
import FooterArticle from "./FooterArticle";

const Footer = () => {
  return (
    <footer className="m-6">
      <div className="grid lg:flex lg:gap-6 lg:justify-between">
        <div className="text-center md:text-left">
          <h2>Logo</h2>
          <div className="mt-16 mb-12">
            <h3 className="text-accent1">Location</h3>
            <p>Kompagnistræde 278</p>
            <p>1265 Købehavn K</p>
          </div>
          <div>
            <h3 className="text-accent1">Opening hours</h3>
            <p>WED - THU 10:30 PMTO 3 AM</p>
            <p>SAT - SUN: 11 PM TO 5 AM</p>
          </div>
        </div>
        <div className="hidden md:grid lg:grid-cols-2 lg:gap-6">
          <div className="my-8 lg:my-0">
            <h3 className="text-accent1">News</h3>
            <FooterArticle
              icon={<FaAngleDown />}
              text="Lorem Ipsum is simply dummy text of the printing and typesetting."
              date="April 17, 2026"
              className="my-12"
            />
            <FooterArticle
              icon={<FaAngleDown />}
              text="Lorem Ipsum is simply dummy text of the printing and typesetting."
              date="April 17, 2026"
              className=""
            />
          </div>
          <div>
            <h3 className="text-accent1">Posts</h3>
            <FooterArticle
              icon={<FaXTwitter />}
              text="It is a long established fact that a reader will be distracted by the readable... "
              date="5 hours ago"
              className="my-12"
            />
            <FooterArticle
              icon={<FaXTwitter />}
              text="It is a long established fact that a reader will be distracted by the readable... "
              date="5 hours ago"
              className=""
            />
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center md:flex-row md:justify-between mt-12 mb-4">
        <div className="hidden md:inline-block">
          <p className="text-subtle">Night Club - All Rights Reserved</p>
        </div>
        <div className="flex flex-col items-center justify-center">
          <p>Stay connected with us</p>
          <div className="flex gap-6 justify-center mt-4">
            <FaFacebookF className="border-solid border-2 border-text size-10 p-2" />
            <FaXTwitter className="border-solid border-2 border-text size-10 p-2" />
            <FaInstagram className="border-solid border-2 border-text size-10 p-2" />
          </div>
        </div>
        <div className="md:hidden flex flex-col items-center mt-6 mb-4">
          <p className="text-subtle">Night Club</p>
          <p className="text-subtle">All Rights Reserved</p>
        </div>
        <p className="text-subtle">Copyright © NightClub</p>
      </div>
    </footer>
  );
};

export default Footer;
