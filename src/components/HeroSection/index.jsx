/* eslint-disable react/prop-types */
import { Carousel } from "flowbite-react";
import HeroItem from "../HeroItem";

const HeroSection = (props) => {
    const { heroItem } = props;
  return (
    <div className="container mx-auto">
      <div className="h-[650px]">
        <Carousel leftControl="<" rightControl=">" className="text-primary p-6">
          {heroItem.map ((item, index) => {
            return (
                <HeroItem key={index} item={item}/>
            )
          })}
        </Carousel>
      </div>
    </div>
  );
};

export default HeroSection;
