import Button from "./Button";

const products = [
  {
    id: 1,
    name: "Carrot Puttupodi",
    price: "₹ 150/500g",
    image: "/images/carrot.png", // Update with correct path
    bgColor: "bg-[#E9F5C9]", // Light Green
  },
  {
    id: 2,
    name: "Beetroot Puttupodi",
    price: "₹ 100/500g",
    image: "/images/beetroot.png", // Update with correct path
    bgColor: "bg-[#FDE3C8]", // Light Orange
  },
  {
    id: 3,
    name: "Chocolate Puttupodi",
    price: "₹ 200/500g",
    image: "/images/chocolate.png", // Update with correct path
    bgColor: "bg-[#FDE3C8]", // Light Orange
  },
];

const SignatureProducts = () => {
  return (
    <div className="py-12 bg-[#FCFAF4] font-instrument">
      <h2 className="text-center text-2xl font-semibold mb-8">Our Signature</h2>

      {/* Product Grid */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 px-4">
        {products.map((product) => (
          <div key={product.id} className="flex flex-col items-center">
            <div className={`p-6 ${product.bgColor} rounded-lg flex flex-col items-center`}>
              <img src={product.image} alt={product.name} className="w-48 h-56 object-contain" />
              
            </div>
            {/* Price Outside the Card */}
            <h3 className="mt-4 font-medium">{product.name}</h3>
            <p className="mt-2 text-gray-700 font-medium">{product.price}</p>
          </div>
        ))}
      </div>

      {/* View All Products Button */}
      <div className="flex justify-center mt-8">
        <Button text="View all Products" width="200px" height="60px" />
      </div>
    </div>
  );
};

export default SignatureProducts;
