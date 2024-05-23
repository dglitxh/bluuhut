import React, { useState, ChangeEvent, FormEvent, useRef } from "react";
import { Button, Spinner } from "@nextui-org/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faEnvelopeSquare,
  faMailBulk,
  faMailForward,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import { faMailchimp } from "@fortawesome/free-brands-svg-icons/faMailchimp";
import emailjs from "@emailjs/browser";
import MyModal from "./MyModal";

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  message: string;
  subscribe: boolean;
}

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

  const sendEmail = (e: FormEvent<HTMLElement>) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .sendForm(
        "service_0qphaay",
        "template_b1li0gl",
        form?.current,
        "user_fFuOQJJYwhlEjAlrIakxr"
      )
      .then(
        (result: any) => {
          setLoading(false);
          setInfo({ heading: "Success", text: "Message sent succesfully" });
          setColor("success");
          handler();
          console.log(result.text, "message sent!");
        },
        (error: any) => {
          setLoading(false);
          setInfo({
            heading: "Warning",
            text: "there was an error sending message, please try again",
          });
          setColor("error");
          handler();
          console.log(error.text, "failed to send message");
        }
      );
  };

  const handleSubmit = (e: FormEvent<HTMLElement>) => {
    e.preventDefault();
    sendEmail(e)
  };

  return (
    <div id="contact">
      <div className="max-w-screen-xl mx-auto container">
        {/* Contact Heading */}

        <div className="grid grid-cols-1 md:grid-cols-12">
          <div className="md:col-span-4 p-10">
            <h3 className="text-3xl sm:text-4xl leading-normal font-extrabold tracking-tight">
              Get In <span className="text-primary">Touch</span>
            </h3>
            <p className="mt-4 leading-7">
              Feel free to reach out to us for any inquiries or questions you
              may have. Our team is here to help you with anything you need. We
              value your feedback and look forward to hearing from you!
            </p>
            <div className="flex items-center mt-5">
              <span className="text-sm"></span>
            </div>
            <div className="flex items-center mt-5">
              <FontAwesomeIcon icon={faPhone} />
              <span className="text-sm ml-2">+1 434 602 5401</span>
            </div>
            <FontAwesomeIcon icon={faEnvelope} />
              <span className='text-sm ml-2'>bluehutsolutions@gmail.com</span>
            <div className="flex items-center mt-5">
              <span className="text-sm"></span>
            </div>
          </div>
          <form
            className="md:col-span-8 p-10"
            onSubmit={handleSubmit}
            ref={form}
          >
            <div className="flex flex-wrap -mx-3 mb-6">
              <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                <label
                  className="block uppercase tracking-wide text-xs font-bold mb-2"
                  htmlFor="grid-first-name"
                >
                  First Name
                </label>
                <input
                  className="appearance-none bg-transparent border-b w-full mr-3 p-4 leading-tight focus:outline-none focus:border-primary"
                  type="text"
                  placeholder="Jane"
                  aria-label="First name"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleInputChange}
                />
              </div>
              <div className="w-full md:w-1/2 px-3">
                <label
                  className="block uppercase tracking-wide text-xs font-bold mb-2"
                  htmlFor="grid-last-name"
                >
                  Last Name
                </label>
                <input
                  className="appearance-none bg-transparent border-b w-full mr-3 p-4 leading-tight focus:outline-none focus:border-primary"
                  type="text"
                  placeholder="Doe"
                  aria-label="Last name"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleInputChange}
                />
              </div>
            </div>
            <div className="flex flex-wrap -mx-3 mb-6">
              <div className="w-full px-3">
                <label
                  className="block uppercase tracking-wide text-xs font-bold mb-2"
                  htmlFor="grid-email"
                >
                  Email Address
                </label>
                <input
                  className="appearance-none bg-transparent border-b w-full mr-3 p-4 leading-tight focus:outline-none focus:border-primary"
                  type="email"
                  placeholder="jane@exp.com"
                  aria-label="Email address"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                />
              </div>
            </div>
            <div className="flex flex-wrap -mx-3 mb-6">
              <div className="w-full px-3">
                <label
                  className="block uppercase tracking-wide text-xs font-bold mb-2"
                  htmlFor="grid-message"
                >
                  Your Message
                </label>
                <textarea
                  className="appearance-none bg-transparent border-b w-full mr-3 p-4 leading-tight focus:outline-none focus:border-primary"
                  placeholder="Your message here..."
                  aria-label="Your message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                ></textarea>
              </div>
            </div>
            <div className="flex justify-between w-full px-3">
              <div className="md:flex md:items-center">
                <label className="block text-gray-500 font-bold">
                  <input
                    className="mr-2 leading-tight"
                    type="checkbox"
                    name="subscribe"
                    checked={formData.subscribe}
                    onChange={handleInputChange}
                  />
                  <span className="text-sm">Send me your newsletter!</span>
                </label>
              </div>
              <Button color="primary" variant="solid" type="submit" onSubmit={(e) => handleSubmit(e) }>
                {loading ? <Spinner color={"default"} size="sm" /> : "Submit"}
              </Button>
            </div>
          </form>
        </div>
      </div>
      <MyModal onClose={close} isOpen={visible} msg={info}/>
    </div>
  );
}

export default Contact;
