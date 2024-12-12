import { Component } from "react";
import ProductItem from "./ProductItem";
import products from "../../public/assets/Products";

class ProductList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: products,
      selectedPriceRange: "all",
      selectedSystem: "all",
    };
  }

  handlePriceFilterChange = (e) => {
    this.setState({ selectedPriceRange: e.target.value });
  };

  handleSystemFilterChange = (e) => {
    this.setState({ selectedSystem: e.target.value });
  };

  filterProducts = () => {
    const { products, selectedPriceRange, selectedSystem } = this.state;

    let filteredProducts = products;
    if (selectedPriceRange !== "all") {
      const [min, max] = selectedPriceRange.split("-").map(Number);
      filteredProducts = filteredProducts.filter(
        (product) => product.price >= min && product.price <= max
      );
    }

    if (selectedSystem !== "all") {
      filteredProducts = filteredProducts.filter(
        (product) =>
          product.systeme.toLowerCase() === selectedSystem.toLowerCase()
      );
    }

    return filteredProducts;
  };

  render() {
    const { onAddToCart, cartItems, onRemoveCartItem, handleNotification } =
      this.props;
    const filteredProducts = this.filterProducts();

    return (
      <div className="bg-gray-50 dark:bg-gray-900 transition-colors duration-200">
        <div className="container mx-auto p-4  pt-14 pb-20 ">
          <div className="mb-4 flex gap-4">
            <div className="dark:text-white">
              <label htmlFor="priceFilter" className="mr-2 font-semibold">
                Filter by price:
              </label>
              <select
                className="bg-[#eee] p-2 dark:border-gray-700 dark:bg-gray-800"
                id="priceFilter"
                value={this.state.selectedPriceRange}
                onChange={this.handlePriceFilterChange}
              >
                <option value="all">All prices</option>
                <option value="0-1500">0 - 1500</option>
                <option value="1501-2000">1501 - 2000</option>
                <option value="2001-3000">2001 - 3000</option>
                <option value="3001-15000">3001 and more</option>
              </select>
            </div>
            <div className="dark:text-white">
              <label htmlFor="systemFilter" className="mr-2 font-semibold">
                Filter by system:
              </label>
              <select
                className="bg-[#eee] p-2 dark:border-gray-700 dark:bg-gray-800"
                id="systemFilter"
                value={this.state.selectedSystem}
                onChange={this.handleSystemFilterChange}
              >
                <option value="all">All systems</option>
                <option value="android">Android</option>
                <option value="iphone">iPhone</option>
              </select>
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {filteredProducts.map((product) => (
              <ProductItem
                key={product.id}
                product={product}
                onAddToCart={onAddToCart}
                cartItems={cartItems}
                onRemoveCartItem={onRemoveCartItem}
                handleNotification={handleNotification}
              />
            ))}
          </div>
          {filteredProducts.length === 0 && (
            <p className="text-center text-gray-500">No products found.</p>
          )}
        </div>
      </div>
    );
  }
}

export default ProductList;
