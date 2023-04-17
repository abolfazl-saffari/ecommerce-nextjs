import AdminLayout from "@/Components/Layouts/AdminLayout/AdminLayout";
import ProductsManagement from "@/Components/Panels/Admin/ProductsManagement";

const productsManagement = () => {
  return (
    <AdminLayout>
      <ProductsManagement />
    </AdminLayout>
  );
};

export default productsManagement;
