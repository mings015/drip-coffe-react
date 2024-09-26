/* eslint-disable react/jsx-key */
/* eslint-disable react/prop-types */
import {
  Button,
  Navbar,
  NavbarBrand,
  NavbarCollapse,
  NavbarToggle,
} from "flowbite-react";
import HeaderItem from "../HeaderItem";

const Header = (props) => {
  const { items } = props;
  return (
    <div className="md:border-b-[0.1px] md:border-b-primary sticky">
      <div className="container mx-auto">
        <Navbar fluid rounded>
          <NavbarBrand href="#">
            <img
              src="/logo.svg"
              className="mr-3 h-12 sm:h-12ß"
              alt="Drip Coffe"
            />
          </NavbarBrand>
          <NavbarToggle />
          <NavbarCollapse className="md:flex md:justify-center items-center">
            {items.map((item) => {
              return <HeaderItem item={item} />;
            })}
            <Button className="border-[1px] rounded-full bg-white text-dark border-primary hover:bg-primary focus:ring-0 enabled:hover:bg-primary hover:text-white">
              Download App
            </Button>
          </NavbarCollapse>
        </Navbar>
      </div>
    </div>
  );
};

export default Header;
