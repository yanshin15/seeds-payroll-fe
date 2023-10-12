import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { faCirclePlus, faMoneyBill1 } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import TeacherDisplay from "../components/TeacherDisplay";

const HomePage = () => {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const getProducts = async () => {
    try {
      setIsLoading(true);
      const response = await axios.get("http://localhost:5038/api/teachers/");
      console.log(response.data);
      setProducts(response.data);
      setIsLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <div className=" bg-lightcream px-4 w-full h-full flex flex-col">
      {isLoading ? (
        "Loading..."
      ) : (
        <>
          <span className="flex justify-between gap-8 p-2 px-6">
            <Link to="/create">
              <FontAwesomeIcon
                icon={faCirclePlus}
                className="h-8 text-darkbrown hover:scale-105 hover:text-seedsbrown duration-200"
              />
            </Link>

            <Link to="/create">
              <FontAwesomeIcon
                icon={faMoneyBill1}
                className="h-8 text-darkbrown hover:scale-105 hover:text-seedsbrown duration-200"
              />
            </Link>
          </span>
          <div className=" grid lg:grid-cols-2 md:grid-cols-1 gap-8 mt-4 mb-4 select-none">
            {products.map((product) => {
              return <TeacherDisplay product={product} />;
            })}
          </div>
        </>
      )}
    </div>
  );
};

export default HomePage;
