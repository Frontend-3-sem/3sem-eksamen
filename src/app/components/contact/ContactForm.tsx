"use client";
import postContact from "@/app/utils/postContact";
import { useActionState } from "react";
import { useState, useEffect } from "react";
import { initialContactForm } from "@/app/schema/contactSchema";
import Button from "../general/Button";
const ContactForm = () => {
  const [state, postContactAction, isPending] = useActionState(postContact, {
    success: null,
    message: "",
  });
  const [formFields, setFormFields] = useState(initialContactForm);

  useEffect(() => {
    if (state.success) setFormFields(initialContactForm);
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
      <section className="flex flex-col items-center pb-16">
        <form className="flex flex-col gap-4 w-2/3" action={postContactAction}>
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formFields.name}
            onChange={handleClick}
            className="p-4 w-full border-2 border-text focus:outline-0 focus:border-accent1"
          />
          {state.fieldErrors?.name?.[0] && (
            <p className="text-accent1">{state.fieldErrors.name[0]}</p>
          )}
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formFields.email}
            onChange={handleClick}
            className="p-4 w-full border-2 border-text focus:outline-0 focus:border-accent1"
          />
          {state.fieldErrors?.email?.[0] && (
            <p className="text-accent1">{state.fieldErrors.email[0]}</p>
          )}

          <textarea
            name="content"
            id="content"
            placeholder="Your Message"
            value={formFields.content}
            onChange={handleClick}
            className="p-4 w-full border-2 border-text focus:outline-0 focus:border-accent1 min-h-50"
          ></textarea>
          {state.fieldErrors?.content?.[0] && (
            <p className="text-accent1">{state.fieldErrors.content[0]}</p>
          )}
          <div className="grid grid-cols-2 w-full items-center">
            {state?.message && (
              <p className={`${state.success ? "text-text" : "text-accent1"}`}>
                {state.message}
              </p>
            )}
            <Button type="submit" className="col-start-2 justify-self-end">
              {isPending ? "Sending" : "Send"}
            </Button>
          </div>
        </form>
      </section>
    </>
  );
};

export default ContactForm;
