import { useEffect, useState, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCategories } from "@/redux/actions/categoriesAction";
import Modal from "@/Components/UI/Modal";
import Button from "@/Components/UI/Button";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import dynamic from "next/dynamic";

const Weditor = dynamic(
  () => import("react-draft-wysiwyg").then((mod) => mod.Editor),
  { ssr: false }
);

const ProductManagementModal = ({ showModal, onHideModal }) => {
  const { categories } = useSelector((store) => store).categories;
  const [subCategories, setSubCategories] = useState([]);
  const dispatch = useDispatch();
  const userTitleInputRef = useRef();
  const userImageInputRef = useRef();
  const userCategoryInputRef = useRef();
  const userSubcategoryInputRef = useRef();

  useEffect(() => {
    dispatch(getCategories());
  }, []);

  const userCategorySelectedHandler = (e) => {
    const subCategoriesOfCurrentCategory = categories.find(
      (category) => category.mainCategory === e.target.value
    );
    setSubCategories(
      subCategoriesOfCurrentCategory
        ? subCategoriesOfCurrentCategory.subCategories
        : []
    );
  };

  const formSubmitHandler = (e) => {
    e.preventDefault();
    console.log(
      userTitleInputRef.current.value,
      userImageInputRef.current.files[0],
      userCategoryInputRef.current.value,
      userSubcategoryInputRef.current.value
    );
  };

  return (
    <Modal
      title="افزودن / ویرایش کالا"
      showModal={showModal}
      onHideModal={onHideModal}
    >
      <form onSubmit={formSubmitHandler}>
        <div className="p-4">
          <label
            className="block text-sm font-medium  mb-2 text-white"
            htmlFor="file_input"
          >
            تصویر کالا:
          </label>
          <input
            ref={userImageInputRef}
            className="w-full block ltr text-sm border rounded-lg cursor-pointer mb-6  text-gray-900 border-gray-300 bg-gray-50"
            id="file_input"
            type="file"
            accept="image/png, image/jpeg"
          />
          <label
            className="block text-sm font-medium mb-2 text-white"
            htmlFor="text_input"
          >
            نام کالا:
          </label>
          <input
            ref={userTitleInputRef}
            className="w-full block text-sm border rounded-lg p-1 mb-6 text-gray-900 border-gray-300 bg-gray-50"
            id="text_input"
            type="text"
          />
          <label
            className="block text-sm font-medium mb-2 text-white"
            htmlFor="category-input"
          >
            دسته بندی:
          </label>
          <select
            ref={userCategoryInputRef}
            className="w-full block text-sm rounded-lg cursor-pointer p-1 mb-6 text-gray-900 border border-gray-300 bg-gray-50"
            id="category-input"
            onChange={userCategorySelectedHandler}
          >
            <option>لطفا یک دسته را انتخاب کنید ...</option>
            {categories.map((category) => (
              <option value={category.mainCategory}>
                {category.mainCategory}
              </option>
            ))}
            <option>دسته بندی مورد نظر خود را وارد کنید.</option>
          </select>
          <label
            className="block text-sm font-medium mb-2 text-white"
            htmlFor="category-input"
          >
            زیر دسته:
          </label>
          <select
            ref={userSubcategoryInputRef}
            className="w-full block text-sm rounded-lg cursor-pointer p-1 mb-6 text-gray-900 border border-gray-300 bg-gray-50"
            id="category-input"
          >
            <option>لطفا یک زیر دسته را انتخاب کنید ...</option>
            {subCategories.map((category) => (
              <option value={category}>{category}</option>
            ))}
            <option> زیر دسته مورد نظر خود را وارد کنید.</option>
          </select>
          <label
            className="block text-sm font-medium mb-2 text-white"
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
        </div>
        <div className="flex justify-center rounded-t p-4">
          <Button type="submit" className="w-full px-3 bg-slate-800 md:w-1/5">
            ذخیره
          </Button>
        </div>
      </form>
    </Modal>
  );
};

export default ProductManagementModal;
