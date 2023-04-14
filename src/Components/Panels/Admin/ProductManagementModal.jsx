import Modal from "@/Components/UI/Modal";
import Button from "@/Components/UI/Button";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import dynamic from "next/dynamic";

const Weditor = dynamic(
  () => import("react-draft-wysiwyg").then((mod) => mod.Editor),
  { ssr: false }
);

const ProductManagementModal = () => {
  return (
    <Modal title="افزودن / ویرایش کالا">
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
        <div className="ltr bg-white">
          <Weditor
            // editorState={editorState}
            toolbarClassName="toolbarClassName"
            wrapperClassName="wrapperClassName"
            editorClassName="editorClassName"
            // onEditorStateChange={this.onEditorStateChange}
          />
        </div>
        ;
      </div>
      <div class="flex justify-center p-4 rounded-t">
        <Button className="w-full md:w-1/5 bg-slate-700 px-3">ذخیره</Button>
      </div>
    </Modal>
  );
};

export default ProductManagementModal;
