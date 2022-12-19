import React, {useState, useEffect} from "react";
import {API} from "./../../api/api"
import Card from "./../../UI/Card"

const index = () => {
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    API.getAll().then(result => {
      setData(result.data)
      if(result.data){
        setLoading(true)
      }
    })
  }, [])

  if(!loading){
    return <h2 className="text-center">Loading . . .</h2>
  }


  return (
    <>
      <div className="container">
        <div className="row p-3">
          <div className="col-md-6 d-flex justify-content-end">
            <input type="text" className="form-control w-50 p-3" placeholder="Enter country name" />
          </div>
          <div className="col-md-6 d-flex justify-content-start">
          <select className="form-select w-50 p-3">
            <option value="defaultValue">Filter by Region</option>
            <option value="month">January</option>
          </select>
          </div>

          <div className="col-12">
            <h3 className="text-center">All countries</h3>
            <div className="wrapper">
              {data.length > 0 ? data.map((el, i) => {
                return <Card data={el} key={i} />
              }) : <h4>Not Found</h4>}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default index;