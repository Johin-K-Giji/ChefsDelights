import { useCart } from "../context/CartContext";
import Button from "./Button";

const CartComponent = () => {
  const { cartItems, removeFromCart, clearCart } = useCart();

  return (
    <div className="bg-[#FCFAF4] py-10 px-4 sm:px-8 font-instrument">
      <h2 className="text-2xl font-semibold text-center mb-8">Your Cart</h2>

      {cartItems.length === 0 ? (
        <p className="text-center text-gray-600">Your cart is empty.</p>
      ) : (
        <>
          <div className="space-y-6 max-w-4xl mx-auto">
            {cartItems.map((item, index) => (
              <div key={index} className="bg-white p-4 rounded-lg shadow flex flex-col sm:flex-row gap-4">
                <img src={item.images[0]} alt={item.name} className="w-32 h-32 object-contain rounded" />
                <div className="flex flex-col justify-between w-full">
                  <div>
                    <h3 className="text-lg font-bold text-orange-600">{item.name}</h3>
                    <p className="text-sm text-gray-800">{item.weight}</p>
                    <p className="text-sm text-gray-600 mt-1">{item.description}</p>
                  </div>
                  <button
                    className="text-sm text-red-500 mt-2 hover:underline self-end"
                    onClick={() => removeFromCart(item.id)}
                  >
                    Remove
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-10 text-center">
            <Button text="Checkout" width="160px" height="50px" />
            <button onClick={clearCart} className="ml-4 text-sm text-red-500 underline">
              Clear Cart
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default CartComponent;
