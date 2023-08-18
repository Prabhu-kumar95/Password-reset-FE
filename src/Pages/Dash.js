import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

function Dash() {
  const history = useNavigate();
  const DashValid = async () => {
    let token = localStorage.getItem("usersdatatoken");

    const res = await fetch("https://password-resets.onrender.com/api/validuser", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: token,
      },
    });
    const data = await res.json();
    if (data.status === 401 || !data) {
      history("*");
    } else {
      console.log("user verify");
      history("/Dash");
    }
  };
  useEffect(() => {
    DashValid();
    // eslint-disable-next-line
  }, []);
  return (
    <div>
      <div className="cardcontainer">
        <div className="card">
          <div className="card-body">
            <h5 className="card-title">Welcome</h5>
            <h6 className="card-subtitle mb-2 text-body-secondary">Welcome</h6>
            <p className="card-text">Thanks for visiting</p>

            <Link to="/" className="btn btn-primary">
              Back to Home
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Dash;
