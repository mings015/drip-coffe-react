/* eslint-disable react/prop-types */
import { Card } from "flowbite-react";

const MenuItem = (props) => {
    const { item } = props;
    return (
        <div className="flex justify-center">
            <Card
            className="max-w-sm"
            imgSrc={item.img}
            horizontal
          >
            <h5 className="text-2xl font-bold tracking-tight text-dark dark:text-white">
              {item.menu}
            </h5>
            <p className=" text-gray-700 dark:text-gray-400">
            {item.deskripsi}
            </p>
            <p className=" text-primary">{item.price}</p>
          </Card>

        </div>
    );
}

export default MenuItem;
