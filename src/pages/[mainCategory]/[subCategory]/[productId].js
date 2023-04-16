import Header from "@/Components/Layouts/Header";
import Footer from "@/Components/Layouts/Footer";
import Container from "@/Components/Layouts/Container";
import { Fragment } from "react";
import SingleProduct from "@/Components/Products/SingleProduct";

const product = () => {
  return (
    <Fragment>
      <Header />
      <Container>
        <SingleProduct />
      </Container>
      <Footer />
    </Fragment>
  );
};

export default product;
