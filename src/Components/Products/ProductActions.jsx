import Button from "../UI/Button";

const ProductActions = () => {
  return (
    <div className="flex items-center gap-5">
      <input
        type="number"
        id="small-input"
        className="w-14 py-3 px-2 text-gray-900 border border-gray-400 rounded-lg bg-gray-50 sm:text-xs"
        defaultValue="1"
        min="1"
        max="10"
      />
      <Button className="bg-green-600 px-4">افزودن به سبد خرید</Button>
    </div>
  );
};

export default ProductActions;
