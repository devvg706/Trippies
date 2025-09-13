import React from "react";
import { OrbitingCircles } from "@/components/magicui/orbiting-circles";
import { FaYoutube, FaTwitter, FaFacebook, FaInstagram } from "react-icons/fa";

import { cn } from "@/lib/utils";

const About = () => {
  const features = [
    {
      title: "Explore Anywhere",
      desc: "Plan trips across 100+ destinations with personalized recommendations.",
      highlight: true,
      action: "Start Exploring",
    },
    {
      title: "Smart Itineraries",
      desc: "AI-powered plans tailored to your budget, time, and travel style.",
    },
    {
      title: "Group Planning",
      desc: "Easily coordinate with friends and family, share itineraries, and stay in sync.",
    },
    {
      title: "Trusted Reviews",
      desc: "Real traveler experiences to guide your choices and avoid surprises.",
    },
    {
      title: "Budget Friendly",
      desc: "Find the best deals on stays, food, and transport without breaking the bank.",
    },
    {
      title: "Travel Ready",
      desc: "Get packing lists, maps, and reminders so you’re always ready to go.",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-[#0a0a1a] to-black text-gray-300 px-6 md:px-12 py-16">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto mb-16">
        <h2 className="text-4xl md:text-5xl font-bold text-white drop-shadow-lg">
          About <span className="text-blue-400">Trippies</span>
        </h2>
        <p className="mt-4 text-lg text-gray-400">
          At <span className="text-blue-300 font-semibold">Trippies</span>, we believe every journey is a story waiting 
          to be told. We help travelers explore hidden gems, iconic landmarks, 
          and unforgettable experiences across the globe.
        </p>
      </div>

      {/* Grid Section (Destinations) */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
        {/* Card 1 */}
        <div className="bg-[#111827] rounded-2xl overflow-hidden shadow-lg hover:scale-105 transform transition duration-300">
          <img
            src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e"
            alt="Beach Paradise"
            className="h-56 w-full object-cover"
          />
          <div className="p-6">
            <h3 className="text-xl font-semibold text-white">Exotic Beaches</h3>
            <p className="text-gray-400 mt-2">
              Discover crystal-clear waters, golden sands, and serene sunsets 
              at the world’s most beautiful beaches.
            </p>
          </div>
        </div>

        {/* Card 2 */}
        <div className="bg-[#111827] rounded-2xl overflow-hidden shadow-lg hover:scale-105 transform transition duration-300">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/f/f3/Dole%2C_Khumbu%2C_Kangtega_and_Thamserku_mountain_peaks%2C_Trekking_in_Nepal.jpg"
            alt="Mountain Adventure"
            className="h-56 w-full object-cover"
          />
          <div className="p-6">
            <h3 className="text-xl font-semibold text-white">Mountain Adventures</h3>
            <p className="text-gray-400 mt-2">
              Hike the world’s greatest peaks and enjoy breathtaking views 
              that will leave you speechless.
            </p>
          </div>
        </div>

        {/* Card 3 */}
        <div className="bg-[#111827] rounded-2xl overflow-hidden shadow-lg hover:scale-105 transform transition duration-300">
          <img
            src="https://images.unsplash.com/photo-1528909514045-2fa4ac7a08ba"
            alt="City Lights"
            className="h-56 w-full object-cover"
          />
          <div className="p-6">
            <h3 className="text-xl font-semibold text-white">City Escapes</h3>
            <p className="text-gray-400 mt-2">
              Explore vibrant cities filled with culture, history, 
              and unforgettable nightlife.
            </p>
          </div>
        </div>

        {/* Card 4 */}
        <div className="bg-[#111827] rounded-2xl overflow-hidden shadow-lg hover:scale-105 transform transition duration-300">
          <img
            src="https://images.unsplash.com/photo-1500530855697-b586d89ba3ee"
            alt="Cultural Heritage"
            className="h-56 w-full object-cover"
          />
          <div className="p-6">
            <h3 className="text-xl font-semibold text-white">Cultural Heritage</h3>
            <p className="text-gray-400 mt-2">
              Dive into history and tradition through monuments, 
              festivals, and ancient landmarks.
            </p>
          </div>
        </div>

        {/* Card 5 */}
        <div className="bg-[#111827] rounded-2xl overflow-hidden shadow-lg hover:scale-105 transform transition duration-300">
          <img
            src="https://images.unsplash.com/photo-1501785888041-af3ef285b470"
            alt="Safari"
            className="h-56 w-full object-cover"
          />
          <div className="p-6">
            <h3 className="text-xl font-semibold text-white">Wildlife Safari</h3>
            <p className="text-gray-400 mt-2">
              Experience the thrill of wildlife adventures and 
              explore the natural wonders of the world.
            </p>
          </div>
        </div>

        {/* Card 6 */}
        <div className="bg-[#111827] rounded-2xl overflow-hidden shadow-lg hover:scale-105 transform transition duration-300">
          <img
            src="https://images.unsplash.com/photo-1483683804023-6ccdb62f86ef"
            alt="Food & Culture"
            className="h-56 w-full object-cover"
          />
          <div className="p-6">
            <h3 className="text-xl font-semibold text-white">Food & Culture</h3>
            <p className="text-gray-400 mt-2">
              Taste authentic cuisines and immerse yourself in diverse cultures 
              from around the globe.
            </p>
          </div>
        </div>
      </div>

      {/* Closing Statement */}
      <div className="text-center mt-20">
        <h3 className="text-2xl font-bold text-blue-400">Why Choose Trippies?</h3>
        <p className="mt-4 max-w-2xl mx-auto text-gray-400">
          Whether you’re seeking adventure, relaxation, or cultural experiences, 
          <span className="text-white font-semibold"> Trippies </span> helps you plan 
          your perfect journey with ease and excitement.
        </p>
      </div>

      {/* Features Grid (new section added here) */}
      {/* Features Grid (Enhanced) */}
<div className="mt-16">
  <div className="grid md:grid-cols-3 gap-8">
    {features.map((feature, i) => (
      <div
        key={i}
        className={cn(
          "relative group p-6 rounded-2xl bg-gradient-to-br from-[#111827] to-[#0f172a] border border-gray-800 shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-blue-500/30",
          feature.highlight && "md:col-span-2 bg-gradient-to-br from-blue-900/40 to-blue-700/20"
        )}
      >
        {/* Glow Border */}
        <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-blue-500/20 via-purple-500/20 to-pink-500/20 opacity-0 group-hover:opacity-100 blur-xl transition duration-500"></div>

        <div className="relative z-10">
          {/* Icon placeholder (optional: you can assign per feature) */}
          <div className="w-12 h-12 mb-4 flex items-center justify-center rounded-xl bg-blue-500/20 text-blue-400 text-2xl">
            ✨
          </div>

          <h3 className="text-xl font-semibold text-white mb-2">
            {feature.title}
          </h3>
          <p className="text-gray-400 mb-6">{feature.desc}</p>

          {feature.action && (
            <button className="px-5 py-2 rounded-xl bg-gradient-to-r from-yellow-400 to-yellow-500 text-black font-semibold shadow-md hover:from-yellow-500 hover:to-yellow-600 transition">
              {feature.action}
            </button>
          )}
        </div>
      </div>
    ))}
  </div>
</div>

      {/* Orbiting icons media connection*/}
      <div>
        {/* Social Connect Section */}
        <div className="text-center mt-24">
          <h3 className="text-3xl font-bold text-blue-400 mb-6">
            Connect With Us
          </h3>
          <p className="text-gray-400 mb-12 max-w-xl mx-auto">
            Follow <span className="text-white font-semibold">Trippies</span> on social media 
            and stay updated with travel tips, stunning destinations, and more!
          </p>

          <div className="relative h-[400px] w-full flex items-center justify-center">
            {/* Outer Orbit */}
            <OrbitingCircles radius={150} duration={30} path>
              <div className="text-red-500 text-4xl hover:scale-125 transition transform duration-300">
                <FaYoutube />
              </div>
              <div className="text-sky-400 text-4xl hover:scale-125 transition transform duration-300">
                <FaTwitter />
              </div>
              <div className="text-blue-600 text-4xl hover:scale-125 transition transform duration-300">
                <FaFacebook />
              </div>
              <div className="text-pink-500 text-4xl hover:scale-125 transition transform duration-300">
                <FaInstagram />
              </div>
            </OrbitingCircles>

            {/* Inner Orbit */}
            <OrbitingCircles radius={90} duration={20} reverse path>
              <div className="text-pink-500 text-3xl hover:scale-125 transition transform duration-300">
                <FaInstagram />
              </div>
              <div className="text-blue-600 text-3xl hover:scale-125 transition transform duration-300">
                <FaFacebook />
              </div>
              <div className="text-sky-400 text-3xl hover:scale-125 transition transform duration-300">
                <FaTwitter />
              </div>
              <div className="text-red-500 text-3xl hover:scale-125 transition transform duration-300">
                <FaYoutube />
              </div>
            </OrbitingCircles>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
