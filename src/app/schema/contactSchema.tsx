import * as z from "zod";
export const Contact = z.object({
  name: z
    .string()
    .nonempty("Input cannot be empty")

    .trim(),
  email: z
    .string()
    .includes("@", "Please enter a valid email")
    .trim()
    .min(1, "Input cannot be empty"),
  content: z
    .string()

    .trim()
    .min(10, "Please write a descriptive message"),
  date: z.iso.datetime(),
});

export const initialContactForm = {
  name: "",
  email: "",
  content: "",
  date: "",
};
