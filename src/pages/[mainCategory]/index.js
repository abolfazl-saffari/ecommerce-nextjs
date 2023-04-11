import { useRouter } from "next/router";

const MainCategoryProducts = () => {
  const router = useRouter();
  const { mainCategory } = router.query;

  return <p>/{mainCategory}</p>;
};

export default MainCategoryProducts;
