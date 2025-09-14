import React from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast"
// import GridBeams from magicui
import { GridBeams } from "@/components/magicui/grid-beams";

const AddTrip = () => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const submitHandler = (data, event) => {
    event.preventDefault();
    const newTrip = { ...data, id: Date.now() };
    navigate("/MyPlans", { state: { newTrip } });
    toast.success("Trip added successfully!")

  };

  return (
    <div className="relative min-h-screen flex items-center justify-center bg-black overflow-hidden">
      {/* GridBeams Background */}
      <GridBeams className="absolute inset-0 z-0" />

      {/* Form Card */}
      <form
        onSubmit={handleSubmit(submitHandler)}
        className="relative mt-20 mb-20 z-10 bg-white/10 backdrop-blur-xl p-8 rounded-2xl shadow-2xl w-full max-w-md space-y-6 border border-white/20"
      >
        <h2 className="text-3xl font-bold text-center bg-gradient-to-r from-purple-400 to-blue-500 bg-clip-text text-transparent drop-shadow-lg">
          Chart a New Journey
        </h2>

        {/* Destination */}
        <div>
          <label className="block mb-1 font-medium text-gray-300">
            Destination
          </label>
          <input
            type="text"
            {...register("destination", { required: true })}
            placeholder="Enter your next destination..."
            className="w-full px-3 py-2 rounded-md bg-black/40 text-gray-100 border border-gray-700 focus:ring-2 focus:ring-purple-500"
          />
          {errors.destination && (
            <span className="text-red-400 text-sm">This field is required</span>
          )}
        </div>

        {/* Start Date */}
        <div>
          <label className="block mb-1 font-medium text-gray-300">
            Start Date
          </label>
          <input
            type="date"
            {...register("startDate", { required: true })}
            className="w-full px-3 py-2 rounded-md bg-black/40 text-gray-100 border border-gray-700 focus:ring-2 focus:ring-purple-500"
          />
          {errors.startDate && (
            <span className="text-red-400 text-sm">This field is required</span>
          )}
        </div>

        {/* End Date */}
        <div>
          <label className="block mb-1 font-medium text-gray-300">
            End Date
          </label>
          <input
            type="date"
            {...register("endDate", { required: true })}
            className="w-full px-3 py-2 rounded-md bg-black/40 text-gray-100 border border-gray-700 focus:ring-2 focus:ring-purple-500"
          />
          {errors.endDate && (
            <span className="text-red-400 text-sm">This field is required</span>
          )}
        </div>

        {/* Price */}
        <div>
          <label className="block mb-1 font-medium text-gray-300">Price</label>
          <input
            type="text"
            {...register("price", { required: true })}
            placeholder="₹1500"
            className="w-full px-3 py-2 rounded-md bg-black/40 text-gray-100 border border-gray-700 focus:ring-2 focus:ring-purple-500"
          />
          {errors.price && (
            <span className="text-red-400 text-sm">This field is required</span>
          )}
        </div>

        {/* Status */}
        <div>
          <label className="block mb-1 font-medium text-gray-300">Status</label>
          <select
            {...register("status", { required: true })}
            className="w-full px-3 py-2 rounded-md bg-black/40 text-gray-100 border border-gray-700 focus:ring-2 focus:ring-purple-500"
          >
            <option value="">-- Select Status --</option>
            <option value="PLANNED">Planned</option>
            <option value="COMPLETED">Completed</option>
            <option value="CANCELLED">Cancelled</option>
            <option value="ONGOING">Ongoing</option>
          </select>
          {errors.status && (
            <span className="text-red-400 text-sm">This field is required</span>
          )}
        </div>

        {/* Submit */}
        <button
          type="submit"
          className="w-full bg-gradient-to-r from-purple-500 to-blue-500 text-white font-semibold py-2 rounded-md hover:scale-105 transition-transform"
        >
          Add Trip
        </button>
      </form>
    </div>
  );
};

export default AddTrip;
