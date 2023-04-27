import Link from "next/link";
import { Fragment, useState } from "react";
import AdminHeaderNavigation from "./AdminHeaderNavigation";
import RemoveIcon from "@/Components/Icons/RemoveIcon";
import HamburgerLogo from "@/Components/HamburgerMenu/HamburgerLogo";
import HamburgerDrawer from "@/Components/HamburgerMenu/HamburgerDrawer";
import OverlayShadow from "@/Components/OverlayShadow/OverlayShadow";

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
        <AdminHeaderNavigation hamburgerMenu={true} />
      </HamburgerDrawer>
    </Fragment>
  );
};

export default AdminHeader;
