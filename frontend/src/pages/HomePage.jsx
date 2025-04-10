import Footer from "../components/Footer";
import Navbar from "../components/NavBar";
import { Suspense, lazy, useEffect } from "react";
import Skeleton from "../components/Skeleton"; // Create this as a simple loading block
import AOS from "aos";
import "aos/dist/aos.css";

const Carousel = lazy(() => import("../components/Carousel "));
const SignatureProducts = lazy(() => import("../components/SignatureProducts"));
const AboutHome = lazy(() => import("../components/AboutHome"));

const Home = () => {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  return (
    <div className="w-full flex flex-col">
      {/* Navbar */}
      <Navbar />

      {/* Carousel */}
      <Suspense fallback={<Skeleton height="300px" />}>
        <div data-aos="fade-up">
          <Carousel />
        </div>
      </Suspense>

      {/* Signature Products */}
      <Suspense fallback={<Skeleton height="400px" />}>
        <div data-aos="fade-up">
          <SignatureProducts />
        </div>
      </Suspense>

      {/* About Home */}
      <Suspense fallback={<Skeleton height="400px" />}>
        <div data-aos="fade-up">
          <AboutHome />
        </div>
      </Suspense>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Home;
