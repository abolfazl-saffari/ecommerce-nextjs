import Link from "next/link";
import { useRouter } from "next/router";
import { Fragment, useState, useEffect } from "react";
import CartIconWrapper from "../Cart/CartIconWrapper";
import Button from "../UI/Button";
import RemoveIcon from "../Icons/RemoveIcon";
import HamburgerLogo from "../HamburgerMenu/HamburgerLogo";
import HamburgerDrawer from "../HamburgerMenu/HamburgerDrawer";
import OverlayShadow from "../OverlayShadow/OverlayShadow";
import Sidebar from "./Sidebar";

const Header = () => {
  const [showHamburgerMenu, setShowHamburgerMenu] = useState(false);
  const [showSideBarInHamburgerMenu, setShowSideBarInHamburgerMenu] =
    useState(false);
  const router = useRouter();
  const { query } = router;

  useEffect(() => {
    if (query.mainCategory && Object.keys(query).length === 1) {
      setShowSideBarInHamburgerMenu(true);
    }
  }, []);

  const closeHamburgerMenu = () => {
    setShowHamburgerMenu(false);
  };
  const openHamburgerMenu = () => {
    setShowHamburgerMenu(true);
  };

  return (
    <Fragment>
      <header className="sticky top-0 bg-slate-900 z-40">
        <div className="h-16 container flex justify-between items-center mx-auto py-2">
          <Link href="/">
            <div className="text-xl text-white">فروشگاه مصالح ساختمانی</div>
          </Link>
          <div className="hidden gap-2 lg:flex">
            <Link href="/login">
              <Button className="px-3 bg-slate-700 ">مدیریت</Button>
            </Link>
            <Link href="/cart">
              <Button className="px-4 bg-transparent">
                <CartIconWrapper />
              </Button>
            </Link>
          </div>
          <HamburgerLogo onHamburgerMenuClicked={openHamburgerMenu} />
        </div>
      </header>
      <OverlayShadow
        hamburgerMenu={true}
        showHamburgerMenu={showHamburgerMenu}
        onCloseShadow={closeHamburgerMenu}
      />
      <HamburgerDrawer showHamburgerMenu={showHamburgerMenu}>
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
          {showSideBarInHamburgerMenu && <Sidebar hamburgerMenu={true} />}
        </ul>
      </HamburgerDrawer>
    </Fragment>
  );
};
export default Header;
