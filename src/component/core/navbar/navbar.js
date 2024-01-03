import Link from "next/link";
import LargeNav from "./largeNav";
import TinyNavbar from "./tinyNavbar";

const Navbar = () => {
  const user = true;
  return (
    <>
      <div className="bg-[#4C0203] text-slate-200">
        <div className="container flex justify-between py-2 md:py-3">
          {/* logo */}
          <div>
            <Link href="/">Logo</Link>
          </div>

          {/*  large navbar */}
          <LargeNav user={user} />

          {/* tiny navbar */}
          <TinyNavbar user={user} />
        </div>
      </div>
    </>
  );
};

export default Navbar;
