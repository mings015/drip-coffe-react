/* eslint-disable react/prop-types */

const HeroItem = (props) => {
    const { item } = props;
    return (
        <div>
            <div className="container px-5 mx-auto md:px-5 xl:mx-10 2xl:mx-auto">
            <div className="flex flex-col md:flex-row md:my-10 md:items-center ">
              <div className="flex flex-col gap-3 py-5 text-center md:text-left md:justify-center md:h-1/2">
                <h1 className="text-4xl font-bold duration-1000 hover:text-primary lg:text-6xl text-dark">
                  {item.head}
                </h1>
                <h2 className="text-lg py-5 lg:text-xl duration-1000 hover:text-primary text-dark">
                  {item.deskripsi}
                </h2>
              </div>
              <img
                className="h-96 xl:h-full"
                src={item.image}
                alt={item.alt}
              />
            </div>
          </div>
        </div>
    );
}

export default HeroItem;
