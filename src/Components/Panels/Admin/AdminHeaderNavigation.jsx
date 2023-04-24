import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Anchor from "./Anchor";

const AdminHeaderNavigation = () => {
  const router = useRouter();
  const [navigator, setNavigator] = useState([
    { title: "کالاها", href: "/adminPanel/products", active: false },
    { title: "موجودی و قیمت ها", href: "/adminPanel/inventory", active: false },
    { title: "سفارش ها", href: "/adminPanel/orders", active: false },
  ]);

  useEffect(() => {
    setNavigator((preState) => {
      return preState.map((link) => {
        return link.href === router.route
          ? { ...link, active: true }
          : { ...link, active: false };
      });
    });
  }, []);

  return (
    <div className="hidden gap-2 lg:flex">
      <ul className="flex gap-10">
        {navigator.map((link) => (
          <li>
            <Anchor href={link.href} active={link.active}>
              {link.title}
            </Anchor>
          </li>
        ))}
        <li>
          <Anchor href="/"> بازگشت به سایت</Anchor>
        </li>
      </ul>
    </div>
  );
};

export default AdminHeaderNavigation;
