import Button from "../UI/Button";

const Header = () => {
  return (
    <header className=" sticky top-0 bg-slate-900">
      <div className="container flex justify-between items-center  mx-auto py-2 h-16">
        <div className="text-white text-xl">فروشگاه مصالح ساختمانی</div>
        <div className="hidden lg:block">
          <Button className="bg-slate-700 px-3"> ورود | ثبت نام</Button>
          <Button className="bg-transparent mr-2 px-4">سبد خرید</Button>
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
