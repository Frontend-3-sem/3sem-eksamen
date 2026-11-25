"use server";
import * as z from "zod";
import { Contact } from "../schema/contactSchema";
const postContact = async (previousState, formData) => {
  try {
    const contactData = Contact.parse({
      name: formData.get("name"),
      email: formData.get("email"),
      content: formData.get("content"),
      date: new Date().toISOString(),
    });
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/contact_messages`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(contactData),
      },
    );
    if (!response.ok) {
      if (response.status === 409) {
        return {
          success: false,
          message: "Email already subscribed",
        };
      }
      const body = await response.text();
      console.log("API-svar:");
      throw new Error(`Response status !!!!!!!!!!!!!!!!!!!: ${body}`);
    }
    console.log(`Response status: ${response.status}`);
    return {
      success: true,
      message: "Your message has been sent.",
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
      message: error.message,
    };
  }
};
export default postContact;
