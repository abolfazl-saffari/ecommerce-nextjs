import ProductsWrapper from "../Products/ProductsWrapper";
import ProductCard from "../Products/ProductCard";
import Sidebar from "./Sidebar";

const SidebarLayout = () => {
  return (
    <div className="grid grid-cols-6">
      <Sidebar />
      <ProductsWrapper Sidebar={true} title={"کلنگ"}>
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </ProductsWrapper>
    </div>
  );
};

export default SidebarLayout;
