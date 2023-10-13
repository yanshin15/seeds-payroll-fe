import axios from "axios";
import React, { useEffect, useState } from "react";

const PayrollPage = () => {
  const [teachers, setTeachers] = useState([]);
  // const [isLoading, setIsLoading] = useState(false);

  const getPayroll = async () => {
    try {
      const response = await axios.get(
        "http://localhost:5038/api/teachers/pay/all"
      );
      console.log(response.data.payroll);
      setTeachers(response.data);
    } catch (error) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    getPayroll();
  }, []);
  return teachers.map((teacher) => {
    return (
      <section className="flex w-full items-center p-5 flex-col">
        <div className="w-3/4 justify-center h-20 bg-lightcream grid grid-cols-2 border">
          <h1 className="border border-black p-2">{teacher.name}</h1>
          <h1 className="border border-black p-2">{teacher.payroll}</h1>
        </div>
      </section>
    );
  });
};

export default PayrollPage;
