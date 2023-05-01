import Button from "../UI/Button";

const ProductActions = () => {
  return (
    <div className="flex items-center gap-5">
      <input
        type="number"
        id="small-input"
        className="w-14 rounded-lg border py-3 px-2 bg-gray-50 text-gray-900 border-gray-400 sm:text-xs"
        defaultValue="1"
        min="1"
        max="10"
      />
      <Button className="px-4 bg-green-600">افزودن به سبد خرید</Button>
    </div>
  );
};

export default ProductActions;
