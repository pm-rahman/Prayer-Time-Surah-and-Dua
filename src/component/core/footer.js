import Image from "next/image";
import React from "react";
import phone from "@/assets/icons/phone.png";
import whatsApp from "@/assets/icons/whats-app.png";
import email from "@/assets/icons/email.png";
import Link from "next/link";
import logo from "@/assets/logo.png";

const Footer = () => {
  return (
    <div className="container mt-8 py-4 sm:py-10 2xl:px-8 border-t-4 border-slate-600 bg-[rgba(10,10,10,.1)]">
      {/* footer top */}
      <div className="flex flex-col sm:flex-row sm:justify-between items-center">
        <Link href="/" className="flex items-center">
          <Image 
          src={logo} width={50} height={50} alt="logo image" />
          <span className="text-xl font-semibold">Prayer Time Surah and Dua</span>
        </Link>
        <h5 className="text-sm sm:text-base font-semibold">সম্পাদক: বাহাউদ্দিন</h5>
      </div>
      {/* footer bottom */}
      <div className="lg:mt-4 sm:mt-1 flex flex-col justify-center sm:grid grid-cols-4 md:grid-cols-6 lg:grid-cols-9 sm:justify-around items-center">
        <p className="sm:text-center col-span-4 sm:col-span-6 lg:col-span-3 sm:mt-0 md:mb-2 lg:mb-0">
          জাহানাবাদ, সদর লক্ষীপূর ৩৭০০
        </p>
        <p className="sm:mt-2 md:mt-0 flex gap-1 col-span-2 items-center">
          <Image src={phone} alt="phone logo" height={18} width={18} />
          <a href="tel:+8801602819774">+৮৮০ ১৬০২৮১৯৭৭৪</a>
        </p>
        <p className="flex gap-1 col-span-2 items-center">
          <Image src={whatsApp} alt="whats app logo" height={18} width={18} />
          +৮৮০ ১৬০২৮১৯৭৭৪
        </p>
        <p className="flex gap-1 col-span-2 items-center">
          <Image src={email} alt="email logo" height={18} width={18} />
          hmbahauddin14@gmail.com
        </p>
      </div>
    </div>
  );
};

export default Footer;
