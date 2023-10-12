import React from "react";

const EditPage = () => {
  return (
    <section className="bg-white px-4 w-full h-screen flex flex-col items-center p-5">
      <form
        action=""
        className="shadow-xl rounded-xl bg-lightcream p-8 text-2xl items-center w-2/5 h-auto flex flex-col gap-4"
      >
        <h1 className="text-darkbrown text-3xl font-bold mb-6">
          Edit teacher details
        </h1>
        <label>Name</label>
        <input
          type="text"
          className="w-3/4 h-12 px-8 py-4 rounded-2xl shadow "
          placeholder="Enter Name"
        />
        <label>Subject</label>
        <input
          type="text"
          className="w-3/4 h-12 px-8 py-4 rounded-2xl shadow"
          placeholder="Enter Subject"
        />
        <label>Rate</label>
        <input
          type="text"
          className="w-3/4 h-12 px-8 py-4 rounded-2xl shadow"
          placeholder="Enter Rate"
        />
        <label>Hours Worked</label>
        <input
          type="text"
          className="w-3/4 h-12 px-8 py-4 rounded-2xl shadow"
          placeholder="Enter Hours worked."
        />
        <button className="duration-200 text-center w-3/4 font-semibold  bg-darkgreen px-4 py-2 rounded-lg hover:bg-seedsgreen text-white mt-12">
          Edit
        </button>
      </form>
    </section>
  );
};

export default EditPage;
