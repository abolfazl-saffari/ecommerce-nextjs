const ProductPrice = ({ price }) => {
  const formattedPrice = new Intl.NumberFormat("en-US").format(price);

  return (
    <p className="text-xl mb-8">
      <span className="font-black">{formattedPrice}</span> ریال
    </p>
  );
};

export default ProductPrice;
