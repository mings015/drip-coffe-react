/* eslint-disable react/prop-types */
import { Blockquote } from "flowbite-react";
import CustomButton from "../ui/customButton.jsx";
import JudulText from "../ui/judulText.jsx";

const StorySection = (props) => {
    const { storyItemHead , storyItemText} = props;
  return (
    <div>
      <div className="bg-[url('/Group21.svg')] bg-cover">
        <div className="container mx-auto">
          <div className="flex flex-col px-10 py-20 text-center gap-9">
            <JudulText text={"Certia Kami"}></JudulText>
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
