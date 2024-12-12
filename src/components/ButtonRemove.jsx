import { Component } from "react";

class ButtonRemove extends Component {
  render() {
    const { children, onClick } = this.props;

    return (
      <button
        type="button"
        className="inline-flex items-center text-sm font-medium text-red-600 hover:underline dark:text-red-500"
        onClick={onClick}
      >
        <svg
          className="me-1.5 h-5 w-5"
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
            d="M6 18 17.94 6M18 18 6.06 6"
          />
        </svg>
        {children}
      </button>
    );
  }
}

export default ButtonRemove;
