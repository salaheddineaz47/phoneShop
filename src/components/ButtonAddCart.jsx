import { Component } from "react";

class ButtonAddCart extends Component {
  render() {
    const { children, onClick, className } = this.props;

    return (
      <button
        className={`inline-flex w-full items-center justify-center bg-primary-700 px-5 py-2.5 text-md font-medium rounded-sm ${className}`}
        onClick={onClick}
      >
        {children}
      </button>
    );
  }
}

export default ButtonAddCart;
