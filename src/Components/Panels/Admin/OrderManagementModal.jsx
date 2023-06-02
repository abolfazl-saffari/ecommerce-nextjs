import { useDispatch } from "react-redux";
import { orderDelivered } from "@/redux/actions/ordersAction";
import Modal from "@/Components/UI/Modal";
import Button from "@/Components/UI/Button";
import OrderManagementModalTable from "./OrderManagementModalTable";

const OrderManagementModal = ({ showModal, onHideModal, userModalData }) => {
  const dispatch = useDispatch();
  const orderDeliveredHandler = () => {
    dispatch(orderDelivered(userModalData.orderId));
    onHideModal();
  };
  const getCurrentDaytime = () => {
    const date = new Date();
    const year = date.toLocaleString("default", { year: "numeric" });
    const month = date.toLocaleString("default", { month: "2-digit" });
    const day = date.toLocaleString("default", { day: "2-digit" });
    const todayDate = [year, month, day].join("-");
    return todayDate;
  };

  return (
    <Modal title="نمایش سفارش" showModal={showModal} onHideModal={onHideModal}>
      <div className="py-4 text-white">
        <div className="grid grid-cols-2 py-2">
          <p className="text-left me-10">نام مشتری:</p>
          <p>
            {userModalData.userInfo ? userModalData.userInfo.name : ""}{" "}
            {userModalData.userInfo ? userModalData.userInfo.lName : ""}
          </p>
        </div>
        <div className="grid grid-cols-2 py-2">
          <p className="text-left me-10">آدرس:</p>
          <p>{userModalData.userInfo ? userModalData.userInfo.address : ""}</p>
        </div>
        <div className="grid grid-cols-2 py-2">
          <p className="text-left me-10">تلفن:</p>
          <p>
            {userModalData.userInfo ? userModalData.userInfo.phoneNumber : ""}
          </p>
        </div>
        <div className="grid grid-cols-2 py-2">
          <p className="text-left me-10">زمان تحویل:</p>
          <p>
            {userModalData.userInfo ? userModalData.userInfo.deliveryDate : ""}
          </p>
        </div>
        <div className="grid grid-cols-2 py-2">
          <p className="text-left me-10">زمان سفارش:</p>
          <p>{userModalData.OrderRegistrationTime}</p>
        </div>
      </div>
      <OrderManagementModalTable cart={userModalData.cart} />
      {!userModalData.OrderDelivered ? (
        <div className="flex justify-center p-4 mt-5 rounded-t">
          <Button
            onClick={orderDeliveredHandler}
            className="w-full md:w-1/5 bg-slate-700 px-3"
          >
            تحویل شد
          </Button>
        </div>
      ) : (
        <div className="py-4 mt-5 text-white">
          <div className="grid grid-cols-2 py-2">
            <p className="text-left me-10">زمان تحویل:</p>
            <p>{getCurrentDaytime()}</p>
          </div>
        </div>
      )}
    </Modal>
  );
};

export default OrderManagementModal;
