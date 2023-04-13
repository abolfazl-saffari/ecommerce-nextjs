import Header from "@/Components/Layouts/Header";
import Footer from "@/Components/Layouts/Footer";
import Container from "@/Components/Layouts/Container";
import ProductsWrapper from "@/Components/Products/ProductsWrapper";
import ProductCard from "@/Components/Products/ProductCard";
import Checkout from "@/Components/Checkout/Checkout";
import LoginForm from "@/Components/Panels/Admin/LoginForm";

export default function Home() {
  return (
    <div className="font-vazir rtl">
      <LoginForm />
      {/* <Header />
      <Container>
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
      </Container>
      <Footer /> */}
    </div>
  );
}
