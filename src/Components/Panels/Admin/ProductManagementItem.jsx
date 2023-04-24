const ProductManagementItem = ({ onShowModal }) => {
  return (
    <tr className="border-t-2 text-black bg-gray-300 border-slate-800 hover:bg-gray-50">
      <th scope="row" className="font-medium whitespace-nowrap px-6 py-4 ">
        <a href="#"></a>
      </th>
      <td className="px-6 py-4"> روغن سرخ کردنی سمن - 1.35 کلیویی</td>
      <td className="px-6 py-4">مواد غذایی / کالاهای اساسی و خوار و بار</td>
      <td className="px-6  flex gap-5 py-4">
        <a
          href="#"
          onClick={onShowModal}
          className="font-medium text-blue-600 hover:underline"
        >
          ویرایش
        </a>
        <a href="#" className="font-medium text-blue-600 hover:underline">
          حذف
        </a>
      </td>
    </tr>
  );
};

export default ProductManagementItem;
