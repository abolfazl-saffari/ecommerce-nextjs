import { Fragment } from "react";
import Image from "next/image";
import { useDispatch } from "react-redux";
import { removeProduct } from "@/redux/actions/productsAction";
import Anchor from "./Anchor";

const ProductManagementItem = ({
  id,
  title,
  category,
  subCategory,
  image,
  onShowModal,
  onShowImageModal,
}) => {
  const dispatch = useDispatch();
  const src = image ? image[0] : "";

  const removeProductHandler = () => {
    dispatch(removeProduct(id));
  };

  return (
    <Fragment>
      <tr className="border-t-2 text-black bg-gray-300 border-slate-800 hover:bg-gray-50">
        <th
          scope="row"
          className="w-36 font-medium whitespace-nowrap px-6 py-4"
        >
          <Image
            onClick={() => {
              onShowImageModal(src);
            }}
            src={src}
            alt={src}
            loader={() => src}
            width={100}
            height={150}
            className="rounded-md cursor-pointer"
          />
        </th>
        <td className="px-6 py-4">
          <Anchor href={`/${category}/${subCategory}/${id}`}>{title}</Anchor>
        </td>
        <td className="px-6 py-4">
          <Anchor href={`/${category}`}>{category}</Anchor> /{" "}
          <Anchor href={`/${category}/${subCategory}`}>{subCategory}</Anchor>
        </td>
        <td className="px-6 py-4">
          <div className="flex gap-5">
            <p
              onClick={() => {
                onShowModal(id);
              }}
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
