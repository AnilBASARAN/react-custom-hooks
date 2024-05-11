import UseInputState from "./UseInputState";
import React from "react";
function SimpleFormHooks(){
const [email,updateEmail,resetEmail] = UseInputState("");

return(
    <div>
        <h1>What i am typing: {email}</h1>
        <input
        type="text"
        onChange={updateEmail}
        value={email}
        />
          <button onClick={resetEmail}>Reset</button>
        
    </div>
);
}
export default SimpleFormHooks;