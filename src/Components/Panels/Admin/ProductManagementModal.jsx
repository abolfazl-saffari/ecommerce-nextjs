import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCategories } from "@/redux/actions/categoriesAction";
import { addProduct } from "@/redux/actions/productsAction";
import { addImage } from "@/redux/actions/ImageAction";
import Modal from "@/Components/UI/Modal";
import ImagePreviewBox from "./ImagePreviewWrapper";
import Button from "@/Components/UI/Button";

const ProductManagementModal = ({
  showModal,
  onHideModal,
  isUserEditing,
  register,
  handleSubmit,
  watch,
  errors,
  setValue,
}) => {
  const { categories } = useSelector((store) => store).categories;
  const { Image } = useSelector((store) => store).Image;
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
    dispatch(
      addProduct({
        price: 0,
        inventory: 0,
        ...data,
        image: [].concat(`http://localhost:3004/files/${Image}`),
      })
    );

    onHideModal();
  };

  const ImageUploaderHandler = (e) => {
    dispatch(addImage(e.target.files[0]));
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
            {...register("image", {
              required: true,
              onChange: ImageUploaderHandler,
            })}
            className="w-full block ltr text-sm border rounded-lg cursor-pointer text-gray-900 border-gray-300 bg-gray-50"
            id="file_input"
            type="file"
            accept="image/*"
          />
          <ImagePreviewBox Image={Image} setValue={setValue} />
          <p
            role="alert"
            className={`${
              errors.image?.type === "required" ? "visible" : "invisible"
            } text-xs mt-2 text-red-600`}
          >
            بارگزاری عکس الزامی است.
          </p>
          <label
            className="block text-sm font-medium my-2 text-white"
            htmlFor="text_input"
          >
            نام کالا:
          </label>
          <input
            {...register("title", {
              required: true,
              minLength: 3,
            })}
            className="w-full block text-sm border rounded-lg p-1 text-gray-900 border-gray-300 bg-gray-50"
            id="text_input"
            type="text"
          />
          <p
            role="alert"
            className={`${
              errors.title?.type === "required" ? "visible" : "invisible"
            } text-xs mt-2 text-red-600`}
          >
            نام کالا الزامی است.
          </p>
          <label
            className="block text-sm font-medium my-2 text-white"
            htmlFor="category-input"
          >
            دسته بندی:
          </label>
          <select
            {...register("category", { required: true })}
            className="w-full block text-sm rounded-lg cursor-pointer p-1 text-gray-900 border border-gray-300 bg-gray-50"
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
          <p
            role="alert"
            className={`${
              errors.category?.type === "required" ? "visible" : "invisible"
            } text-xs mt-2 text-red-600`}
          >
            انتخاب دسته بندی کالا الزامی است.
          </p>
          <label
            className="block text-sm font-medium my-2 text-white"
            htmlFor="category-input"
          >
            زیر دسته:
          </label>
          <select
            {...register("subCategory", { required: true })}
            className="w-full block text-sm rounded-lg cursor-pointer p-1 text-gray-900 border border-gray-300 bg-gray-50"
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
          <p
            role="alert"
            className={`${
              errors.subCategory?.type === "required" ? "visible" : "invisible"
            } text-xs mt-2 text-red-600`}
          >
            انتخاب زیر دسته کالا الزامی است.
          </p>
          <label
            className="block text-sm font-medium my-2 text-white"
            htmlFor="text_input"
          >
            توضیحات:
          </label>
          <textarea
            {...register("description", { required: true, minLength: 5 })}
            rows="5"
            className="w-full block text-sm rounded-lg p-2 text-gray-900 border border-gray-300 bg-gray-50"
          ></textarea>
          <p
            role="alert"
            className={`${
              errors.description?.type === "required" ? "visible" : "invisible"
            } text-xs mt-2 text-red-600`}
          >
            توضیحات کالا الزامی است.
          </p>
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
