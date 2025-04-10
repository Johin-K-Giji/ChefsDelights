const Gallery = () => {
    const galleryImages = [
      { id: 1, size: 'row-span-2 col-span-1' },
      { id: 2, size: 'row-span-1 col-span-1' },
      { id: 3, size: 'row-span-1 col-span-1' },
      { id: 4, size: 'row-span-2 col-span-1' },
      { id: 5, size: 'row-span-1 col-span-1' },
      { id: 6, size: 'row-span-1 col-span-1' },
      { id: 7, size: 'row-span-1 col-span-1' },
      { id: 8, size: 'row-span-1 col-span-1' },
      { id: 9, size: 'row-span-1 col-span-1' },
    ];
  
    return (
      <div className="bg-[#FCFAF4] py-12 px-4 md:px-16 font-instrument">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-8">
          Our <span className="underline underline-offset-4 decoration-gray-500">Gallery</span>
        </h2>
  
        <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 justify-center items-center max-w-6xl mx-auto">
          {galleryImages.map((img) => (
            <div
              key={img.id}
              className={`bg-gray-300 rounded-lg ${img.size}`}
            ></div>
          ))}
        </div>
      </div>
    );
  };
  
  export default Gallery;
  