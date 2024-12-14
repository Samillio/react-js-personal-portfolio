export default function AboutMe() {
  return (
    <section id="about-me" className="about-section">
      {/* Header Section */}
      <div className="bg-blue-900 text-white py-16 px-8">
        <h2 className="text-center text-4xl font-bold mb-4">About Me</h2>
        <p className="text-center max-w-3xl mx-auto">
          Welcome to my professional journey! Explore my expertise in electrical engineering and computer technology, including computer networking, web development, and hardware repair.
        </p>
      </div>

      {/* Main Content Section */}
      <div className="flex flex-col lg:flex-row items-center py-16 px-8 max-w-7xl mx-auto">
        {/* Image Section */}
        <div className="about-section-img flex-1 mb-8 lg:mb-0">
          <img
            src="./img/about-me.png"
            alt="About Me"
            className="w-full max-w-sm lg:max-w-md mx-auto rounded-lg shadow-lg"
          />
        </div>

        {/* Text Content Section */}
        <div className="about-section-content-box flex-1 lg:pl-16">
          <div className="about-section-content space-y-6">
            <p className="text-gray-700 leading-relaxed">
              I am a passionate and skilled professional specializing in electrical engineering and computer technology, with a strong focus on computer networking, programming, and web development. My journey has been driven by a love for problem-solving and a dedication to innovation.
            </p>
            <p className="text-gray-700 leading-relaxed">
              With expertise in mobile phone software and hardware repair, as well as computer repair and maintenance, I provide comprehensive solutions to ensure seamless functionality for individuals and businesses. My commitment to staying updated with emerging technologies enables me to deliver cutting-edge services, whether building responsive websites, troubleshooting network issues, or enhancing device performance.
            </p>
            <p className="text-blue-900 font-semibold">
              Electrician | Computer Engineer
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
