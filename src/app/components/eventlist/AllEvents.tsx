// Utils
import formatDate from "@/app/utils/formatDate";
import formatTime from "@/app/utils/formatTime";
import { div } from "motion/react-client";

// Next
import Link from "next/link";
import { FaCaretLeft, FaCaretRight } from "react-icons/fa6";

// Components
import EventCard from "./EventCard";

export default async function AllEvents({ page }) {
  return (
    <>
      <FetchEvents page={page} />
    </>
  );
}

const FetchEvents = async ({ page }) => {
  const url = `${process.env.NEXT_PUBLIC_API_URL}/events?_page=${page}&_limit=3`;
  const response = await fetch(url);
  const total = Number(response.headers.get("X-Total-Count"));
  const totalPages = Math.ceil(total / 3);
  const events = await response.json();

  return (
    <>
      <section>
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
        <div className="flex justify-center gap-6 my-12">
          {page > 1 && (
            <Link href={`?page=${page - 1}`}>
              <FaCaretLeft className="border-solid border-2 border-text size-10 p-2" />
            </Link>
          )}
          {page < totalPages && (
            <Link href={`?page=${page + 1}`}>
              <FaCaretRight className="border-solid border-2 border-text size-10 p-2" />
            </Link>
          )}
        </div>
      </section>
    </>
  );
};
