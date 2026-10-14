"use client";

import { useEffect, useRef, useState, type FormEvent } from "react";

import { buttonClasses } from "@/components/ui/ButtonLink";
import { Icon } from "@/components/ui/Icon";
import type { Dictionary } from "@/lib/i18n";
import {
  LIMITS,
  OTHER_SERVICE,
  TIME_WINDOWS,
  maxDateIso,
  todayIso,
  validateLead,
  type LeadField,
} from "@/lib/lead";
import { fillTemplate, whatsappHref } from "@/lib/links";
import type { Locale } from "@/site.config";

type QuoteFormProps = {
  text: Dictionary["quote"];
  services: { id: string; name: string }[];
  defaultService?: string;
  locale: Locale;
  privacyHref: string;
  phoneDisplay: string;
  telHref: string;
};

type Status = "idle" | "sending" | "done" | "failed";

const FIELD_ORDER: LeadField[] = ["name", "phone", "service", "date", "consent"];

export function QuoteForm({
  text,
  services,
  defaultService = "",
  locale,
  privacyHref,
  phoneDisplay,
  telHref,
}: QuoteFormProps) {
  const formRef = useRef<HTMLFormElement>(null);
  const [errors, setErrors] = useState<LeadField[]>([]);
  const [status, setStatus] = useState<Status>("idle");
  const [whatsappUrl, setWhatsappUrl] = useState("");
  const dateRef = useRef<HTMLInputElement>(null);

  // Los límites de fecha se ponen en el navegador, con la fecha local del visitante,
  // para no depender de la fecha en que se generó la página.
  useEffect(() => {
    if (!dateRef.current) return;
    dateRef.current.min = todayIso();
    dateRef.current.max = maxDateIso();
  }, [status]);

  const hasError = (field: LeadField) => errors.includes(field);
  const serviceIds = services.map((s) => s.id);
  const { fields } = text;

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (status === "sending") return;

    const form = new FormData(event.currentTarget);
    const { data, errors: found } = validateLead(
      {
        name: form.get("name"),
        phone: form.get("phone"),
        service: form.get("service"),
        date: form.get("date"),
        time: form.get("time"),
        consent: form.get("consent") === "on",
        website: form.get("website"),
        locale,
      },
      serviceIds,
    );

    setErrors(found);
    if (found.length > 0) {
      const first = FIELD_ORDER.find((f) => found.includes(f));
      formRef.current?.querySelector<HTMLElement>(`[name="${first}"]`)?.focus();
      return;
    }

    const serviceName =
      data.service === OTHER_SERVICE
        ? fields.other
        : (services.find((s) => s.id === data.service)?.name ?? "");
    const message = data.date
      ? fillTemplate(text.whatsappBooking, {
          name: data.name,
          service: serviceName,
          phone: data.phone,
          date: new Date(`${data.date}T12:00:00`).toLocaleDateString(locale, {
            weekday: "long",
            day: "numeric",
            month: "long",
          }),
          time: fields.timeOptions[data.time],
        })
      : fillTemplate(text.whatsappQuote, { name: data.name, service: serviceName, phone: data.phone });

    // WhatsApp se abre en el mismo clic para que el navegador no lo bloquee.
    const url = whatsappHref(message);
    setWhatsappUrl(url);
    const opened = window.open(url, "_blank");
    if (opened) opened.opener = null;

    setStatus("sending");
    try {
      const response = await fetch("/api/contacto", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      setStatus(response.ok || opened ? "done" : "failed");
    } catch {
      // Si el registro falla pero WhatsApp sí se abrió, la solicitud llega por WhatsApp.
      setStatus(opened ? "done" : "failed");
    }
  }

  const cardClass = "shadow-float rounded-[var(--radius-card)] bg-white p-6 sm:p-7";

  if (status === "done" || status === "failed") {
    const failed = status === "failed";
    return (
      <div role="status" className={cardClass}>
        <span
          className={`grid size-12 place-items-center rounded-full ${failed ? "bg-sky-soft text-brand" : "bg-whatsapp text-white"}`}
        >
          <Icon name={failed ? "chat" : "check"} size={26} strokeWidth={2.4} />
        </span>
        <p className="mt-4 text-lg font-semibold">{failed ? text.errors.server : text.success}</p>
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className={buttonClasses("whatsapp", "lg", "mt-6 w-full")}
        >
          <Icon name="whatsapp" size={20} />
          {text.successCta}
        </a>
      </div>
    );
  }

  const inputClass = (field?: LeadField) =>
    `mt-1.5 block min-h-12 w-full rounded-xl border bg-white px-4 text-base text-ink placeholder:text-ink-soft/60 focus:border-brand focus:outline-none focus-visible:outline-3 focus-visible:outline-offset-1 focus-visible:outline-brand ${
      field && hasError(field) ? "border-red-600" : "border-line"
    }`;

  const describedBy = (field: LeadField) => (hasError(field) ? `${field}-error` : undefined);

  const errorText = (field: LeadField) =>
    hasError(field) ? (
      <p id={`${field}-error`} className="mt-1.5 text-sm font-semibold text-red-700">
        {text.errors[field]}
      </p>
    ) : null;

  return (
    <form ref={formRef} onSubmit={handleSubmit} noValidate className={cardClass}>
      <div className="grid gap-4">
        <div>
          <label htmlFor="quote-name" className="text-sm font-bold">
            {fields.name}
          </label>
          <input
            id="quote-name"
            name="name"
            type="text"
            autoComplete="name"
            placeholder={fields.namePlaceholder}
            maxLength={LIMITS.name}
            required
            aria-invalid={hasError("name")}
            aria-describedby={describedBy("name")}
            className={inputClass("name")}
          />
          {errorText("name")}
        </div>

        <div>
          <label htmlFor="quote-phone" className="text-sm font-bold">
            {fields.phone}
          </label>
          <input
            id="quote-phone"
            name="phone"
            type="tel"
            inputMode="tel"
            autoComplete="tel"
            placeholder={fields.phonePlaceholder}
            maxLength={LIMITS.phone}
            required
            aria-invalid={hasError("phone")}
            aria-describedby={describedBy("phone")}
            className={inputClass("phone")}
          />
          {errorText("phone")}
        </div>

        <div>
          <label htmlFor="quote-service" className="text-sm font-bold">
            {fields.service}
          </label>
          <select
            id="quote-service"
            name="service"
            required
            defaultValue={defaultService || services[0]?.id}
            aria-invalid={hasError("service")}
            aria-describedby={describedBy("service")}
            className={inputClass("service")}
          >
            {services.map((service) => (
              <option key={service.id} value={service.id}>
                {service.name}
              </option>
            ))}
            <option value={OTHER_SERVICE}>{fields.other}</option>
          </select>
          {errorText("service")}
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          <div>
            <label htmlFor="quote-date" className="text-sm font-bold">
              {fields.date}
            </label>
            <input
              id="quote-date"
              name="date"
              type="date"
              ref={dateRef}
              aria-invalid={hasError("date")}
              aria-describedby={describedBy("date")}
              className={inputClass("date")}
            />
            {errorText("date")}
          </div>
          <div>
            <label htmlFor="quote-time" className="text-sm font-bold">
              {fields.time}
            </label>
            <select id="quote-time" name="time" defaultValue="any" className={inputClass()}>
              {TIME_WINDOWS.map((window) => (
                <option key={window} value={window}>
                  {fields.timeOptions[window]}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Campo trampa contra bots: oculto para las personas y para lectores de pantalla. */}
        <div className="hidden" aria-hidden="true">
          <label htmlFor="quote-website">{fields.website}</label>
          <input id="quote-website" name="website" type="text" tabIndex={-1} autoComplete="off" />
        </div>

        <div>
          <label className="text-ink-soft flex items-start gap-3 text-sm">
            <input
              name="consent"
              type="checkbox"
              required
              aria-invalid={hasError("consent")}
              aria-describedby={describedBy("consent")}
              className="accent-brand mt-0.5 size-5 shrink-0"
            />
            <span>
              {fields.consent}{" "}
              <a href={privacyHref} className="text-brand font-semibold underline underline-offset-2">
                {fields.consentLink}
              </a>
              .
            </span>
          </label>
          {errorText("consent")}
        </div>

        <button
          type="submit"
          disabled={status === "sending"}
          className={buttonClasses("whatsapp", "lg", "w-full disabled:opacity-70")}
        >
          <Icon name="whatsapp" size={20} />
          {status === "sending" ? text.sending : text.submit}
        </button>

        <p className="text-ink-soft text-center text-sm">
          {text.orCall}{" "}
          <a href={telHref} className="text-brand font-bold whitespace-nowrap">
            {phoneDisplay}
          </a>
        </p>
      </div>
    </form>
  );
}
