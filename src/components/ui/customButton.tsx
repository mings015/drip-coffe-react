import React from 'react';
import { IoIosArrowForward } from 'react-icons/io';

const CustomButton = ({ text = "Baca Selengkapnya", href = "#" }) => {
  return (
    <div className="flex justify-center">
      <a href={href}>
        <button className="px-6 py-3 mx-4 font-medium duration-500 border-[1px] rounded-full bg-primary text-white hover:border-primary hover:bg-white hover:text-primary flex justify-center items-center">
          {text}
          <IoIosArrowForward
            className="pl-2 w-7"
            name="chevron-forward-outline"
          />
        </button>
      </a>
    </div>
  );
};

export default CustomButton;