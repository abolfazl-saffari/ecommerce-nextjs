import { useEffect, useState, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCategories } from "@/redux/actions/categoriesAction";
import { addProduct } from "@/redux/actions/productsAction";
import Modal from "@/Components/UI/Modal";
import Button from "@/Components/UI/Button";

const ProductManagementModal = ({
  showModal,
  onHideModal,
  register,
  handleSubmit,
  watch,
}) => {
  const { categories } = useSelector((store) => store).categories;
  const [subCategories, setSubCategories] = useState([]);
  const watchCategoryInput = watch("category");
  const watchSubCategory = watch("subCategory");
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCategories());
  }, []);

  useEffect(() => {
    userCategorySelectedHandler({ target: { value: watchCategoryInput } });
  }, [watchCategoryInput]);

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

  const formSubmitHandler = (data) => {
    dispatch(addProduct({ price: 0, inventory: 0, ...data }));
    onHideModal();
  };

  return (
    <Modal
      title="افزودن / ویرایش کالا"
      showModal={showModal}
      onHideModal={onHideModal}
    >
      <form onSubmit={handleSubmit(formSubmitHandler)}>
        <div className="p-4">
          <label
            className="block text-sm font-medium  mb-2 text-white"
            htmlFor="file_input"
          >
            تصویر کالا:
          </label>
          <input
            {...register("image", { required: true })}
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
            {...register("title", { required: true })}
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
            {...register("category", { required: true })}
            className="w-full block text-sm rounded-lg cursor-pointer p-1 mb-6 text-gray-900 border border-gray-300 bg-gray-50"
            id="category-input"
            onInput={userCategorySelectedHandler}
          >
            <option value="">لطفا یک دسته را انتخاب کنید ...</option>
            {categories.map((category, index) => (
              <option key={`${category}${index}`} value={category.mainCategory}>
                {category.mainCategory}
              </option>
            ))}
          </select>
          <label
            className="block text-sm font-medium mb-2 text-white"
            htmlFor="category-input"
          >
            زیر دسته:
          </label>
          <select
            {...register("subCategory", { required: true })}
            className="w-full block text-sm rounded-lg cursor-pointer p-1 mb-6 text-gray-900 border border-gray-300 bg-gray-50"
            id="category-input"
            value={watchSubCategory}
          >
            <option value="">لطفا یک زیر دسته را انتخاب کنید ...</option>
            {subCategories.map((category, index) => (
              <option key={`${category}${index}`} value={category}>
                {category}
              </option>
            ))}
          </select>
          <label
            className="block text-sm font-medium mb-2 text-white"
            htmlFor="text_input"
          >
            توضیحات:
          </label>
          <textarea
            {...register("description", { required: true })}
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
