import EventCard from "./EventCard";

export default async function AllEvents() {
  return (
    <>
      <div>
        <FetchEvents />
      </div>
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
        <div key={event.id}>
          <EventCard
            w={event.asset.width}
            h={event.asset.height}
            src={`${process.env.NEXT_PUBLIC_API_URL}${event.asset.url}`}
            alt={event.asset.alt}
            title={event.title}
            date={event.date}
            open={event.doorsOpen}
            location={event.location}
            description={event.description}
          />
        </div>
      ))}
    </>
  );
};
