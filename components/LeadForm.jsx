"use client";

import { useState } from "react";
import { useLanguage } from "@/context/LanguageContext";
import { buildQuoteUrl, LEAD_FORM_ENABLED } from "@/lib/business";
import { servicesList } from "@/lib/translations";

const SIZE_KEYS = ["size.studio", "size.two", "size.three", "size.commercial", "size.unsure"];

const CONTACT_PREFS = [["whatsapp", "pref.whatsapp"], ["call", "pref.call"], ["email", "pref.email"]];
const BEST_TIMES = [["any", "time.any"], ["morning", "time.morning"], ["afternoon", "time.afternoon"], ["evening", "time.evening"]];
const PROPERTIES = [["house", "prop.house"], ["apartment", "prop.apartment"], ["office", "prop.office"], ["store", "prop.store"], ["other", "prop.other"]];
const FREQUENCIES = [["once", "freq.once"], ["weekly", "freq.weekly"], ["biweekly", "freq.biweekly"], ["monthly", "freq.monthly"]];
const PETS = [["", "source.none"], ["no", "pets.no"], ["yes", "pets.yes"]];
const SOURCES = [
  ["", "source.none"],
  ["instagram", "source.instagram"],
  ["referral", "source.referral"],
  ["google", "source.google"],
  ["other", "source.other"],
];
const BATHROOMS = ["1", "2", "3", "4+"];

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
const ZIP_RE = /^\d{5}(-\d{4})?$/;

