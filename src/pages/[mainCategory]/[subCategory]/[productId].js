import { useRouter } from "next/router";

const product = () => {
  const router = useRouter();
  const { mainCategory, subCategory, productId } = router.query;

  return (
    <p>
      /{mainCategory}/{subCategory}/{productId}
    </p>
  );
};

export default product;
