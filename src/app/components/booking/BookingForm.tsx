"use client";
// Utils
import postBooking from "@/app/utils/postBooking";
import { initialBookingForm } from "@/app/schema/bookingSchema";

// Next
import { useActionState } from "react";
import { useState, useEffect } from "react";

// Components
import Button from "../general/Button";
import EventSelect from "./EventSelect";
import TableOverview from "./TableOverview";
import TableSelect from "./TableSelect";

const BookingForm = ({ events, tables }) => {
  // States

  const [state, postBookingAction, isPending] = useActionState(postBooking, {
    success: null,
    message: "",
  });
  const [formFields, setFormFields] = useState(initialBookingForm);
  const [reservations, setReservations] = useState([]);

  useEffect(() => {
    if (state.success) setFormFields(initialBookingForm);
  }, [state]);

  useEffect(() => {
    if (!formFields.eventId) {
      return;
    }
    const reservationUrl = `${process.env.NEXT_PUBLIC_API_URL}/reservations?eventId=${formFields.eventId}`;
    async function fetchReservations() {
      const response = await fetch(reservationUrl);
      const eventReservations = await response.json();
      setReservations(eventReservations);
    }
    fetchReservations();
  }, [formFields.eventId]);

  const selectedEvent = events.find((event) => event.id === formFields.eventId);

  // Eventhandlers

  function handleChange(event) {
    const { name, value } = event.target;

    setFormFields((currentFields) => ({
      ...currentFields,
      [name]: value,
    }));
  }
  function handleSelect(value) {
    setFormFields((currentFields) => ({
      ...currentFields,
      eventId: value,
    }));
  }

  function handleTableSelect(tableId) {
    setFormFields((currentFields) => ({
      ...currentFields,
      table: tableId,
    }));
  }
  return (
    <>
      <TableOverview
        onTableSelect={handleTableSelect}
        selectedTable={formFields.table}
        reservations={reservations}
        tables={tables}
      />
      <section className="flex flex-col items-center pb-16">
        <h1 className="py-16 w-2/3">Book a Table</h1>
        <form className="w-2/3" action={postBookingAction}>
          <div className="grid grid-cols-2 w-full gap-3">
            <div>
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formFields.name}
                onChange={handleChange}
                className="p-4 w-full border border-text focus:outline-0 focus:border-accent1"
              />
              {state.fieldErrors?.name?.[0] && (
                <p className="mt-2 text-accent1">{state.fieldErrors.name[0]}</p>
              )}{" "}
            </div>
            <div>
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={formFields.email}
                onChange={handleChange}
                className="p-4 w-full border border-text focus:outline-0 focus:border-accent1"
              />
              {state.fieldErrors?.email?.[0] && (
                <p className="mt-2 text-accent1">
                  {state.fieldErrors.email[0]}
                </p>
              )}{" "}
            </div>
            <div>
              <TableSelect
                tables={tables}
                value={formFields.table}
                onTableChange={handleTableSelect}
              />
              {state.fieldErrors?.table?.[0] && (
                <p className="mt-2 text-accent1">
                  {state.fieldErrors.table[0]}
                </p>
              )}
            </div>
            <div>
              <input
                type="number"
                name="guests"
                placeholder="Number of Guests"
                value={formFields.guests}
                onChange={handleChange}
                className="p-4 w-full border border-text focus:outline-0 focus:border-accent1"
              />
              {state.fieldErrors?.guests?.[0] && (
                <p className="mt-2 text-accent1">
                  {state.fieldErrors.guests[0]}
                </p>
              )}
            </div>
            <div>
              <EventSelect
                events={events}
                value={formFields.eventId}
                onSelectChange={handleSelect}
              />
              {state.fieldErrors?.eventId?.[0] && (
                <p className="mt-2 text-accent1">
                  {state.fieldErrors.eventId[0]}
                </p>
              )}{" "}
            </div>
            <div>
              <input
                type="tel"
                name="phone"
                placeholder="Your Phone Number"
                value={formFields.phone}
                onChange={handleChange}
                className="p-4 w-full border border-text focus:outline-0 focus:border-accent1"
              />
              {state.fieldErrors?.phone?.[0] && (
                <p className="mt-2 text-accent1">
                  {state.fieldErrors.phone[0]}
                </p>
              )}
            </div>
            <div className="col-span-2">
              <textarea
                name="content"
                id="content"
                placeholder="Your Comment"
                value={formFields.content}
                onChange={handleChange}
                className="p-4 w-full border border-text focus:outline-0 focus:border-accent1 min-h-50"
              ></textarea>
              {state.fieldErrors?.content?.[0] && (
                <p className="text-accent1">{state.fieldErrors.content[0]}</p>
              )}
            </div>
            <div className="col-span-2 grid grid-cols-2 w-full items-center">
              {state?.message && (
                <p
                  className={`${state.success ? "text-text" : "text-accent1"}`}
                >
                  {state.message}
                </p>
              )}
              <Button type="submit" className="col-start-2 justify-self-end">
                {isPending ? "Reserving" : "Reserve"}
              </Button>
            </div>
          </div>
          <input
            type="hidden"
            name="date"
            value={selectedEvent ? selectedEvent.date : ""}
          />
        </form>
      </section>
    </>
  );
};

export default BookingForm;
