import { Component } from "react";
import ProductQuantityControl from "./ProductQuantityControl";
import ButtonRemove from "./ButtonRemove";
// import products from "../../public/assets/Products";

class CartItem extends Component {
  constructor() {
    super();
    this.state = {
      quantity: 0,
    };
  }

  handleIncQuantity = () => {
    this.setState((curState) => {
      return { quantity: curState.quantity + 1 };
    });
    this.props.onAddToCart(this.props.item, 1);
  };

  handleDecQuantity = () => {
    if (this.state.quantity === 1) return;
    this.setState((curState) => {
      return {
        quantity: curState.quantity - 1,
      };
    });
    this.props.onAddToCart(this.props.item, -1);
  };

  componentDidMount() {
    this.setState({ quantity: this.props.item.quantity });
  }

  componentDidUpdate(prevProps) {
    if (prevProps.item.quantity !== this.props.item.quantity) {
      this.setState({ quantity: this.props.item.quantity });
    }
  }

  handleRemoveCartItem = () => {
    this.props.handleRemoveCartItem(this.props.item.id);
  };

  render() {
    const { item } = this.props;
    const { quantity } = this.state;
    const totalPrice = item.price * quantity;

    return (
      <div className="rounded-lg border border-gray-200 bg-slate-50 p-4 shadow-sm dark:border-gray-700 dark:bg-gray-800 md:p-6">
        <div className="space-y-4 md:flex md:items-center md:justify-between md:gap-6 md:space-y-0">
          <a href="#" className="shrink-0 md:order-1">
            <img className="h-20 w-20 " src={item.image} alt={item.name} />
          </a>

          <div className="flex items-center justify-between md:order-3 md:justify-end">
            <ProductQuantityControl
              quantity={quantity}
              onDecQuantity={this.handleDecQuantity}
              onIncQuantity={this.handleIncQuantity}
            />

            <div className="text-end md:order-4 md:w-32">
              <p className="text-base font-bold text-gray-900 dark:text-white">
                {`${totalPrice} Dh`}
              </p>
            </div>
          </div>

          <div className="w-full min-w-0 flex-1 space-y-4 md:order-2 md:max-w-md">
            <p className="text-base font-medium text-gray-900  dark:text-white">
              {item.name}
            </p>

            <div>
              <ButtonRemove onClick={this.handleRemoveCartItem}>
                Remove
              </ButtonRemove>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default CartItem;
