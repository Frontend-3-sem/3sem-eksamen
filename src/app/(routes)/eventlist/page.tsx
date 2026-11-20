// Utils

// Next

// Components
import PageHeader from "@/app/components/general/PageHeader";
import AllEvents from "@/app/components/eventlist/AllEvents";

export default async function EventList({ searchParams }) {
  const { page } = await searchParams;
  const currentPage = Number(page) || 1;
  return (
    <>
      <PageHeader title="Events" />
      <section>
        <AllEvents page={currentPage} />
      </section>
    </>
  );
}
