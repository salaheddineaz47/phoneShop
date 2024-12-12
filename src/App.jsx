import { Component } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import ProductList from "./components/ProductList";
import Cart from "./components/Cart";
import Footer from "./components/Footer";
import { ToastContainer, toast, Slide, Bounce, Zoom } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cartItems: [],
      darkMode: false,
    };
  }

  toggleDarkMode = () => {
    this.setState((curState) => {
      return { darkMode: !curState.darkMode };
    });
  };

  componentDidUpdate(_, prevState) {
    if (prevState.darkMode !== this.state.darkMode) {
      localStorage.setItem(
        "mode",
        JSON.stringify({ darkMode: this.state.darkMode })
      );

      if (this.state.darkMode) {
        document.body.classList.add("dark");
      } else {
        document.body.classList.remove("dark");
      }
    }
  }

  componentDidMount() {
    const mode = JSON.parse(localStorage.getItem("mode"));

    if (mode?.darkMode !== undefined) {
      this.setState({ darkMode: mode.darkMode });

      if (mode.darkMode) {
        document.body.classList.add("dark");
      }
    }

    toast(
      <>
        📱 Welcome to PhoneShop! ✨
        <br />
        Your tech journey starts here. 🎉
      </>,
      {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: this.state.darkMode ? "dark" : "light",
        transition: Bounce,
      }
    );
  }

  handleAddToCart = (product, qt) => {
    if (qt === 0) {
      this.notify("error", "Choose a valid Quantity");
      return;
    }
    this.setState((prevState) => {
      const existingItem = prevState.cartItems.find(
        (item) => item.id === product.id
      );
      if (existingItem) {
        return {
          cartItems: prevState.cartItems.map((item) =>
            item.id === product.id
              ? { ...item, quantity: item.quantity + qt }
              : item
          ),
        };
      } else {
        return {
          cartItems: [...prevState.cartItems, { ...product, quantity: qt }],
        };
      }
    });
  };

  handleRemoveCartItem = (id) => {
    this.setState((prevState) => {
      return {
        cartItems: prevState.cartItems.filter((item) => item.id !== id),
      };
    });
    this.notify("warn", "Item successfully removed");
  };

  notify = (type, message) => {
    const defaultMessage = "Item successfully added";
    const toastType = type || "success";
    const toastMessage = message || defaultMessage;

    toast[toastType](toastMessage, {
      position: "top-center",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      transition: Slide,
      draggable: true,
      theme: this.state.darkMode ? "dark" : "light",
    });
  };

  render() {
    const { cartItems, darkMode } = this.state;

    return (
      <Router>
        <Header cartItems={cartItems} toggleDarkMode={this.toggleDarkMode} />
        <Routes>
          <Route
            // path="/"
            path="/phoneShop/"
            element={
              <ProductList
                onAddToCart={this.handleAddToCart}
                cartItems={cartItems}
                onRemoveCartItem={this.handleRemoveCartItem}
                handleNotification={this.notify}
              />
            }
          />
          <Route
            path="/phoneShop/cart"
            element={
              <Cart
                cartItems={cartItems}
                handleRemoveCartItem={this.handleRemoveCartItem}
                onAddToCart={this.handleAddToCart}
              />
            }
          />
        </Routes>
        <Footer />
        <ToastContainer
          theme={darkMode ? "dark" : "light"}
          position="top-center"
          autoClose={2000}
          hideProgressBar={false}
          limit={2}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />
      </Router>
    );
  }
}

export default App;
