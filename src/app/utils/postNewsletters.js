"use server";
import * as z from "zod";
import { Email } from "../schema/newsletterSchema";
const postNewsletters = async (previousState, formData) => {
  try {
    const emailI = Email.parse({
      email: formData.get("email"),
    });
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/newsletters`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(emailI),
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
      console.log("API-svar:", response.status, body);
      throw new Error(
        `Response status !!!!!!!!!!!!!!!!!!!: ${response.status}`,
      );
    }
    console.log(`Response status: ${response.status}`);
    return {
      success: true,
      message: "Your email is now subscribed. Welcome to the club!",
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
export default postNewsletters;
