import carousel1 from "../images/Carousel1.png";
import banannaImage from "../images/Bananna.png";
import beetrootImage from "../images/Beetroot.png";
import cornImage from "../images/Corn.png";

const Gallery = () => {

  const galleryImages = [
    { id: 1, size: 'row-span-2 col-span-1', src: carousel1 },
    { id: 2, size: 'row-span-1 col-span-1', src: banannaImage },
    { id: 3, size: 'row-span-1 col-span-1', src: beetrootImage },
    { id: 4, size: 'row-span-2 col-span-1', src: cornImage },
    { id: 5, size: 'row-span-1 col-span-1', src: '/images/image5.jpg' },
    { id: 6, size: 'row-span-1 col-span-1', src: '/images/image6.jpg' },
    { id: 7, size: 'row-span-1 col-span-1', src: '/images/image7.jpg' },
    { id: 8, size: 'row-span-1 col-span-1', src: '/images/image8.jpg' },
    { id: 9, size: 'row-span-1 col-span-1', src: '/images/image9.jpg' },
  ];

  return (
    <div className="bg-[#FCFAF4] py-12 px-4 md:px-16 font-instrument">
      <h2 className="text-center text-xl md:text-2xl font-semibold mt-4 md:mt-8 mb-6 md:mb-8 relative  after:content-[''] after:block after:w-16 after:h-[3px] after:bg-[#157EE1] after:mx-auto after:mt-2">
        Our Gallery
      </h2>

      <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 justify-center items-center max-w-6xl mx-auto">
        {galleryImages.map((img) => (
          <div
            key={img.id}
            className={`bg-gray-300 rounded-lg ${img.size}`}
            style={{
              backgroundImage: `url(${img.src})`,  // Corrected syntax
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;
