import { Fragment, useState } from "react";
import { useDispatch } from "react-redux";
import ProductManagementItemImageFullscreenModal from "./ProductManagementItemImageFullscreenModal";
import Anchor from "./Anchor";
import { removeProduct } from "@/redux/actions/productsAction";

const ProductManagementItem = ({
  id,
  title,
  category,
  subCategory,
  image,
  onShowModal,
}) => {
  const [showModal, setShowModal] = useState(false);
  const dispatch = useDispatch();

  const removeProductHandler = () => {
    dispatch(removeProduct(id));
  };
  const showModalHandler = () => {
    setShowModal(true);
  };
  const hideModalHandler = () => {
    setShowModal(false);
  };

  return (
    <Fragment>
      <ProductManagementItemImageFullscreenModal
        image={image ? image[0] : ""}
        showModal={showModal}
        onHideModal={hideModalHandler}
      />
      <tr className="border-t-2 text-black bg-gray-300 border-slate-800 hover:bg-gray-50">
        <th
          scope="row"
          className="w-36 font-medium whitespace-nowrap px-6 py-4"
        >
          <img
            onClick={showModalHandler}
            src={image ? image[0] : ""}
            className="rounded-md cursor-pointer"
          />
        </th>
        <td className="px-6 py-4">
          <Anchor
            className="text-gray-900"
            href={`/${category}/${subCategory}/${id}`}
          >
            {title}
          </Anchor>
        </td>
        <td className="px-6 py-4">
          <Anchor className="text-gray-900" href={`/${category}`}>
            {category}
          </Anchor>{" "}
          /{" "}
          <Anchor
            className="text-gray-900"
            href={`/${category}/${subCategory}`}
          >
            {subCategory}
          </Anchor>
        </td>
        <td className="px-6 py-4">
          <div className="flex gap-5">
            <p
              onClick={onShowModal}
              className="font-medium text-blue-600 cursor-pointer hover:underline"
            >
              ویرایش
            </p>
            <p
              onClick={removeProductHandler}
              className="font-medium text-blue-600 cursor-pointer hover:underline"
            >
              حذف
            </p>
          </div>
        </td>
      </tr>
    </Fragment>
  );
};

export default ProductManagementItem;
