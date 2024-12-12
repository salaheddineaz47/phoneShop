import { Component } from "react";
import { Link } from "react-router-dom";

const SAVING_PERCENTAGE = 20;
const TAX_PERCENTAGE = 7;

export default class OrderSummary extends Component {
  render() {
    const { totalPrice } = this.props;
    const originalPrice = totalPrice;
    const savings = totalPrice / SAVING_PERCENTAGE;
    const tax = Math.floor(totalPrice / TAX_PERCENTAGE);
    const finalPrice = originalPrice - savings + tax;

    return (
      <div className="mx-auto mt-6 max-w-4xl flex-1 space-y-6 lg:mt-0 lg:w-full">
        <div className="space-y-4 rounded-lg border border-gray-200 bg-gray-100 p-4 shadow-sm dark:border-gray-700 dark:bg-gray-800 sm:p-6 transition-colors duration-200">
          <p className="text-xl font-semibold text-gray-900 dark:text-white">
            Order summary
          </p>

          <div className="space-y-4">
            <div className="space-y-2">
              <dl className="flex items-center justify-between gap-4">
                <dt className="text-base font-normal text-gray-500 dark:text-gray-400">
                  Original price
                </dt>
                <dd className="text-base font-medium text-gray-900 dark:text-white">
                  {`${originalPrice.toFixed(2)} DH`}
                </dd>
              </dl>

              <dl className="flex items-center justify-between gap-4">
                <dt className="text-base font-normal text-gray-500 dark:text-gray-400">
                  Savings
                </dt>
                <dd className="text-base font-medium text-green-600">
                  {`-${savings.toFixed(2)} DH`}
                </dd>
              </dl>

              <dl className="flex items-center justify-between gap-4">
                <dt className="text-base font-normal text-gray-500 dark:text-gray-400">
                  Tax
                </dt>
                <dd className="text-base font-medium text-gray-900 dark:text-white">
                  {`${tax} DH`}
                </dd>
              </dl>
            </div>

            <dl className="flex items-center justify-between gap-4 border-t border-gray-200 pt-2 dark:border-gray-700">
              <dt className="text-base font-bold text-gray-900 dark:text-white">
                Total
              </dt>
              <dd className="text-base font-bold text-gray-900 dark:text-white">
                {`${finalPrice} DH`}
              </dd>
            </dl>
          </div>

          <a
            href="#"
            className="flex w-full items-center justify-center rounded-lg bg-primary-700 px-5 py-2.5 text-sm font-medium text-white  focus:outline-none focus:ring-4 focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800 bg-blue-600 hover:bg-blue-800"
          >
            Proceed to Checkout
          </a>

          <div className="flex items-center justify-center gap-2">
            <span className="text-sm font-normal text-gray-500 dark:text-gray-400"></span>
            <Link
              to="/phoneShop/"
              // to="/"
              className="inline-flex items-center gap-2 text-sm font-medium text-slate-400 underline hover:no-underline dark:text-primary-500"
            >
              Continue Shopping
              <svg
                className="h-5 w-5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M19 12H5m14 0-4 4m4-4-4-4"
                />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    );
  }
}
