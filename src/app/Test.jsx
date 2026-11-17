export default async function EventsPage() {
  const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/events`);
  const events = await response.json();

  console.log("API", events);
  return <p>Tjek terminalen</p>;
}
