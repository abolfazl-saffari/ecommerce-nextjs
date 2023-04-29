import { Fragment } from "react";
import AdminHeader from "@/Components/Panels/Admin/AdminHeader";
import Container from "../Container";
import Footer from "../Footer";

const AdminLayout = ({ children }) => {
  return (
    <Fragment>
      <AdminHeader />
      <Container>{children}</Container>
      <Footer />
    </Fragment>
  );
};

export default AdminLayout;
