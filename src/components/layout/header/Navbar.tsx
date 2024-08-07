import Image from "next/image";
import logofa from "/public/img/logofa.png";
import Link from "next/link";
export const Navbar = () => {
  return (
    <div className="bg-slate-900 py-3 px-5 flex justify-between">
      <Link href="/">
        <Image
          src={logofa}
          priority
          alt="logo fa"
          width={40}
          className="rounded-lg"
        />
      </Link>
      
    </div>
  );
};
