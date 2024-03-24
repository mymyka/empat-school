import Image from "next/image";
import { AiFillInstagram, AiFillTwitterSquare } from "react-icons/ai";
import { FaSquareXTwitter } from "react-icons/fa6";
import { BsLinkedin } from "react-icons/bs";
import { FaFacebookSquare, FaYoutube } from "react-icons/fa";

export const Footer = () => {
  return (
    <>
      <footer className="flex flex-col lg:flex-row lg:justify-center py-20">
        <div className="">
          <div className="flex justify-center">
            <Image
              src={"/assets/img/logo.png"}
              alt="logo"
              className="cursor-pointer"
              width={150}
              height={100}
              priority
            />
          </div>
          <div className="grid gap-1 grid-rows-1 grid-flow-col justify-center p-2">
            <AiFillInstagram className=" fill-nutural-700 size-5" />
            <FaSquareXTwitter className=" fill-nutural-700 size-5" />
            <BsLinkedin className=" fill-nutural-700 size-5" />
            <FaFacebookSquare className=" fill-nutural-700 size-5" />
            <FaYoutube className=" fill-nutural-700 size-5" />
          </div>
          <div className="p-2 flex justify-center">
            <p>English</p>
          </div>
        </div>
        <div className="pt-8 lg:ml-10 lg:pt-0 grid gap-5 grid-rows-2 grid-flow-col justify-around lg:justify-center lg:gap-10  lg:grid-rows-1">
          <div>
            <p className="font-bold">Product</p>
            <ul className="list-none">
              <li> Features </li>
              <li> Integrations </li>
              <li> Pricing </li>
              <li>Changelog </li>
              <li> Docs</li>
              <li>Linear </li>
              <li> Method </li>
              <li> Download</li>
            </ul>
          </div>
          <div>
            <p className="font-bold">Company</p>
            <ul className="list-none">
              <li>About us</li>
              <li>Blog</li>
              <li>Careers</li>
              <li>Customers</li>
              <li>Brand</li>
            </ul>
          </div>
          <div>
            <p className="font-bold">Resources</p>
            <ul className="list-none">
              <li>Startup Program</li>
              <li>Community</li>
              <li>Contact</li>
              <li>DPA</li>
              <li>Privacy Policy</li>
              <li>Terms of service</li>
              <li>Report a vulnerability</li>
            </ul>
          </div>
          <div>
            <p className="font-bold">Developers</p>
            <ul className="list-none">
              <li>API</li>
              <li>Status</li>
              <li>GitHub</li>
              <li>README</li>
            </ul>
          </div>
        </div>
      </footer>
    </>
  );
};
