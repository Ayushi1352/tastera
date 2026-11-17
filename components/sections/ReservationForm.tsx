"use client";

import { useState, type ReactNode } from "react";
import type { ContactFormData, FormField } from "@/types/templates.types";
import { useDummySubmit } from "@/components/ui/useDummySubmit";
import { Icon } from "@/components/ui/Icon";
import { FormSuccess, Spinner } from "@/components/ui/FormSuccess";
import { buttonArrow, buttonClass } from "@/components/ui/buttonStyles";

/** White rounded fields with an icon on the left */
const field =
  "h-[3.25rem] w-full appearance-none rounded-[0.625rem] border-0 bg-[var(--color-white)] pl-12 pr-4 font-accent text-base text-[var(--color-text-dark)] outline-none ring-2 ring-transparent transition-shadow placeholder:text-[var(--color-text-dark)] focus:ring-[var(--color-primary)] lg:h-[3.8125rem] lg:pl-[4.25rem] lg:pr-[1.5rem] lg:text-[1.2721rem]";
const iconClass = "pointer-events-none absolute left-4 top-1/2 size-5 -translate-y-1/2 text-[var(--color-text-dark)] lg:left-[1.375rem] lg:size-[1.5625rem]";
const chevron = "pointer-events-none absolute right-4 top-1/2 size-5 -translate-y-1/2 text-[var(--color-text-dark)] lg:right-[1.375rem] lg:size-[1.375rem]";

const Field = ({ icon, select = false, children }: { icon: string; select?: boolean; children: ReactNode }) => (
  <div className="relative">
    {children}
    <Icon name={icon} className={iconClass} />
    {select && <Icon name="LuChevronDown" className={chevron} strokeWidth={2.4} />}
  </div>
);

/** List that shows its placeholder (in the same colour as the other fields) until something is picked */
const Select = ({ name, data, options }: { name: string; data: FormField; options: string[] }) => {
  const [value, setValue] = useState("");
  return (
    <Field icon={data.icon} select>
      <select name={name} required value={value} onChange={(event) => setValue(event.target.value)} aria-label={data.placeholder} className={`${field} cursor-pointer pr-12`}>
        <option value="" disabled>
          {data.placeholder}
        </option>
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </Field>
  );
};

/** Shows "Select Date" like the other fields; becomes a date picker (from today on) when used */
const DateField = ({ data }: { data: FormField }) => {
  const [type, setType] = useState<"text" | "date">("text");

  return (
    <Field icon={data.icon} select>
      <input
        name="date"
        type={type}
        required
        placeholder={data.placeholder}
        aria-label={data.placeholder}
        onFocus={(event) => {
          setType("date");
          const input = event.currentTarget;
          // bookings start today (local date)
          const now = new Date();
          input.min = new Date(now.getTime() - now.getTimezoneOffset() * 60000).toISOString().slice(0, 10);
          // open the calendar right away where the browser allows it
          requestAnimationFrame(() => {
            try {
              input.showPicker();
            } catch {}
          });
        }}
        onBlur={(event) => {
          if (!event.currentTarget.value) setType("text");
        }}
        className={`${field} cursor-pointer pr-12 [&::-webkit-calendar-picker-indicator]:opacity-0`}
      />
    </Field>
  );
};

/** Booking form with a dummy submit: sending state, then a thank-you message in place of the button */
export const ReservationForm = ({ data }: { data?: ContactFormData }) => {
  const submit = useDummySubmit();
  if (!data) return null;
  const { fields } = data;

  // remounting the form (via key) after each send clears every field, including the controlled lists
  return (
    <form
      key={submit.round}
      onSubmit={submit.onSubmit}
      onInput={submit.onInput}
      aria-busy={submit.sending}
      className="mt-7 grid gap-4 sm:grid-cols-2 lg:mt-[2.5625rem] lg:w-[45.6875rem] lg:gap-x-[1.4375rem] lg:gap-y-[1.5625rem]"
    >
      <Field icon={fields.name.icon}>
        <input name="name" required placeholder={fields.name.placeholder} aria-label={fields.name.placeholder} autoComplete="name" className={field} />
      </Field>
      <Field icon={fields.phone.icon}>
        <input name="phone" type="tel" required placeholder={fields.phone.placeholder} aria-label={fields.phone.placeholder} autoComplete="tel" className={field} />
      </Field>
      <Field icon={fields.email.icon}>
        <input name="email" type="email" required placeholder={fields.email.placeholder} aria-label={fields.email.placeholder} autoComplete="email" className={field} />
      </Field>
      <DateField data={fields.date} />
      <Select name="time" data={fields.time} options={data.timeOptions} />
      <Select name="guests" data={fields.guests} options={data.guestOptions} />

      {/* the thank-you message takes the place of the button, inside the form, so it never covers the fields */}
      {submit.showMessage ? (
        <FormSuccess
          name={submit.name}
          title={data.successTitle}
          message={data.success}
          leaving={submit.status === "leaving"}
          visibleFor={submit.visibleFor}
          onClose={submit.dismiss}
          closeLabel={data.closeLabel}
          className="sm:col-span-2 lg:mt-[1.4375rem]"
        />
      ) : (
        <button
          type="submit"
          disabled={submit.sending}
          className={`${buttonClass} mt-3 h-14 w-full gap-3 rounded-[0.625rem] bg-[var(--color-button)] font-heading text-lg font-bold shadow-[0_0.75rem_1.5rem_-0.75rem_var(--color-shadow-button)] disabled:cursor-wait disabled:opacity-80 sm:col-span-2 sm:mx-auto sm:w-80 lg:ml-[10.5625rem] lg:mt-[1.4375rem] lg:h-[4.375rem] lg:w-[23.3125rem] lg:gap-[1.1875rem] lg:text-[1.5384rem]`}
        >
          {submit.sending ? (
            <>
              <Spinner className="size-5" />
              {data.sending}
            </>
          ) : (
            <>
              {data.button}
              <Icon name="LuArrowRight" className={`${buttonArrow} size-6 lg:size-[2.25rem]`} strokeWidth={2} />
            </>
          )}
        </button>
      )}
    </form>
  );
};
