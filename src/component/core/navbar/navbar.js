import Link from "next/link";
import LargeNav from "./largeNav";
import TinyNavbar from "./tinyNavbar";
import logo from "@/assets/logo.png";
import Image from "next/image";

const Navbar = () => {
  const user = false;
  return (
    <>
      <div className="bg-[#4C0203] text-base text-slate-200">
        <div className="container flex justify-between py-1">
          {/* logo */}
          <>
            <Link href="/" className="flex items-center">
              <Image src={logo} width={50} height={50} alt="logo image" />
              <span className="text-xl">WEBSITE NAME</span>
            </Link>
          </>

          {/*  large navbar */}
          <LargeNav user={user} />

          {/* tiny navbar */}
          <TinyNavbar user={user} logo={logo} />
        </div>
      </div>
    </>
  );
};

export default Navbar;
