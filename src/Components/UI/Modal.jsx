import Button from "./Button";

const Modal = () => {
  return (
    <div className="hidden">
      <div className="fixed left-0 top-0 w-full h-full opacity-75 bg-white z-10"></div>
      <div className="fixed top-[20%] left-[5%] right-[5%] lg:left-[30%] lg:right-[30%] z-40">
        <div class="relative bg-white rounded-lg shadow dark:bg-gray-700">
          <div class="flex justify-between p-4 rounded-t">
            <h3 class="text-base font-semibold text-gray-900 dark:text-white">
              افزودن / ویرایش کالا
            </h3>
            <button
              type="button"
              class="text-gray-400"
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
          <div className="p-4">
            <label
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              htmlFor="file_input"
            >
              تصویر کالا:
            </label>
            <input
              className="ltr mb-6 block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
              id="file_input"
              type="file"
            />
            <label
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              htmlFor="text_input"
            >
              نام کالا:
            </label>
            <input
              className="block mb-6 w-full p-1 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
              id="text_input"
              type="text"
            />
            <label
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              htmlFor="category-input"
            >
              دسته بندی:
            </label>
            <select
              className="mb-6 block w-full p-1 text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
              id="category-input"
            >
              <option value="volvo"></option>
              <option value="saab"></option>
              <option value="opel"></option>
              <option value="audi"></option>
            </select>
            <label
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              htmlFor="text_input"
            >
              توضیحات:
            </label>
            <textarea
              id="message"
              rows="4"
              className="block resize-none mb-6 w-full p-1 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
            ></textarea>
          </div>
          <div class="flex justify-center p-4 rounded-t">
            <Button className="w-full md:w-1/5 bg-slate-700 px-3">ذخیره</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
