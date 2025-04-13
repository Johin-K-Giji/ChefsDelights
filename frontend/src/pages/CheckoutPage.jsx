import Navbar from "../components/NavBar";
import Footer from "../components/Footer";
import BuyPage from "../components/BuyPage";

const Checkout = () => {
  return (
    <>
      <Navbar />
      <div className="bg-[#FCFAF4] min-h-screen font-instrument pt-6 pb-12 px-4">
        <BuyPage/>
      </div>
      <Footer />
    </>
  );
};

export default Checkout;
