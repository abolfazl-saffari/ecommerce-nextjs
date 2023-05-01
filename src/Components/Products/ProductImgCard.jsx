const ProductImgCard = ({ image }) => {
  return (
    <div className="w-full h-[30rem] flex justify-center items-center rounded-md border border-gray-300">
      <img
        className="w-fit h-full object-contain"
        src={image ? image[0] : ""}
      />
    </div>
  );
};

export default ProductImgCard;
