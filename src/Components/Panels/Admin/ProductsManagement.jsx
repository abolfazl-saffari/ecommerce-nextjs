import { Fragment, useEffect, useState, useMemo } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useForm } from "react-hook-form";
import {
  getProducts,
  sortProductsAlphabetically,
} from "@/redux/actions/productsAction";
import { getProduct } from "@/redux/actions/productAction";
import { removeImage } from "@/redux/actions/ImageAction";
import Button from "@/Components/UI/Button";
import ProductManagementItem from "./ProductManagementItem";
import SortingArrowToggle from "./SortingArrowToggle";
import ProductManagementModal from "./ProductManagementModal";
import ProductManagementItemImageFullscreenModal from "./ProductManagementItemImageFullscreenModal";

const ProductsManagement = () => {
  const [showModal, setShowModal] = useState(false);
  const [showImageModal, setShowImageModal] = useState(false);
  const [isUserEditing, setIsUserEditing] = useState(false);
  const [userImageModalData, setImageModalData] = useState("");
  const [descending, setDescending] = useState(true);
  const [fetchProducts, setFetchProducts] = useState([]);
  const dispatch = useDispatch();
  const productsData = useSelector((store) => store).products.products;
  const { product } = useSelector((store) => store).product;
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    setValue,
    watch,
  } = useForm();

  useEffect(() => {
    dispatch(getProducts());

    const escKeyDownHandler = (e) => {
      if (e.code === "Escape") {
        hideModalHandler();
        hideImageModalHandler();
      }
    };

    document.addEventListener("keydown", escKeyDownHandler);

    return () => {
      document.removeEventListener("keydown", escKeyDownHandler);
    };
  }, []);

  useEffect(() => {
    setFetchProducts(productsData);
    dispatch(sortProductsAlphabetically(descending));
  }, [productsData, descending]);

  useEffect(() => {
    reset(product);
  }, [product]);

  const showModalHandler = (id) => {
    setShowModal(true);

    if (typeof id === "number") {
      dispatch(getProduct(id));
      setIsUserEditing(true);
    } else {
      setIsUserEditing(false);
    }
  };
  const hideModalHandler = () => {
    dispatch(removeImage());
    setShowModal(false);
    setValue("title", "");
    setValue("category", "");
    setValue("subCategory", "");
    setValue("image", "");
    setValue("description", "");
  };

  const showImageModalHandler = (image) => {
    setShowImageModal(true);
  };
  const hideImageModalHandler = () => {
    setShowImageModal(false);
    setImageModalData("");
  };

  const changeSlopingHandler = () => {
    setDescending((preState) => {
      return !preState;
    });
  };
  return (
    <Fragment>
      <ProductManagementModal
        showModal={showModal}
        onHideModal={hideModalHandler}
        isUserEditing={isUserEditing}
        register={register}
        handleSubmit={handleSubmit}
        watch={watch}
        errors={errors}
        setValue={setValue}
      />
      <ProductManagementItemImageFullscreenModal
        showImageModal={showImageModal}
        userImageModalData={userImageModalData}
        onHideImageModal={hideImageModalHandler}
      />
      <div className="flex flex-col justify-between items-center mb-12 md:flex-row">
        <h2 className="text-3xl mb-5 md:mb-0">مدیریت کالا</h2>
        <Button
          onClick={showModalHandler}
          className="w-full px-12 py-4 bg-green-600 md:w-auto"
        >
          افزودن کالا
        </Button>
      </div>
      <div className="relative overflow-x-auto shadow-md mx-auto mb-24 sm:rounded-lg md:mb-10">
        <table className="w-full text-base text-right whitespace-nowrap">
          <thead className="uppercase text-white bg-slate-800">
            <tr>
              <th scope="col" className="px-6 py-3">
                تصویر
              </th>
              <th scope="col" className="px-6 py-3">
                نام کالا
              </th>
              <SortingArrowToggle
                scope="col"
                className="flex gap-2 select-none cursor-pointer px-6 py-3"
                descending={descending}
                onSlopingHandler={changeSlopingHandler}
              >
                دسته بندی
              </SortingArrowToggle>
              <th scope="col" className="px-6 py-3">
                <span className="sr-only">Edit</span>
              </th>
            </tr>
          </thead>
          <tbody>
            {fetchProducts.map((productItem) => (
              <ProductManagementItem
                setIsUserEditing={setIsUserEditing}
                onShowImageModal={showImageModalHandler}
                key={productItem.id}
                {...productItem}
                onShowModal={showModalHandler}
              />
            ))}
          </tbody>
        </table>
      </div>
    </Fragment>
  );
};

export default ProductsManagement;
