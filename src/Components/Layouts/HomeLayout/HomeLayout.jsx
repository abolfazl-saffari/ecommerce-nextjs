import { Fragment } from "react";
import Header from "../Header";
import Footer from "../Footer";
import Container from "../Container";

const HomeLayout = ({ children }) => {
  return (
    <Fragment>
      <Header />
      <Container>{children}</Container>
      <Footer />
    </Fragment>
  );
};

export default HomeLayout;
