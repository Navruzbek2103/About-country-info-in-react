import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';

const index = () => {
  return (
    <div className="card p-5 shadow mx-auto w-75 mt-5">
      <ul className="p-4 d-flex w-25 justify-content-around bg-info list-unstyled">
        <li className='text-uppercase'><NavLink to="/home/left">Left</NavLink></li>
        <li className='text-uppercase'><NavLink to="/home/right">Right</NavLink></li>
      </ul>
      <div className="row">
        <div className="col shadow p-5">
          <Outlet />
        </div>
      </div>
    </div>
  )
}

export default index;