import MenuLink from "./MenuLink";

import { MENU_LINKS } from "@/lib/constants";
import { MenuSquareIcon } from "lucide-react";
import Logo from "../reusables/Logo";

export default function Header() {
  return (
    <>
      <header className="h-16 pSm py-2 md:py-3 border-b border-primary bg-light fixed top-0 left-0 z-50 w-full flexBetween">
        <Logo />

        {/* Desktop Blocks */}
        <div className="w-72 hidden md:flexBetween">
          {MENU_LINKS.map((item) => (
            <MenuLink key={item.url} label={item.label} url={item.url} />
          ))}
        </div>

        {/* Mobile Blocks */}
        <figure className="md:hidden flexBetween gap-2">
          <MenuSquareIcon className="text-primary" size={28} />
        </figure>
      </header>
      <div className="h-16 w-full" />
    </>
  );
}
