/* eslint-disable react/prop-types */
import MenuItem from "../MenuItem";
import CustomButton from "../ui/customButton";
import JudulText from "../ui/judulText";
import SubJudulText from "../ui/subJudulText";

const MenuSection = (props) => {
    const { menuItem } = props;
  return (
    <div className="container mx-auto">
      <div className="flex flex-col gap-9 px-10 py-20 sm:my-10 sm:px-20">
        <JudulText text="Menu Kami"></JudulText>
        <SubJudulText text="Selamat datang di Menu Kami, tempat di mana rasa dan kreativitas bertemu dalam setiap cangkir."></SubJudulText>

        <div className="grid gap-16 justify-center items-center grid-cols-1 lg:grid-cols-2">
          
          {menuItem.map ((item, index) => {
            return(
                <MenuItem key={index} item={item} />
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
