const Modal = ({ title, children }) => {
  return (
    <div className="" hidden>
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
              <svg
                aria-hidden="true"
                class="w-5 h-5"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </button>
          </div>
          {children}
        </div>
      </div>
    </div>
  );
};

export default Modal;
