import axios from "axios";
import React, { useEffect, useState } from "react";
import TeacherTable from "../components/TeacherTable";

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

  return (
    <div>
      <table className="w-1/2 border border-black">
        <tr className="text-start">
          <th>Name</th>
          <th>Subject</th>
          <th>Class Type</th>
          <th>Payroll</th>
        </tr>
        {teachers.map((teacher) => {
          return (
            <tr className="text-center">
              <td>{teacher.name}</td>
              <td>{teacher.subject}</td>
              <td>{teacher.class_type}</td>
              <td>{teacher.payroll}</td>
            </tr>
          );
        })}
      </table>
    </div>
  );

  // return teachers.map((teacher) => {
  //   return (
  //     <div>
  //       <table>
  //         <thead>
  //           <tr>Name</tr>
  //         </thead>
  //         <tbody>
  //           <tr>
  //             <td>teacher.name</td>
  //           </tr>
  //         </tbody>
  //       </table>
  //     </div>
  //   );
  // });
};

export default PayrollPage;
