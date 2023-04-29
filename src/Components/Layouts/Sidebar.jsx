import Link from "next/link";

const Sidebar = ({ hamburgerMenu }) => {
  return (
    <div
      className={`${hamburgerMenu ? "block" : "hidden"} col-span-1 lg:block`}
    >
      <div
        className={`max-h-[60vh] overflow-y-auto border-r pl-5  ${
          hamburgerMenu ? "border rounded-md px-6 py-2 mx-2 mb-2" : "fixed"
        }  xl:pl-10`}
      >
        <div className={`${hamburgerMenu ? "mb-5" : ""}`}>
          <p>
            <Link href="/tools">کالاهای اساسی و خوار و بار</Link>
          </p>
          <ul>
            <li className="ms-4">
              <Link href="/tools/shovel">نان</Link>
            </li>
            <li className="ms-4">
              <Link href="/tools/shovel">برنج</Link>
            </li>
            <li className="ms-4">
              <Link href="/tools/shovel">روغن</Link>
            </li>
            <li className="ms-4">
              <Link href="/tools/shovel">قند و نبات</Link>
            </li>
          </ul>
        </div>
        <div className={`${hamburgerMenu ? "mb-5" : ""}`}>
          <p>
            <Link href="/tools">کالاهای اساسی و خوار و بار</Link>
          </p>
          <ul>
            <li className="ms-4">
              <Link href="/tools/shovel">نان</Link>
            </li>
            <li className="ms-4">
              <Link href="/tools/shovel">برنج</Link>
            </li>
            <li className="ms-4">
              <Link href="/tools/shovel">روغن</Link>
            </li>
            <li className="ms-4">
              <Link href="/tools/shovel">قند و نبات</Link>
            </li>
          </ul>
        </div>
        <div className={`${hamburgerMenu ? "mb-5" : ""}`}>
          <p>
            <Link href="/tools">کالاهای اساسی و خوار و بار</Link>
          </p>
          <ul>
            <li className="ms-4">
              <Link href="/tools/shovel">نان</Link>
            </li>
            <li className="ms-4">
              <Link href="/tools/shovel">برنج</Link>
            </li>
            <li className="ms-4">
              <Link href="/tools/shovel">روغن</Link>
            </li>
            <li className="ms-4">
              <Link href="/tools/shovel">قند و نبات</Link>
            </li>
          </ul>
        </div>
        <div className={`${hamburgerMenu ? "mb-5" : ""}`}>
          <p>
            <Link href="/tools">کالاهای اساسی و خوار و بار</Link>
          </p>
          <ul>
            <li className="ms-4">
              <Link href="/tools/shovel">نان</Link>
            </li>
            <li className="ms-4">
              <Link href="/tools/shovel">برنج</Link>
            </li>
            <li className="ms-4">
              <Link href="/tools/shovel">روغن</Link>
            </li>
            <li className="ms-4">
              <Link href="/tools/shovel">قند و نبات</Link>
            </li>
          </ul>
        </div>
        <div className={`${hamburgerMenu ? "mb-5" : ""}`}>
          <p>
            <Link href="/tools">کالاهای اساسی و خوار و بار</Link>
          </p>
          <ul>
            <li className="ms-4">
              <Link href="/tools/shovel">نان</Link>
            </li>
            <li className="ms-4">
              <Link href="/tools/shovel">برنج</Link>
            </li>
            <li className="ms-4">
              <Link href="/tools/shovel">روغن</Link>
            </li>
            <li className="ms-4">
              <Link href="/tools/shovel">قند و نبات</Link>
            </li>
          </ul>
        </div>
        <div className={`${hamburgerMenu ? "mb-5" : ""}`}>
          <p>
            <Link href="/tools">کالاهای اساسی و خوار و بار</Link>
          </p>
          <ul>
            <li className="ms-4">
              <Link href="/tools/shovel">نان</Link>
            </li>
            <li className="ms-4">
              <Link href="/tools/shovel">برنج</Link>
            </li>
            <li className="ms-4">
              <Link href="/tools/shovel">روغن</Link>
            </li>
            <li className="ms-4">
              <Link href="/tools/shovel">قند و نبات</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
