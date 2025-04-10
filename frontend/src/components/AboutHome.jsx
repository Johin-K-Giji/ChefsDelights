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
      <h2 className="text-2xl font-semibold mb-10">Why Chef’s Delights</h2>

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
              <p className="text-white text-sm md:text-base">
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
                industry's standard dummy text ever since the 1500s.
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
            <p className="text-white text-sm md:text-base">
              Our packages include carefully curated ingredients to ensure the best taste and quality.
            </p>
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
