import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const CreatePage = () => {
  const [name, setName] = useState("");
  const [subject, setSubject] = useState("");
  const [rate, setRate] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const saveTeachers = async (e) => {
    e.preventDefault();
    if (!name || !subject || !rate) {
      alert("Please fill out all fields");
      return;
    }
    try {
      setIsLoading(true);
      const response = await axios.post(
        "http://localhost:5038/api/teachers/add",
        { name: name, subject: subject, rate: rate }
      );
      alert(`Teacher ${name} has been added successfully.`);
      setIsLoading(false);
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <section className="bg-white px-4 w-full h-screen flex flex-col items-center p-5">
      <form
        onSubmit={saveTeachers}
        className="shadow-xl rounded-xl bg-lightcream p-8 text-2xl items-center md:w-3/5 lg:w-2/5 h-auto flex flex-col gap-4"
      >
        <h1 className="text-darkbrown text-3xl font-bold mb-6">
          Add a Teacher
        </h1>
        <span className="w-3/4">
          <label className="self-start w-4/5">Name</label>
        </span>

        <input
          value={name}
          type="text"
          className="w-3/4 h-12 px-8 py-4 rounded-2xl shadow "
          placeholder="Enter Name"
          onChange={(e) => {
            setName(e.target.value);
          }}
        />
        <span className="w-3/4">
          <label>Subject</label>
        </span>

        <input
          value={subject}
          onChange={(e) => {
            setSubject(e.target.value);
          }}
          type="text"
          className="w-3/4 h-12 px-8 py-4 rounded-2xl shadow"
          placeholder="Enter Subject"
        />
        <span className="w-3/4">
          <label>Rate</label>
        </span>

        <input
          value={rate}
          onChange={(e) => {
            setRate(e.target.value);
          }}
          type="number"
          className="w-3/4 h-12 px-8 py-4 rounded-2xl shadow"
          placeholder="Enter Rate"
        />
        {isLoading ? (
          <button className="duration-200 text-center w-3/4 font-semibold  bg-darkgreen px-4 py-2 rounded-lg hover:bg-seedsgreen text-white mt-12 cursor-not-allowed">
            Add
          </button>
        ) : (
          <button className="duration-200 text-center w-3/4 font-semibold  bg-darkgreen px-4 py-2 rounded-lg hover:bg-seedsgreen text-white mt-12">
            Add
          </button>
        )}
      </form>
    </section>
  );
};

export default CreatePage;
