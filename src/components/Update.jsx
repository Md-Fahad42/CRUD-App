import React from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom';
import { useState } from 'react';
import { useEffect } from 'react';
import axios from 'axios';

const Update = () => {
  // const [data, setData] = useState([]);
  const { id } = useParams();
  const navigate1 = useNavigate();
  const [values, setValue] = useState({
      name: "",
      age: "",
      course: "",
      email: "",
    });
  useEffect(() => {
    axios
      .get("http://localhost:5000/students/"+ id)
      .then((res) => setValue(res.data))
      .catch((err) => console.log(err));
  }, [id]);
   
  const handleUpdate = (e) =>{
     e.preventDefault()
      axios
      .put("http://localhost:5000/students/"+id, values)
      .then((res) => {
        console.log(res);
        navigate1("/");
      })
      .catch((err) => console.log(err));
  }

  return (
    <>
    <div className="d-flex w-100 vh-100 justify-content-center aligh-item-center bg-light">
            <div className="w-50 bg-white shadow px-5 pt-3 pb-5 rounded">
              <h1>Edit Student Details</h1>
              <form onSubmit={handleUpdate} >
                <div>
                  <label>Name:</label>
                  <input
                    type="text"
                    value={values.name}
                    name="name"
                    className="form-control"
                    onChange={(e) =>
                  setValue({ ...values, [e.target.name]: e.target.value })
                }
                  ></input>
                </div>
                <div>
                  <label>Age:</label>
                  <input
                    type="number"
                    value={values.age}
                    name="age"
                    className="form-control"
                    onChange={(e) =>
                  setValue({ ...values, [e.target.name]: e.target.value })
                }
                  ></input>
                </div>
                <div>
                  <label>Course:</label>
                  <input
                    type="text"
                    name="course"
                    value={values.course}
                    className="form-control"
                    onChange={(e) =>
                  setValue({ ...values, [e.target.name]: e.target.value })
                }
                  ></input>
                </div>
                <div>
                  <label>Email:</label>
                  <input
                    type="email"
                    name="email"
                   value={values.email}
                    className="form-control"
                    onChange={(e) =>
                  setValue({ ...values, [e.target.name]: e.target.value })
                }
                  ></input>
                </div>
                <button className="btn btn-primary mt-2">Update</button>
                <Link to={"/"} className="btn btn-success ms-3 mt-2">
                  Back⬅️
                </Link>
              </form>
            </div>
          </div>
    </>
  )
}

export default Update