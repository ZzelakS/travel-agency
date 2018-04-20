import React from 'react';
import { Link } from 'react-router-dom';

import { BASE_URL } from '../config';

const TourItem = item => (
  // http://localhost:5000/images/boat.jpg

  <div className="col-lg-4 col-md-12 mb-3">
    <div className="view overlay z-depth-1-half">
      <div className="card">
        <div className="view overlay hm-white-slight">
          <img src={`${BASE_URL}/images/${item.image}`} className="img-fluid" alt="" />
          <Link to={`/tours/${item._id}`}>
            <div className="mask rgba-white-light" />
          </Link>
        </div>

        <div className="card-body">
          <h5 className="card-title">{item.title}</h5>
          <div className="card-text">{item.adress}</div>
          <div className="card-text"> {item.hotel}</div>
          <div className="card-text">Rating: {item.rating}</div>
          <div className="card-text">Price: ${item.price}</div>
          <Link to={`/tours/${item._id}`} className="btn btn-primary btn-md mdb-color darken-2">
            Detail
            <i className="fa fa-play ml-2" />
          </Link>
        </div>
      </div>
    </div>
  </div>
);

export default TourItem;
