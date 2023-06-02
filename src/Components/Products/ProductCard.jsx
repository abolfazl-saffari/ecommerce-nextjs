import Link from "next/link";
import Image from "next/image";

const ProductCard = ({ id, title, price, category, subCategory, image }) => {
  const formattedPrice = new Intl.NumberFormat("en-US").format(price);
  const src = image ? image[0] : "";

  return (
    <Link
      href={`/${category}/${subCategory}/${id}`}
      className="max-w-full h-40 flex flex-row items-center border rounded-lg shadow bg-slate-800 text-white border-gray-200 hover:bg-slate-700"
    >
      <Image
        src={src}
        alt={src}
        width={100}
        height={300}
        loader={() => src}
        className="w-36 h-full rounded-sm object-fill md:object-cover md:w-48 md:h-full"
      />
      <div className="flex flex-col justify-between leading-normal p-4">
        <h5 className="block h-[3rem] text-md text-justify break-words overflow-hidden font-bold mb-2 text-white">
          {title}
        </h5>
        <p className="text-sm font-normal mb-3 text-white">
          {formattedPrice} ریال
        </p>
      </div>
    </Link>
  );
};

export default ProductCard;
