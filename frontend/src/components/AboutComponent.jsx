const features = [
    {
      id: 1,
      desc: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour",
      icon: "/images/service1.png", // replace with real path
    },
    {
      id: 2,
      desc: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration",
      icon: "/images/service2.png",
    },
    {
      id: 3,
      desc: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered",
      icon: "/images/service3.png",
    },
    {
      id: 4,
      desc: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered",
      icon: "/images/service4.png",
    },
  ];
  
  const AboutComponent = () => {
    return (
      <div className="bg-[#FCFAF4] text-[#222] font-instrument">
        {/* Our Journey Section */}
        <section className="max-w-6xl mx-auto px-4 py-16">
          <h2 className="text-center text-xl md:text-2xl font-semibold mb-8">Our Journey</h2>
          <div className="flex flex-col md:flex-row items-center gap-10">
            <img
              src="/images/logo.png" // replace with your actual logo path
              alt="Chef's Delights Logo"
              className="w-52 object-contain"
            />
            <div className="bg-white p-6 shadow-md rounded-md max-w-xl text-sm leading-6">
              <p>
                There are many variations of passages of Lorem Ipsum available,
                but the majority have suffered alteration in some form, by injected
                humour, or randomised words which don't look even slightly believable.
                If you are going to use a passage of Lorem Ipsum, you need to be sure
                there isn't anything embarrassing hidden in the middle of text. All
                the Lorem Ipsum generators on the Internet tend to repeat predefined
                chunks as necessary, making this the first true generator on the Internet.
              </p>
            </div>
          </div>
        </section>
  {/* What We Provide Section */}
<section className="py-16">
  <h2 className="text-center text-xl md:text-2xl font-semibold mb-12">What we Provide</h2>

  <div className="max-w-6xl mx-auto px-4">
    <div className="flex flex-col sm:grid sm:grid-cols-2 lg:grid-cols-4 gap-6 items-center justify-center">
      {features.map((item) => (
        <div key={item.id} className="flex sm:flex-col items-center sm:items-center text-left sm:text-center gap-3 sm:gap-0 w-full sm:w-auto">
          <div className="w-14 h-14 sm:w-20 sm:h-20 bg-gray-300 rounded-full flex items-center justify-center">
            <img
              src={item.icon}
              alt="Service"
              className="w-8 h-8 sm:w-10 sm:h-10 object-contain"
            />
          </div>
          <p className="text-xs sm:text-sm text-gray-700 max-w-[220px] sm:max-w-none">
            {item.desc}
          </p>
        </div>
      ))}
    </div>
  </div>
</section>


{/* How We Provide Section */}
<section className="py-16 bg-[#FCFAF4]">
  <h2 className="text-center text-xl md:text-2xl font-semibold mb-12">How we Provide</h2>

  <div className="max-w-6xl mx-auto px-4 space-y-12">
    {[1, 2, 3, 4].map((step, index) => (
      <div
        key={step}
        className={`flex flex-col ${
          index % 2 !== 0 ? 'md:flex-row-reverse' : 'md:flex-row'
        } items-center md:items-start gap-4 md:gap-12`}
      >
        {/* Icon Section */}
        <div className="flex flex-col items-center text-center md:text-left">
          <div className="text-sm md:text-base text-gray-600 font-medium mb-2">Step {step}</div>
          <div className="w-16 h-16 md:w-20 md:h-20 bg-gray-300 rounded-full flex items-center justify-center">
            {/* Optional: Replace with icon */}
            <span className="text-sm md:text-lg font-semibold">S{step}</span>
          </div>
        </div>

        {/* Description */}
        <div className="text-center md:text-left max-w-xs md:max-w-md text-sm md:text-base text-gray-700 leading-relaxed">
          There are many variations of passages of Lorem Ipsum available,
          but the majority have suffered alteration in some form.
        </div>
      </div>
    ))}
  </div>
</section>



      </div>
    );
  };
  
  export default AboutComponent;
  