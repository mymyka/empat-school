import Image from "next/image";
import burgerMenu from "@/../public/assets/img/burger-menu.svg";
import { Button } from "@/components/ui/button";

export const NavBar = () => {
  return (
    <div className=" flex justify-between">
      <div>
        <Image
          src={"/assets/img/logo.png"}
          alt="logo"
          className=" md:block cursor-pointer"
          width={150}
          height={100}
          priority
        />
      </div>

      <div className="hidden lg:grid gap-4 grid-rows-1 grid-flow-col">
        <Button intent="link" size="medium">
          Features
        </Button>
        <Button intent="link" size="medium">
          About
        </Button>
        <Button intent="link" size="medium">
          Contact us
        </Button>
      </div>

      <div className=" hidden lg:grid gap-4 grid-cols-2">
        <Button intent="secondary" size="medium">
          Sign In
        </Button>
        <Button intent="primary" size="medium">
          Sign Up
        </Button>
      </div>
      <div className="lg:hidden">
        <Image src={burgerMenu} alt="imag" />
      </div>
    </div>
  );
};
