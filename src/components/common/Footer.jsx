import { FaYoutube, FaTwitter, FaFacebook, FaInstagram } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="relative w-full bg-[#0f172a] bg-opacity-90 backdrop-blur-md border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-4 gap-10 text-gray-300">
        
        {/* Brand */}
        <div>
          <Link to="/">
            <h2 className="text-2xl font-bold bg-gradient-to-r from-pink-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
              Trippies
            </h2>
          </Link>
          <p className="mt-4 text-sm text-gray-400 leading-6">
            Discover, plan, and relive your journeys with us. <br />
            Travel made simple and memorable.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold text-white">Quick Links</h3>
          <ul className="mt-4 space-y-2 text-sm">
            <li><Link to="/" className="hover:text-cyan-400 transition">Destinations</Link></li>
            <li><Link to="/" className="hover:text-cyan-400 transition">Travel Guides</Link></li>
            <li><Link to="/" className="hover:text-cyan-400 transition">Blog</Link></li>
            <li><Link to="/" className="hover:text-cyan-400 transition">Contact</Link></li>
          </ul>
        </div>

        {/* Resources */}
        <div>
          <h3 className="text-lg font-semibold text-white">Resources</h3>
          <ul className="mt-4 space-y-2 text-sm">
            <li><Link to="/" className="hover:text-cyan-400 transition">Privacy Policy</Link></li>
            <li><Link to="/" className="hover:text-cyan-400 transition">Terms & Conditions</Link></li>
            <li><Link to="/" className="hover:text-cyan-400 transition">FAQ</Link></li>
          </ul>
        </div>

        {/* Socials */}
        <div>
          <h3 className="text-lg font-semibold text-white">Stay Connected</h3>
          <div className="flex gap-4 mt-4">
            <Link to="/" className="p-3 rounded-xl bg-white/5 hover:bg-cyan-400/20 transition shadow-md">
              <FaYoutube />
            </Link>
            <Link to="/" className="p-3 rounded-xl bg-white/5 hover:bg-cyan-400/20 transition shadow-md">
              <FaTwitter />
            </Link>
            <Link to="/" className="p-3 rounded-xl bg-white/5 hover:bg-cyan-400/20 transition shadow-md">
              <FaFacebook />
            </Link>
            <Link to="/" className="p-3 rounded-xl bg-white/5 hover:bg-cyan-400/20 transition shadow-md">
              <FaInstagram />
            </Link>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10 mt-8">
        <p className="text-center py-6 text-sm text-gray-500">
          © {new Date().getFullYear()} Trippies. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
