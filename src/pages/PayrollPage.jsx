import axios from "axios";
import React, { useEffect, useState, useMemo } from "react";
import TeacherTable from "../components/TeacherTable";
import { toast } from "react-toastify";

const PayrollPage = () => {
  const [teachers, setTeachers] = useState([]);
  const [calculations, setCalculations] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const getPayroll = async () => {
    try {
      setIsLoading(true);
      const response = await axios.get(
        "http://localhost:5038/api/teachers/pay/all"
      );
      console.log(teachers);
      setTeachers(response.data);
      setIsLoading(false);
    } catch (error) {
      console.log(error.message);
      toast.error(error.message);
    }
  };

  const calcPay = async () => {
    try {
      setIsLoading(true);
      const response = await axios.get(
        "http://localhost:5038/api/teachers/calculate/all"
      );
      setCalculations(response.data);
      setIsLoading(false);
      console.log(calculations.overall);
    } catch (error) {
      console.log(error.message);
      toast.error(error.message);
    }
  };

  useEffect(() => {
    getPayroll();
  }, []);

  useMemo(() => {
    calcPay();
  }, []);

  useMemo(() => calcPay(), []);

  return (
    <div>
      {isLoading ? (
        <div className="flex justify-center items-center h-screen text-2xl font-bold">
          Loading Data...
        </div>
      ) : (
        <section className="flex flex-col p-4 ">
          <TeacherTable teachers={teachers} />;
          <div className="flex justify-center w-full">
            <span className="text-md flex flex-col p-2 gap-8 items-center justify-center rounded-xl shadow-lg border bg-lightcream w-[60%] flex-wrap">
              <h1>
                {console.log(teachers.overall)}
                Total Online Classes Payroll:
                <b> {calculations.onlineTotal} Ks</b>
              </h1>
              <h1>
                Total On-Site Classes Payroll:{" "}
                <b>{calculations.onsiteTotal} Ks</b>
              </h1>
              <h1>
                Overall All Classes Payroll: <b>{calculations.overall} Ks</b>
              </h1>
            </span>
          </div>
        </section>
      )}
    </div>
  );
};

export default PayrollPage;
