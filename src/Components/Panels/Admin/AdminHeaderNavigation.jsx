import Anchor from "./Anchor";

const AdminHeaderNavigation = () => {
  return (
    <div className="hidden lg:flex gap-2">
      <ul className="flex gap-10">
        <li>
          <Anchor active={true}>کالاها</Anchor>
        </li>
        <li>
          <Anchor>موجودی و قیمت ها</Anchor>
        </li>
        <li>
          <Anchor>سفارش ها</Anchor>
        </li>
        <li>
          <Anchor> بازگشت به سایت</Anchor>
        </li>
      </ul>
    </div>
  );
};

export default AdminHeaderNavigation;
