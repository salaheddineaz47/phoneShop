import { Component } from "react";
import { Link } from "react-router-dom";
import CartItem from "./CartItem";
import products from "../../public/assets/Products";
import HotProductItem from "./HotProductItem";
import OrderSummary from "./OrderSummary";

const hotProducts = products.filter((pr) => [9, 13, 4].includes(pr.id));

class Cart extends Component {
  render() {
    const { cartItems, handleRemoveCartItem, onAddToCart, handleNotification } =
      this.props;
    const totalPrice = cartItems.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    );

    return (
      <section className="bg-gray-50 py-8 antialiased dark:bg-gray-900 md:py-16 transition-colors duration-200">
        <div className="mx-auto max-w-screen-xl px-4 2xl:px-0">
          <h2 className="text-xl font-semibold text-gray-900 dark:text-white sm:text-2xl">
            Shopping Cart
          </h2>

          <div className="mt-6 sm:mt-8 md:gap-6 lg:flex lg:items-start xl:gap-8">
            <div className="mx-auto w-full flex-none lg:max-w-2xl xl:max-w-4xl">
              <div className="space-y-6">
                {cartItems.map((item) => (
                  <CartItem
                    key={item.id}
                    item={item}
                    handleRemoveCartItem={handleRemoveCartItem}
                    onAddToCart={onAddToCart}
                  />
                ))}

                {cartItems.length === 0 && (
                  <div className="flex flex-col items-center justify-center py-16 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 transition-colors duration-200">
                    <div className="text-center">
                      <h1 className="text-2xl font-semibold mb-4">
                        Your cart is feeling a little empty!
                      </h1>
                      <p className="mb-6">
                        Discover amazing deals and must-have items waiting just
                        for you. Let’s find something you’ll love!
                      </p>

                      <Link
                        to="/phoneShop/"
                        // to="/"
                        className="px-6 py-2 text-white bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 rounded-md shadow-md"
                      >
                        Start Shopping
                      </Link>
                    </div>
                  </div>
                )}
              </div>
              <div className="hidden xl:mt-8 xl:block">
                <h3 className="text-2xl font-semibold text-gray-900 dark:text-white">
                  People also bought
                </h3>
                <div className="mt-6 grid grid-cols-3 gap-4 sm:mt-8">
                  {hotProducts.map((prod) => (
                    <HotProductItem
                      key={prod.id}
                      item={prod}
                      onAddToCart={onAddToCart}
                      handleNotification={handleNotification}
                    />
                  ))}
                </div>
              </div>
            </div>

            <OrderSummary totalPrice={totalPrice} />
          </div>
        </div>
      </section>
    );
  }
}

export default Cart;
