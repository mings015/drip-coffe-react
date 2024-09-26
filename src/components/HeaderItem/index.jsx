/* eslint-disable react/prop-types */
import { NavbarLink } from "flowbite-react";

const HeaderItem = (props) => {
    const { item } = props;
    return (
        <div className="flex flex-col md:flex-row md:items-center md:space-x-4 md:gap-3">
              <NavbarLink href="#" className="md:hover:text-primary">
                {item}
              </NavbarLink>
            </div>
    );
}

export default HeaderItem;
