/* eslint-disable react/prop-types */
import JudulText from "../ui/judulText";
import { IoIosCall } from "react-icons/io";
import { MdEmail } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";
import SubJudulText from "../ui/subJudulText";

const ContactSection = (props) => {
  const { numberPhone, email, location } = props;

  return (
    <div className="container mx-auto">
      <div className="flex flex-col gap-5 px-10 py-20 sm:my-10 sm:px-20">
        <JudulText text="Hubungi Kami"></JudulText>
        <SubJudulText text="Ada pertanyaan atau komentar? Kirimkan saja pesan kepada kami!"></SubJudulText>
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-2">
          <div className="relative flex flex-col gap-4 bg-primary rounded-2xl p-9">
            <img
              src="/logo.svg"
              alt="logo"
              className="absolute bottom-0 right-0 h-auto opacity-20 w-52"
            />
            <p className="my-3 text-3xl font-medium">Informasi Kontak</p>
            <p className="mb-2 text-base font-light text-justify">
              Jika Anda memiliki pertanyaan atau masalah, Anda dapat menghubungi
              kami dengan mengisi formulir kontak, menelepon kami, datang ke
              kantor kami, menemukan kami di jejaring sosial lainnya, atau Anda
              dapat mengirim email kepada kami di :
            </p>
            
            <div className="flex items-center justify-start gap-3">
              <IoIosCall />
              <p className="text-base font-light">{numberPhone}</p>
            </div>
            <div className="flex items-center justify-start gap-3">
              <MdEmail />
              <p className="text-base font-light">{email}</p>
            </div>
            <div className="flex items-center gap-3">
              <FaLocationDot />
              <p className="text-base font-light">{location}</p>
            </div>
          </div>
          <div className="flex flex-col gap-4 m-2">
            <form className="flex flex-col gap-2">
              <label className="text-base font-light">Nama</label>
              <input
                type="text"
                id="fname"
                name="fname"
                className="border-[1px] border-primary rounded-xl text-lg py-1 px-3 font-light mb-4"
              />
              <label className="text-base font-light">Email</label>
              <input
                type="text"
                id="email"
                name="email"
                className="border-[1px] border-primary rounded-xl text-lg py-1 px-3 font-light mb-4"
              />
              <label className="text-base font-light">Nomor Telepon</label>
              <input
                type="text"
                id="nohp"
                name="nohp"
                className="border-[1px] border-primary rounded-xl text-lg py-1 px-3 font-light mb-4"
              />
              <label className="text-base font-light">Pesan</label>
              <textarea
                rows="5"
                name="pesan"
                id="pesan"
                className="border-[1px] border-primary rounded-xl text-lg py-1 px-3 font-light mb-4"
              ></textarea>
            </form>

            <div className="flex justify-center">
              <button className="px-6 py-2 w-full font-medium duration-500 border-[1px] rounded-full bg-primary text-dark hover:border-primary hover:bg-white hover:text-primary flex justify-center items-center">
                Kirim
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;
