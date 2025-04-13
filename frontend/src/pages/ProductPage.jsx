import Navbar from "../components/NavBar";
import Footer from "../components/Footer";
import ProductComponent from "../components/Products";
import banannaImage from "../images/Bananna.png";
import beetrootImage from "../images/Beetroot.png";
import carrotImage from "../images/Carrot.png";
import cornImage from "../images/Corn.png";

const products = [
  {
    id: 1,
    name: "CARROT PUTTU POWDER",
    weight: "150/500gm",
    description:
      "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don’t look even slightly believable.",
    images: [
      banannaImage, // Cover Image
      beetrootImage,
      banannaImage
      ,banannaImage
      ,beetrootImage
    ],
  },
  {
    id: 2,
    name: "BEETROOT PUTTU POWDER",
    weight: "150/500gm",
    description:
      "A healthier alternative with a vibrant color, beetroot puttu powder is rich in nutrients and great in taste.",
    images: [
      cornImage,
      beetrootImage,
      banannaImage,
      banannaImage,
    ],
  },{
    id: 3,
    name: "BEETROOT PUTTU POWDER",
    weight: "150/500gm",
    description:
      "A healthier alternative with a vibrant color, beetroot puttu powder is rich in nutrients and great in taste.",
    images: [
      carrotImage,
      beetrootImage,
      banannaImage,
      banannaImage,
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
