import EventCard from "./EventCard";
import formatDate from "@/app/utils/formatDate";
import formatTime from "@/app/utils/formatTime";
import { div } from "motion/react-client";
export default async function AllEvents() {
  return (
    <>
      <FetchEvents />
    </>
  );
}

const FetchEvents = async () => {
  const url = `${process.env.NEXT_PUBLIC_API_URL}/events`;
  const response = await fetch(url);
  const events = await response.json();

  return (
    <>
      {events.map((event) => (
        <EventCard
          key={event.id}
          w={event.asset.width}
          h={event.asset.height}
          src={`${process.env.NEXT_PUBLIC_API_URL}${event.asset.url}`}
          alt={event.asset.alt}
          title={event.title}
          date={formatDate(event.date)}
          open={formatTime(event.doorsOpen)}
          location={event.location}
          description={event.description}
        />
      ))}
    </>
  );
};
