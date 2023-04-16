import AdminLayout from "@/Components/Layouts/AdminLayout/AdminLayout";
import OrdersManagement from "@/Components/Panels/Admin/OrdersManagement";

const orders = () => {
  return (
    <AdminLayout>
      <OrdersManagement />
    </AdminLayout>
  );
};

export default orders;
