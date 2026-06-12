import React, { useState, ChangeEvent, FormEvent, useRef } from "react";
import { Spinner } from "@nextui-org/react";
import { PhoneIcon, MailIcon } from "./icons";
import MyModal from "./MyModal";
import { httpReq } from "../utils/helpers";

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  message: string;
  subscribe: boolean;
}

const inputClass =
  "w-full border border-line bg-surface px-4 py-3.5 text-sm text-ink placeholder:text-muted/70 transition-colors focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent";
const labelClass =
  "mb-2 block text-[0.6875rem] font-semibold uppercase tracking-[0.16em] text-muted";

function Contact(): JSX.Element {
  const [formData, setFormData] = useState<FormData>({
    firstName: "",
    lastName: "",
    email: "",
    message: "",
    subscribe: false,
  });
  const [loading, setLoading] = useState(false);
  const [visible, setVisible] = useState(false);
  const [color, setColor] = useState("");
  const [info, setInfo] = useState({});
  const handler = () => setVisible(true);
  const close = () => setVisible(false);

  const handleInputChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value, type } = e.target;
    const checked =
      type === "checkbox" ? (e.target as HTMLInputElement).checked : undefined;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const form: any = useRef();

  const sendEmail = async (e: FormEvent<HTMLElement>) => {
    e.preventDefault();
    setLoading(true);
    try {
      let status = await httpReq(
        "POST",
        "../api/sendmail",
        JSON.stringify(formData)
      );
      if (status <= 201) console.log("message sent");
      else throw new Error("message not sent");
      setLoading(false);
      setInfo({
        heading: "Message sent",
        text: "Thanks for reaching out — we’ll be in touch shortly.",
      });
      setColor("primary");
      handler();
    } catch (error: any) {
      setColor("warning");
      setLoading(false);
      setInfo({
        heading: "Something went wrong",
        text: "There was an error sending your message. Please try again.",
      });

      handler();
      console.log(error.text, "failed to send message");
    }
    setLoading(false);
  };

  const handleSubmit = (e: FormEvent<HTMLElement>) => {
    e.preventDefault();
    const re =
      /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if (!formData["email"].match(re)) {
      setColor("warning");
      setInfo({
        heading: "Check your email",
        text: "Please enter a valid email address and try again.",
      });
      handler();
      return;
    } else sendEmail(e);
  };

  return (
    <section id="contact" className="border-b border-line bg-ink py-20 text-paper sm:py-28">
      <div className="mx-auto max-w-screen-xl px-6">
        <div className="grid grid-cols-1 gap-14 lg:grid-cols-12 lg:gap-20">
          {/* Left: invitation + direct contact */}
          <div className="lg:col-span-5">
            <div className="flex items-center gap-3">
              <span className="index-num text-[0.6875rem] font-semibold tracking-[0.15em] text-white/50">
                07 / 07
              </span>
              <span className="text-[0.6875rem] font-semibold uppercase tracking-[0.22em] text-accent-foreground">
                <span className="text-[#7fa3eb]">Get in touch</span>
              </span>
            </div>
            <h2 className="mt-5 max-w-md font-serif text-3xl font-semibold leading-[1.1] tracking-tighter sm:text-4xl">
              Let’s scope your next project.
            </h2>
            <p className="mt-5 max-w-md text-base leading-relaxed text-white/70">
              Tell us what you’re planning. Our team responds to every enquiry —
              typically within one business day.
            </p>

            <dl className="mt-10 space-y-5 border-t border-white/15 pt-8">
              <div className="flex items-center gap-3 text-white/85">
                <PhoneIcon />
                <a href="tel:+14346025401" className="text-sm hover:text-white">
                  +1 434 602 5401
                </a>
              </div>
              <div className="flex items-center gap-3 text-white/85">
                <MailIcon />
                <a
                  href="mailto:bluehutsolutions@gmail.com"
                  className="text-sm hover:text-white"
                >
                  bluehutsolutions@gmail.com
                </a>
              </div>
            </dl>
          </div>

          {/* Right: form on light surface */}
          <div className="lg:col-span-7">
            <form
              className="bg-paper p-7 text-ink sm:p-9"
              onSubmit={handleSubmit}
              ref={form}
            >
              <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                <div>
                  <label className={labelClass} htmlFor="firstName">
                    First name
                  </label>
                  <input
                    id="firstName"
                    className={inputClass}
                    type="text"
                    placeholder="Jane"
                    aria-label="First name"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleInputChange}
                  />
                </div>
                <div>
                  <label className={labelClass} htmlFor="lastName">
                    Last name
                  </label>
                  <input
                    id="lastName"
                    className={inputClass}
                    type="text"
                    placeholder="Doe"
                    aria-label="Last name"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleInputChange}
                  />
                </div>
              </div>

              <div className="mt-5">
                <label className={labelClass} htmlFor="email">
                  Email address
                </label>
                <input
                  id="email"
                  className={inputClass}
                  type="email"
                  placeholder="jane@example.com"
                  aria-label="Email address"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                />
              </div>

              <div className="mt-5">
                <label className={labelClass} htmlFor="message">
                  Project details
                </label>
                <textarea
                  id="message"
                  rows={4}
                  className={`${inputClass} resize-none`}
                  placeholder="Tell us about your site, scope, and timeline…"
                  aria-label="Your message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                />
              </div>

              <div className="mt-6 flex flex-col gap-5 border-t border-line pt-6 sm:flex-row sm:items-center sm:justify-between">
                <label className="flex items-center gap-2.5 text-sm text-ink-soft">
                  <input
                    className="h-4 w-4 accent-accent"
                    type="checkbox"
                    name="subscribe"
                    checked={formData.subscribe}
                    onChange={handleInputChange}
                  />
                  Send me occasional updates
                </label>

                <button
                  type="submit"
                  disabled={loading}
                  className="inline-flex items-center justify-center gap-2 bg-ink px-7 py-3.5 text-xs font-semibold uppercase tracking-[0.16em] text-paper transition-colors hover:bg-accent disabled:opacity-70"
                >
                  {loading ? (
                    <Spinner color="default" size="sm" />
                  ) : (
                    <>
                      Send message <span aria-hidden>→</span>
                    </>
                  )}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>

      <MyModal onClose={close} isOpen={visible} info={info} color={color} />
    </section>
  );
}

export default Contact;
