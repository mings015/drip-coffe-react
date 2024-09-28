/* eslint-disable react/prop-types */


const SubJudulText = ({ text = "Baca Selengkapnya" }) => {
    return (
        <p className="mb-10 text-xl font-medium text-center">
          {text}
        </p>
    );
}

export default SubJudulText;
