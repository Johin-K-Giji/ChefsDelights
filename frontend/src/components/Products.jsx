import { useState } from "react";
import { FaThLarge, FaList, FaShoppingCart } from "react-icons/fa";
import Button from "./Button";

const ProductComponent = ({ products }) => {
  const [viewMode, setViewMode] = useState("list");

  return (
    <div className="py-16 bg-[#FCFAF4] font-instrument text-center min-h-[600px] flex flex-col justify-center">
      <h2 className="text-2xl font-semibold mb-10">Our Products</h2>

      {/* Toggle View Icons */}
      <div className="flex justify-start max-w-6xl mx-auto mb-6">
        <button
          onClick={() => setViewMode("grid")}
          className={`p-2 mx-2 ${viewMode === "grid" ? "text-blue-600" : "text-gray-600"} text-xl`}
        >
          <FaThLarge />
        </button>
        <button
          onClick={() => setViewMode("list")}
          className={`p-2 mx-2 ${viewMode === "list" ? "text-blue-600" : "text-gray-600"} text-xl`}
        >
          <FaList />
        </button>
      </div>

      {/* Product Display */}
      <div
        className={`w-full mx-auto ${
          viewMode === "grid" ? "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6" : "flex flex-col items-center gap-6"
        }`}
      >
        {viewMode === "list"
          ? products.map((product) => <ListView key={product.id} product={product} />)
          : products.map((product) => <GridView key={product.id} product={product} />)}
      </div>
    </div>
  );
};

// List View Component (Same Design)
const ListView = ({ product }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-lg flex items-center w-[90%] min-h-[450px] mb-12">
      {/* Product Image */}
      <div className="w-1/3 flex justify-center">
        <img src={product.images[0]} alt={product.name} className="w-40 h-auto object-contain" />
      </div>

      {/* Product Details */}
      <div className="w-2/3 pl-6 text-left">
        <h3 className="text-lg font-bold text-orange-600">{product.name}</h3>
        <p className="text-sm font-semibold text-gray-800">{product.weight}</p>
        <p className="text-gray-700 mt-2">{product.description}</p>

        {/* Additional Images */}
        <div className="mt-3 flex space-x-2">
          {product.images.slice(1).map((img, index) => (
            <img key={index} src={img} alt="Product" className="w-12 h-12 object-cover rounded-md" />
          ))}
        </div>

        {/* Buttons */}
        <div className="flex items-center gap-4 mt-4">
          <Button text="Buy Now" width="80px" height="60px" />
          <button className="bg-gray-200 p-2 rounded-full text-xl">
            <FaShoppingCart />
          </button>
        </div>
      </div>
    </div>
  );
};

// Grid View Component (Image in White Square, Details Below, Left-Aligned)
const GridView = ({ product }) => {
  return (
    <div className="flex flex-col w-full ml-4">
      {/* White Box for Image */}
      <div className="bg-white p-4 rounded-lg shadow-lg w-full h-48 flex justify-center items-center">
        <img src={product.images[0]} alt={product.name} className="w-40 h-auto object-contain" />
      </div>

      {/* Product Details Below (Left-Aligned) */}
      <div className="mt-3 text-center">
        <h3 className="text-lg font-bold text-orange-600">{product.name}</h3>
        <p className="text-sm font-semibold text-gray-800">{product.weight}</p>

        {/* Buttons */}
        <div className="flex gap-4 mt-2 justify-center">
          <button className="bg-blue-600 text-white px-4 py-2 rounded-md">Buy Now</button>
          <button className="bg-gray-200 p-2 rounded-full text-xl">
            <FaShoppingCart />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductComponent;
