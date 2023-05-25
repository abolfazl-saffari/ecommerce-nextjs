import RemoveIcon from "../Icons/RemoveIcon";
import OverlayShadow from "../OverlayShadow/OverlayShadow";

const Modal = ({ title, showModal, onHideModal, children }) => {
  return (
    <div className={`${showModal ? "block" : "hidden"}`}>
      <OverlayShadow hamburgerMenu={false} onCloseShadow={onHideModal} />
      <div className="fixed top-[1%] left-[5%] right-[5%] z-40 lg:left-[30%] lg:right-[30%] xl:top-[5%]">
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
