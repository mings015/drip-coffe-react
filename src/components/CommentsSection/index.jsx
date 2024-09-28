/* eslint-disable react/prop-types */
import JudulText from "../ui/judulText";

import CommentsItem from "../CommentsItem";
import SubJudulText from "../ui/subJudulText";

const CommentsSection = (props) => {
  const { commentsItem } = props;
  return (
    <div>
      <section className="relative bg-gradient-to-r from-[#87710F]/10 to-[#FFFFFF] bg-cover flex flex-col gap-5 px-10 py-20 sm:my-10 sm:px-20 rounded-tl-[150px] md:rounded-tl-[200px] rounded-br-[200px] ">
        <div className="flex flex-col mx-auto">
          <div className="flex flex-col gap-9">
            <img
              src="/undraw_having_fun.svg"
              alt="alt"
              className="absolute bottom-0 right-0 h-auto opacity-10 w-[500px] rounded-br-[200px]"
            />

            <JudulText text={"Apa yang Mereka Katakan"}></JudulText>

            <SubJudulText text="Our Successful Collaboration"></SubJudulText>
          </div>
          
          <div className="container mx-auto">
          <div className="relative flex items-center">
            <div className="relative flex max-w-[100vw] overflow-hidden py-5">
              <div className="gap-10 flex animate-marquee [--duration:30s] hover:[animation-play-state:paused]">
                {commentsItem.map((item, index) => (
                  <CommentsItem key={index} item={item} />
                ))}
              </div>
            </div>
          </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CommentsSection;
