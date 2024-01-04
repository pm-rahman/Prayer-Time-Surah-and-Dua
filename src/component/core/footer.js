import Image from "next/image";
import React from "react";
import phone from "@/assets/icons/phone.png";
import whatsApp from "@/assets/icons/whats-app.png";
import email from "@/assets/icons/email.png";

const Footer = () => {
  return (
    <div className="container mt-auto py-6 2xl:px-8 border-t-2 border-[#4C0203]">
      {/* footer top */}
      <div className="flex justify-between items-center">
        <h4 className="text-lg font-semibold">namaz time schedule logo</h4>
        <h5 className="font-semibold">সম্পাদক: বাহাউদ্দিন পলোয়ান</h5>
      </div>
      {/* footer bottom */}
      <div className="mt-2 grid grid-cols-4 md:grid-cols-6 lg:grid-cols-9 justify-around items-center">
        <p className="text-center col-span-4 md:col-span-6 lg:col-span-3 mt-3">জাহানাবাদ, সদর লক্ষীপূর ৩৭০০</p>
        <p className="mt-2 md:mt-0 flex gap-1 col-span-2 items-center">
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
