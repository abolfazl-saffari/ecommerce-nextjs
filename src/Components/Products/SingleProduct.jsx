import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getProduct } from "@/redux/actions/productAction";
import { useRouter } from "next/router";
import ProductBreadcrumb from "./productBreadcrumb";
import ProductImgCard from "./ProductImgCard";
import ProductPrice from "./ProductPrice";
import ProductTitle from "./ProductTitle";
import ProductActions from "./ProductActions";
import ProductDescription from "./ProductDescription";

const SingleProduct = () => {
  const dispatch = useDispatch();
  const { productId } = useRouter().query;
  const { product } = useSelector((store) => store).product;
  const { id, title, category, subCategory, image, price, description } =
    product;

  useEffect(() => {
    dispatch(getProduct(productId));
  }, []);

  return (
    <div className="my-5 md:mt-24 md:mb-12">
      <div className="grid grid-cols-1 mb-12 md:grid-cols-2 md:gap-x-10 gap-y-10">
        <ProductImgCard image={image} />
        <div className="flex flex-col justify-between">
          <div className="mb-10 md:mb-0">
            <ProductTitle title={title} />
            <ProductBreadcrumb
              id={id}
              title={title}
              category={category}
              subCategory={subCategory}
            />
          </div>
          <div>
            <ProductPrice price={price} />
            <ProductActions />
          </div>
        </div>
      </div>
      <ProductDescription description={description} />
    </div>
  );
};

export default SingleProduct;
