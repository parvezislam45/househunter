import React, { useState } from "react";
import {Link,useNavigate } from "react-router-dom";
const Register = () => {
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [userType, setUserType] = useState("");
  const handleSubmit = (e) => {
    console.log(fname, lname, email, password);
    if (userType == "Admin") {
      e.preventDefault();
     
    } else {
      e.preventDefault();

      fetch("http://localhost:8000/register", {
        method: "POST",
        crossDomain: true,
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          "Access-Control-Allow-Origin": "*",
        },
        body: JSON.stringify({
          fname,
          email,
          lname,
          password,
          userType,
        }),
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data, "userRegister");
          if (data.status == "ok") {
            alert("Registration Successful");
          } else {
            alert("Something went wrong");
          }
        });
    }
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label class="mt-8 text-xl font-normal leading-4 text-gray-800 dark:text-gray-50">
          Please Give Your Name
        </label>
        <div class="mt-8">
          <input
            class="border border-gray-300 p-4 rounded w-full text-base leading-4 placeholder-gray-600 text-gray-600"
            type="text"
            onChange={(e) => setFname(e.target.value)}
            placeholder="Enter Your Full Name"
          />
        </div>
        <div class="mt-8">
          <h1 class="text-gray-500">Select type of account</h1>

          <div>
            Register As
            <input
              type="radio"
              name="UserType"
              value="User"
              onChange={(e) => setUserType(e.target.value)}
            />
            User
            <input
              type="radio"
              name="UserType"
              value="Admin"
              onChange={(e) => setUserType(e.target.value)}
            />
            Admin
          </div>
        
        </div>
        {/* <div class="mt-8">
          <input
            class="border border-gray-300 p-4 rounded w-full text-base leading-4 placeholder-gray-600 text-gray-600"
            type="text"
            name="phoneNumber"
            value={formData.phoneNumber}
            onChange={handleInputChange}
            placeholder="Enter Your Phone No"
          />
        </div> */}
        <div class="mt-8">
          <input
            class="border border-gray-300 p-4 rounded w-full text-base leading-4 placeholder-gray-600 text-gray-600"
            type="email"
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
          />
          <label className="label"></label>
        </div>
        <label class="mt-8 text-base leading-4 text-gray-800 dark:text-gray-50">
          Please Input Your Password
        </label>
        <div class="mt-2 flex-col">
          <div>
            <input
              class="border rounded border-gray-300 p-4 w-full text-base leading-4 placeholder-gray-600 text-gray-600"
              type="password"
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
            />
            <label className="label"></label>
          </div>
        </div>

        <div class="mt-8">
          <button type="submit">Signup</button>
          {/* <input
            type="submit"
            value="Sign Up"
            class="border border-gray-300 btn bg-gray-700 hover:bg-yellow-600 p-4 rounded w-full text-base  text-white"
          /> */}
        </div>
      </form>
      <Link to="/login">
                <p class="underline hover:underline-offset-4 text-center text-black mt-5">
                  Already Have A Account Login
                </p>
              </Link>
    </div>
  );
};

export default Register;
