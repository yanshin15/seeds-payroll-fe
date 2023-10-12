import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const EditPage = () => {
  const [teacher, setTeacher] = useState({
    name: "",
    subject: "",
    rate: "",
    hours_worked: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  let { id } = useParams();
  const getTeacher = async () => {
    setIsLoading(true);
    try {
      const response = await axios.get(
        `http://localhost:5038/api/teachers/${id}`
      );
      setIsLoading(false);
      setTeacher({
        name: response.data.name,
        subject: response.data.subject,
        rate: response.data.rate,
        hours_worked: response.data.hours_worked,
      });
      console.log(teacher);
    } catch (error) {
      console.log(error);
    }
  };

  const updateTeacher = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      await axios.put(`http://localhost:5038/api/teachers/${id}`, teacher);
      setIsLoading(false);
      alert(`Updated Tr ${teacher.name}'s details successfully`);
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getTeacher();
  }, []);

  return (
    <section className="bg-white px-4 w-full h-screen flex flex-col items-center p-5">
      <form
        onSubmit={updateTeacher}
        className="shadow-xl rounded-xl bg-lightcream p-8 text-2xl items-center  md:w-3/5 lg:w-2/5 h-auto flex flex-col gap-4"
      >
        <h1 className="text-darkbrown text-3xl font-bold mb-6">
          Edit Teacher Details
        </h1>
        <span className="w-3/4">
          <label className="self-start w-4/5">Name</label>
        </span>

        <input
          value={teacher.name}
          type="text"
          className="w-3/4 h-12 px-8 py-4 rounded-2xl shadow "
          placeholder="Enter Name"
          onChange={(e) => {
            setTeacher({ ...teacher, name: e.target.value });
          }}
        />
        <span className="w-3/4">
          <label>Subject</label>
        </span>

        <input
          value={teacher.subject}
          onChange={(e) => {
            setTeacher({ ...teacher, subject: e.target.value });
          }}
          type="text"
          className="w-3/4 h-12 px-8 py-4 rounded-2xl shadow"
          placeholder="Enter Subject"
        />
        <span className="w-3/4">
          <label>Rate</label>
        </span>

        <input
          value={teacher.rate}
          onChange={(e) => {
            setTeacher({ ...teacher, rate: e.target.value });
          }}
          type="number"
          className="w-3/4 h-12 px-8 py-4 rounded-2xl shadow"
          placeholder="Enter Rate"
        />
        <span className="w-3/4">
          <label>Hours worked</label>
        </span>
        <input
          value={teacher.hours_worked}
          onChange={(e) => {
            setTeacher({ ...teacher, hours_worked: e.target.value });
          }}
          type="number"
          className="w-3/4 h-12 px-8 py-4 rounded-2xl shadow"
          placeholder="Enter Rate"
        />
        {isLoading ? (
          <button className="duration-200 text-center w-3/4 font-semibold  bg-darkgreen px-4 py-2 rounded-lg hover:bg-seedsgreen text-white mt-12 cursor-not-allowed">
            Edit
          </button>
        ) : (
          <button className="duration-200 text-center w-3/4 font-semibold  bg-darkgreen px-4 py-2 rounded-lg hover:bg-seedsgreen text-white mt-12">
            Edit
          </button>
        )}
      </form>
    </section>
  );
};

export default EditPage;
