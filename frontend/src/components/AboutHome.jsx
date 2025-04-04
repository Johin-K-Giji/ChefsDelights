import { useState, useEffect, useRef } from "react";

const reviews = [
  { id: 1, text: "Absolutely loved it! The best puttu mix I've tried." },
  { id: 2, text: "Great texture and taste. Highly recommend!" },
  { id: 3, text: "Perfect for breakfast! My family loves it." },
];

const AboutHome = () => {
  const [activeTab, setActiveTab] = useState("story");
  const imgRef = useRef(null);
  const [boxHeight, setBoxHeight] = useState("auto");

  // Adjust text box height dynamically based on image height
  useEffect(() => {
    if (imgRef.current) {
      setBoxHeight(`${imgRef.current.clientHeight}px`);
    }
  }, []);

  return (
    <div className="py-16 bg-[#FCFAF4] font-instrument text-center min-h-[600px] flex flex-col justify-center">
      <h2 className="text-2xl font-semibold mb-10">Why Chef’s Delights</h2>

      {/* Content Section */}
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-10 px-6">
        {/* Image */}
        <img
          ref={imgRef}
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZ6xDbJ46WdVvVO_7P7F19YjKNpGeXLXm2xw&s"
          alt="Chef's Delight"
          className="w-80 h-auto object-contain"
        />
        
        {/* Text Container (same height as the image) */}
        <div
          className="bg-[#A0C8D2] p-8 rounded-lg text-left w-full flex items-center justify-center"
          style={{ minHeight: boxHeight }}
        >
          {/* Story Tab */}
          {activeTab === "story" && (
            <p className="text-gray-800">
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
              industry's standard dummy text ever since the 1500s.
            </p>
          )}

          {/* Reviews Tab */}
          {activeTab === "reviews" && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full">
              {reviews.map((review) => (
                <div key={review.id} className="bg-white p-4 shadow-md rounded-md transform hover:scale-105 transition">
                  <p className="text-gray-800">{review.text}</p>
                </div>
              ))}
            </div>
          )}

          {/* Package Tab */}
          {activeTab === "package" && (
            <p className="text-gray-800">
              Our packages include carefully curated ingredients to ensure the best taste and quality.
            </p>
          )}
        </div>
      </div>

      {/* Tab Navigation */}
      <div className="flex justify-center mt-8 space-x-10 text-lg">
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
