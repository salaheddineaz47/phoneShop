import React, { Component } from "react";
import Product from "./Product";

class ProductList extends Component {
  render() {
    const { onAddToCart } = this.props;
    const products = [
      {
        id: 1,
        name: "Galaxy S20 plus",
        price: 2400,
        image: "src/assets/imgArticle/galaxys20plus.png",
        description:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit..",
      },
      {
        id: 2,
        name: "Huawei p40 black",
        price: 3000,
        image: "src/assets/imgArticle/huaweip40black.png",
        description:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit..",
      },
      {
        id: 3,
        name: "Huawei p50 black",
        price: 2000,
        image: "src/assets/imgArticle/huaweip50black.png",
        description:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit..",
      },
      {
        id: 4,
        name: "Huaweip 50 Gold",
        price: 15000,
        image: "src/assets/imgArticle/huaweip50gold.png",
        description:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit..",
      },
      {
        id: 5,
        name: "Iphone 12 black",
        price: 1500,
        image: "src/assets/imgArticle/iphone_12_black.png",
        description:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit..",
      },
      {
        id: 6,
        name: "Iphone 12 violet",
        price: 1600,
        image: "src/assets/imgArticle/Iphone12violet.jpeg",
        description:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit..",
      },
      {
        id: 7,
        name: "IPhone 13 Green",
        price: 1700,
        image: "src/assets/imgArticle/iPhone13Green.jpeg",
        description:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit..",
      },
      {
        id: 8,
        name: "Iphone 13 white",
        price: 1800,
        image: "src/assets/imgArticle/appleiphone13white.jpg",
        description:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit..",
      },
    ];

    return (
      <div className="container mx-auto p-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <Product
              key={product.id}
              product={product}
              onAddToCart={onAddToCart}
            />
          ))}
        </div>
      </div>
    );
  }
}

export default ProductList;
