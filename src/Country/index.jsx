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

  const {flags, languages, region, population, capital} = data;
  // const {png} = flags
  console.log(data);
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
        <div className="row p-5">
          <div className="col-md-4">
            <h5 className="text-center">{names}</h5>
            <img
              src={`https://picsum.photos/id/124/330/200`}
              alt={names}
              width="330px"
            />
          </div>
          <div className="col-md-6">
            <ul className="list-group">
              <li className="list-group-item">
                <strong>Population: </strong> {population}
              </li>
              <li className="list-group-item">
                <strong>Region: </strong> {region}
              </li>
              <li className="list-group-item">
                <strong>Capital: </strong> {capital}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};
export default index;
