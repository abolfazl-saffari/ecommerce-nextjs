const ProductPrice = ({ price }) => {
  const formattedPrice = new Intl.NumberFormat("en-US").format(price);

  return (
    <p className="text-xl mb-8">
      <span className="font-black">{formattedPrice}</span> تومان
    </p>
  );
};

export default ProductPrice;
