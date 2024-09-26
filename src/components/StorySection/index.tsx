import { Blockquote } from "flowbite-react";
import React from "react";
import { IoIosArrowForward } from "react-icons/io";
import CustomButton from "../ui/customButton";

const StorySection = (props) => {
    const { storyItemHead , storyItemText} = props;
  return (
    <div>
      <div className="bg-[url('/Group21.svg')] bg-cover">
        <div className="container mx-auto">
          <div className="flex flex-col px-10 py-20 text-center gap-9">
            <p className="text-4xl font-extrabold tracking-[.25em] sm:text-5xl hover:text-primary duration-1000">
              Cerita Kami
            </p>
            <Blockquote >
              {storyItemHead }
            </Blockquote>
            <p className="text-lg font-light line-clamp-5">
              {storyItemText}
            </p>
            <CustomButton/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StorySection;
