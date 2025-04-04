import AboutHome from "../components/AboutHome";
import Carousel from "../components/Carousel ";
import Footer from "../components/Footer";
import Navbar from "../components/NavBar";
import SignatureProducts from "../components/SignatureProducts";

const Home = () => {
  return (
    <div className="w-full flex flex-col">
      {/* Navbar */}
      <Navbar />

      {/* Carousel Section */}
      <Carousel/>

      {/* Signature Products Section */}
      <SignatureProducts />

      <AboutHome/>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Home;
