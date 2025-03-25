import Carousel from "../components/Carousel ";
import Footer from "../components/Footer";
import Navbar from "../components/NavBar";

const Home = () => {
  return (
    <div className="w-full h-screen flex flex-col">
      {/* Navbar */}
      <Navbar />

      {/* Carousel Section */}
      <div className="flex-1">
        <Carousel />
      </div>
      <Footer/>
    </div>
  );
};

export default Home;
