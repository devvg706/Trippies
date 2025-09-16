import React, { useEffect, useState } from "react";
import { MyTrips } from "@/data/Trip";
import { Link, useLocation } from "react-router-dom";
import SearchBar from "@/components/common/SearchBar";
import {
  FaEdit,
  FaCheckCircle,
  FaTimesCircle,
  FaRegClock,
  FaTrash,
} from "react-icons/fa";

import { Highlighter } from "@/components/magicui/highlighter";
import toast from "react-hot-toast";
import EditPage from "./EditPage";

const MyPlans = () => {
  const location = useLocation();
  const [selectedTrip,setselectedTrip] = useState(null);
  const [trips, setTrips] = useState(() => {
    const saved = localStorage.getItem("trips");
    return saved ? JSON.parse(saved) : MyTrips;
  });
 const [query,Setquery] = useState('');
  // Handle new trip from AddTrip
  useEffect(() => {
    const newTrip = location.state?.newTrip;
    if (!newTrip) return;

    setTrips((prev) => {
      const exists = prev.some((t) => t.id === newTrip.id);
      if (exists) {
        window.history.replaceState({}, document.title);
        return prev;
      }
      const updated = [...prev, newTrip];
      localStorage.setItem("trips", JSON.stringify(updated));
      window.history.replaceState({}, document.title);
      return updated;
    });
  }, [location.state]);

  // Keep localStorage synced
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

  const handleEdit = (trip) => {
    console.log("Edit Trip:", trip);
    // Here you can open a modal for editing
  };
  const handleDelete = (id) => {
  const updatedTrips = trips.filter((trip) => trip.id !== id);
  setTrips(updatedTrips);
  localStorage.setItem("trips", JSON.stringify(updatedTrips));
  toast.success("Trip deleted successfully 🗑️");
};
  return (
    <div className="min-h-screen mt-10 bg-gradient-to-b from-[#0f172a] via-[#111827] to-[#1e293b] p-8 relative">
      <h1 className="text-4xl font-extrabold text-center mb-10 bg-gradient-to-r from-purple-400 via-blue-400 to-pink-400 bg-clip-text text-transparent drop-shadow-md">
        Trips
      </h1>
      <SearchBar Setquery={Setquery} query={query}/>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {trips.filter((country) => country.destination.toLowerCase().includes(query)).map((trip) => {
          const status = getStatus(trip.status);
          return (
            <div
              key={trip.id}
              className="relative rounded-2xl p-6 shadow-xl hover:shadow-[0_0_20px_rgba(139,92,246,0.6)] transition-all duration-300 border border-white/10 bg-white/5 backdrop-blur-lg"
            >
              {/* Edit Icon */}
              <button
                onClick={() => setselectedTrip(trip)}
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

              {/* Status */}
              <div className="flex items-center gap-2 absolute bottom-4 right-4">
                {status.icon}
                {status.label}
              </div>
               <button
    onClick={() => handleDelete(trip.id)}
    className="p-2 rounded-full bg-white/10 text-gray-300 hover:bg-gradient-to-r hover:from-red-500 hover:to-pink-500 hover:text-white transition-all"
  >
    <FaTrash size={16} />
  </button>
            </div>
          );
        })}
      </div>
     

      {/* Floating Add Button */}
      <Link
        to="/AddTrip"
        className="fixed bottom-8 right-8 flex items-center gap-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold px-6 py-3 rounded-full shadow-lg hover:scale-105 transition-transform duration-300"
      >
        <span className="text-xl">➕</span> Add Trip
      </Link>
      {selectedTrip && <EditPage trip={selectedTrip} 
       onSave={(updatedTrip) => {
      setTrips((prev) =>
        prev.map((t) => (t.id === updatedTrip.id ? updatedTrip : t))
      );
      localStorage.setItem("trips", JSON.stringify(trips));
      setselectedTrip(null);
      toast.success("Trip updated successfully ✨");
    }}
    onCancel={() => setselectedTrip(null)}/>}
    </div>
  );
};

export default MyPlans;
