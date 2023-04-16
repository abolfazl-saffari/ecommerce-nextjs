import Link from "next/link";
import CartIconWrapper from "../Cart/CartIconWrapper";
import Button from "../UI/Button";

const Header = () => {
  return (
    <header className="sticky top-0 bg-slate-900">
      <div className="container flex justify-between items-center  mx-auto py-2 h-16">
        <Link href="/">
          <div className="text-white text-xl">فروشگاه مصالح ساختمانی</div>
        </Link>
        <div className="hidden lg:flex gap-2">
          <Button className="bg-slate-700 px-3">
            <Link href="/login">مدیریت</Link>
          </Button>
          <Button className="bg-transparent px-4">
            <Link href="/cart">
              <CartIconWrapper />
            </Link>
          </Button>
        </div>
        <div class="flex lg:hidden">
          <div class="space-y-2">
            <span class="block w-8 h-0.5 bg-white animate-pulse"></span>
            <span class="block w-8 h-0.5 bg-white animate-pulse"></span>
            <span class="block w-8 h-0.5 bg-white animate-pulse"></span>
          </div>
        </div>
      </div>
    </header>
  );
};
export default Header;
