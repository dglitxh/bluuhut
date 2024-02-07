import React from 'react';
import serviceData from './ServiceData';

export default function Services() {
  return (
    <div>
      <section className="container px-6 py-6 mx-auto">
        <h1 className="text-3xl font-semibold border-l-4 pl-2 capitalize lg:text-4xl border-blue-400">
          explore our <br></br> awesome <span className="underline decoration-blue-500">Services</span>
        </h1>

        <p className="mt-4 text-gray-500 xl:mt-6 dark:text-gray-300">
          Discover our line of cutting-edge, eco-conscious products and services that combine innovation and environmental responsibility. From solar-powered solutions to biodegradable materials, each of our offerings reflects our dedication to reducing our carbon footprint while delivering exceptional performance.
        </p>

        <div className="grid grid-cols-1 gap-8 mt-8 xl:mt-12 xl:gap-12 md:grid-cols-2 xl:grid-cols-3">
          {serviceData.map((service, index) => (
            <div key={index} className="p-8 space-y-3 border-2 border-blue-400 dark:border-blue-300 rounded-xl">
              <span className="inline-block text-blue-500 dark:text-blue-400">
                {service.icon}
              </span>

              <h1 className="text-2xl font-semibold text-gray-400 capitalize dark:text-white">
                {service.title}
              </h1>

              <p className="text-gray-500 ">
                {service.description}
              </p>

              <a href="#" className="inline-flex p-2 text-blue-500 capitalize transition-colors duration-200 transform bg-blue-100 rounded-full dark:bg-blue-500 dark:text-white hover:underline hover:text-blue-600 dark:hover:text-blue-500">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </a>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
