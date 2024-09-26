/* eslint-disable react/jsx-key */
/* eslint-disable react/prop-types */
import MenuItem from "../MenuItem";
import CustomButton from "../ui/customButton";

const MenuSection = (props) => {
    const { menuItem } = props;
  return (
    <div className="container mx-auto">
      <div className="flex flex-col gap-5 px-10 py-20 sm:my-10 sm:px-20">
        <p className="text-4xl font-extrabold tracking-widest sm:tracking-[.25em] sm:text-5xl hover:text-primary duration-1000 text-center">
          Menu Kami
        </p>
        <p className="mb-10 text-xl font-medium text-center">
          Selamat datang di Menu Kami, tempat di mana rasa dan kreativitas
          bertemu dalam setiap cangkir.
        </p>

        <div className="grid gap-16 justify-center items-center grid-cols-1 lg:grid-cols-2">
          
          {menuItem.map ((item) => {
            return(
                <MenuItem item={item} />
            )
          })}
          
        </div>

        <div className="m-10">
        <CustomButton text="Lihat Menu Lengkap"/>

        </div>
      </div>
    </div>
  );
};

export default MenuSection;
