import { FaUser, FaPhone, FaHome } from "react-icons/fa";
import cornImage from "../images/Corn.png";

const BuyPage = () => {
  return (
    <div className="bg-[#FCFAF4] text-[#222] font-instrument min-h-screen py-6 px-3 sm:px-6 lg:px-16">
      <div className="flex flex-col lg:flex-row gap-6">
        {/* LEFT FORM */}
        <div className="w-full lg:w-2/3 bg-white shadow-md rounded-xl p-4 sm:p-6 md:p-8">
          <h2 className="text-lg sm:text-xl md:text-2xl font-semibold mb-4 text-center">
            Enter Your Delivery Details
          </h2>

          <form className="grid grid-cols-1 gap-5 text-sm sm:text-base">
            <InputRow icon={<FaUser />} placeholder="Full Name" required />
            <InputRow icon={<FaPhone />} placeholder="Phone Number" required />
            <InputRow icon={<FaPhone />} placeholder="Alternate Phone Number (Optional)" />

            {/* Address Section */}
            {/* Address Section */}
<div className="grid grid-cols-2 gap-4">
  <InputRow icon={<FaHome />} placeholder="House / Flat No." required />
  <InputRow icon={<FaHome />} placeholder="Street / Area" required />
  <InputRow icon={<FaHome />} placeholder="Landmark (Optional)" />
  <InputRow icon={<FaHome />} placeholder="City" required />
  <InputRow icon={<FaHome />} placeholder="State" required />
  <InputRow icon={<FaHome />} placeholder="Pincode" required />
</div>

          </form>
        </div>

        {/* RIGHT ORDER SUMMARY */}
        <div className="w-full lg:w-1/3">
          <div className="bg-white shadow-md rounded-xl p-4 sm:p-6 sticky top-6">
            <h3 className="text-base sm:text-lg font-semibold mb-3 border-b pb-2">Order Summary</h3>

            {/* Product Details */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 mb-4">
              <img src={cornImage} alt="Corn" className="w-20 h-20 object-contain rounded" />
              <div className="flex-1">
                <h4 className="text-sm font-medium">Fresh Corn</h4>
                <p className="text-xs text-gray-500">Price: ₹249.00 x 2</p>
                <p className="text-sm font-semibold mt-1">Subtotal: ₹498.00</p>
              </div>
            </div>

            {/* Summary Rows */}
            <div className="space-y-3 text-sm">
              <SummaryRow label="Product Subtotal" value="₹498.00" />
              <SummaryRow label="Delivery Charge" value="₹49.00" />
              <hr />
              <SummaryRow label="Total Amount" value="₹547.00" bold={true} />
            </div>

            <div className="mt-5">
              <button className="w-full bg-[#c1a365] hover:bg-[#b5914c] transition text-white font-medium py-2.5 rounded-full text-sm">
                Confirm Order
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Reusable InputRow Component
const InputRow = ({ icon, placeholder, required = false }) => (
  <div className="flex items-center border-b border-gray-300 focus-within:border-[#c1a365] transition col-span-1">
    <div className="text-gray-500 mr-2 sm:mr-3">{icon}</div>
    <input
      type="text"
      placeholder={placeholder}
      className="w-full py-2 outline-none text-sm placeholder-gray-400"
      required={required}
    />
  </div>
);

// Order Summary Row
const SummaryRow = ({ label, value, bold = false }) => (
  <div className="flex justify-between items-center">
    <span className={bold ? "font-semibold" : ""}>{label}</span>
    <span className={bold ? "font-semibold" : ""}>{value}</span>
  </div>
);

export default BuyPage;
