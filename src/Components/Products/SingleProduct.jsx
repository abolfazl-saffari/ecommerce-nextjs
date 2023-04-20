import ProductBreadcrumb from "./productBreadcrumb";
import ProductImgCard from "./ProductImgCard";
import ProductPrice from "./ProductPrice";
import ProductTitle from "./ProductTitle";
import ProductActions from "./ProductActions";
import ProductDescription from "./ProductDescription";

const SingleProduct = () => {
  return (
    <div className="my-5 md:mt-24 md:mb-12">
      <div className="grid grid-cols-1 mb-12 md:grid-cols-2 md:gap-x-10 gap-y-10">
        <ProductImgCard />
        <div className="flex flex-col justify-between">
          <div className="mb-10 md:mb-0">
            <ProductTitle />
            <ProductBreadcrumb />
          </div>
          <div>
            <ProductPrice />
            <ProductActions />
          </div>
        </div>
      </div>
      <ProductDescription />
    </div>
  );
};

export default SingleProduct;
