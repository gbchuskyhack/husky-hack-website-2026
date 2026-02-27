"use client";

import { useState } from "react";
import logo from "../assets/logo.svg";
import Image from "next/image";
import Link from "next/link";
import { DiscordIcon, EmailIcon, InstagramIcon, LinkedInIcon } from "./icons"

export default function NavBar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 backdrop-blur-lg border-white/20">
      <div className="bg-[#08182D] h-20 px-[5vw] text-white">
        <div className="grid grid-cols-[1fr_auto_1fr] h-full items-center">

          {/* Left Section */}
          <a href="../" className="flex items-center gap-[0.5vw] w-fit">
            <Image src={logo} alt="Logo" width={50} height={50} />
          </a>

          {/* Centre Section*/}
          <div className="hidden md:flex items-center gap-[clamp(1vw,5vw,4vw)] font-[Instrument Sans]">
            <Link href="#About-Us" className="hover:text-[#FED571] transition">About</Link>
            <Link href="#Schedule" className="hover:text-[#FED571] transition">Schedule</Link>
            <Link href="#Sponsors" className="hover:text-[#FED571] transition">Sponsors</Link>
            <Link href="#FAQ" className="hover:text-[#FED571] transition">FAQ</Link>
          </div>

          {/* Right Section */}
          <div className="hidden md:flex items-center justify-end gap-6">
            <Link href={process.env.NEXT_PUBLIC_DISCORD_INVITE_URL} >
              <DiscordIcon className="hover:text-[#FED571] transition" size={24} />
            </Link>
            <Link href={"mailto:info.huskyhack@gmail.com"} >
              <EmailIcon className="hover:text-[#FED571] transition" size={24} />
            </Link>
            <Link href={"https://www.instagram.com/husky.hack"} >
              <InstagramIcon className="hover:text-[#FED571] transition" size={24} />
            </Link>
            <Link href={"https://www.linkedin.com/company/husky-hack"}>
              <LinkedInIcon className="hover:text-[#FED571] transition" size={24} />
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden col-start-3 justify-self-end relative w-8 h-8 flex flex-col items-center justify-center group"
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
      {
        open && (
          <div className="md:hidden bg-[#08182D] ease-in-out">
            <div className="flex flex-col items-start gap-6 py-6 px-8 text-white">
              <a href="#About-Us" onClick={() => setOpen(false)}>About</a>
              <a href="#Schedule" onClick={() => setOpen(false)}>Schedule</a>
              <a href="#Sponsors" onClick={() => setOpen(false)}>Sponsors</a>
              <a href="#FAQ" onClick={() => setOpen(false)}>FAQ</a>

              <hr className="w-full border-white/40" />

              <div className="flex items-center gap-6">
                <a href={process.env.NEXT_PUBLIC_DISCORD_INVITE_URL}>
                  <DiscordIcon className="hover:text-[#FED571] transition" size={24} />
                </a>
                <a href={"mailto:info.huskyhack@gmail.com"}>
                  <EmailIcon className="hover:text-[#FED571] transition" size={24} />
                </a>
                <a href={"https://www.instagram.com/husky.hack"}>
                  <InstagramIcon className="hover:text-[#FED571] transition" size={24} />
                </a>
                <a href={"https://www.linkedin.com/company/husky-hack"}>
                  <LinkedInIcon className="hover:text-[#FED571] transition" size={24} />
                </a>
              </div>
            </div>
          </div>
        )
      }
    </nav >
  );
}