export default function LeadForm() {
  const { t, lang } = useLanguage();
  const services = servicesList[lang];

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [zip, setZip] = useState("");
  const [contactPref, setContactPref] = useState("whatsapp");
  const [bestTime, setBestTime] = useState("any");
  const [serviceIdx, setServiceIdx] = useState(0);
  const [property, setProperty] = useState("house");
  const [sizeIdx, setSizeIdx] = useState(0);
  const [bathrooms, setBathrooms] = useState("");
  const [frequency, setFrequency] = useState("once");
  const [date, setDate] = useState("");
  const [pets, setPets] = useState("");
  const [notes, setNotes] = useState("");
  const [source, setSource] = useState("");
  const [consent, setConsent] = useState(false);
  const [website, setWebsite] = useState("");
  const [status, setStatus] = useState("idle");

  const service = services[serviceIdx].title;
  const size = t(SIZE_KEYS[sizeIdx]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (status === "sending") return;

    const validName = firstName.trim().length >= 2;
    const validPhone = phone.replace(/\D/g, "").length >= 7;
    if (!validName || !validPhone || !consent) {
      setStatus("invalid");
      return;
    }

    const validEmail = email.trim() === "" || EMAIL_RE.test(email.trim());
    const validZip = zip.trim() === "" || ZIP_RE.test(zip.trim());
    const needsEmail = contactPref === "email" && email.trim() === "";
    if (!validEmail || !validZip || needsEmail) {
      setStatus("invalid_optional");
      return;
    }

    // Vista previa: se valida y se muestra el aviso, pero no se envía nada.
    if (!LEAD_FORM_ENABLED) {
      setStatus("preview");
      return;
    }

    // ATENCIÓN: antes de poner LEAD_FORM_ENABLED en true hay que actualizar
    // app/api/leads/route.js y docs/leads-apps-script.gs para que reciban y
    // guarden los campos nuevos de este formulario.
    setStatus("sending");
    try {
      const res = await fetch("/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: `${firstName.trim()} ${lastName.trim()}`.trim(),
          firstName: firstName.trim(),
          lastName: lastName.trim(),
          phone,
          email: email.trim(),
          address: address.trim(),
          zip: zip.trim(),
          contactPref,
          bestTime,
          service,
          property,
          size,
          bathrooms,
          frequency,
          date,
          pets,
          notes: notes.trim(),
          source,
          lang,
          consent,
          website,
        }),
      });
      if (!res.ok) throw new Error("request failed");
      setStatus("sent");
    } catch (err) {
      setStatus("error");
    }
  };

  if (status === "sent") {
    return (
      <div className="lead-card lead-sent">
        <p className="lead-thanks">{t("lead.thanks")}</p>
        <p>{t("lead.thanks_sub")}</p>
        <a href={buildQuoteUrl(lang, service, size, firstName.trim())} target="_blank" rel="noopener noreferrer" className="btn btn-primary btn-lg">{t("lead.whatsapp")}</a>
      </div>
    );
  }

  return (
    <form className="lead-card" onSubmit={handleSubmit} noValidate>
      {!LEAD_FORM_ENABLED && <p className="form-preview">{t("lead.preview_note")}</p>}

      <fieldset className="lead-group">
        <legend>{t("quote.group_you")}</legend>
        <div className="lead-grid">
          <label>
            {t("lead.name")}
            <input type="text" value={firstName} onChange={(e) => setFirstName(e.target.value)} autoComplete="given-name" maxLength={60} />
          </label>
          <label>
            {t("lead.last_name")}
            <input type="text" value={lastName} onChange={(e) => setLastName(e.target.value)} autoComplete="family-name" maxLength={60} />
          </label>
          <label>
            {t("lead.phone")}
            <input type="tel" value={phone} onChange={(e) => setPhone(e.target.value)} autoComplete="tel" maxLength={30} />
          </label>
          <label>
            {t("lead.email")}
            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} autoComplete="email" maxLength={120} />
          </label>
          <label>
            {t("lead.address")}
            <input type="text" value={address} onChange={(e) => setAddress(e.target.value)} autoComplete="street-address" maxLength={120} />
          </label>
          <label>
            {t("lead.zip")}
            <input type="text" inputMode="numeric" value={zip} onChange={(e) => setZip(e.target.value)} autoComplete="postal-code" maxLength={10} />
          </label>
          <label>
            {t("lead.contact_pref")}
            <select value={contactPref} onChange={(e) => setContactPref(e.target.value)}>
              {CONTACT_PREFS.map(([value, key]) => (
                <option key={value} value={value}>{t(key)}</option>
              ))}
            </select>
          </label>
          <label>
            {t("lead.best_time")}
            <select value={bestTime} onChange={(e) => setBestTime(e.target.value)}>
              {BEST_TIMES.map(([value, key]) => (
                <option key={value} value={value}>{t(key)}</option>
              ))}
            </select>
          </label>
        </div>
      </fieldset>

      <fieldset className="lead-group">
        <legend>{t("quote.group_need")}</legend>
        <div className="lead-grid">
          <label>
            {t("hero.form_service")}
            <select value={serviceIdx} onChange={(e) => setServiceIdx(Number(e.target.value))}>
              {services.map((s, i) => (
                <option key={s.title} value={i}>{s.title}</option>
              ))}
            </select>
          </label>
          <label>
            {t("lead.property")}
            <select value={property} onChange={(e) => setProperty(e.target.value)}>
              {PROPERTIES.map(([value, key]) => (
                <option key={value} value={value}>{t(key)}</option>
              ))}
            </select>
          </label>
          <label>
            {t("hero.form_size")}
            <select value={sizeIdx} onChange={(e) => setSizeIdx(Number(e.target.value))}>
              {SIZE_KEYS.map((k, i) => (
                <option key={k} value={i}>{t(k)}</option>
              ))}
            </select>
          </label>
          <label>
            {t("lead.bathrooms")}
            <select value={bathrooms} onChange={(e) => setBathrooms(e.target.value)}>
              <option value="">{t("size.unsure")}</option>
              {BATHROOMS.map((n) => (
                <option key={n} value={n}>{n}</option>
              ))}
            </select>
          </label>
          <label>
            {t("lead.frequency")}
            <select value={frequency} onChange={(e) => setFrequency(e.target.value)}>
              {FREQUENCIES.map(([value, key]) => (
                <option key={value} value={value}>{t(key)}</option>
              ))}
            </select>
          </label>
          <label>
            {t("lead.date")}
            <input type="date" value={date} onChange={(e) => setDate(e.target.value)} />
          </label>
          <label>
            {t("lead.pets")}
            <select value={pets} onChange={(e) => setPets(e.target.value)}>
              {PETS.map(([value, key]) => (
                <option key={key} value={value}>{t(key)}</option>
              ))}
            </select>
          </label>
          <label>
            {t("lead.source")}
            <select value={source} onChange={(e) => setSource(e.target.value)}>
              {SOURCES.map(([value, key]) => (
                <option key={key} value={value}>{t(key)}</option>
              ))}
            </select>
          </label>
          <label className="full">
            {t("lead.notes")}
            <textarea value={notes} onChange={(e) => setNotes(e.target.value)} maxLength={500} rows={3} />
          </label>
        </div>
      </fieldset>

      <input type="text" name="website" value={website} onChange={(e) => setWebsite(e.target.value)} className="hp" tabIndex={-1} autoComplete="off" aria-hidden="true" />

      <label className="consent">
        <input type="checkbox" checked={consent} onChange={(e) => setConsent(e.target.checked)} />
        <span>{t("lead.consent")}</span>
      </label>

      {status === "invalid" && <p className="form-msg error">{t("lead.invalid")}</p>}
      {status === "invalid_optional" && <p className="form-msg error">{t("lead.invalid_optional")}</p>}
      {status === "error" && <p className="form-msg error">{t("lead.error")}</p>}
      {status === "preview" && <p className="form-msg info">{t("lead.preview_result")}</p>}

      <button type="submit" className="btn btn-primary btn-lg" disabled={status === "sending"}>
        {status === "sending" ? t("lead.sending") : t("hero.form_submit")}
      </button>
      <p className="form-note">{t("lead.privacy")}</p>
    </form>
  );
}