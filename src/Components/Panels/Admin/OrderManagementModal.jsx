import Modal from "@/Components/UI/Modal";
import Button from "@/Components/UI/Button";
import OrderManagementModalTable from "./OrderManagementModalTable";

const OrderManagementModal = ({ showModal, onHideModal, ordersStatus }) => {
  return (
    <Modal title="نمایش سفارش" showModal={showModal} onHideModal={onHideModal}>
      <div className="py-4 text-white">
        <div className="grid grid-cols-2 py-2">
          <p className="text-left me-10">نام مشتری:</p>
          <p>ابوالفضل صفاری</p>
        </div>
        <div className="grid grid-cols-2 py-2">
          <p className="text-left me-10">آدرس:</p>
          <p>
            تهران، یافت آباد شهرک ولیعصر، خ بهرامی، خ جلالی جنوبی تهران، یافت
            آباد شهرک ولیعصر، خ بهرامی، خ جلالی جنوبی
          </p>
        </div>
        <div className="grid grid-cols-2 py-2">
          <p className="text-left me-10">تلفن:</p>
          <p>09023547080</p>
        </div>
        <div className="grid grid-cols-2 py-2">
          <p className="text-left me-10">زمان تحویل:</p>
          <p>1402/01/01</p>
        </div>
        <div className="grid grid-cols-2 py-2">
          <p className="text-left me-10">زمان سفارش:</p>
          <p>1402/01/01</p>
        </div>
      </div>
      <OrderManagementModalTable showModal={showModal} />
      {ordersStatus === "in_progress" ? (
        <div class="flex justify-center p-4 mt-5 rounded-t">
          <Button className="w-full md:w-1/5 bg-slate-700 px-3">
            تحویل شد
          </Button>
        </div>
      ) : (
        <div className="py-4 mt-5 text-white">
          <div className="grid grid-cols-2 py-2">
            <p className="text-left me-10">زمان تحویل:</p>
            <p>1402/01/01</p>
          </div>
        </div>
      )}
    </Modal>
  );
};

export default OrderManagementModal;
