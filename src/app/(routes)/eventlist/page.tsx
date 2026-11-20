// Utils

// Next

// Components
import PageHeader from "@/app/components/general/PageHeader";
import AllEvents from "@/app/components/eventlist/AllEvents";

export default async function EventList() {
  return (
    <>
      <PageHeader title="Events" />
      <section>
        <AllEvents />
      </section>
    </>
  );
}
