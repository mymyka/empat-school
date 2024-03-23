import { Button } from "@/components/ui/button";
import Image from "next/image";
import { MdEmail, MdPhone, MdHome } from "react-icons/md";

const ContactPage = () => {
  return (
    <div className="flex flex-col content-center items-center px-8">
      <h1>Contact Page</h1>
      <Image
        src={"/assets/img/map.png"}
        alt="logo"
        className="cursor-pointer py-8"
        width={500}
        height={100}
        priority
      />
      <div className="flex flex-wrap justify-center gap-4">
        <Button intent="outlined" size="medium">
          <div className="flex items-center">
            <MdEmail />
            <span className="pl-1">mykytakasianenko@gmail.com</span>
          </div>
        </Button>
        <Button intent="outlined" size="medium">
          <div className="flex items-center">
            <MdPhone />
            <span className="pl-1">+380688019247</span>
          </div>
        </Button>
        <Button intent="outlined" size="medium">
          <div className="flex items-center">
            <MdHome />
            <span className="pl-1">Kyiv Ukraine</span>
          </div>
        </Button>
      </div>
    </div>
  );
};

export default ContactPage;
