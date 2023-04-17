import AdminHeader from "@/Components/Panels/Admin/AdminHeader";
import Container from "../Container";
import { Fragment } from "react";
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
