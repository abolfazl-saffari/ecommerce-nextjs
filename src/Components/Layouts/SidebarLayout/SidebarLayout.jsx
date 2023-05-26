import { Fragment, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/router";
import { getProducts } from "@/redux/actions/productsAction";
import Header from "../Header";
import Container from "../Container";
import Sidebar from "../Sidebar";
import Footer from "../Footer";
import ProductCard from "../../Products/ProductCard";
import ProductsWrapper from "../../Products/ProductsWrapper";

const SidebarLayout = () => {
  const [data, setData] = useState([]);
  const { mainCategory, subCategory } = useRouter().query;
  const { products } = useSelector((store) => store).products;
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProducts());
    setData(products);
  }, [mainCategory]);

  return (
    <Fragment>
      <Header />
      <Container>
        <div className="grid grid-cols-6">
          <Sidebar />
          <ProductsWrapper
            title={subCategory || mainCategory}
            link={
              subCategory
                ? `/${mainCategory}/${subCategory}`
                : `/${mainCategory}`
            }
          >
            {data
              .filter((product) =>
                subCategory
                  ? product.subCategory === subCategory
                  : product.category === mainCategory
              )
              .map((product) => (
                <ProductCard
                  key={product.id}
                  id={product.id}
                  title={product.title}
                  price={product.price}
                  category={product.category}
                  subCategory={product.subCategory}
                  image={product.image}
                />
              ))}
          </ProductsWrapper>
        </div>
      </Container>
      <Footer />
    </Fragment>
  );
};

export default SidebarLayout;
