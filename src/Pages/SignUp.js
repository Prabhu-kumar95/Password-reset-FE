import { useState } from "react";
import React from "react";
import { Link } from "react-router-dom";

function SignUp() {
  const [inpVal, SetInpVal] = useState({
    fullname: "",
    email: "",
    password: "",
  });

  const setVal = (e) => {
    const { name, value } = e.target;

    SetInpVal(() => {
      return {
        ...inpVal,
        [name]: value,
      };
    });
  };

  const addUserdata = async (e) => {
    e.preventDefault();

    const { fullname, email, password } = inpVal;
    if (fullname === "") {
      alert("please enter yourname");
    } else if (email === "") {
      alert("please enter your email");
    } else if (password === "") {
      alert("please enter password");
    } else {
      // console.log("user registration successfully");
      const data = await fetch("http://localhost:5000/api/user", {
        method: "POST",

        headers: {
          "content-Type": "application/json",
        },
        body: JSON.stringify({
          fullname,
          email,
          password,
        }),
      });
      const res = await data.json();
      if (res.status === 201) {
        alert("User registered successfully");
        SetInpVal({ ...inpVal, fullname: "", email: "", password: "" });
      } else {
        alert("user already exists");
      }
    }
  };

  return (
    <div>
      <section>
        <div className="FormContainer">
          <form>
            <h2>Register</h2>
            <div className="mb-3">
              <label for="Fullname" className="form-label">
                Fullname
              </label>
              <input
                type="text"
                name="fullname"
                className="form-control"
                value={inpVal.fullname}
                required
                placeholder="Enter your fullname"
                onChange={setVal}
              />
            </div>
            <div className="mb-3">
              <label for="exampleInputEmail1" className="form-label">
                Email address
              </label>
              <input
                type="email"
                name="email"
                value={inpVal.email}
                required
                className="form-control"
                placeholder="Enter your Email address"
                onChange={setVal}
              />
              <div id="emailHelp" className="form-text">
                We'll never share your email with anyone else.
              </div>
            </div>
            <div className="mb-3">
              <label for="exampleInputPassword1" className="form-label">
                Password
              </label>

              <input
                type="password"
                name="password"
                value={inpVal.password}
                required
                className="form-control"
                placeholder="Enter your Password"
                onChange={setVal}
              />
            </div>
            <button
              type="submit"
              className="btn btn-primary"
              onClick={addUserdata}
            >
              Submit
            </button>
            <p className="Text"> Already have an account?</p>{" "}
            <Link to="/" type="submit" className="btn btn-primary">
              Login
            </Link>
          </form>
        </div>
      </section>
    </div>
  );
}

export default SignUp;
