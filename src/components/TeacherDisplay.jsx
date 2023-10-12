import React from "react";
import { Link } from "react-router-dom";

const TeacherDisplay = ({ product }) => {
  return (
    <div className="shadow-xl rounded-xl bg-white  p-8 flex items-center justify-center flex-col gap-2">
      <h1 className="text-2xl font-extrabold text-darkbrown">{product.name}</h1>
      <h2 className="text-lg font-semibold">{product.subject}</h2>
      <h2 className="font-bold">
        {product.rate} ks/hour | {product.hours_worked} hrs
      </h2>

      <div className="flex gap-8 items-center px-2 justify-between w-full pt-4">
        <Link
          to="/edit"
          className="duration-200 text-center w-1/2 font-semibold bg-darkgreen px-4 py-2 rounded-lg hover:bg-seedsgreen text-white"
        >
          Edit
        </Link>
        <button className="duration-200 w-1/2 text-center font-semibold bg-pastelred px-4 py-2 rounded-lg text-white hover:bg-red-500">
          Delete
        </button>
      </div>
    </div>
  );
};

export default TeacherDisplay;
