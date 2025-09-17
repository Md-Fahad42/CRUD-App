import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
const Read = () => {
  const [data, setData] = useState([]);
  const { id } = useParams();
  useEffect(() => {
    axios
      .get("http://localhost:5000/students/"+ id)
      .then((res) => setData(res.data))
      .catch((err) => console.log(err));
  }, [id]);
  return (
    <>
      <div className="d-flex w-100 vh-100 justify-content-center align-item-center bg-light">
        <div className="w-50 border bg-white shadow px-5 pt-3 pb-5 rounded">
          <h3>Detail of Student</h3>
          <div className="mb-3">
            <strong>ID:{data.id}</strong>
          </div>
          <div className="mb-3">
            <strong>Name:{data.name}</strong>
          </div>
          <div className="mb-3">
            <strong>Age:{data.age}</strong>
          </div>
          <div className="mb-3">
            <strong>Course{data.course}</strong>
          </div>
          <div className="mb-2">
            <strong>Email: {data.email}</strong>
          </div>
          <Link className="btn btn-success me-2" to={`/update/${id}`}>
            Edit
          </Link>
          <Link className="btn btn-danger " to={"/"}>
            Back
          </Link>
        </div>
      </div>
    </>
  );
};

export default Read;
