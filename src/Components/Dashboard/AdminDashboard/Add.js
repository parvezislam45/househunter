import React from "react";
import { useForm } from "react-hook-form";

const Add = () => {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data, event) => {
    const url = `http://localhost:8000/product/`;
    console.log(url);
    fetch(url, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((result) => {
        console.log(result);

        event.target.reset();
      });
  };
  return (
    <div>
      <div className="my-1 px-1 w-full">
        <div className="card-body bg-base-100 shadow-xl border-blue-900 border-2">
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                placeholder="Enter Your Name"
                className="input border-blue-900 border-2"
                {...register("name", {})}
              />
              <label className="label">
                <span className="label-text">Image</span>
              </label>
              <input
                type="text"
                placeholder="Url"
                className="input border-blue-900 border-2"
                {...register("img", {})}
              />
              <label className="label">
                <span className="label-text">City</span>
              </label>
              <input
                type="text"
                placeholder="Type Your Review"
                className="input border-blue-900 border-2"
                {...register("city", {})}
              />
              <label className="label">
                <span className="label-text">Bedroom</span>
              </label>
              <input
                type="text"
                placeholder="Select Your Ratting"
                className="input border-blue-900 border-2"
                {...register("Bedroom", {})}
              />
              <label className="label">
                <span className="label-text">Bathroom</span>
              </label>
              <input
                type="text"
                placeholder="Select Your Ratting"
                className="input border-blue-900 border-2"
                {...register("bathroom", {})}
              />
              <label className="label">
                <span className="label-text">Room Size</span>
              </label>
              <input
                type="text"
                placeholder="Select Your Ratting"
                className="input border-blue-900 border-2"
                {...register("size", {})}
              />
              <label className="label">
                <span className="label-text">Rent</span>
              </label>
              <input
                type="text"
                placeholder="Select Your Ratting"
                className="input border-blue-900 border-2"
                {...register("rent", {})}
              />
              <label className="label">
                <span className="label-text">Availability Date</span>
              </label>
              <input
                type="text"
                placeholder="Select Your Ratting"
                className="input border-blue-900 border-2"
                {...register("date", {})}
              />
              <label className="label">
                <span className="label-text">Description</span>
              </label>
              <input
                type="text"
                placeholder="Select Your Ratting"
                className="input border-blue-900 border-2"
                {...register("description", {})}
              />
              <label className="label">
                <span className="label-text">Phone No</span>
              </label>
              <input
                type="text"
                placeholder="Select Your Ratting"
                className="input border-blue-900 border-2"
                {...register("phone", {})}
              />
              <div className="mt-3 text-center">
                <input
                  type="submit"
                  className="btn btn-outline btn-secondary h-2 w-32"
                />
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Add;
