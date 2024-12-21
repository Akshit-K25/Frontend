import React from "react";

const Footer = () => {
  return (
    <div>
      <footer className="relative pt-11 bg-black border-t-[10px] border-[#dd3b07]">
        <div className="relative mx-0 px-3 pt-4 lg:px-9 border-t-2 border-[#f3f3f31f]">
          <div className="grid gap-10 row-gap-6 mb-8 sm:grid-cols-2 lg:grid-cols-4">
            <div className="sm:col-span-2">
              <a href="#" className="mt-10 mb-10 inline-flex items-center">
                <img
                  src="/VIT-AP-logo.png"
                  alt="logo"
                  className="w-24 h-8"
                />
              </a>
              <div className="mt-1 lg:max-w-xl">
                <p className="text-sm text-[#ced4da] font-semibold">
                  VIT-AP University (VIT-AP), also known as Vellore Institute
                  of Technology, Andhra Pradesh or VIT University, Andhra
                  Pradesh, is a private research university located in Inavolu,
                  Amaravati, the capital of Andhra Pradesh, India. The university
                  was established in 2017 by the Vellore Institute of Technology
                  through the Andhra Pradesh Private Universities (Establishment
                  and Regulation) Act, 2016.
                </p>
              </div>
            </div>

            <div className="flex flex-col gap-2 text-sm">
              <div className="relative inline-block text-base font-bold tracking-wider text-white uppercase line-strike">
                Quick Access
              </div>
              <a
                href="/pos"
                className="hover:text-white duration-300 transition-colors text-[#FFFFFF99]"
              >
                Internal POS
              </a>
              <a
                href="/all-events"
                className="hover:text-white duration-300 transition-colors text-[#FFFFFF99]"
              >
                All Events
              </a>
              <a
                href="/gym"
                className="hover:text-white duration-300 transition-colors text-[#FFFFFF99]"
              >
                Gym
              </a>
              <a
                href="/guest-house"
                className="hover:text-white duration-300 transition-colors text-[#FFFFFF99]"
              >
                Guest House
              </a>
            </div>

            <div className="flex flex-col gap-2 text-sm text-[#FFFFFF99]">
              <div className="relative inline-block text-base font-bold tracking-wider text-white uppercase line-strike">
                Resources
              </div>
              <a
                href="/privacy-policy"
                className="hover:text-white duration-300 transition-colors text-[#FFFFFF99]"
              >
                Privacy Policy
              </a>
              <a
                href="/terms-service"
                className="hover:text-white duration-300 transition-colors text-[#FFFFFF99]"
              >
                Terms of Service
              </a>
            </div>
          </div>
          <div className="flex flex-col-reverse justify-between pt-5 pb-10 lg:flex-row">
            <p className="text-sm text-white"></p>
            <ul className="flex flex-col mb-3 space-y-2 lg:mb-0 sm:space-y-0 sm:space-x-5 sm:flex-row">
              <li>
                <a
                  href="#"
                  className="text-sm text-white transition-colors duration-300 hover:text-deep-purple-accent-400"
                >
                  {/* Link */}
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-sm text-white transition-colors duration-300 hover:text-deep-purple-accent-400"
                >
                  {/* Link */}
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-sm text-white transition-colors duration-300 hover:text-deep-purple-accent-400"
                >
                  {/* Link */}
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="w-full relative bg-[#1b1a1a] py-4 lg:col-span-12">
          <p className="px-4 text-sm tracking-wider text-center text-white font-extralight">
            Copyright © {new Date().getFullYear()} Software Development Cell, VIT-AP University, Andhra Pradesh-522241
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Footer;