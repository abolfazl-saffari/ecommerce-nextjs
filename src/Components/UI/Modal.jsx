import RemoveIcon from "../Icons/RemoveIcon";

const Modal = ({ title, children }) => {
  return (
    <div className="hidden">
      <div className="w-full h-full fixed left-0 top-0 opacity-75 z-10 bg-white"></div>
      <div className="fixed top-[20%] left-[5%] right-[5%] z-40 lg:left-[30%] lg:right-[30%]">
        <div className="relative rounded-lg shadow px-6 bg-slate-800">
          <div className="flex justify-between rounded-t py-6">
            <h3 className="text-base font-semibold text-white">{title}</h3>
            <button className="text-gray-400" type="button">
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
