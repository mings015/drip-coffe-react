/* eslint-disable react/prop-types */

const JudulText = ({ text = "Baca Selengkapnya" }) => {
  return (
    <div className="flex justify-center">
      <p className="text-4xl font-extrabold tracking-widest sm:tracking-[.25em] sm:text-5xl hover:text-primary duration-1000 text-center">
              {text}
        </p>
      
    </div>
  );
};

export default JudulText;
