// Utils

// Next

// Components
import BookingForm from "@/app/components/booking/BookingForm";

const Booking = async () => {
  const url = `${process.env.NEXT_PUBLIC_API_URL}/events`;
  const response = await fetch(url);
  const events = await response.json();
  const tables = [
    { tableId: 1, capacity: 4 },
    { tableId: 2, capacity: 4 },
    { tableId: 3, capacity: 6 },
    { tableId: 4, capacity: 4 },
    { tableId: 5, capacity: 8 },
    { tableId: 6, capacity: 4 },
    { tableId: 7, capacity: 4 },
    { tableId: 8, capacity: 6 },
    { tableId: 9, capacity: 4 },
    { tableId: 10, capacity: 8 },
    { tableId: 11, capacity: 4 },
    { tableId: 12, capacity: 4 },
    { tableId: 13, capacity: 6 },
    { tableId: 14, capacity: 4 },
    { tableId: 15, capacity: 8 },
  ];
  return (
    <>
      <div>
        <BookingForm events={events} tables={tables} />
      </div>
    </>
  );
};

export default Booking;
