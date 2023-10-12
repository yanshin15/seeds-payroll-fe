import React from "react";
import { Link } from "react-router-dom";
import { faClock, faDollarSign } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";
import { toast } from "react-toastify";

const TeacherDisplay = ({ teacher, getTeachers }) => {
  const deleteTeacher = async (id) => {
    try {
      await axios.delete(`http://localhost:5038/api/teachers/${id}`);
      toast.success(`Tr ${teacher.name} has been deleted.`);
      await getTeachers();
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <section className="shadow-xl rounded-xl bg-white p-8 flex items-center justify-center flex-col gap-2">
      <h1 className="text-2xl font-bold text-darkbrown">Tr. {teacher.name}</h1>
      <h2 className="text-xl font-semilight">{teacher.subject}</h2>
      <span className="flex items-center gap-4 justify-around">
        <h2 className="font-semibold text-lg flex gap-1 items-center">
          <FontAwesomeIcon icon={faDollarSign} className="h-4 text-darkbrown" />
          {teacher.rate} ks/hour
        </h2>
        <h2 className="font-semibold text-lg flex gap-1 items-center">
          <FontAwesomeIcon icon={faClock} className="h-4 text-darkbrown" />
          {teacher.hours_worked} hrs
        </h2>
      </span>

      <div className="flex gap-8 items-center px-2 justify-between w-full pt-4">
        <Link
          to={`/edit/${teacher._id}`}
          className="duration-200 text-center w-1/2 font-semibold  bg-darkgreen px-4 py-2 rounded-lg hover:bg-seedsgreen text-white"
        >
          Edit
        </Link>
        <button
          onClick={() => deleteTeacher(teacher._id)}
          className="duration-200 w-1/2 text-center font-semibold bg-pastelred px-4 py-2 rounded-lg text-white hover:bg-red-500"
        >
          Delete
        </button>
      </div>
    </section>
  );
};

export default TeacherDisplay;
