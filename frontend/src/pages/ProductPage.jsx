import Navbar from "../components/NavBar";
import Footer from "../components/Footer";
import ProductComponent from "../components/Products";

const products = [
  {
    id: 1,
    name: "CARROT PUTTU POWDER",
    weight: "150/500gm",
    description:
      "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don’t look even slightly believable.",
    images: [
      "https://via.placeholder.com/150/cover-image", // Cover Image
      "https://via.placeholder.com/150/image1",
      "https://via.placeholder.com/150/image2",
      "https://via.placeholder.com/150/image3",
    ],
  },
  {
    id: 2,
    name: "BEETROOT PUTTU POWDER",
    weight: "150/500gm",
    description:
      "A healthier alternative with a vibrant color, beetroot puttu powder is rich in nutrients and great in taste.",
    images: [
      "https://via.placeholder.com/150/cover-image",
      "https://via.placeholder.com/150/image1",
      "https://via.placeholder.com/150/image2",
      "https://via.placeholder.com/150/image3",
    ],
  },
];

const ProductPage = () => {
  return (
    <div>
      <Navbar />
      <ProductComponent products={products} />
      <Footer />
    </div>
  );
};

export default ProductPage;
