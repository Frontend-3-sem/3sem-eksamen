"use client";
import postNewsletters from "@/app/utils/postNewsletters";
import { useActionState } from "react";
import { useState, useEffect } from "react";
import { initialEmail } from "@/app/schema/newsletterSchema";
import Button from "../general/Button";
const Newsletter = () => {
  const [state, postNewslettersAction, isPending] = useActionState(
    postNewsletters,
    {
      success: null,
      message: "",
    },
  );
  const [formFields, setFormFields] = useState(initialEmail);

  useEffect(() => {
    if (state.success) setFormFields(initialEmail);
  }, [state]);

  function handleClick(event) {
    const { name, value } = event.target;

    setFormFields((currentFields) => ({
      ...currentFields,
      [name]: value,
    }));
  }
  return (
    <>
      <section className="flex flex-col items-center py-16">
        <h3>Want the latest night club news</h3>
        <p>
          Subscribe to our newsletter and never miss an{" "}
          <span className="text-accent1">Event</span>
        </p>
        <form className="pt-16 " action={postNewslettersAction}>
          <div className="flex gap-8">
            <div className="border-b-2 h-12 flex items-center min-w-sm">
              <input
                type="email"
                name="email"
                placeholder="Enter Your Email"
                value={formFields.email}
                onChange={handleClick}
                className="p-2 w-full focus:p-2"
              />
            </div>
            <Button type="submit">
              {isPending ? "Subscribing" : "Subscribe"}
            </Button>
          </div>
          {state.fieldErrors?.email?.[0] && <p>{state.fieldErrors.email[0]}</p>}
          {state?.message && (
            <p
              className={`${state.success ? "text-text" : "text-accent1"} mt-6`}
            >
              {state.message}
            </p>
          )}
        </form>
      </section>
    </>
  );
};

export default Newsletter;
