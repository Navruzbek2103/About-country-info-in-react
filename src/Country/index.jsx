import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { API } from "../api/api";

const index = () => {
  const [data, setData] = useState([]);
  const { names } = useParams();
  const prev = useNavigate();

  useEffect(() => {
    API.getItem(names).then((res) => setData(res.data[0]));
  }, [names]);

  const { area, independent, region, continents, population, capital } = data;
  const birnima = Object.entries(data);
  let flags = "";
  let allLanguages = "";
  let curr = "";
  let currency = "";
  let currencySymbol = "";
  birnima.forEach((element) => {
    if (element[0] === "flags") {
      flags = element[1].png;
    }
    if (element[0] === "languages") {
      allLanguages = element[1];
    }
    if (element[0] === "currencies") {
      curr = Object.values(element[1]);
      currency = curr[0].name;
      currencySymbol = curr[0].symbol;
    }
  });

  let value = Object.values(allLanguages);
  let language = value.join(", ");

  console.log(data)

  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col p-3">
            <button
              className="btn btn-danger"
              onClick={() => prev("/countries")}
            >
              Go back
            </button>
          </div>
        </div>
        <div className="row d-flex justify-content-around align-items-center p-3 border">
          <h3 className="text-center mb-3">{names}</h3>
          <div className="col-md-4">
            <img
              src={flags}
              alt={names}
              className="img-thumbnail"
              width="500px"
            />
            <h5 className="text-center mt-3"><em>Flag of {names}</em></h5>
          </div>
          <div className="col-md-4">
            <ul className="list-group w-100">
              <li className="list-group-item p-3">
                <strong>Country: </strong> {names ? names : "no"}
              </li>
              <li className="list-group-item p-3">
                <strong>Population: </strong> {population ? population : "no"}
              </li>
              <li className="list-group-item p-3">
                <strong>Region: </strong> {region ? region : "no"}
              </li>
              <li className="list-group-item p-3">
                <strong>Capital: </strong> {capital ? capital : "no"}
              </li>
              <li className="list-group-item p-3">
                <strong>Area: </strong> {area ? area : "not found"} km
                <sup>2</sup>
              </li>
              <li className="list-group-item p-3">
                <strong>Continents: </strong> {continents}
              </li>
              <li className="list-group-item p-3">
                <strong>Languages: </strong>
                {language ? language : "not languages"}
              </li>
              <li className="list-group-item d-flex p-3">
                <strong>Currencies: </strong>
                <ul className="list-unstyled ms-3">
                  <li>name: {currency ? currency : "no"}</li>
                  <li>symbol: {currencySymbol ? currencySymbol : "no"}</li>
                </ul>
              </li>
              <li className="list-group-item p-3">
                <strong>Independence: </strong>
                {independent ? "independence" : "not independent"}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};
export default index;
