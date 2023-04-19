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
          className="block text-sm font-medium  mb-2 text-gray-900"
          htmlFor="file_input"
        >
          تصویر کالا:
        </label>
        <input
          className="w-full block ltr text-sm border rounded-lg cursor-pointer mb-6  text-gray-900 border-gray-300 bg-gray-50"
          id="file_input"
          type="file"
        />
        <label
          className="block text-sm font-medium mb-2 text-gray-900"
          htmlFor="text_input"
        >
          نام کالا:
        </label>
        <input
          className="w-full block text-sm border rounded-lg p-1 mb-6 text-gray-900 border-gray-300 bg-gray-50"
          id="text_input"
          type="text"
        />
        <label
          className="block text-sm font-medium mb-2 text-gray-900"
          htmlFor="category-input"
        >
          دسته بندی:
        </label>
        <select
          className="w-full block text-sm rounded-lg cursor-pointer p-1 mb-6 text-gray-900 border border-gray-300 bg-gray-50"
          id="category-input"
        >
          <option value="volvo"></option>
          <option value="saab"></option>
          <option value="opel"></option>
          <option value="audi"></option>
        </select>
        <label
          className="block text-sm font-medium mb-2 text-gray-900"
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
      <div class="flex justify-center rounded-t p-4">
        <Button className="w-full px-3 bg-slate-800 md:w-1/5">ذخیره</Button>
      </div>
    </Modal>
  );
};

export default ProductManagementModal;
