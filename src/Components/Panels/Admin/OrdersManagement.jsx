import { Fragment, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getOrders } from "@/redux/actions/ordersAction";
import RadioInputs from "./RadioInputs";
import OrderManagementModal from "./OrderManagementModal";
import OrderManagementItem from "./OrderManagementItem";
import SortingArrowToggle from "./SortingArrowToggle";
import Pagination from "@/Components/Pagination/Pagination";

const OrdersManagement = () => {
  const [showModal, setShowModal] = useState(false);
  const [userModalData, setUserModalData] = useState({});
  const [descending, setDescending] = useState(true);
  const [ordersStatus, setOrdersStatus] = useState("in_progress");
  const [isOrdersEmpty, setIsOrdersEmpty] = useState(false);
  const dispatch = useDispatch();
  const { orders } = useSelector((store) => store).orders;

  useEffect(() => {
    const escKeyDownHandler = (e) => {
      if (e.code === "Escape") {
        hideModalHandler();
      }
    };

    document.addEventListener("keydown", escKeyDownHandler);
    dispatch(getOrders());

    return () => {
      document.removeEventListener("keydown", escKeyDownHandler);
    };
  }, []);

  useEffect(() => {
    const filteredOrders = orders
      .filter((order) => order.OrderDelivered === false)
      .map((order) => (
        <OrderManagementItem
          key={order.id}
          totalPrice={order.totalPrice}
          {...order.userInfo}
          onShowModal={showModalHandler}
        />
      ));
    if (filteredOrders.length > 0) {
      setIsOrdersEmpty(true);
    }
  }, [orders]);

  const showModalHandler = (data) => {
    setShowModal(true);
    setUserModalData(data);
  };
  const hideModalHandler = () => {
    setShowModal(false);
    setUserModalData({});
  };
  const changeSlopingHandler = () => {
    setDescending((preState) => {
      return !preState;
    });
  };
  const ordersStatusChangeHandler = (e) => {
    if (e.target.value === "in_progress") {
      setOrdersStatus("in_progress");
      checkOrdersIsShown(false);
    } else {
      setOrdersStatus("sent");
      checkOrdersIsShown(true);
    }
  };

  const filteredOrderDuoToOrdersStatue = (orderStatue) => {
    const filteredOrders = orders
      .filter((order) => order.OrderDelivered === orderStatue)
      .map((order) => (
        <OrderManagementItem
          key={order.id}
          {...order}
          onShowModal={showModalHandler}
        />
      ));

    return filteredOrders;
  };

  const checkOrdersIsShown = (ordersStatus) => {
    if (filteredOrderDuoToOrdersStatue(ordersStatus).length > 0) {
      setIsOrdersEmpty(true);
    } else {
      setIsOrdersEmpty(false);
    }
  };

  return (
    <Fragment>
      <OrderManagementModal
        userModalData={userModalData}
        showModal={showModal}
        onHideModal={hideModalHandler}
      />
      <div className="flex flex-col justify-between mb-12 items-center md:flex-row">
        <h2 className="text-3xl mb-5 md:mb-0">مدیریت سفارش ها</h2>
        <RadioInputs
          ordersStatus={ordersStatus}
          onOrdersStatusChange={ordersStatusChangeHandler}
        />
      </div>
      {isOrdersEmpty ? (
        <Fragment>
          <div className="relative overflow-x-auto shadow-md mx-auto mb-24 sm:rounded-lg md:mb-10">
            <table className="w-full text-base text-right whitespace-nowrap">
              <thead className="uppercase text-white bg-slate-800">
                <tr>
                  <th scope="col" className="px-6 py-3">
                    نام کاربر
                  </th>
                  <th scope="col" className="px-6 py-3">
                    مجموع مبلغ
                  </th>
                  <SortingArrowToggle
                    scope="col"
                    className="flex justify-center items-center text-center select-none cursor-pointer gap-2 px-6 py-3"
                    descending={descending}
                    onSlopingHandler={changeSlopingHandler}
                  >
                    زمان ثبت سفارش
                  </SortingArrowToggle>
                  <th scope="col" className="px-6 py-3">
                    <span className="sr-only">Edit</span>
                  </th>
                </tr>
              </thead>
              <tbody>
                {ordersStatus === "in_progress"
                  ? filteredOrderDuoToOrdersStatue(false)
                  : filteredOrderDuoToOrdersStatue(true)}
              </tbody>
            </table>
          </div>
          <Pagination />
        </Fragment>
      ) : (
        <p className="text-xl text-center text-red-500">
          سفارشی هنوز ثبت نشده است.
        </p>
      )}
    </Fragment>
  );
};

export default OrdersManagement;
