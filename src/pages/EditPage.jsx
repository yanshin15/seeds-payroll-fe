import React, { useState } from "react";
import { useParams } from "react-router-dom";

const EditPage = () => {
  let { id } = useParams();
  return (
    <section className="bg-white px-4 w-full h-screen flex flex-col items-center p-5">
      {id}
    </section>
  );
};

export default EditPage;
