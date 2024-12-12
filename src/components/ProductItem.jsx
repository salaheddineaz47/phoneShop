import { Component } from "react";
import ProductQuantityControl from "./ProductQuantityControl";
import ButtonAddCart from "./ButtonAddCart";
import ButtonRemove from "./ButtonRemove";

class ProductItem extends Component {
  constructor() {
    super();
    this.state = { quantity: 0 };
  }

  handleIncQuantity = () => {
    this.setState((curState) => {
      return { quantity: curState.quantity + 1 };
    });
  };
  handleDecQuantity = () => {
    this.setState((curState) => {
      if (curState.quantity > 0) return { quantity: curState.quantity - 1 };
    });
  };
  handleRemoveCardItem = () => {
    this.props.onRemoveCartItem(this.props.product.id);
  };

  handleAddToCart = () => {
    this.props.onAddToCart(this.props.product, this.state.quantity);
    this.setState({ quantity: 0 });
    this.props.handleNotification();
  };

  render() {
    const { product, cartItems } = this.props;
    const { quantity } = this.state;

    const productQuantityCart =
      cartItems.find((item) => item.id === product.id)?.quantity || 0;

    return (
      <div className="bg-gray-100 rounded-lg shadow-lg dark:border-gray-700 dark:bg-gray-800 transition-colors duration-200">
        <div className="h-64 flex justify-center">
          <img
            src={product.image}
            alt={product.name}
            className="h-full overflow-hidden transform transition hover:scale-105 cursor-pointer"
          />
        </div>
        <div className="p-4">
          <h2 className="text-lg uppercase font-bold text-gray-900  dark:text-white">
            {product.name}
          </h2>
          <p className="mt-2 mb-4 text-gray-500 dark:text-gray-400">
            {product.description}
          </p>
          <div className="flex justify-between">
            <p className="font-bold mt-2 text-gray-900 dark:text-white">
              {product.price} DH
            </p>

            <ProductQuantityControl
              quantity={quantity}
              onDecQuantity={this.handleDecQuantity}
              onIncQuantity={this.handleIncQuantity}
            />
          </div>

          <ButtonAddCart
            onClick={this.handleAddToCart}
            className="bg-blue-600 text-white hover:bg-blue-500 mt-4"
          >
            Add to Cart
          </ButtonAddCart>

          {productQuantityCart > 0 && (
            <div className="flex items-center justify-around gap-5 text-sm font-semibold mt-3 dark:text-slate-50">
              <span>{productQuantityCart} in the Cart</span>
              <ButtonRemove onClick={this.handleRemoveCardItem}>
                Remove
              </ButtonRemove>
            </div>
          )}
        </div>
      </div>
    );
  }
}

export default ProductItem;
