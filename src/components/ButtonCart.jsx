import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function ButtonCart({ className = "", children }) {
  return (
    <div className="relative text-white">
      <FontAwesomeIcon icon={faShoppingCart} size="lg" />
      <span
        className={`absolute ${className} bg-red-500  text-xs font-bold rounded-full px-2 py-0.5`}
      >
        {children}
      </span>
    </div>
  );
}

export default ButtonCart;
