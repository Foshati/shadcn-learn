import Image from "next/image";
import logofa from "/public/img/logofa.png";
import Link from "next/link";
import { CircleUserRound, User } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@radix-ui/react-avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

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

      <DropdownMenu>
        <DropdownMenuTrigger className="focus:outline-none">
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
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuLabel>My Account</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuItem>
            <Link href="/profile">Profile</Link>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <Link href="/auth">Log out</Link>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};
