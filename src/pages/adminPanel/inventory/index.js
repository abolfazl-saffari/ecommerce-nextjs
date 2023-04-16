import AdminLayout from "@/Components/Layouts/AdminLayout/AdminLayout";
import InvAndPriceProductsManagement from "@/Components/Panels/Admin/InvAndPriceProductsManagement";

const inventoryAndPrice = () => {
  return (
    <AdminLayout>
      <InvAndPriceProductsManagement />
    </AdminLayout>
  );
};

export default inventoryAndPrice;
