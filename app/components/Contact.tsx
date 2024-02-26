import { Button } from '@nextui-org/react';
import React from 'react';


function Contact() {
  return ( 
    <div id='contact'>
    <div className="max-w-screen-xl mx-auto container ">
      {/* Contact Heading */}
      <div className="mb-10">
        <h2 className="text-3xl  mb-4">
        Contact<span className="text-primary"> Us</span>
        </h2>
        <p className="text-gray-400">
          Let us know about your project.
        </p>
      </div>
      {/* Contact Form */}
      <div className="grid grid-cols-1 md:grid-cols-12">
        <div className="md:col-span-4 p-10">
          <p className="mt-4 text-sm leading-7 font-regular uppercase">
            Contact
          </p>
          <h3 className="text-3xl sm:text-4xl leading-normal font-extrabold tracking-tight">
            Get In <span className="text-primary">Touch</span>
          </h3>
          <p className="mt-4 leading-7 ">
            Feel free to reach out to us for any inquiries or questions you may have. Our team is here to help you with anything you need. We value your feedback and look forward to hearing from you!
          </p>
          <div className="flex items-center mt-5">
            <span className="text-sm">House #14, Street #12, </span>
          </div>
          <div className="flex items-center mt-5">
            <span className="text-sm">+14376025401</span>
          </div>
          <div className="flex items-center mt-5">
            <span className="text-sm">24/7</span>
          </div>
        </div>
        <form className="md:col-span-8 p-10">
          <div className="flex flex-wrap -mx-3 mb-6">
            <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
              <label className="block uppercase tracking-wide text-xs font-bold mb-2" htmlFor="grid-first-name">
                First Name
              </label>
              <input className="appearance-none bg-transparent border-b w-full mr-3 p-4 leading-tight focus:outline-none" type="text" placeholder="Jane" aria-label="Full name" />
            </div>
            <div className="w-full md:w-1/2 px-3">
              <label className="block uppercase tracking-wide text-xs font-bold mb-2" htmlFor="grid-last-name">
                Last Name
              </label>
              <input className="appearance-none bg-transparent border-b border-indigo-500 w-full mr-3 p-4 leading-tight focus:outline-none" type="text" placeholder="Doe" aria-label="Full name" />
            </div>
          </div>
          <div className="flex flex-wrap -mx-3 mb-6">
            <div className="w-full px-3">
              <label className="block uppercase tracking-wide text-xs font-bold mb-2" htmlFor="grid-email">
                Email Address
              </label>
              <input className="appearance-none bg-transparent border-b border-indigo-500 w-full mr-3 p-4 leading-tight focus:outline-none" type="email" placeholder="jane@exp.com" aria-label="Email address" />
            </div>
          </div>
          <div className="flex flex-wrap -mx-3 mb-6">
            <div className="w-full px-3">
              <label className="block uppercase tracking-wide text-xs font-bold mb-2" htmlFor="grid-message">
                Your Message
              </label>
              <textarea className="appearance-none bg-transparent border-b border-indigo-500 w-full mr-3 p-4 leading-tight focus:outline-none" placeholder="Your message here..." aria-label="Your message"></textarea>
            </div>
          </div>
          <div className="flex justify-between w-full px-3">
            <div className="md:flex md:items-center">
              <label className="block text-gray-500 font-bold">
                <input className="mr-2 leading-tight" type="checkbox" />
                <span className="text-sm">
                  Send me your newsletter!
                </span>
              </label>
            </div>
            <Button color="primary" variant="solid">
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
