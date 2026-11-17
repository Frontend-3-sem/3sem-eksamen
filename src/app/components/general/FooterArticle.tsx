// Utils

// Next
import Image from "next/image";

// Components

const FooterArticle = ({ icon, text, date, className }) => {
  return (
    <>
      <div
        className={`flex gap-6 max-w-150 lg:max-w-80 xl:max-w-110 ${className}`}
      >
        <div>{icon}</div>
        <div>
          <p className="trim mb-2">{text}</p>
          <p className="text-accent1">{date}</p>
        </div>
      </div>
    </>
  );
};

export default FooterArticle;
