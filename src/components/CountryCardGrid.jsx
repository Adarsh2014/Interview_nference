import React from "react";
import useLocalPagination from "../hooks/useLocalPagination";
const CountryCardGrid = () => {
  const countries = useLocalPagination();

  return (
    <div>
      <h1>Country List</h1>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))",
          gap: "20px",
        }}
      >
        {countries.map((country) => (
          <div
            key={country.name.common}
            style={{
              border: "1px solid #ccc",
              padding: "10px",
              borderRadius: "8px",
            }}
          >
            <img
              src={country.flags?.svg}
              alt={`Flag of ${country.name.common}`}
              style={{ width: "100%", height: "100px", objectFit: "cover" }}
            />
            <h3>{country.name.common}</h3>
            <p>Capital: {country.capital?.[0] || "N/A"}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CountryCardGrid;
