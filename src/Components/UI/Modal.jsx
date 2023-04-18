import RemoveIcon from "../Icons/RemoveIcon";

const Modal = ({ title, children }) => {
  return (
    <div className="hidden">
      <div className="fixed left-0 top-0 w-full h-full opacity-75 bg-white z-10"></div>
      <div className="fixed top-[20%] left-[5%] right-[5%] lg:left-[30%] lg:right-[30%] z-40">
        <div className="relative bg-white rounded-lg shadow dark:bg-gray-700 px-6">
          <div className="flex justify-between py-6 rounded-t">
            <h3 className="text-base font-semibold text-gray-900 dark:text-white">
              {title}
            </h3>
            <button
              type="button"
              className="text-gray-400"
              data-modal-hide="defaultModal"
            >
              <RemoveIcon />
            </button>
          </div>
          {children}
        </div>
      </div>
    </div>
  );
};

export default Modal;
