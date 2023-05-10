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
}) => {
  const dispatch = useDispatch();
  const removeProductHandler = () => {
    dispatch(removeProduct(id));
  };

  return (
    <tr className="border-t-2 text-black bg-gray-300 border-slate-800 hover:bg-gray-50">
      <th scope="row" className="font-medium whitespace-nowrap px-6 py-4 ">
        <a href="#"></a>
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
        <Anchor className="text-gray-900" href={`/${category}/${subCategory}`}>
          {subCategory}
        </Anchor>
      </td>
      <td className="px-6  flex gap-5 py-4">
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
      </td>
    </tr>
  );
};

export default ProductManagementItem;
