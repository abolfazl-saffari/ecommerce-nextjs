import Link from "next/link";
import { Fragment, useState } from "react";
import AdminHeaderNavigation from "./AdminHeaderNavigation";
import RemoveIcon from "@/Components/Icons/RemoveIcon";

const AdminHeader = () => {
  const [showHamburgerMenu, setShowHamburgerMenu] = useState(false);

  const closeHamburgerMenu = () => {
    setShowHamburgerMenu(false);
  };
  const openHamburgerMenu = () => {
    setShowHamburgerMenu(true);
  };

  return (
    <Fragment>
      <header className="sticky top-0 z-10 bg-slate-900">
        <div className="h-16 container flex justify-between items-center mx-auto py-2">
          <Link href="/adminPanel/products">
            <div className="text-xl text-white">پنل مدیریت فروشگاه</div>
          </Link>
          <AdminHeaderNavigation />
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
        <AdminHeaderNavigation hamburgerMenu={true} />
      </div>
    </Fragment>
  );
};

export default AdminHeader;
