import Anchor from "./Anchor";

const AdminHeaderNavigation = () => {
  return (
    <div className="hidden lg:flex gap-2">
      <ul className="flex gap-10">
        <li>
          <Anchor href="/adminPanel/products" active={true}>
            کالاها
          </Anchor>
        </li>
        <li>
          <Anchor href="/adminPanel/inventory">موجودی و قیمت ها</Anchor>
        </li>
        <li>
          <Anchor href="/adminPanel/orders">سفارش ها</Anchor>
        </li>
        <li>
          <Anchor href="/"> بازگشت به سایت</Anchor>
        </li>
      </ul>
    </div>
  );
};

export default AdminHeaderNavigation;
