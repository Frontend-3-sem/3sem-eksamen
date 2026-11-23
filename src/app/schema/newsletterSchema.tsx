import * as z from "zod";
export const Email = z.object({
  email: z
    .string()
    .includes("@", "Please enter a valid email")
    .trim()
    .min(1, "Input cannot be empty"),
});

export const initialEmail = {
  email: "",
};
