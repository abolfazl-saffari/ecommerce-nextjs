import { Fragment } from "react";
import ProductsWrapper from "@/Components/Products/ProductsWrapper";
import ProductCard from "@/Components/Products/ProductCard";
import HomeLayout from "@/Components/Layouts/HomeLayout/HomeLayout";

export default function Home() {
  return (
    <Fragment>
      <HomeLayout>
        <ProductsWrapper title={"آهن آلات"}>
          <ProductCard />
          <ProductCard />
          <ProductCard />
        </ProductsWrapper>
        <ProductsWrapper title={"آهن آلات و کشاورزی"}>
          <ProductCard />
          <ProductCard />
        </ProductsWrapper>
        <ProductsWrapper title={"بیل"}>
          <ProductCard />
        </ProductsWrapper>
        <ProductsWrapper title={"کلنگ"}>
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
        </ProductsWrapper>
      </HomeLayout>
    </Fragment>
  );
}
