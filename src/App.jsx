import React from 'react';
import image1 from './assets/Account and Setup.png';
import image2 from './assets/AI.jpg';
import image3 from './assets/test.jpg';
import image4 from './assets/Commerce.jpeg';
import image5 from './assets/CRM.png';
import image6 from './assets/Get Started.jpeg';
import image7 from './assets/Marketing Tools.jpeg';
import image8 from './assets/Messaging.jpeg';
import image9 from './assets/Partners.png';
import image10 from './assets/Reporting and Data.jpeg';
import image11 from './assets/Sales Tools.jpeg';
import image12 from './assets/Service Tools.jpeg';
import image13 from './assets/Web Content.jpeg';
import image14 from './assets/Workspaces.jpeg';


// Mock data for the categories
const categories = [
  { title: "Account and Setup", imgSrc: image1 },
  { title: "AI", imgSrc: image2 },
  { title: "Automation", imgSrc: image3},
  { title: "Commerce", imgSrc: image4 },
  { title: "CRM", imgSrc: image5 },
  { title: "Get Started", imgSrc: image6, label: "UPDATED" },
  { title: "Marketing Tools", imgSrc: image7 },
  { title: "Messaging", imgSrc: image8 },
  { title: "Partners", imgSrc: image9 },
  { title: "Reporting and Data", imgSrc: image10 },
  { title: "Sales Tools", imgSrc: image11 },
  { title: "Service Tools", imgSrc: image12 },
  { title: "Web Content", imgSrc: image13 },
  { title: "Workspaces", imgSrc: image14 }
];


function App() {
  return (
    <div className="min-h-screen bg-gray-50 font-sans">
      

      {/* Header */}
<header className="flex flex-col md:flex-row justify-between items-center px-4 sm:px-6 py-4 bg-white shadow-md space-y-4 md:space-y-0">
  <div className="text-xl sm:text-2xl font-bold text-gray-800 text-center md:text-left">
    <span className="text-orange-500">THAREE</span> Website Testing
  </div>
  <nav className="flex flex-wrap justify-center md:justify-start space-x-4 md:space-x-6 text-gray-600 text-sm sm:text-base">
    <a href="#" className="hover:text-gray-800">Help Center</a>
    <a href="#" className="hover:text-gray-800">Documentation</a>
    <a href="#" className="hover:text-gray-800">Training</a>
    <a href="#" className="hover:text-gray-800">Community</a>
    <a href="#" className="hover:text-gray-800">Blogs</a>
  </nav>
  <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-4 items-center">
    <button className="bg-orange-500 text-white px-4 py-2 rounded hover:bg-orange-600 w-full sm:w-auto">
      Get a demo
    </button>
    <button className="border border-orange-500 text-orange-500 px-4 py-2 rounded hover:bg-orange-100 w-full sm:w-auto">
      Get started free
    </button>
  </div>
</header>

{/* Notification Banner */}
<div className="bg-yellow-100 text-center py-4 px-4 sm:px-6 text-gray-700 text-sm sm:text-base">
  On Monday, October 28th, the support phone line will be closed from 4am until 10am EST. Chat support may be limited due to a regional holiday. You can continue to reach us by clicking the "Help" button in your account.
</div>


      {/* Search Section */}
      <section className="text-center py-12 bg-teal-500 text-white">
        <h1 className="text-3xl font-semibold mb-4">Searching Something</h1>
        <div className="flex justify-center">
          <input
            type="text"
            placeholder="Waiting for Search"
            className="w-1/2 p-3 rounded-l-md text-gray-800"
          />
          <button className="p-3 bg-white text-teal-500 rounded-r-md">
            🔍
          </button>
        </div>
      </section>

      {/* Highest Rated Articles */}
      <section className="px-8 py-12">
        <h2 className="text-2xl font-semibold text-gray-800 mb-6 text-center">Highest rated articles</h2>
        <div className="grid grid-cols-2 gap-6 text-teal-600 text-center">
          <a href="#" className="hover:underline">Connect your personal email</a>
          <a href="#" className="hover:underline">Connect your domain to HubSpot</a>
          <a href="#" className="hover:underline">Import records and activities</a>
          <a href="#" className="hover:underline">HubSpot's default contact properties</a>
          <a href="#" className="hover:underline">Add HubSpot users</a>
          <a href="#" className="hover:underline">Choose your workflow actions</a>
          <a href="#" className="hover:underline">HubSpot billing and payment | FAQs</a>
          <a href="#" className="hover:underline">Academy certifications | FAQs</a>
        </div>
      </section>

      {/* Categories Grid */}
<section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 max-w-5xl px-2 sm:px-4 py-6 mx-auto">
  {categories.map((category, index) => (
    <div
      key={index}
      className="aspect-square bg-white p-4 rounded-lg shadow-md flex flex-col items-center transition transform hover:scale-105"
    >
      <img src={category.imgSrc} alt={category.title} className="mb-3 w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24" />
      <h2 className="text-lg sm:text-xl lg:text-2xl font-medium text-gray-700 text-center">
        {category.title}
      </h2>
      {category.label && (
        <span className="mt-2 text-xs sm:text-sm lg:text-base bg-teal-500 text-white py-1 px-2 rounded-full text-center">
          {category.label}
        </span>
      )}
    </div>
  ))}
</section>


      {/* Footer */}
      <footer className="w-full bg-gray-800 text-gray-200 py-4 text-center text-sm">
        <div className="max-w-5xl mx-auto flex justify-center space-x-4">
          <a href="#" className="hover:text-white">Legal Stuff</a>
          <a href="#" className="hover:text-white">Privacy Policy</a>
          <a href="#" className="hover:text-white">Manage Cookies</a>
        </div>
        <p className="mt-2">© 2024 THAREE, Inc.</p>
      </footer>
    </div>
  );
}

export default App;
