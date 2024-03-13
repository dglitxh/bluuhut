import React, { useState, ChangeEvent, FormEvent } from 'react';
import { Button } from '@nextui-org/react';

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  message: string;
  subscribe: boolean;
}

function Contact(): JSX.Element {
  const [formData, setFormData] = useState<FormData>({
    firstName: '',
    lastName: '',
    email: '',
    message: '',
    subscribe: false
  });

  const handleInputChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target;
    const checked = type === 'checkbox' ? (e.target as HTMLInputElement).checked : undefined;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value
    });
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(formData);
  };

  return ( 
    <div id='contact'>
      <div className="max-w-screen-xl mx-auto container">
        {/* Contact Heading */}
        
        <div className="grid grid-cols-1 md:grid-cols-12">
          <div className="md:col-span-4 p-10">
          
            <h3 className="text-3xl sm:text-4xl leading-normal font-extrabold tracking-tight">
              Get In <span className="text-primary">Touch</span>
            </h3>
            <p className="mt-4 leading-7">
              Feel free to reach out to us for any inquiries or questions you may have. Our team is here to help you with anything you need. We value your feedback and look forward to hearing from you!
            </p>
            <div className="flex items-center mt-5">
              <span className="text-sm"></span>
            </div>
            <div className="flex items-center mt-5">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="w-4 h-4 ml-1">
                <path d="M164.9 24.6c-7.7-18.6-28-28.5-47.4-23.2l-88 24C12.1 30.2 0 46 0 64C0 311.4 200.6 512 448 512c18 0 33.8-12.1 38.6-29.5l24-88c5.3-19.4-4.6-39.7-23.2-47.4l-96-40c-16.3-6.8-35.2-2.1-46.3 11.6L304.7 368C234.3 334.7 177.3 277.7 144 207.3L193.3 167c13.7-11.2 18.4-30 11.6-46.3l-40-96z"/>
              </svg>
              <span className="text-sm">+14376025401</span>
            </div>
            <div className="flex items-center mt-5">
              <span className="text-sm"></span>
            </div>
          </div>
          <form className="md:col-span-8 p-10" onSubmit={handleSubmit}>
            <div className="flex flex-wrap -mx-3 mb-6">
              <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                <label className="block uppercase tracking-wide text-xs font-bold mb-2" htmlFor="grid-first-name">
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
                <label className="block uppercase tracking-wide text-xs font-bold mb-2" htmlFor="grid-last-name">
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
                <label className="block uppercase tracking-wide text-xs font-bold mb-2" htmlFor="grid-email">
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
                <label className="block uppercase tracking-wide text-xs font-bold mb-2" htmlFor="grid-message">
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
                  <span className="text-sm">
                    Send me your newsletter!
                  </span>
                </label>
              </div>
              <Button color="primary" variant="solid" type="submit">
                Send
              </Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;
