import RemoveIcon from "../Icons/RemoveIcon";

const Modal = ({ title, showModal, onHideModal, children }) => {
  return (
    <div className={`${showModal ? "block" : "hidden"}`}>
      <div
        className="w-full h-full fixed left-0 top-0 opacity-75 z-10 bg-white"
        onClick={onHideModal}
      ></div>
      <div className="fixed top-[10%] left-[5%] right-[5%] z-40 lg:left-[30%] lg:right-[30%] xl:top-[15%]">
        <div className="relative rounded-lg shadow px-6 bg-slate-800">
          <div className="flex justify-between rounded-t py-6">
            <h3 className="text-base font-semibold text-white">{title}</h3>
            <button className="text-gray-400" type="button">
              <RemoveIcon onClick={onHideModal} />
            </button>
          </div>
          {children}
        </div>
      </div>
    </div>
  );
};

export default Modal;
