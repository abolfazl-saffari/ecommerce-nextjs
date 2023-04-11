import ArrowUpIcon from "../ArrowUpIcon";
import Button from "../UI/Button";

const Footer = () => {
  return (
    <footer className="w-full bg-slate-900">
      <div className="container flex items-center justify-between mx-auto h-20">
        <h2 className="text-white text-xl">فروشگاه مصالح ساختمانی</h2>
        <Button className="flex justify-between items-center gap-2 bg-slate-700 px-3">
          <p className="hidden sm:block">بازگشت به بالا</p>
          <ArrowUpIcon />
        </Button>
      </div>
    </footer>
  );
};
export default Footer;
