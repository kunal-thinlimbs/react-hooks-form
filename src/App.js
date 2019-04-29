import React, { useState }  from 'react';
import logo from './logo.svg';
import './App.css';
function App() {
  const [firstName, set_FirstName] = useState("");
  const [lastName, set_LastName] = useState("");
  const [email, set_Email] = useState("");
  const [password, set_Password] = useState("");
  const [data, set_data] = useState(false);
return (
  <div>

    <h1 style={{textAlign:"center",fontWeight:"600"}}>  REACT HOOK WITH FORM</h1>
  <div style={{padding:"100px 400px"}}> 

  <div className="row">
  
  
 

    <form style={{width:"100%"}}>
      <input
        value={firstName}
        onChange={(e) =>
          {
              set_FirstName( e.target.value)
          console.log(firstName)
          }
        }
        placeholder="First name"
        type="text"
        name="firstName"
        required
      /> <br/>
      <input
        value={lastName}
        onChange={e => set_LastName(e.target.value)}
        placeholder="Last name"
        type="text"
        name="lastName"
        required
      /> <br/>
      <input
        value={email}
        onChange={e => set_Email(e.target.value)}
        placeholder="Email address  (MUST AHVE @ in EMAIl to ENABLE BUTTON)"
        type="email"
        name="email"
        required
      /> <br/>
      <input
        value={password}
        onChange={e => set_Password(e.target.value)}
        placeholder="Password"
        type="password"
        name="password"
        required
      /> <br/>

      
    </form>


{/* from submit button validation */ }

    {(firstName !=="" && lastName!==""  && email!=="" &&  email.indexOf("@")!==-1  && password!=="" )?
<button className="btn purple-gradient" style={{width:"100%"}} 
onClick={()=>{
  console.log("firstName",firstName,"lastName",lastName,"email",email,password)
  set_data(true)
  
}}

>Submit</button>:<button disabled className="btn purple-gradient" style={{width:"100%",opacity:"0.4"}} 

>Fill all data</button>}
    <br/>

  
    </div>
      
{data!=false && <p><b>name: </b>{firstName} <br/>
<b>Lastname: </b>{lastName} <br/>
<b>Email: </b>{email} <br/>
<b>Password: </b>{password} <br/>
 

 </p> }

 <p style={{color:"lightgreen",fontWeight:"600",textAlign:"center"}}>you can also see data on console </p>
</div>
</div>
  );
}
export default App;