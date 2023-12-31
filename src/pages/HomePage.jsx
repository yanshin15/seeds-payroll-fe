import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { faMoneyBill1, faSackDollar } from "@fortawesome/free-solid-svg-icons";
import { faSquarePlus } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import TeacherDisplay from "../components/TeacherDisplay";

const HomePage = () => {
  const [teachers, setTeachers] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const getTeachers = async () => {
    try {
      setIsLoading(true);
      const response = await axios.get("http://localhost:5038/api/teachers/");
      setTeachers(response.data);
      setIsLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getTeachers();
  }, []);

  return (
    <div className=" bg-lightcream px-4 w-full h-full flex flex-col">
      {isLoading ? (
        <div className="flex justify-center items-center h-screen text-2xl font-bold">
          Loading Teachers...
        </div>
      ) : (
        <>
          <span className="flex justify-start gap-8 p-2 px-6">
            <Link to={"/create"}>
              <FontAwesomeIcon
                icon={faSquarePlus}
                className="h-9 text-darkbrown hover:scale-105 hover:text-seedsbrown duration-200"
              />
            </Link>

            <Link to={"/payroll"}>
              <FontAwesomeIcon
                icon={faSackDollar}
                className="h-8 text-darkbrown hover:scale-105 hover:text-seedsbrown duration-200"
              />
            </Link>
          </span>
          <div className=" grid lg:grid-cols-2 md:grid-cols-1 gap-8 mt-4 mb-4 select-none">
            {teachers.map((teacher) => {
              return (
                <TeacherDisplay teacher={teacher} getTeachers={getTeachers} />
              );
            })}
          </div>
        </>
      )}
    </div>
  );
};

export default HomePage;
