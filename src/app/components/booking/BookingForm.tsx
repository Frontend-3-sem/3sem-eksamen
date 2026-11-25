"use client";
// Utils
import postContact from "@/app/utils/postContact";
import { initialContactForm } from "@/app/schema/contactSchema";

// Next
import { useActionState } from "react";
import { useState, useEffect } from "react";
import { FaAngleDown } from "react-icons/fa6";

// Components
import Button from "../general/Button";
import EventSelect from "./EventSelect";

const BookingForm = () => {
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
        <h1 className="py-16 w-2/3">Book a Table</h1>
        <form className="w-2/3" action={postContactAction}>
          <div className="grid grid-cols-2 w-full gap-3">
            <div>
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formFields.name}
                onChange={handleClick}
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
                onChange={handleClick}
                className="p-4 w-full border border-text focus:outline-0 focus:border-accent1"
              />
              {state.fieldErrors?.email?.[0] && (
                <p className="mt-2 text-accent1">
                  {state.fieldErrors.email[0]}
                </p>
              )}{" "}
            </div>
            <div>
              <input
                type="number"
                name="tbNumber"
                placeholder="Table Number"
                value={formFields.tbNumber}
                onChange={handleClick}
                className="p-4 w-full border border-text focus:outline-0 focus:border-accent1"
              />
              {state.fieldErrors?.tbNumber?.[0] && (
                <p className="mt-2 text-accent1">
                  {state.fieldErrors.tbNumber[0]}
                </p>
              )}{" "}
            </div>
            <div>
              <input
                type="number"
                name="guests"
                placeholder="Number of Guests"
                value={formFields.guests}
                onChange={handleClick}
                className="p-4 w-full border border-text focus:outline-0 focus:border-accent1"
              />
              {state.fieldErrors?.guests?.[0] && (
                <p className="mt-2 text-accent1">
                  {state.fieldErrors.guests[0]}
                </p>
              )}{" "}
            </div>

            <EventSelect />
            {state.fieldErrors?.event?.[0] && (
              <p className="mt-2 text-accent1">{state.fieldErrors.event[0]}</p>
            )}
            <input
              type="tel"
              name="tel"
              placeholder="Your Phone Number"
              value={formFields.tel}
              onChange={handleClick}
              className="p-4 w-full border border-text focus:outline-0 focus:border-accent1"
            />
            {state.fieldErrors?.tel?.[0] && (
              <p className="mt-2 text-accent1">{state.fieldErrors.tel[0]}</p>
            )}
            <textarea
              name="comment"
              id="comment"
              placeholder="Your Comment"
              value={formFields.comment}
              onChange={handleClick}
              className="p-4 w-full border border-text focus:outline-0 focus:border-accent1 min-h-50 col-span-2"
            ></textarea>
            {state.fieldErrors?.comment?.[0] && (
              <p className="text-accent1">{state.fieldErrors.comment[0]}</p>
            )}
            <div className="grid grid-cols-2 w-full items-center">
              {state?.message && (
                <p
                  className={`${state.success ? "text-text" : "text-accent1"}`}
                >
                  {state.message}
                </p>
              )}
            </div>
            <Button type="submit" className="col-start-2 justify-self-end">
              {isPending ? "Reserving" : "Reserve"}
            </Button>
          </div>
        </form>
      </section>
    </>
  );
};

export default BookingForm;
