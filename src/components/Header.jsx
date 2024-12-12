import { Component } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ButtonDarkLightToggle from "./ButtonDarkLightToggle";
import { faBars, faMobileAlt } from "@fortawesome/free-solid-svg-icons";
import ButtonCart from "./ButtonCart";

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isMenuOpen: false,
    };
  }

  toggleMenu = () => {
    this.setState((prevState) => ({ isMenuOpen: !prevState.isMenuOpen }));
  };

  render() {
    const { cartItems, toggleDarkMode } = this.props;
    const { isMenuOpen } = this.state;

    return (
      <header className="bg-blue-600 sticky top-0 z-50 shadow-md">
        <div className="container mx-auto px-4 py-3 flex justify-between items-center md:px-10">
          <h1 className="text-white text-2xl font-bold mr-auto">
            <Link
              to="/phoneShop/"
              // to="/"
            >
              <p className="flex gap-2">
                <span>phoneShop</span>
                <span>
                  <FontAwesomeIcon icon={faMobileAlt} size="sm" />
                </span>
              </p>
            </Link>
          </h1>

          <div className="flex gap-2  items-center justify-center">
            <nav className="hidden md:flex space-x-8  items-center">
              <Link
                to="/phoneShop/"
                // to="/"
                className="text-white hover:text-blue-300 transition"
              >
                Home
              </Link>
              <Link
                to="/phoneShop/cart"
                className="relative text-white hover:text-blue-300 transition"
              >
                Cart
              </Link>

              <ButtonCart className="-bottom-4 -right-3">
                {cartItems?.length}
              </ButtonCart>

              <ButtonDarkLightToggle onClick={toggleDarkMode} />
            </nav>

            {/* ********** Small Screen Width ************ */}
            {isMenuOpen && (
              <div className="md:hidden absolute top-full left-0 right-0 bg-blue-600 text-white shadow-lg">
                <Link
                  to="/phoneShop/"
                  // to="/"
                  className="block px-4 py-2 hover:bg-blue-700 transition"
                  onClick={this.toggleMenu}
                >
                  Home
                </Link>
                <Link
                  to="/phoneShop/cart"
                  className="block px-4 py-2 hover:bg-blue-700 transition relative"
                  onClick={this.toggleMenu}
                >
                  Cart
                </Link>
              </div>
            )}

            <ButtonDarkLightToggle
              className="md:hidden"
              onClick={toggleDarkMode}
            />

            <Link
              to="/phoneShop/cart"
              className="md:hidden relative text-white ml-4 hover:text-slate-300"
            >
              <ButtonCart className="-bottom-2 -right-4">
                {cartItems?.length}
              </ButtonCart>
            </Link>
            <button
              className="md:hidden text-white focus:outline-none hover:text-slate-300"
              onClick={this.toggleMenu}
            >
              <FontAwesomeIcon icon={faBars} className="text-[1.5rem] ml-6 " />
            </button>
          </div>
        </div>
      </header>
    );
  }
}

export default Header;
