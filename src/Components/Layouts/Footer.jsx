import ArrowUpIcon from "../Icons/ArrowUpIcon";
import Button from "../UI/Button";

const Footer = () => {
  const goToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="w-full bg-slate-900">
      <div className="h-20 container flex items-center justify-between mx-auto">
        <h2 className="text-xl text-white">فروشگاه مصالح ساختمانی</h2>
        <Button
          className="flex justify-between items-center gap-2 px-3 bg-slate-700"
          onClick={goToTop}
        >
          <p className="hidden sm:block">بازگشت به بالا</p>
          <ArrowUpIcon />
        </Button>
      </div>
    </footer>
  );
};
export default Footer;
