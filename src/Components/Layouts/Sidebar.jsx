import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCategories } from "@/redux/actions/categoriesAction";
import Link from "next/link";

const Sidebar = ({ hamburgerMenu }) => {
  const [data, getData] = useState([]);
  const { categories } = useSelector((store) => store).categories;
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCategories());
  }, []);

  useEffect(() => {
    getData(categories);
  }, [categories]);

  return (
    <div
      className={`${hamburgerMenu ? "block" : "hidden"} col-span-1 lg:block`}
    >
      <div
        className={`max-h-[60vh] overflow-y-auto border-r pl-5  ${
          hamburgerMenu ? "border rounded-md px-6 py-2 mx-2 mb-2" : "fixed"
        }  xl:pl-10`}
      >
        {data.map((category, index) => (
          <div key={index} className={`${hamburgerMenu ? "mb-5" : "mb-4"}`}>
            <p>
              <Link href={`/${category.mainCategory}`}>
                {category.mainCategory}
              </Link>
            </p>
            <ul>
              {category.subCategories.map((sCategory) => (
                <li key={sCategory} className="text-sm ms-4 mt-1">
                  <Link href={`/${category.mainCategory}/${sCategory}`}>
                    {sCategory}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
