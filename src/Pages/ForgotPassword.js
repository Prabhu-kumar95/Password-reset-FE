import React, { useState } from "react";
import { ToastContainer } from "react-toastify";
function ForgotPassword() {
  const [email, setEmail] = useState("");

  const [message, setMessage] = useState("");

  const setVal = (e) => {
    setEmail(e.target.value);
  };
  const sendLink = async (e) => {
    e.preventDefault();

    const res = await fetch("http://localhost:5000/api/sendpasswordlink", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
      }),
    });
    const data = await res.json();
    if (data.status === 201) {
      setEmail("");
      setMessage(true);
    } else {
      alert("Invalid user");
    }
  };

  return (
    <div>
      <section>
        <div className="FormContainer1">
         
          <form>
            <h2>ForgotPassword</h2>
            {message ? (
            <p style={{ color: "green", fontWeight: "bold" }}>
              password resetlink sent to your email
            </p>
          ) : (
            ""
          )}
            <div className="mb-3">
              <label for="exampleInputEmail1" className="form-label">
                Email address
              </label>
              <input
                type="email"
                className="form-control"
                value={email}
                required
                onChange={setVal}
              />
              <div id="emailHelp" className="form-text">
                please enter your registered email here.
              </div>
            </div>

            <div className="buttonsection">
              <button
                type="submit"
                className="btn btn-primary"
                onClick={sendLink}
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
}
export default ForgotPassword;
