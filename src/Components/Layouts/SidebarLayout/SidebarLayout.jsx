import { Fragment } from "react";
import Header from "../Header";
import Sidebar from "../Sidebar";
import Footer from "../Footer";
import Container from "../Container";
import ProductsWrapper from "../../Products/ProductsWrapper";
import ProductCard from "../../Products/ProductCard";

const SidebarLayout = () => {
  return (
    <Fragment>
      <Header />
      <Container>
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
      </Container>
      <Footer />
    </Fragment>
  );
};

export default SidebarLayout;
