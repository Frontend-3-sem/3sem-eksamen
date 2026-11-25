"use server";
import * as z from "zod";
import { Booking } from "../schema/bookingSchema";
const postBooking = async (previousState, formData) => {
  try {
    const bookingData = Booking.parse({
      name: formData.get("name"),
      email: formData.get("email"),
      table: formData.get("table"),
      guests: formData.get("guests"),
      eventId: formData.get("eventId"),
      phone: formData.get("phone"),
      content: formData.get("content"),
      date: formData.get("date"),
    });
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/reservations`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(bookingData),
      },
    );
    if (!response.ok) {
      if (response.status === 409) {
        return {
          success: false,
          message: `Table ${bookingData.table} is already reserved for this event. Please choose another table.`,
        };
      }
      if (response.status === 400) {
        return {
          success: false,
          message: `Table ${bookingData.table} is not big enough for this many guests. Please choose another table.`,
        };
      }
      const body = await response.text();
      console.log("Booking failed:", response.status, body);
      return {
        success: false,
        message: "We couldn't complete your reservation. Please try again.",
      };
    }
    console.log(`Response status: ${response.status}`);
    return {
      success: true,
      message: "Your reservation has been confirmed.",
    };
  } catch (error) {
    if (error instanceof z.ZodError) {
      return {
        success: false,
        message: "",
        fieldErrors: z.flattenError(error).fieldErrors,
      };
    }

    console.log(error.message);
    return {
      success: false,
      message: "We couldn't complete your reservation. Please try again.",
    };
  }
};
export default postBooking;
