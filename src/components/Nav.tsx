"use client";

import { useState } from "react";
import logo from "../assets/logo.svg";
import Image from "next/image";

export default function NavBar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 backdrop-blur-lg border-b border-white/20">
      <div className="bg-[#08182D] h-24 px-[5vw] text-white">
        <div className="flex h-full items-center justify-between">

          {/* Left Section */}
          <a href="../" className="flex items-center gap-[0.5vw]">
            <Image src={logo} alt="Logo" width={58} height={58} />
            <p className="font-[Rethink Sans] text-[#FED571] font-bold text-3xl w-fit">
              Husky Hack
            </p>
          </a>

          {/* Centre Section (DESKTOP ONLY) */}
          <div className="hidden md:flex items-center gap-[clamp(1vw,5vw,4vw)] font-[Instrument Sans] font-semibold">
            <a href="#About-Us" className="hover:text-[#FED571] transition">About</a>
            <a href="#Schedule" className="hover:text-[#FED571] transition">Schedule</a>
            <a href="#Sponsors" className="hover:text-[#FED571] transition">Sponsors</a>
            <a href="#FAQ" className="hover:text-[#FED571] transition">FAQ</a>
          </div>

          {/* Right Section (DESKTOP ONLY) */}
          <div className="hidden md:flex items-center gap-[1vw] font-semibold">
            <a href="#Contact-Us" className="hover:text-[#FED571] transition">
              Contact
            </a>
            <a
              href="#JoinUs"
              className="px-8 py-3 bg-[#FF7703] text-black border-2 border-[#A63C06] rounded-full hover:brightness-110 transition"
            >
            <p className="">Join Us</p>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden relative w-8 h-8 flex flex-col items-center justify-center group"
          >
            <div className="relative w-6 h-5 flex flex-col justify-between">
              <span
                className={`h-[3px] w-full bg-white rounded-full transition-all duration-300 ease-in-out origin-center
                  ${open ? "rotate-45 translate-y-[8.5px]" : ""}
                `}
              />
              <span
                className={`h-[3px] w-full bg-white rounded-full transition-all duration-300 ease-in-out
                  ${open ? "opacity-0 scale-x-0" : ""}
                `}
              />
              <span
                className={`h-[3px] w-full bg-white rounded-full transition-all duration-300 ease-in-out origin-center
                  ${open ? "-rotate-45 -translate-y-[8.5px]" : ""}
                `}
              />
            </div>
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {open && (
        <div className="md:hidden bg-[#08182D] border-t border-white/20 ease-in-out">
          <div className="flex flex-col items-center gap-6 py-6 font-semibold text-white">
            <a href="#About-Us" onClick={() => setOpen(false)}>About</a>
            <a href="#Schedule" onClick={() => setOpen(false)}>Schedule</a>
            <a href="#Sponsors" onClick={() => setOpen(false)}>Sponsors</a>
            <a href="#FAQ" onClick={() => setOpen(false)}>FAQ</a>
            <a href="#Contact-Us" onClick={() => setOpen(false)}>Contact us</a>

            <a
              href="#JoinUs"
              onClick={() => setOpen(false)}
              className="px-10 py-3 bg-[#FF7703] text-black border-2 border-[#A63C06] rounded-full"
            >
              Join Us
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
