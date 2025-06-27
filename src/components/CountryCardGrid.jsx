import React from "react";
import useLocalPagination from "../hooks/useLocalPagination";
const CountryCardGrid = () => {
  const myData = useLocalPagination();
  console.log(myData);
  return (
    <div>
      {" "}
      <h1>Product List</h1>{" "}
    </div>
  );
};

export default CountryCardGrid;
