import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

const Create = () => {
  const [values, setValue] = useState({
    name: "",
    age: "",
    course: "",
    email: "",
  });
  const navigate = useNavigate();
  const handleSubmit = (event) => {
    event.preventDefault();
    axios
      .post("http://localhost:5000/students", values)
      .then((res) => {
        console.log(res);
        navigate("/");
      })
      .catch((err) => console.log(err));
  };

  return (
    <>
      <div className="d-flex w-100 vh-100 justify-content-center aligh-item-center bg-light">
        <div className="w-50 bg-white shadow px-5 pt-3 pb-5 rounded">
          <h1>Add a User</h1>
          <form onSubmit={handleSubmit}>
            <div>
              <label>Name:</label>
              <input
                type="text"
                onChange={(e) =>
                  setValue({ ...values, [e.target.name]: e.target.value })
                }
                name="name"
                className="form-control"
              ></input>
            </div>
            <div>
              <label>Age:</label>
              <input
                type="number"
                onChange={(e) =>
                  setValue({ ...values, [e.target.name]: e.target.value })
                }
                name="age"
                className="form-control"
              ></input>
            </div>
            <div>
              <label>Course:</label>
              <input
                type="text"
                name="course"
                onChange={(e) =>
                  setValue({ ...values, [e.target.name]: e.target.value })
                }
                className="form-control"
              ></input>
            </div>
            <div>
              <label>Email:</label>
              <input
                type="email"
                name="email"
                onChange={(e) =>
                  setValue({ ...values, [e.target.name]: e.target.value })
                }
                className="form-control"
              ></input>
            </div>
            <button className="btn btn-primary mt-2">Submit</button>
            <Link to={"/"} className="btn btn-success ms-3 mt-2">
              Back⬅️
            </Link>
          </form>
        </div>
      </div>
    </>
  );
};

export default Create;
