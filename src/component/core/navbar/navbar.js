import Link from "next/link";
import LargeNav from "./largeNav";
import TinyNavbar from "./tinyNavbar";
import logo from "@/assets/logo.png";
import Image from "next/image";

const Navbar = () => {
  return (
    <>
      <div id="nav-bar" className="sticky top-0 z-50 bg-[#4C0203] text-base text-slate-200">
        <div className="container flex justify-between items-center py-1">
          {/* logo */}
          <>
            <Link href="/" className="flex items-center">
              <Image src={logo} width={50} height={50} alt="logo image" />
              <span className="text-base capitalize sm:text-xl font-semibold relative">Prayer Time Surah and Dua</span>
            </Link>
          </>
          <LargeNav/>
          {/* tiny navbar */}
          <TinyNavbar logo={logo} />
        </div>
      </div>
    </>
  );
};

export default Navbar;
