import Link from "next/link";

const ProductBreadcrumb = ({ id, title, category, subCategory }) => {
  return (
    <p className="text-xl">
      <Link href={`/${category}`}>{category} | </Link>
      <Link href={`/${category}/${subCategory}`}>{subCategory} | </Link>
      <Link href={`/${category}/${subCategory}/${id}`}>{title}</Link>
    </p>
  );
};

export default ProductBreadcrumb;
