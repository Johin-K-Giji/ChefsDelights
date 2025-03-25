import { FaInstagram, FaWhatsapp, FaFacebook } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#0D4F66] text-white py-10 px-6 md:px-16">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Left Section */}
        <div>
          <h2 className="text-lg font-semibold">Chef’s Delights</h2>
          <p className="text-sm mt-2">Copyright © Chef’s Delights</p>
        </div>

        {/* Navigation Links */}
        <div>
          <h3 className="text-lg font-semibold mb-2">Home</h3>
          <ul className="space-y-1 text-sm">
            <li>About</li>
            <li>Products</li>
            <li>Gallery</li>
          </ul>
        </div>

        {/* Policies */}
        <div>
          <h3 className="text-lg font-semibold mb-2">Policies</h3>
          <ul className="space-y-1 text-sm">
            <li>Privacy Policy</li>
            <li>Terms and Conditions</li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-lg font-semibold mb-2">Contact Us</h3>
          <p className="text-sm">+91 9632451125</p>
          <p className="text-sm">+91 9632451125</p>
        </div>
      </div>

      {/* Social Media Icons */}
      <div className="flex justify-center mt-6 space-x-6">
        <FaInstagram className="text-xl cursor-pointer hover:text-gray-300" />
        <FaWhatsapp className="text-xl cursor-pointer hover:text-gray-300" />
        <FaFacebook className="text-xl cursor-pointer hover:text-gray-300" />
      </div>
    </footer>
  );
};

export default Footer;
