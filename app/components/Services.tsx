import React from "react";
import { serviceData } from "../utils/data";

export default function Services() {
  return (
    <div id="services">
      <section className="container px-6 py-6 mx-auto max-w-screen-xl">

        <h1 className="text-2xl font-semibold  pl-2 capitalize lg:text-2xl">
          explore our <br></br> awesome <span className="text-primary">Services</span>


        <p className="mt-4 xl:mt-6 ">
          Discover our line of cutting-edge, eco-conscious products and services
          that combine innovation and environmental responsibility. From
          solar-powered solutions to biodegradable materials, each of our
          offerings reflects our dedication to reducing our carbon footprint
          while delivering exceptional performance.
        </p>

        <div className="grid grid-cols-1 gap-8 mt-8 xl:mt-12 xl:gap-12 md:grid-cols-2 xl:grid-cols-3">
          {serviceData.map((service, index) => (
            <div
              key={index}
              className="p-8 space-y-3 border-2 border-primary dark:border-primary rounded-xl"
            >
              <span className="inline-block text-secondary dark:text-secondary">
                {service.icon}
              </span>

              <h1 className="text-2xl font-semibold  capitalize dark:text-white">
                {service.title}
              </h1>

              <p className=" ">{service.description}</p>

              <a
                href="#"
                className="inline-flex p-2 text-white capitalize transition-colors duration-200 transform bg-secondary rounded-full dark:bg-secondary dark:text-white hover:underline  "
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </a>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
