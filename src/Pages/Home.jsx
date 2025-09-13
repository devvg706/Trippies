import React from "react";
import { Globe } from "../components/magicui/globe";
import { MarqueeDemo } from "@/magicuicomponentUsage/MarqueeDemo";
import { VideoText } from "@/components/magicui/video-text";
import { Compass, Users, Star, Wallet } from "lucide-react";

const Home = () => {
  const features = [
    {
      title: "Explore Anywhere",
      desc: "Plan trips across 100+ destinations with personalized recommendations.",
      icon: <Compass className="w-6 h-6 text-blue-400" />,
    },
    {
      title: "Group Planning",
      desc: "Easily coordinate with friends and family, share itineraries, and stay in sync.",
      icon: <Users className="w-6 h-6 text-purple-400" />,
    },
    {
      title: "Trusted Reviews",
      desc: "Real traveler experiences to guide your choices and avoid surprises.",
      icon: <Star className="w-6 h-6 text-yellow-400" />,
    },
    {
      title: "Budget Friendly",
      desc: "Find the best deals on stays, food, and transport without breaking the bank.",
      icon: <Wallet className="w-6 h-6 text-green-400" />,
    },
  ];

  return (
    <div className="min-h-screen w-full bg-gradient-to-b from-gray-900 via-gray-950 to-black flex flex-col items-center relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-10 left-10 w-72 h-72 bg-purple-500/30 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-pulse" />
      </div>

      {/* ========== PART A: Globe + Title ========== */}
      <div className="flex flex-col items-center justify-center z-20">
        <div className="relative h-[230px] w-full overflow-hidden">
          <VideoText src="https://cdn.magicui.design/ocean-small.webm">Trippies</VideoText>
        </div>
        <p className="mt-[-50px] text-gray-400 text-lg text-center">
          Plan your journey. Explore the world.
        </p>

        {/* Main Globe */}
        <Globe className="relative z-10 w-[500px] h-[500px] drop-shadow-[0_0_25px_rgba(0,0,0,0.5)] mt-[-20px]" />
      </div>

      {/* ========== PART B: Features Section (NEW) ========== */}
      <div className="w-full mt-32 z-20 flex flex-col items-center px-6">
        <h2 className="text-4xl font-bold text-white text-center">
          Why Choose <span className="bg-gradient-to-r from-purple-500 via-indigo-500 to-blue-500 bg-clip-text text-transparent">Trippies?</span>
        </h2>
        <p className="mt-2 text-gray-400 text-center max-w-2xl">
          Discover the reasons why travelers trust Trippies to plan unforgettable journeys.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12 max-w-6xl">
          {features.map((f, i) => (
            <div
              key={i}
              className="p-6 rounded-2xl bg-[#111827] border border-gray-800 hover:-translate-y-2 hover:shadow-lg hover:shadow-purple-500/20 transition duration-300 text-center"
            >
              <div className="flex justify-center mb-4">{f.icon}</div>
              <h3 className="text-lg font-semibold text-white">{f.title}</h3>
              <p className="text-gray-400 mt-2">{f.desc}</p>
            </div>
          ))}
        </div>

        {/* Call To Action */}
       <div className="mt-12 flex justify-center">
  <button
    className="px-8 py-3 rounded-2xl font-semibold bg-gradient-to-r from-yellow-400 to-yellow-500 text-black shadow-2xl transform transition hover:scale-105"
  >
    Start Exploring
  </button>
</div>

      </div>

      {/* ========== PART C: Reviews Section (Marquee) ========== */}
      <div className="w-full mt-32 z-20 flex flex-col items-center">
        <h2 className="text-4xl font-bold text-white text-center">
          A Glimpse of the Places We’ve Explored with{" "}
          <span className="bg-gradient-to-r from-purple-500 via-indigo-500 to-blue-500 bg-clip-text text-transparent">
            Trippies
          </span>
        </h2>
        <p className="mt-2 font-semibold text-gray-400 text-center max-w-xl">
          Wonders We’ve Explored Across the Globe
        </p>

        <div className="w-full mt-10">
          <MarqueeDemo />
        </div>
      </div>
    </div>
  );
};

export default Home;
