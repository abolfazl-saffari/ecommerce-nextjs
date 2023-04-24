import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Anchor from "./Anchor";

const AdminHeaderNavigation = ({ hamburgerMenu }) => {
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
    <div className={`${hamburgerMenu ? "" : "hidden"} gap-2 lg:flex`}>
      <ul className={`${hamburgerMenu ? "flex flex-col mt-6" : "flex gap-10"}`}>
        {navigator.map((link) => (
          <li
            className={`${
              hamburgerMenu
                ? "text-center border rounded-md px-6 py-2 mx-2 mb-2 hover:bg-white hover:text-slate-900"
                : ""
            }`}
          >
            <Anchor href={link.href} active={link.active}>
              {link.title}
            </Anchor>
          </li>
        ))}
        <li className={`${hamburgerMenu ? "mt-5 mx-2" : ""}`}>
          <Anchor href="/"> بازگشت به سایت</Anchor>
        </li>
      </ul>
    </div>
  );
};

export default AdminHeaderNavigation;
