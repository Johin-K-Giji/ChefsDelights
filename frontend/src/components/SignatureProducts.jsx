import Button from "./Button";
import {Link} from "react-router-dom"
import banannaImage from "../images/BanannaP.png";


const products = [
  {
    id: 1,
    name: "Carrot Puttupodi",
    price: "₹ 150/500g",
    image: banannaImage,
    bgColor: "bg-[#E9F5C9]",
  },
  {
    id: 2,
    name: "Beetroot Puttupodi",
    price: "₹ 100/500g",
    image: banannaImage,
    bgColor: "bg-[#FDE3C8]",
  },
  {
    id: 3,
    name: "Chocolate Puttupodi",
    price: "₹ 200/500g",
    image: banannaImage,
    bgColor: "bg-[#FDE3C8]",
  },
];

const SignatureProducts = () => {
  return (
    <div className="py-10 bg-[#FCFAF4] font-instrument">
      <h2 className="text-center text-xl md:text-2xl font-semibold mb-6 md:mb-8">
        Our Signature
      </h2>

      {/* Product Layout: Horizontal on Mobile, Grid on Desktop */}
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex md:grid md:grid-cols-3 gap-6 md:gap-8 overflow-x-auto no-scrollbar no-scrollbar">
          {products.map((product) => (
            <div
              key={product.id}
              className="flex-shrink-0 w-[240px] md:w-auto flex flex-col items-center"
            >
              <div
                className={`p-4 md:p-6 ${product.bgColor} rounded-xl flex flex-col items-center`}
              >
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-32 h-40 md:w-48 md:h-56 object-contain"
                />
              </div>
              <h3 className="mt-3 text-base md:text-xl font-extrabold text-center">
                {product.name}
              </h3>
              <p className="mt-1 text-gray-700 text-sm md:text-base font-bold text-center">
                {product.price}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Button */}
      <div className="flex justify-center mt-8">
        <Link to="/products">
        <Button
          text="View all Products"
          width="160px"
          height="50px"
          className="text-sm"
        /></Link> 
      </div>
    </div>
  );
};

export default SignatureProducts;
