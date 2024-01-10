import Link from "next/link";

const ActiveLink = ({ href, className, children }) => {
  return (
    <Link
      href={href}
      className={`${className} hover:font-semibold ease-in-out duration-500 flex items-center gap-1`}
    >
      {children}
    </Link>
  );
};

export default ActiveLink;