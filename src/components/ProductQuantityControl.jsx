import { Component } from "react";
import ButtonQuantity from "./ButtonQuantity";

class ProductQuantityControl extends Component {
  render() {
    const { quantity, onDecQuantity, onIncQuantity } = this.props;

    return (
      <div className="flex items-center gap-2">
        <ButtonQuantity onClick={onDecQuantity} />
        <input
          type="text"
          className="w-5 shrink-0 border-0 bg-transparent text-center text-sm font-medium text-gray-900 focus:outline-none focus:ring-0 dark:text-white"
          readOnly
          value={quantity}
        />
        <ButtonQuantity
          onClick={onIncQuantity}
          viewBox="0 0 18 18"
          pathD="M9 1v16M1 9h16"
        />
      </div>
    );
  }
}

export default ProductQuantityControl;
