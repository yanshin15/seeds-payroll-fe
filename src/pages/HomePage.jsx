import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import EditPage from "./EditPage";

const HomePage = () => {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const getProducts = async () => {
    try {
      setIsLoading(true);
      const response = await axios.get("http://localhost:5038/api/teachers/");
      console.log(response.data);
      console.log("cat");
      // console.log(response.data);
      setProducts(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <div className="bg-white px-4 w-full h-full flex flex-col">
      <span className="flex justify-center gap-8 p-2 max-md:flex-col">
        <button className="px-8 py-5 mt-4 rounded-xl text-center w-1/4 max-md:w-full max-h-24 font-bold text-white text-xl bg-seedsbrown hover:bg-darkbrown">
          Add teacher
        </button>
        <button className="px-8 py-5 mt-4 rounded-xl text-center w-1/4 max-md:w-full  max-h-24 font-bold text-white text-xl bg-seedsbrown hover:bg-darkbrown">
          Payroll
        </button>
      </span>

      <div className=" grid lg:grid-cols-2 md:grid-cols-1 gap-8 mt-4">
        {products.map((product) => {
          return (
            <div className="shadow-xl rounded-xl bg-lightcream p-8 flex items-center justify-center flex-col gap-2">
              <h1>{product.name}</h1>
              <h2>{product.rate}</h2>
              <h2>{product.rate}</h2>
              <h2>{product.rate}</h2>

              <span className="flex gap-8 items-center px-2 justify-between w-full pt-4">
                <Link
                  to="/edit"
                  className="text-center w-1/2 bg-darkgreen px-4 py-2 rounded-lg hover:bg-seedsgreen text-white"
                >
                  Edit
                </Link>
                <button className="w-1/2 text-center bg-pastelred px-4 py-2 rounded-lg text-white hover:bg-red-500">
                  Delete
                </button>
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default HomePage;
