import React from "react";
import { Link } from "react-router-dom";

const index = ({data: { flags: { png }, name: { common }, region, population, capital,},}) => {

  const styleLink = {
    textDecoration: "none",
    color: "black",
  }

  return (
    <Link to={`/countries/${common}`} style={styleLink} >
      <div className="card">
        <img src={png} alt={common} className="card-img p-2" height="200px" />
        <div className="card-body">
          <h4 className="card-title">{common}</h4>
          <ul>
            <li>
              <strong>Population: </strong>
              {population}
            </li>
            <li>
              <strong>Region: </strong>
              {region}
            </li>
            <li>
              <strong>Capital: </strong>
              {capital}
            </li>
          </ul>
        </div>
      </div>
    </Link>
  );
};

export default index;
