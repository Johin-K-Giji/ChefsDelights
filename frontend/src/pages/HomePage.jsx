import Footer from "../components/Footer";
import Navbar from "../components/NavBar";
import { Suspense, lazy, useEffect } from "react";
import Skeleton from "../components/Skeleton";
import AOS from "aos";
import "aos/dist/aos.css";
import { Helmet } from "react-helmet";

const Carousel = lazy(() => import("../components/Carousel "));
const SignatureProducts = lazy(() => import("../components/SignatureProducts"));
const AboutHome = lazy(() => import("../components/AboutHome"));

const Home = () => {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  return (
    <div className="w-full flex flex-col">
      {/* ✅ SEO Meta Tags */}
      <Helmet>
  <title>Chef Delights | Authentic Kerala Puttu, Millets, Spices & More</title>
  <meta
    name="description"
    content="Discover the authentic taste of Kerala with Chef Delights. Shop our premium range of puttu powder, millets, spices, and other traditional Indian products."
  />
  <meta
    name="keywords"
    content="Chef Delights, Kerala products, puttu powder, millets, ginger powder, chilly powder, Indian spices, traditional food"
  />
  <link rel="canonical" href="https://yourdomain.com/" />

  {/* Open Graph for social sharing */}
  <meta property="og:title" content="Chef Delights | Traditional Kerala Food Products" />
  <meta
    property="og:description"
    content="Shop handcrafted Kerala specialties like puttu powder, millets, ginger powder, and more — brought to you with quality and tradition in every bite."
  />
  <meta property="og:image" content="https://yourdomain.com/images/home-banner.jpg" />
  <meta property="og:url" content="https://yourdomain.com/" />
  <meta name="twitter:card" content="summary_large_image" />
</Helmet>


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
