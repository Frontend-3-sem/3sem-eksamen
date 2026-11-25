// Utils

// Next

// Components
import BookingForm from "@/app/components/booking/BookingForm";

const Booking = async () => {
  const url = `${process.env.NEXT_PUBLIC_API_URL}/events`;
  const response = await fetch(url);
  const events = await response.json();
  return (
    <>
      <div>
        <BookingForm events={events} />
      </div>
    </>
  );
};

export default Booking;
