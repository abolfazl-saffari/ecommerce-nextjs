import Link from "next/link";
import CartIconWrapper from "../Cart/CartIconWrapper";
import Button from "../UI/Button";

const Header = () => {
  return (
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
        <div className="flex lg:hidden">
          <div className="space-y-2">
            <span className="block w-8 h-0.5 bg-white animate-pulse"></span>
            <span className="block w-8 h-0.5 bg-white animate-pulse"></span>
            <span className="block w-8 h-0.5 bg-white animate-pulse"></span>
          </div>
        </div>
      </div>
    </header>
  );
};
export default Header;
