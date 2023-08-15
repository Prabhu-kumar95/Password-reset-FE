import React from "react";
import { Link } from "react-router-dom";

function Error() {
  return <div> <section>
  <div className="FormContainer1">
   
    <form>
      <h2>Your link expired !!!!</h2>
   
      <h4>Do you want to generate a new link???</h4>

      <div className="buttonsection">
        <Link to="/Forgotpassword"
          type="submit"
          className="btn btn-primary"
          
        >
          Enter here
        </Link>
      </div>
    </form>
    
  </div>
</section></div>;
}
export default Error;
