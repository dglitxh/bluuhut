import React from "react";
import { InstagramIcon, TwitterIcon, PhoneIcon, FacebookIcon } from "./icons";

const Footer: React.FC = () => {
  return (
    <footer className="rounded-lg shadow m-4">
      <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
        <div className="sm:flex sm:items-center sm:justify-between">
          <a
            href="#"
            className="flex items-center mb-4 sm:mb-0  space-x-3 rtl:space-x-reverse"
          >
            <span className="self-center text-2xl font-semibold whitespace-nowrap  dark:text-white">
              Bluehut Solutions
            </span>
          </a>
          <div className="flex   ">
            {/* Social Icons */}

            <a
              href="https://www.instagram.com/bluehut.inc/"
              target="_blank"
              className="text-gray-500 hover:text-primary-500 mx-2"
            >
              <InstagramIcon />
            </a>
            <a
              href="https://web.facebook.com/profile.php?id=61557453218712"
              target="_blank"
              className="text-gray-500 hover:text-primary-500 mx-2"
            >
              <FacebookIcon />
            </a>
            <a href="#" className="text-gray-500 hover:text-primary-500 mx-2">
              <TwitterIcon />
            </a>
          </div>
          <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
            <li>
              <a href="#" className="hover:underline me-4 md:me-6">
                Home
              </a>
            </li>
            <li>
              <a href="#about" className="hover:underline me-4 md:me-6">
                About
              </a>
            </li>
            <li>
              <a href="#pricing" className="hover:underline me-4 md:me-6">
                Pricing
              </a>
            </li>
            <li>
              <a href="#services" className="hover:underline me-4 md:me-6">
                Services
              </a>
            </li>
            <li>
              <a href="#contact" className="hover:underline">
                Contact
              </a>
            </li>
          </ul>
        </div>

        <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">
          © 2024{" "}
          <a href="#" className="hover:underline">
            BlueHut
          </a>
          . All Rights Reserved.
        </span>
      </div>
    </footer>
  );
};

export default Footer;
