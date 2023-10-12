import React from "react";

const EditPage = () => {
  return (
    <section className="bg-white px-4 w-full h-screen flex flex-col items-center p-5">
      <form className="shadow-xl rounded-xl bg-lightcream p-8 text-2xl items-center w-2/5 h-auto flex flex-col gap-4">
        <h1 className="text-darkbrown text-3xl font-bold mb-6">
          Add a Teacher
        </h1>

        <span className="w-3/4">
          <label className="self-start w-4/5">Name</label>
        </span>
        <input
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
          type="text"
          className="w-3/4 h-12 px-8 py-4 rounded-2xl shadow"
          placeholder="Enter Subject"
        />

        <span className="w-3/4">
          <label>Rate</label>
        </span>
        <input
          type="text"
          className="w-3/4 h-12 px-8 py-4 rounded-2xl shadow"
          placeholder="Enter Rate"
        />

        <span className="w-3/4">
          <label>Hours Worked</label>
        </span>
        <input
          type="text"
          className="w-3/4 h-12 px-8 py-4 rounded-2xl shadow"
          placeholder="Enter hours worked"
        />
        <button className="duration-200 text-center w-3/4 font-semibold  bg-darkgreen px-4 py-2 rounded-lg hover:bg-seedsgreen text-white mt-12">
          Edit
        </button>
      </form>
    </section>
  );
};

export default EditPage;
