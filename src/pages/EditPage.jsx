import React from "react";

const EditPage = () => {
  return (
    <div className="bg-white px-4 w-full h-screen flex flex-col items-center p-5">
      <form
        action=""
        className="shadow-xl rounded-xl bg-lightcream p-8 text-2xl items-center w-2/5 h-4/5 flex flex-col gap-8"
      >
        <input
          type="text"
          className="w-3/4 h-1/6 px-4 py-4 rounded-2xl shadow"
        />
        <input
          type="text"
          className="w-3/4 h-1/6 px-4 py-4 rounded-2xl shadow"
        />
        <input
          type="text"
          className="w-3/4 h-1/6 px-4 py-4 rounded-2xl shadow"
        />
        <input
          type="text"
          className="w-3/4 h-1/6 px-4 py-4 rounded-2xl shadow"
        />
      </form>
    </div>
  );
};

export default EditPage;
