import React from 'react'
import { useForm } from 'react-hook-form'
import { MyTrips } from '@/data/Trip'
import { useNavigate } from 'react-router-dom'

const AddTrip = () => {
    const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()

  const submitHandler = (data,event) => {
     event.preventDefault();
    console.log("form-data", data);
    const newTrip = { ...data, id: Date.now() };
    console.log("MyTrips", MyTrips);
    // Send to MyPlans via state
    navigate("/MyPlans", { state: { newTrip } });
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <form
        onSubmit={handleSubmit(submitHandler)}
        className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md space-y-4"
      >
        <h2 className="text-2xl font-semibold text-center mb-4">Add New Trip</h2>

        {/* Destination */}
        <div>
          <label htmlFor="destination" className="block mb-1 font-medium">
            Destination
          </label>
          <input
            type="text"
            id="destination"
            placeholder="Enter your next destination..."
            {...register("destination", { required: true })}
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          {errors.destination && (
            <span className="text-red-500 text-sm">This field is required</span>
          )}
        </div>

        {/* Start Date */}
        <div>
          <label htmlFor="startDate" className="block mb-1 font-medium">
            Start Date
          </label>
          <input
            type="date"
            id="startDate"
            {...register("startDate", { required: true })}
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          {errors.startDate && (
            <span className="text-red-500 text-sm">This field is required</span>
          )}
        </div>

        {/* End Date */}
        <div>
          <label htmlFor="endDate" className="block mb-1 font-medium">
            End Date
          </label>
          <input
            type="date"
            id="endDate"
            {...register("endDate", { required: true })}
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          {errors.endDate && (
            <span className="text-red-500 text-sm">This field is required</span>
          )}
        </div>

        {/* Price */}
        <div>
          <label htmlFor="price" className="block mb-1 font-medium">
            Price
          </label>
          <input
            type="text"
            id="price"
            placeholder="₹1500"
            {...register("price", { required: true })}
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          {errors.price && (
            <span className="text-red-500 text-sm">This field is required</span>
          )}
        </div>

        {/* Status */}
        <div>
          <label htmlFor="status" className="block mb-1 font-medium">
            Status
          </label>
          <select
            {...register("status", { required: true })}
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="">-- Select Status --</option>
            <option value="PLANNED">Planned</option>
            <option value="COMPLETED">Completed</option>
            <option value="CANCELLED">Cancelled</option>
          </select>
          {errors.status && (
            <span className="text-red-500 text-sm">This field is required</span>
          )}
        </div>

        {/* Submit */}
        <div>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition"
          >
            Add Trip
          </button>
        </div>
      </form>
    </div>
  )
}

export default AddTrip
