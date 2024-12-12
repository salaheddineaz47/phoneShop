import { Component } from "react";

class ButtonQuantity extends Component {
  render() {
    const { onClick, viewBox = "0 0 18 2", pathD = "M1 1h16" } = this.props;

    return (
      <button
        className="inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-md border border-gray-300 bg-gray-100 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-100 dark:border-gray-600 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700"
        onClick={onClick}
      >
        <svg
          className="h-2.5 w-2.5 text-gray-900 dark:text-white"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox={viewBox}
        >
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d={pathD}
          ></path>
        </svg>
      </button>
    );
  }
}

export default ButtonQuantity;
