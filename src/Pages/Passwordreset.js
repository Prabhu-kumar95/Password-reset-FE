import React, { useState,useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { BASE_URL } from "./helper";

const Passwordreset = () => {
  const { id, token } = useParams();

  const history = useNavigate();

  const [password, setPassword] = useState("");
  

  const userValid = async () => {
    const res = await fetch(`${BASE_URL}/api/forgotpassword/${id}/${token}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await res.json();
    if (data.status === 201) {
      console.log("user valid");
    } else {
      history("*");
    }
  };
  const setVal = (e) => {
    setPassword(e.target.value);
  };

  const sendpassword = async (e) => {
    e.preventDefault();

    const res = await fetch(`${BASE_URL}/api/${id}/${token}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ password }),
    });
    const data = await res.json();
    if (data.status === 201) {
      setPassword("");
      alert("Password updated successfully");
      history("/");
    } else {
      alert("Token expired");
    }
  };

  useEffect(() => {
    userValid();
     // eslint-disable-next-line
  },[]);

  return (
    <div>
      <section>
        <div className="FormContainer1">
         
          <form>
            <h2>Password-reset</h2>
            <div className="mb-3">
              <label for="exampleInputEmail1" className="form-label">
                New Password
              </label>
              <input
                type="password"
                className="form-control"
                placeholder="Enter your new password"
                value={password}
                required
                onChange={setVal}
              />
            </div>

            <div className="buttonsection">
              <button
                type="submit"
                className="btn btn-primary"
                onClick={sendpassword}
              >
                Enter
              </button>
            </div>
          </form>
          <ToastContainer />
        </div>
      </section>
    </div>
  );
};
export default Passwordreset;
