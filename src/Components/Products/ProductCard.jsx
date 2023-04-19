import Link from "next/link";

const ProductCard = () => {
  return (
    <Link
      href="/tools/shovel/15"
      className="max-w-full h-40 flex flex-row items-center border rounded-lg shadow bg-slate-800 text-white border-gray-200 hover:bg-slate-700"
    >
      <img
        className="w-fit h-28 rounded-t-lg object-cover ms-3 md:w-48 md:h-auto md:rounded-none"
        src="https://flowbite.com/docs/images/products/apple-watch.png"
        alt=""
      />
      <div className="flex flex-col justify-between leading-normal p-4">
        <h5 className="text-2xl font-bold mb-2 text-white">ساعت هوشمند</h5>
        <p className="font-normal mb-3 text-white">20000 تومان</p>
      </div>
    </Link>
  );
};

export default ProductCard;
