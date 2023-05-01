import { Fragment } from "react";
import Header from "../Header";
import Container from "../Container";
import Footer from "../Footer";

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
