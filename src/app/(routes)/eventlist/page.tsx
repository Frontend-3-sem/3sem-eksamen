// Utils

// Next

// Components
import PageHeader from "@/app/components/general/PageHeader";
import EventCard from "@/app/components/eventlist/EventCard";
import AllEvents from "@/app/components/eventlist/AllEvents";

export default async function EventList() {
  return (
    <>
      <PageHeader title="Events" />
      <AllEvents />
    </>
  );
}
