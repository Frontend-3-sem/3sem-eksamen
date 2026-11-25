import * as z from "zod";
export const Booking = z.object({
  name: z.string().nonempty("Input cannot be empty").trim(),
  email: z
    .string()
    .includes("@", "Please enter a valid email")
    .trim()
    .min(1, "Input cannot be empty"),
  table: z.coerce.number().min(1, "Please choose a table number"),
  guests: z.coerce.number().min(1, "Please enter number of guests"),
  eventId: z.coerce.number().min(1, "Please choose an Event"),
  phone: z
    .string()
    .trim()
    .regex(/^\+?[0-9 ]{8,}$/, "Please enter a valid phone number"),
  content: z.string().trim(),
  date: z.iso.datetime({ offset: true }),
});

export const initialBookingForm = {
  name: "",
  email: "",
  table: "",
  guests: "",
  eventId: "",
  phone: "",
  content: "",
};
