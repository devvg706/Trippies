import React, { useEffect, useState } from "react";
import { MyTrips } from "@/data/Trip";
import { Link, useLocation } from "react-router-dom";

import {
  FaEdit,
  FaCheckCircle,
  FaTimesCircle,
  FaRegClock,
} from "react-icons/fa";

import { Highlighter } from "@/components/magicui/highlighter";

const MyPlans = () => {
  const location = useLocation();

  const [trips, setTrips] = useState(() => {
    const saved = localStorage.getItem("trips");
    return saved ? JSON.parse(saved) : MyTrips;
  });

  // If we get a newTrip via navigation state, add it once (guard by id)
  useEffect(() => {
    const newTrip = location.state?.newTrip;
    if (!newTrip) return;

    setTrips((prev) => {
      // guard: don't add if same id already exists
      const exists = prev.some((t) => t.id === newTrip.id);
      if (exists) {
        // clear history state so we don't see it again
        window.history.replaceState({}, document.title);
        return prev;
      }

      const updated = [...prev, newTrip];
      localStorage.setItem("trips", JSON.stringify(updated)); // persist immediately
      // clear the location.state to avoid re-processing
      window.history.replaceState({}, document.title);
      return updated;
    });
  }, [location.state]);

  // keep localStorage synced when trips change for any other reason
  useEffect(() => {
    localStorage.setItem("trips", JSON.stringify(trips));
  }, [trips]);

  const getStatus = (status) => {
    switch (status) {
      case "ONGOING":
        return {
          icon: <FaRegClock className="text-yellow-400 text-lg" />,
          label: (
            <Highlighter className="bg-yellow-500/20 text-yellow-300 px-1 rounded">
              Ongoing
            </Highlighter>
          ),
        };
      case "CANCELLED":
        return {
          icon: <FaTimesCircle className="text-red-400 text-lg" />,
          label: (
            <Highlighter className="bg-red-500/20 text-red-300 px-1 rounded">
              Cancelled
            </Highlighter>
          ),
        };
      case "COMPLETED":
        return {
          icon: <FaCheckCircle className="text-green-400 text-lg" />,
          label: (
            <Highlighter className="bg-green-500/20 text-green-300 px-1 rounded">
              Completed
            </Highlighter>
          ),
        };
      case "PLANNED":
      default:
        return {
          icon: <FaRegClock className="text-blue-400 text-lg" />,
          label: (
            <Highlighter className="bg-blue-500/20 text-blue-300 px-1 rounded">
              Planned
            </Highlighter>
          ),
        };
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0f172a] via-[#111827] to-[#1e293b] p-8">
      <h1 className="text-4xl font-extrabold text-center mb-10 bg-gradient-to-r from-purple-400 via-blue-400 to-pink-400 bg-clip-text text-transparent drop-shadow-md">
        My Trips
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {trips.map((trip) => {
          const status = getStatus(trip.status);
          return (
            <div
              key={trip.id} // <-- use id instead of index
              className="relative rounded-2xl p-6 shadow-xl hover:shadow-[0_0_20px_rgba(139,92,246,0.6)] transition-all duration-300 border border-white/10 bg-white/5 backdrop-blur-lg"
            >
              {/* Edit Icon */}
              <button
                onClick={() => handleEdit(trip)}
                className="absolute top-4 right-4 p-2 rounded-full bg-white/10 text-gray-300 hover:bg-gradient-to-r hover:from-purple-500 hover:to-pink-500 hover:text-white transition-all"
              >
                <FaEdit size={16} />
              </button>

              {/* Destination */}
              <h2 className="text-2xl font-semibold text-gray-100 mb-3">
                {trip.destination}
              </h2>

              {/* Dates */}
              <p className="text-sm text-gray-400 mb-1">
                {new Date(trip.startDate).toLocaleDateString()} -{" "}
                {new Date(trip.endDate).toLocaleDateString()}
              </p>

              {/* Price */}
              <p className="text-lg font-bold text-indigo-400 mb-6">
                ₹{trip.price}
              </p>

              {/* Status with Highlighter */}
              <div className="flex items-center gap-2 absolute bottom-4 right-4">
                {status.icon}
                {status.label}
              </div>
            </div>
          );
        })}
      </div>

      <Link to="/AddTrip">
        <span className="text-8xl text-white">Add New Trip</span>
      </Link>
    </div>
  );
};

export default MyPlans;
