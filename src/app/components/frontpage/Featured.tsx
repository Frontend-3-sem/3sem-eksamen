import SectionGeneral from "../general/SectionGeneral";
import FeaturedCard from "./FeaturedCard";
import formatDate from "@/app/utils/formatDate";
import formatTime from "@/app/utils/formatTime";
const Featured = () => {
  return (
    <>
      <SectionGeneral title="Featured Events">
        <FetchFeatured />
      </SectionGeneral>
    </>
  );
};

const FetchFeatured = async ({}) => {
  const url = `${process.env.NEXT_PUBLIC_API_URL}/events`;
  const response = await fetch(url);
  const events = await response.json();
  const isFeatured = events.filter((event) => event.isFeatured === true);

  return (
    <>
      <div className="grid grid-cols-2 gap-6">
        {isFeatured.map((event) => (
          <FeaturedCard
            key={event.id}
            w={event.asset.width}
            h={event.asset.height}
            src={`${process.env.NEXT_PUBLIC_API_URL}${event.asset.url}`}
            alt={event.asset.alt}
            title={event.title}
            date={formatDate(event.date)}
            open={formatTime(event.doorsOpen)}
          />
        ))}
      </div>
    </>
  );
};

export default Featured;
