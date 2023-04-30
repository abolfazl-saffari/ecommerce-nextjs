const ProductBreadcrumb = ({ id, title, category, subCategory }) => {
  return (
    <p className="text-xl">
      {category} | {subCategory} | {title}
    </p>
  );
};

export default ProductBreadcrumb;
