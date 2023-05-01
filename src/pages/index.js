import { Fragment, useEffect, useState } from "react";

import { connect } from "react-redux";
import { getProducts } from "@/redux/actions/productsAction";
import HomeLayout from "@/Components/Layouts/HomeLayout/HomeLayout";
import ProductsWrapper from "@/Components/Products/ProductsWrapper";
import ProductCard from "@/Components/Products/ProductCard";

const Home = (props) => {
  const [data, getData] = useState([]);

  useEffect(() => {
    props.getProducts();
  }, []);

  const { products } = props.products;
  useEffect(() => {
    getData(props.products.products);
  }, [products]);

  const categories = [...new Set(data.map((product) => product.category))];
  let homePageProducts = [];

  categories.forEach((category) => {
    homePageProducts = homePageProducts.concat(
      data.filter((product) => product.category === category).slice(0, 6)
    );
  });

  return (
    <Fragment>
      <HomeLayout>
        {categories.map((category, index) => (
          <ProductsWrapper key={index} title={category} link={`/${category}`}>
            {homePageProducts.map(
              (product) =>
                product.category === category && (
                  <ProductCard
                    key={product.id}
                    id={product.id}
                    title={product.title}
                    price={product.price}
                    category={product.category}
                    subCategory={product.subCategory}
                    image={product.image}
                  />
                )
            )}
          </ProductsWrapper>
        ))}
      </HomeLayout>
    </Fragment>
  );
};

const mapStateToProps = (state) => {
  return { products: state.products };
};

export default connect(mapStateToProps, { getProducts })(Home);
