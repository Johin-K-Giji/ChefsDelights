import { useState, useEffect, useRef } from "react";
import Logo from "../images/Logo.png";

const reviews = [
  { id: 1, text: "Absolutely loved it! The best puttu mix I've tried.", name: "Anjali", place: "Kochi" },
  { id: 2, text: "Great texture and taste. Highly recommend!", name: "Rahul", place: "Bangalore" },
  { id: 3, text: "Perfect for breakfast! My family loves it.", name: "Neha", place: "Chennai" },
  { id: 4, text: "Authentic taste and easy to cook.", name: "Vivek", place: "Hyderabad" },
];

const AboutHome = () => {
  const [activeTab, setActiveTab] = useState("story");
  const imgRef = useRef(null);
  const [boxHeight, setBoxHeight] = useState("auto");

  useEffect(() => {
    if (imgRef.current && window.innerWidth >= 768) {
      setBoxHeight(`${imgRef.current.clientHeight}px`);
    } else {
      setBoxHeight("280px");
    }
  }, [activeTab]);

  return (
    <div className="py-16 bg-[#FCFAF4] font-instrument text-center min-h-[600px] flex flex-col justify-center">
      <h2 className="text-center text-xl md:text-2xl font-semibold mt-4 md:mt-8 mb-6 md:mb-8 relative  after:content-[''] after:block after:w-16 after:h-[3px] after:bg-[#157EE1] after:mx-auto after:mt-2">Why Chef’s Delights</h2>

      {/* Content Section */}
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-10 px-6">
        {/* Show image only on md+ screen */}
        {activeTab === "story" && (
          <img
            ref={imgRef}
            src={Logo}
            alt="Chef's Delight"
            className="hidden md:block w-80 h-auto object-contain"
          />
        )}

        {/* Text Container */}
        <div
          className="bg-[#195B68] p-6 md:p-8 rounded-lg text-left w-full overflow-y-auto scrollbar-hide"
          style={{
            minHeight: boxHeight,
            maxHeight: "400px",
            height: activeTab === "reviews" ? (window.innerWidth < 768 ? "280px" : "auto") : "auto",
          }}
        >
          {/* On mobile only, show image inside content for 'story' */}
          {activeTab === "story" && (
            <>
              <div className="flex justify-center md:hidden mb-4">
                <img
                  src={Logo}
                  alt="Chef's Delight"
                  className="w-32 h-auto object-contain"
                />
              </div>
              <p className="text-white text-sm md:text-base leading-relaxed">
                At Chef’s Delights, we bring you the rich culinary traditions of Kerala in every bite.
                From our signature <strong>puttu powder</strong> to premium <strong>millets, ginger powder, and chilly powder</strong>,
                our products are crafted with love and a deep respect for age-old recipes.
                <br /><br />
                We focus on serving customers across <strong>India and the GCC</strong>, delivering the true essence of South Indian flavors
                in a convenient and healthy way.
                <br /><br />
                Our foundation rests on four key pillars: <strong>Authenticity</strong>, <strong>Affordability</strong>,
                <strong>Quality</strong>, and <strong>Natural Ingredients</strong> — making every meal not just tasty but trustworthy.
              </p>
            </>
          )}

          {activeTab === "reviews" && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full h-full overflow-y-auto scrollbar-hide pr-2">
              {reviews.map((review) => (
                <div
                  key={review.id}
                  className="bg-white p-4 shadow-md rounded-md transform hover:scale-105 transition"
                >
                  <p className="text-gray-800 text-sm md:text-base mb-2">"{review.text}"</p>
                  <p className="text-gray-600 text-xs md:text-sm font-medium">
                    — {review.name}, {review.place}
                  </p>
                </div>
              ))}
            </div>
          )}

          {activeTab === "package" && (
            <div className="text-white text-sm md:text-base space-y-4">
              <p><strong>Authentic:</strong> All our products follow traditional recipes from Kerala, ensuring each pack delivers genuine regional flavor.</p>
              <p><strong>Affordable:</strong> We believe everyone should have access to healthy, tasty food. Our pricing is fair and inclusive.</p>
              <p><strong>Quality:</strong> We carefully select high-quality ingredients and maintain strict hygiene standards during production and packaging.</p>
              <p><strong>Natural:</strong> No artificial preservatives or colors. Just pure, wholesome ingredients you can trust.</p>
            </div>
          )}
        </div>
      </div>

      {/* Tab Navigation */}
      <div className="flex justify-center mt-8 space-x-10 text-base md:text-lg">
        {["story", "reviews", "package"].map((tab) => (
          <button
            key={tab}
            className={`relative pb-2 ${activeTab === tab ? "font-bold" : "text-gray-600"} transition`}
            onClick={() => setActiveTab(tab)}
          >
            {tab.charAt(0).toUpperCase() + tab.slice(1)}
            {activeTab === tab && <div className="absolute w-full h-[2px] bg-black bottom-0 left-0"></div>}
          </button>
        ))}
      </div>
    </div>
  );
};

export default AboutHome;
