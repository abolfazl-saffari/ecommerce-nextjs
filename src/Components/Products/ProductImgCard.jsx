import Image from "next/image";

const ProductImgCard = ({ image }) => {
  const src = image ? image[0] : "";

  return (
    <div className="w-full h-[30rem] flex justify-center items-center rounded-md border border-gray-300">
      <Image
        src={src}
        alt={src}
        width={100}
        height={200}
        loader={() => src}
        className="w-fit h-full object-contain"
      />
    </div>
  );
};

export default ProductImgCard;
