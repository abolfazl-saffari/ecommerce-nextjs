import Link from "next/link";

const ProductCard = () => {
  return (
    <Link
      href="/tools/shovel/15"
      class="max-w-full h-40 items-center flex flex-row  bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
    >
      <img
        class="object-cover w-fit h-28 rounded-t-lg md:h-auto md:w-48 md:rounded-none md:rounded-l-lg ms-3"
        src="https://flowbite.com/docs/images/products/apple-watch.png"
        alt=""
      />
      <div class="flex flex-col justify-between p-4 leading-normal">
        <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          ساعت هوشمند
        </h5>
        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
          20000 تومان
        </p>
      </div>
    </Link>
  );
};

export default ProductCard;
