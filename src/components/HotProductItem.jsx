import { Component } from "react";
import ButtonAddCart from "./ButtonAddCart";

export default class HotProductItem extends Component {
  handleAddToCart = () => {
    this.props.onAddToCart(this.props.item, 1);
    this.props.handleNotification();
  };

  render() {
    const { item } = this.props;
    return (
      <div className="space-y-6 overflow-hidden rounded-lg border border-gray-200 bg-gray-100 p-6 shadow-sm dark:border-gray-700 dark:bg-gray-800 transition-colors duration-200">
        <div className="flex justify-center align-center">
          <img className="h-40" src={item.image} alt={item.name} />
        </div>
        <div>
          <p className="text-lg font-semibold leading-tight text-gray-900  dark:text-white">
            {item.name}
          </p>
          <p className="mt-2 text-base font-normal text-gray-500 dark:text-gray-400">
            {item.description}
          </p>
        </div>
        <div>
          <p className="text-lg font-bold text-red-600 dark:text-red-500 ">
            <span className="line-through"> {`${item.price + 199} Dh`} </span>
          </p>
          <p className="text-lg font-bold leading-tight text-gray-900 dark:text-white">
            {`${item.price} Dh`}
          </p>
        </div>

        <div className="mt-6 flex items-center ">
          <ButtonAddCart
            onClick={this.handleAddToCart}
            className="text-slate-950 hover:text-gray-100  dark:text-slate-50 dark:bg-slate-700 dark:hover:bg-slate-600 bg-gray-300 hover:bg-gray-400 "
          >
            <svg
              className="-ms-2 me-2 h-5 w-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M5 4h1.5L9 16m0 0h8m-8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm-8.5-3h9.25L19 7h-1M8 7h-.688M13 5v4m-2-2h4"
              />
            </svg>
            Add to cart
          </ButtonAddCart>
        </div>
      </div>
    );
  }
}
