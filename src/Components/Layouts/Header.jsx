import Link from "next/link";
import { Fragment, useState } from "react";
import CartIconWrapper from "../Cart/CartIconWrapper";
import Button from "../UI/Button";
import RemoveIcon from "../Icons/RemoveIcon";

const Header = () => {
  const [showHamburgerMenu, setShowHamburgerMenu] = useState(false);

  const closeHamburgerMenu = () => {
    setShowHamburgerMenu(false);
  };
  const openHamburgerMenu = () => {
    setShowHamburgerMenu(true);
  };

  return (
    <Fragment>
      <header className="sticky top-0 bg-slate-900">
        <div className="h-16 container flex justify-between items-center mx-auto py-2">
          <Link href="/">
            <div className="text-xl text-white">فروشگاه مصالح ساختمانی</div>
          </Link>
          <div className="hidden gap-2 lg:flex">
            <Button className="px-3 bg-slate-700 ">
              <Link href="/login">مدیریت</Link>
            </Button>
            <Button className="px-4 bg-transparent">
              <Link href="/cart">
                <CartIconWrapper />
              </Link>
            </Button>
          </div>
          <div className="flex lg:hidden" onClick={openHamburgerMenu}>
            <div className="space-y-2">
              <span className="block w-8 h-0.5 bg-white animate-pulse"></span>
              <span className="block w-8 h-0.5 bg-white animate-pulse"></span>
              <span className="block w-8 h-0.5 bg-white animate-pulse"></span>
            </div>
          </div>
        </div>
      </header>
      <div
        className={`w-full h-full fixed ${
          showHamburgerMenu ? "" : "hidden"
        } left-0 top-0 opacity-75 z-40 bg-white lg:hidden`}
        onClick={closeHamburgerMenu}
      ></div>
      <div
        className={`fixed h-screen w-5/6 top-0 bottom-0 left-0 ${
          showHamburgerMenu ? "translate-x-0" : "-translate-x-full"
        } opacity-[0.99] z-50 transition-transform ease-in duration-700 delay-75 bg-slate-900 md:w-3/6 lg:hidden`}
      >
        <RemoveIcon onClick={closeHamburgerMenu} hamburgerMenu={true} />
        <ul className="mt-6 text-white">
          <Link href="/cart">
            <li className="text-center border rounded-md px-6 py-2 mx-2 mb-2 hover:bg-white hover:text-slate-900">
              سبد خرید
            </li>
          </Link>
          <Link href="/login">
            <li className="text-center border rounded-md px-6 py-2 mx-2 mb-2 hover:bg-white hover:text-slate-900">
              مدیریت
            </li>
          </Link>
        </ul>
      </div>
    </Fragment>
  );
};
export default Header;
