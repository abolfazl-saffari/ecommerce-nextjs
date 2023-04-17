import Link from "next/link";
import AdminHeaderNavigation from "./AdminHeaderNavigation";

const AdminHeader = () => {
  return (
    <header className="sticky top-0 bg-slate-900 z-10">
      <div className="container flex justify-between items-center mx-auto py-2 h-16">
        <Link href="/adminPanel/products">
          <div className="text-white text-xl">پنل مدیریت فروشگاه</div>
        </Link>
        <AdminHeaderNavigation />
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

export default AdminHeader;
