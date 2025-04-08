import React from 'react';
import { useNavigate } from 'react-router-dom';
import RhitaImage from "../assets/rhitahs.jpg";
import FaicalImage from "../assets/hdshotFaical.jpg";

const AboutPage = () => {
  const navigate = useNavigate();
  const toggleTheme = () => {
    document.documentElement.classList.toggle("dark");
  };
  const handleContactClick = () => {
    // Navigate to the home page and scroll to #contact
    navigate('/#contact');
    setTimeout(() => {
      const contactElement = document.getElementById('contact');
      if (contactElement) {
        contactElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }, 0); // Ensure scrolling happens after navigation
  };
  return (
    <div className="bg-white text-gray-800 mt-6 bg-white dark:bg-darkTheme text-black dark:text-white">
      {/* Header Section */}
      <div className="text-center py-8 px-4 text-black font-mono">
        <h1 className="text-5xl font-bold mb-4 relative z-[100]">The Blueprint</h1>
        <blockquote className="text-3xl italic max-w-2xl mx-auto relative z-[100]">
          “Every giant leap begins with a single build.”
        </blockquote>
      </div>
      {/*Button talk with us */}
      <div className="flex justify-center mt-8">
          <button
            onClick={handleContactClick}
            className="inline-block bg-blue-600 hover:bg-blue-700 text-white text-lg font-mono font-semibold px-6 py-3 rounded-lg shadow-md transition-transform transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
          >
            Talk With Us
          </button>
        </div>

      {/* Our Story Section */}
      <section className="py-16 px-8 max-w-5xl mx-auto">
        <h2 className="text-5xl font-bold mb-6 font-mono text-center text-black">Building Bridges for Small Business Success</h2>
        <p className="text-2xl leading-relaxed text-center text-gray-700">
        BuildrHub was born from a desire to level the playing field for <strong>small businesses</strong>. 
        We noticed that while large corporations thrived with access to <strong>cutting-edge tools 
        and strategies</strong>, small businesses often struggled to keep up. Inspired by this gap, 
        we set out to create a hub where small businesses could access the resources, expertise, 
        and support they need to grow and succeed. Our <strong>mission</strong> is to provide innovative solutions 
        that empower entrepreneurs and turn their aspirations into reality.
        <hr className="my-6"></hr>
      We started with a simple idea: to be a <strong>trusted partner for small businesses</strong>. 
      While our primary focus remains on <strong>web solutions</strong> through <strong>BuildrNet</strong>, 
      we are actively working on expanding into additional areas like <strong>customer loyalty</strong>
      with <strong>BuildrRewards</strong>. This evolution reflects our commitment to staying <strong>innovative and meeting 
      the growing needs of our clients</strong>.
        </p>
      </section>

{/* Section */}
      <section className="py-16 bg-gray-100">
      <div className="text-center mb-12">
        <h2 className="text-5xl font-bold text-gray-800 font-mono">How We Help</h2>
        <p className="text-gray-600 mt-2 text-lg">
          Explore our tailored solutions designed to help small businesses thrive.
        </p>
      </div>
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 px-6">
        {/* BuildrNet Card */}
        <div className="p-6 bg-white shadow-md rounded-lg text-lg">
          <div className="flex items-center mb-4">
            <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center">
              <span className="text-white text-2xl">🌐</span>
            </div>
            <h3 className="text-3xl font-bold text-gray-800 ml-4 font-mono">BuildrNet</h3>
          </div>
          <p className="text-gray-600 text-2xl">
            BuildrNet specializes in <strong>web design</strong>, <strong>development</strong>, and
            <strong> social media optimization</strong>. We create high-performing websites and strong online
            presences to help businesses connect with their audience.
          </p>
        </div>

        {/* BuildrLoyalty Card */}
        <div className="p-6 bg-white shadow-md rounded-lg text-lg">
          <div className="flex items-center mb-4">
            <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center">
              <span className="text-white text-2xl">🎁</span>
            </div>
            <h3 className="text-3xl font-bold text-gray-800 ml-4 font-mono">BuildrLoyalty <span className="text-sm text-gray-500">(Coming Soon)</span></h3>
          </div>
          <p className="text-gray-600 text-2xl">
            BuildrLoyalty is our upcoming <strong>rewards program</strong> solution. Turn your everyday
            customers into loyal clients by creating personalized and rewarding experiences.
          </p>
        </div>
      </div>
      </section>

      {/* Team Section */}
      <section className="py-16 px-8 mt-8 bg-white">
        <h2 className="text-5xl font-bold text-center mb-8 font-mono">Who We Are</h2>
        <div className="flex flex-wrap justify-center sm: gap-8">
          {/* Team Member 1 */}
          <div className="w-80 text-center p-4 bg-gray-100 shadow-lg rounded-lg">
          <img src={RhitaImage} alt="Rhita" className="w-40 h-40 mx-auto rounded-full object-cover mb-4" />

            <h3 className="text-2xl font-semibold mb-2 font-mono">Rhita Sbai</h3>
            <p className="text-sm text-gray-600">
            Rhita’s journey began with a passion for design and problem-solving, 
            rooted in her background in industrial engineering. 
            With a unique ability to merge creativity with analytical thinking,
             Rhita has made it her mission to help small businesses stand out and thrive. 
             Whether it’s through branding, design, or strategic planning,
              her vision is to enable growth through innovative solutions.
            </p>
          </div>
          {/* Team Member 2 */}
          <div className="w-80 text-center p-4 bg-gray-100 shadow-lg rounded-lg">
          <img src={FaicalImage} alt="Rhita" className="w-40 h-40 mx-auto rounded-full object-cover mb-4" />
            <h3 className="text-2xl font-semibold mb-2 font-mono">Faical Al Alawi</h3>
            <p className="text-sm text-gray-600">
            Faical brings a wealth of expertise in financial analysis and technology. 
            With a passion for uncovering opportunities and solving challenges,
             he focuses on helping businesses make data-driven decisions that drive success.
              His commitment to finding solutions ensures that BuildrHub clients are always a 
              step ahead in their industries.
            </p>
          </div>
        </div>
      </section>


    </div>
  );
};

export default AboutPage;
