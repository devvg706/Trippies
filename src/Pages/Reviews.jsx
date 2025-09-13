import { Highlighter } from "@/components/magicui/highlighter";
import { Marquee } from "@/components/magicui/marquee";
import { AvatarCircles } from "@/components/magicui/avatar-circles";

const reviews = [
  {
    name: "Sophia Carter",
    text: "✨ Trippies made my Bali trip unforgettable! Everything was so easy to plan.",
    avatar: "https://i.pravatar.cc/150?img=32",
  },
  {
    name: "Liam Johnson",
    text: "🚀 Backpacking across Europe was smooth thanks to Trippies. Highly recommend!",
    avatar: "https://i.pravatar.cc/150?img=11",
  },
  {
    name: "Ava Patel",
    text: "🌴 Loved the travel guides. Saved me so much time and stress.",
    avatar: "https://i.pravatar.cc/150?img=24",
  },
  {
    name: "Noah Kim",
    text: "🌍 Found hidden gems I would have never discovered without Trippies.",
    avatar: "https://i.pravatar.cc/150?img=36",
  },
];

export default function ReviewsPage() {
  return (
    <section className="relative min-h-screen bg-gradient-to-b from-[#0f172a] to-[#111827] text-white">
      {/* Hero Section */}
      <div className="max-w-5xl mx-auto text-center py-16">
        <h2 className="text-4xl md:text-5xl font-bold">
          What Travelers Say{" "}
          <Highlighter className="bg-pink-400/70 px-3 py-1 rounded-md">
            Reviews
          </Highlighter>
        </h2>
        <div className="flex justify-center mt-6">
          <AvatarCircles
            numPeople={99}
            avatarUrls={reviews.slice(0, 4).map((r) => ({
              profileUrl: "#",
              imageUrl: r.avatar,
            }))}
          />
        </div>
      </div>

      {/* Marquee Section */}
      <Marquee className="py-10">
        {reviews.map((r, i) => (
          <div
            key={i}
            className="bg-white/5 border border-white/10 rounded-xl p-4 shadow-md w-72 mx-4"
          >
            <p className="text-sm italic">"{r.text}"</p>
            <div className="flex items-center gap-3 mt-3">
              <img
                src={r.avatar}
                alt={r.name}
                className="w-10 h-10 rounded-full object-cover border border-white/20"
              />
              <span className="font-semibold">{r.name}</span>
            </div>
          </div>
        ))}
      </Marquee>

      {/* Static Grid */}
      <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto px-6 mt-16">
        {reviews.map((r, i) => (
          <div
            key={i}
            className="bg-white/5 border border-white/10 rounded-2xl p-6 shadow-lg hover:scale-[1.02] transition"
          >
            <p className="text-gray-300 leading-relaxed">{r.text}</p>
            <div className="flex items-center gap-3 mt-4">
              <img
                src={r.avatar}
                alt={r.name}
                className="w-12 h-12 rounded-full object-cover"
              />
              <span className="font-bold text-white">{r.name}</span>
            </div>
          </div>
        ))}
      </div>

      {/* CTA */}
      <div className="text-center py-20 mt-12 bg-gradient-to-r from-purple-500/20 to-cyan-500/20">
        <h3 className="text-3xl font-bold">Share your travel story ✈️</h3>
        <p className="text-gray-300 mt-2">
          Join thousands of travelers making their journeys unforgettable with
          Trippies.
        </p>
        <button className="mt-6 px-6 py-3 rounded-xl bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-500 font-semibold text-white shadow-lg hover:scale-105 transition">
          Write a Review
        </button>
      </div>
    </section>
  );
}
