import { Fragment, useEffect, useState } from "react";
import RadioInputs from "./RadioInputs";
import OrderManagementModal from "./OrderManagementModal";
import OrderManagementItem from "./OrderManagementItem";
import SortingArrowToggle from "./SortingArrowToggle";
import Pagination from "@/Components/Pagination/Pagination";

const OrdersManagement = () => {
  const [showModal, setShowModal] = useState(false);
  const [descending, setDescending] = useState(true);
  const [ordersStatus, setOrdersStatus] = useState("in_progress");

  useEffect(() => {
    const escKeyDownHandler = (e) => {
      if (e.code === "Escape") {
        hideModalHandler();
      }
    };

    document.addEventListener("keydown", escKeyDownHandler);

    return () => {
      document.removeEventListener("keydown", escKeyDownHandler);
    };
  }, []);

  const showModalHandler = () => {
    setShowModal(true);
  };
  const hideModalHandler = () => {
    setShowModal(false);
  };
  const changeSlopingHandler = () => {
    setDescending((preState) => {
      return !preState;
    });
  };
  const ordersStatusChangeHandler = (e) => {
    if (e.target.value === "in_progress") {
      setOrdersStatus("in_progress");
    } else {
      setOrdersStatus("sent");
    }
  };

  return (
    <Fragment>
      <OrderManagementModal
        showModal={showModal}
        onHideModal={hideModalHandler}
        ordersStatus={ordersStatus}
      />
      <div className="flex flex-col justify-between mb-12 items-center md:flex-row">
        <h2 className="text-3xl mb-5 md:mb-0">مدیریت سفارش ها</h2>
        <RadioInputs
          ordersStatus={ordersStatus}
          onOrdersStatusChange={ordersStatusChangeHandler}
        />
      </div>
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
            <OrderManagementItem onShowModal={showModalHandler} />
            <OrderManagementItem onShowModal={showModalHandler} />
            <OrderManagementItem onShowModal={showModalHandler} />
            <OrderManagementItem onShowModal={showModalHandler} />
            <OrderManagementItem onShowModal={showModalHandler} />
            <OrderManagementItem onShowModal={showModalHandler} />
            <OrderManagementItem onShowModal={showModalHandler} />
            <OrderManagementItem onShowModal={showModalHandler} />
            <OrderManagementItem onShowModal={showModalHandler} />
            <OrderManagementItem onShowModal={showModalHandler} />
          </tbody>
        </table>
      </div>
      <Pagination />
    </Fragment>
  );
};

export default OrdersManagement;
