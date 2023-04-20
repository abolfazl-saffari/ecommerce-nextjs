import Link from "next/link";
import AdminHeaderNavigation from "./AdminHeaderNavigation";

const AdminHeader = () => {
  return (
    <header className="sticky top-0 z-10 bg-slate-900">
      <div className="h-16 container flex justify-between items-center mx-auto py-2">
        <Link href="/adminPanel/products">
          <div className="text-xl text-white">پنل مدیریت فروشگاه</div>
        </Link>
        <AdminHeaderNavigation />
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

export default AdminHeader;
