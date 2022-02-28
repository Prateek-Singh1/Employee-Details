import React, { useState } from "react";
import "./EmployeeStyle.css";

const EmployeeDetails = () => {
  const [flag, setflag] = useState(true);

  const setFlag = () => {
    setflag(false);
  };

  const [userDetails, setUserDetails] = useState({
    username: "",
    department: "",
    rating: "",
  });

  const [Employe, setEmploye] = useState([]);

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setUserDetails({ ...userDetails, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newEmployee = { ...userDetails, id: new Date().getTime().toString() };

    setEmploye([...Employe, newEmployee]);

    setUserDetails({ username: "", department: "", rating: "" });
    setFlag(false);
  };
  const handleback = () => {
    setflag(true);
  };
  return (
    <div>
      {flag ? (
        <form action="" onSubmit={handleSubmit}>
          <h1>Employees feedback Form</h1>
          <br />
          <div>
            <label name="username">Enter Your Name :</label>
            <input
              required
              type="text"
              typr="text"
              autoComplete="off"
              name="username"
              id="username"
              value={userDetails.username}
              onChange={handleChange}
            ></input>
          </div>
          <br />
          <div>
            <label name="department">Department :</label>
            <input
              required
              type="text"
              typr="text"
              autoComplete="off"
              name="department"
              id="department"
              value={userDetails.department}
              onChange={handleChange}
            ></input>
          </div>
          <br />
          <div>
            <label name="rating">Rating :</label>
            <input
              required
              type="number"
              type="number"
              autoComplete="off"
              name="rating"
              id="rating"
              value={userDetails.rating}
              onChange={handleChange}
            ></input>
          </div>
          <br />
          <button type="submit">Submit</button>
        </form>
      ) : (
        <div>
          <h1>Employees feedback Details</h1>
          {Employe.map((newValues) => {
            return (
              <>
                <div className="showDataStyle">
                  <p>Name : {newValues.username} | </p>
                  <p>Department : {newValues.department} |</p>
                  <p>rating : {newValues.rating} </p>
                </div>
              </>
            );
          })}
          <br />
          <br />
          <button onClick={handleback}>Back</button>
        </div>
      )}
    </div>
  );
};

export default EmployeeDetails;
