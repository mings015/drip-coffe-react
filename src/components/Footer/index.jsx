/* eslint-disable react/prop-types */
import {
  Footer,
  FooterCopyright,
  FooterDivider,
  FooterIcon,
  FooterLink,
  FooterLinkGroup,
  FooterTitle,
} from "flowbite-react";
import { BsFacebook, BsInstagram, BsTwitter, BsYoutube } from "react-icons/bs";
import { IoIosCall } from "react-icons/io";
import { MdEmail } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";

const FooterPage = (props) => {
    const {numberPhone, email, location} = props;
  return (
    <div className="relative bg-dark">
        <img className="absolute right-0 h-auto w-[500px] bottom-1 opacity-10" src="/logo-light.svg" alt=""></img>
      <Footer container className="container mx-auto shadow-none bg-transparent">
        <div className="w-full">
          <div className="grid w-full justify-between sm:flex sm:justify-between md:flex md:grid-cols-1">
            <div className="mr-5 mb-5">
              <img className="w-[150px]" src="/logo-light.svg" alt="drip coffe"></img>
            </div>
            <div className="flex flex-col gap-8 sm:mt-4 sm:flex-row sm:gap-6">
              <div className="max-w-64">
                <FooterTitle className="text-secondary" title="Find Us" />
                <FooterLinkGroup col>
                  <div className="flex items-center gap-2 text-secondary">
                    <IoIosCall />
                    <FooterLink href="#">{numberPhone}</FooterLink>
                  </div>
                  <div className="flex items-center gap-2 text-secondary">
                    <MdEmail />
                    <FooterLink href="#">{email}</FooterLink>
                  </div>
                  <div className="flex items-center gap-2 text-secondary">
                    <FaLocationDot className="w-6" />
                    <FooterLink href="#">{location}</FooterLink>
                  </div>
                </FooterLinkGroup>
              </div>
              <div className="max-w-32">
                <FooterTitle title="Legal" className="text-secondary" />
                <FooterLinkGroup col>
                  <FooterLink href="#" className="text-secondary">Privacy Policy</FooterLink>
                  <FooterLink href="#" className="text-secondary">Terms &amp; Conditions</FooterLink>
                </FooterLinkGroup>
              </div>
            </div>
          </div>
          <FooterDivider />
          <div className="w-full sm:flex sm:items-center sm:justify-between">
            <FooterCopyright href="#" by="Drip Coffe" year={2024} className="text-secondary"/>
            <div className="mt-4 flex space-x-6 sm:mt-0 sm:justify-center">
              <FooterIcon href="#" icon={BsInstagram} className="text-secondary"/>
              <FooterIcon href="#" icon={BsFacebook} className="text-secondary"/>
              <FooterIcon href="#" icon={BsTwitter} className="text-secondary"/>
              <FooterIcon href="#" icon={BsYoutube} className="text-secondary"/>
            </div>
          </div>
        </div>
      </Footer>
    </div>
  );
};

export default FooterPage;
