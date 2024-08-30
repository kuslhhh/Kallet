import { Box, WalletIcon } from "lucide-react";
import React from "react";
import { ModeToggle } from "./ui/theme-button";
import { Separator } from "./ui/separator";

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center py-4">
      <div className="flex items-center gap-2">
      <WalletIcon className="w-8 h-8" />
        <div className="flex flex-col gap-4">
          <span className="text-[#b71c1c] tracking-tighter text-3xl font-extrabold text-primary flex gap-2 items-center">
            Kallet{" "}
              {/* <span className="text-white rounded-full text-base bg-primary/10 border border-primary/50 px-2">
                β
              </span> */}
          </span>
        </div>
      </div>
      <ModeToggle />
    </nav>
  );
};

export default Navbar;