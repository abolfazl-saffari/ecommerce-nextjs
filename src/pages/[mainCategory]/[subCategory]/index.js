import { useRouter } from "next/router";

const SubCategoryProducts = () => {
  const router = useRouter();
  const { mainCategory, subCategory } = router.query;

  return (
    <p>
      /{mainCategory}/{subCategory}
    </p>
  );
};

export default SubCategoryProducts;
