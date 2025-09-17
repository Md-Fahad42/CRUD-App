import axios from "axios";
import React from "react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
const Home = () => {
  const [data, setData] = useState([]);
  
  useEffect(() => {
    axios
      .get("http://localhost:5000/students")
      .then((res) => setData(res.data))
      .catch((err) => console.log(err));
  }, []);

  const handleDelete = (id) => {
    const confirm = window.confirm("Are you sure ?");
    if (confirm) {
      axios
        .delete("http://localhost:5000/students/" + id)
        .then(() => {
          location.reload();
    })
        .catch((err) => console.log(err));
    }
  };

  return (
    <>
      <div
        className="d-flex flex-column justify-content-center align-item-center bg-light "
        style={{ height: "100%", alignItems: "center" }}
      >
        <h1>List of Student's</h1>
        <div className="w-75 rounded bg-white border shadow  p-10">
          <div className="d-flex justify-content-end">
            <Link className="btn btn-success me-3 mt-3" to={"/create"}>
              Add+
            </Link>
          </div>
          <table className="table table-striped rounded  ">
            <thead>
              <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Age</th>
                <th>Course</th>
                <th>Email</th>
              </tr>
            </thead>
            <tbody>
              {data.map((data, index) => (
                <tr key={index}>
                  <td>{data.id}</td>
                  <td>{data.name}</td>
                  <td>{data.age}</td>
                  <td>{data.course}</td>
                  <td>{data.email}</td>

                  <td>
                    <Link
                      to={`/read/${data.id}`}
                      className="btn btn-sm btn-info me-2"
                    >
                      Read
                    </Link>
                    <Link
                      to={`/update/${data.id}`}
                      className="btn btn-sm btn-primary me-2"
                    >
                      Edit
                    </Link>
                    <Link
                      onClick={ () => handleDelete(data.id)}
                      className="btn btn-sm btn-danger me-2"
                    >
                      Delete
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default Home;
