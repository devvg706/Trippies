import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";

const EditPage = ({ trip, onSave, onCancel }) => {
  const {
    setValue,
    register,
    getValues,
    handleSubmit,
    formState: { errors },
  } = useForm();

  useEffect(() => {
    if (trip) {
      setValue("destination", trip.destination);
      setValue("startDate", trip.startDate);
      setValue("endDate", trip.endDate);
      setValue("price", trip.price);
      setValue("status", trip.status);
      setValue("details", trip.details || "");
    }
  }, [trip, setValue]);

  const isChanged = () => {
    const currentValues = getValues();
    return (
      currentValues.destination !== trip.destination ||
      currentValues.startDate !== trip.startDate ||
      currentValues.endDate !== trip.endDate ||
      currentValues.price !== trip.price ||
      currentValues.status !== trip.status ||
      currentValues.details !== trip.details
    );
  };

  const onSubmit = (data) => {
    if (!isChanged()) {
      toast.error("No changes made!");
      return;
    }

    const updatedTrip = { ...trip, ...data };
    onSave(updatedTrip);
    toast.success("Trip updated successfully ✨");
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/70 backdrop-blur-sm z-50">
      <div className="relative bg-white/5 border border-white/10 backdrop-blur-xl rounded-2xl p-6 w-[400px] shadow-2xl">
        {/* Title */}
        <h2 className="text-2xl font-bold mb-6 text-center bg-gradient-to-r from-purple-400 via-blue-400 to-pink-400 bg-clip-text text-transparent">
          Edit Trip
        </h2>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          {/* Destination */}
          <input
            {...register("destination", { required: true })}
            className="w-full border border-white/20 bg-white/10 p-2 rounded-lg text-gray-200 placeholder-gray-400 focus:ring-2 focus:ring-purple-500 outline-none"
            placeholder="Destination"
          />
          {errors.destination && (
            <p className="text-red-400 text-sm">Destination is required</p>
          )}

          {/* Start Date */}
          <input
            type="date"
            {...register("startDate", { required: true })}
            className="w-full border border-white/20 bg-white/10 p-2 rounded-lg text-gray-200 focus:ring-2 focus:ring-blue-500 outline-none"
          />

          {/* End Date */}
          <input
            type="date"
            {...register("endDate", { required: true })}
            className="w-full border border-white/20 bg-white/10 p-2 rounded-lg text-gray-200 focus:ring-2 focus:ring-blue-500 outline-none"
          />

          {/* Price */}
          <input
            type="text"
            {...register("price", { required: true })}
            className="w-full border border-white/20 bg-white/10 p-2 rounded-lg text-gray-200 placeholder-gray-400 focus:ring-2 focus:ring-pink-500 outline-none"
            placeholder="₹1500"
          />
          {errors.price && (
            <p className="text-red-400 text-sm">Price is required</p>
          )}

          {/* Status */}
          <select
            {...register("status", { required: true })}
            className="w-full border border-white/20 bg-white/10 p-2 rounded-lg text-gray-200 focus:ring-2 focus:ring-green-500 outline-none"
          >
            <option value="PLANNED">Planned</option>
            <option value="ONGOING">Ongoing</option>
            <option value="COMPLETED">Completed</option>
            <option value="CANCELLED">Cancelled</option>
          </select>

          {/* Buttons */}
          <div className="flex justify-end gap-3 mt-6">
            <button
              type="button"
              onClick={onCancel}
              className="px-4 py-2 rounded-lg bg-white/10 text-gray-300 hover:bg-gray-700 hover:text-white transition-all"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-5 py-2 rounded-lg bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold shadow-lg hover:scale-105 transition-transform"
            >
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditPage;
