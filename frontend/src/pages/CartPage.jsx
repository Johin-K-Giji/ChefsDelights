import Navbar from "../components/NavBar";
import Footer from "../components/Footer";
import Cart from "../components/Cart";

const CartPage = () => {
  return (
    <>
      <Navbar />
      <div className="bg-[#FCFAF4] min-h-screen font-instrument pt-6 pb-12 px-4">
        <Cart />
      </div>
      <Footer />
    </>
  );
};

export default CartPage;
