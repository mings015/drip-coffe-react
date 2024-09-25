import {
  Button,
  Navbar,
  NavbarBrand,
  NavbarCollapse,
  NavbarLink,
  NavbarToggle,
} from "flowbite-react";

const Header = () => {
  return (
    <div className="md:border-b-[0.1px] md:border-b-primary sticky top-0">
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
            <div className="flex flex-col md:flex-row md:items-center md:space-x-4 md:gap-3">
              <NavbarLink
                href="#"
                active
                className="md:text-primary text-white bg-primary dark:text-white"
              >
                Home
              </NavbarLink>
              <NavbarLink href="#" className="md:hover:text-primary">
                Cerita Kami
              </NavbarLink>
              <NavbarLink href="#" className="md:hover:text-primary">
                Menu
              </NavbarLink>
              <NavbarLink href="#" className="md:hover:text-primary">
                Kontak
              </NavbarLink>
              <Button className="border-[1px] rounded-full bg-white text-dark border-primary hover:bg-primary focus:ring-0 enabled:hover:bg-primary hover:text-white">
                Download App
              </Button>
            </div>
          </NavbarCollapse>
        </Navbar>
      </div>
    </div>
  );
};

export default Header;
