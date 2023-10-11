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
    <div className="bg-lightgreen px-4 w-full h-screen flex flex-col">
      <button className=" bg-lightcream px-6 py-5 mt-2 rounded-md text-center self-center w-1/5 font-bold text-xl hover:bg-red-200">
        + Add teacher
      </button>
      <div className=" grid lg:grid-cols-2 md:grid-cols-1 gap-8 mt-4">
        {products.map((product) => {
          return (
            <div className="shadow-xl rounded-xl bg-lightcream p-8 flex items-center justify-center flex-col gap-2">
              <h1>{product.name}</h1>
              <h2>{product.rate}</h2>
              <h2>{product.rate}</h2>
              <h2>{product.rate}</h2>

              <span className="flex gap-2 items-center px-2 justify-between w-full">
                <Link
                  to="/edit"
                  className="text-center w-1/2 bg-darkgreen px-4 py-2 rounded-md hover:bg-lightgreen text-white"
                >
                  Edit
                </Link>
                <button className="w-1/2 text-center bg-red-500 px-4 py-2 rounded-md text-white hover:bg-red-400">
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
