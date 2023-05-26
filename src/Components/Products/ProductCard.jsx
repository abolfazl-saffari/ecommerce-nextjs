import Link from "next/link";

const ProductCard = ({ id, title, price, category, subCategory, image }) => {
  const formattedPrice = new Intl.NumberFormat("en-US").format(price);

  return (
    <Link
      href={`/${category}/${subCategory}/${id}`}
      className="max-w-full h-40 flex flex-row items-center border rounded-lg shadow bg-slate-800 text-white border-gray-200 hover:bg-slate-700"
    >
      <img
        className="w-36 h-full rounded-sm object-fill md:object-cover md:w-48 md:h-full"
        src={image ? image[0] : ""}
        alt={title}
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
