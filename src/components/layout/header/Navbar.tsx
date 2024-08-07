import Image from "next/image";
import logofa from "/public/img/logofa.png";
import Link from "next/link";
import { CircleUserRound } from "lucide-react";

import { Avatar, AvatarFallback, AvatarImage } from "@radix-ui/react-avatar";
export const Navbar = () => {
  return (
    <div className="bg-slate-900 py-3 px-5 flex items-center justify-between">
      <Link href="/">
        <Image
          src={logofa}
          priority
          alt="logo fa"
          width={40}
          className="rounded-lg"
        />
      </Link>

      <Avatar>
        <AvatarImage
          src="https://i.pravatar.cc/300"
          alt="avatar"
          width={40}
          className="rounded-full"
        />
        <AvatarFallback>
          <CircleUserRound className="size-8" />
        </AvatarFallback>
      </Avatar>
    </div>
  );
};
