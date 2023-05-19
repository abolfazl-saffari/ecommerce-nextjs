import { useEffect, useState, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCategories } from "@/redux/actions/categoriesAction";
import { addProduct } from "@/redux/actions/productsAction";
import Modal from "@/Components/UI/Modal";
import Button from "@/Components/UI/Button";

const ProductManagementModal = ({ showModal, onHideModal }) => {
  const { categories } = useSelector((store) => store).categories;
  const [subCategories, setSubCategories] = useState([]);
  const [newCategoryAdder, setNewCategoryAdder] = useState(false);
  const [newSubcategoryAdder, setNewSubcategoryAdder] = useState(false);
  const dispatch = useDispatch();
  const userTitleInputRef = useRef(null);
  const userImageInputRef = useRef(null);
  const userCategoryInputRef = useRef(null);
  const userSubcategoryInputRef = useRef(null);
  const userDescriptionInputRef = useRef(null);

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
    if (e.target.value === "newCategory") {
      setNewCategoryAdder(true);
      setNewSubcategoryAdder(false);
    } else {
      setNewCategoryAdder(false);
      setNewSubcategoryAdder(false);
    }
  };

  const userSubcategorySelectedHandler = (e) => {
    if (e.target.value === "newSubcategory") {
      setNewSubcategoryAdder(true);
    } else {
      setNewSubcategoryAdder(false);
    }
  };

  const formSubmitHandler = (e) => {
    e.preventDefault();

    const newProduct = {
      title: userTitleInputRef.current.value,
      price: 0,
      inventory: 0,
      category: userCategoryInputRef.current.value,
      subCategory: userSubcategoryInputRef.current.value,
      image: [userImageInputRef.current.files],
      description: userDescriptionInputRef.current.value,
    };

    dispatch(addProduct(newProduct));
    userTitleInputRef.current.value = "";
    userImageInputRef.current.value = "";
    userCategoryInputRef.current.value = "";
    userSubcategoryInputRef.current.value = "";
    userDescriptionInputRef.current.value = "";
    onHideModal();
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
            required
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
            required
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
            className={`w-full block text-sm rounded-lg cursor-pointer p-1 ${
              newCategoryAdder ? "mb-2" : "mb-6"
            } text-gray-900 border border-gray-300 bg-gray-50`}
            id="category-input"
            onChange={userCategorySelectedHandler}
          >
            <option value="">لطفا یک دسته را انتخاب کنید ...</option>
            {categories.map((category, index) => (
              <option key={`${category}${index}`} value={category.mainCategory}>
                {category.mainCategory}
              </option>
            ))}
            <option value="newCategory">
              دسته بندی مورد نظر خود را وارد کنید.
            </option>
          </select>
          {newCategoryAdder && (
            <input
              required
              className="w-full block text-sm border rounded-lg p-1 mb-6 text-gray-900 border-gray-300 bg-gray-50"
            />
          )}
          <label
            className="block text-sm font-medium mb-2 text-white"
            htmlFor="category-input"
          >
            زیر دسته:
          </label>
          <select
            required
            ref={userSubcategoryInputRef}
            className={`w-full block text-sm rounded-lg cursor-pointer p-1 ${
              newSubcategoryAdder ? "mb-2" : "mb-6"
            } text-gray-900 border border-gray-300 bg-gray-50`}
            id="category-input"
            onChange={userSubcategorySelectedHandler}
          >
            <option value="">لطفا یک زیر دسته را انتخاب کنید ...</option>
            {subCategories.map((category, index) => (
              <option key={`${category}${index}`} value={category}>
                {category}
              </option>
            ))}
            <option value="newSubcategory">
              زیر دسته مورد نظر خود را وارد کنید.
            </option>
          </select>
          {newSubcategoryAdder && (
            <input
              required
              className="w-full block text-sm border rounded-lg p-1 mb-6 text-gray-900 border-gray-300 bg-gray-50"
            />
          )}
          <label
            className="block text-sm font-medium mb-2 text-white"
            htmlFor="text_input"
          >
            توضیحات:
          </label>
          <textarea
            required
            ref={userDescriptionInputRef}
            rows="5"
            className="w-full block text-sm rounded-lg p-2 mb-6 text-gray-900 border border-gray-300 bg-gray-50"
          ></textarea>
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
