import { useState } from "react";
import  axios  from "axios";
function EmployeeProfileForm(){

const[firstname,setFirstName]=useState("");
const[middlename, setMiddleName]=useState("");
const[lastname,setLastname]=useState("");
const[age,setAge]=useState("");
const[email,setEmail]=useState("");
const[phoneNumber,setPhoneNumber]=useState("");
const[hireDate,setHireDate]=useState("");
const[jobTitle, setJobTitle]=useState("");

  const employeeProfile={
    firstname,
    middlename,
    lastname,
    age,
    email,
    phoneNumber,
    hireDate,
    jobTitle
  }

const submitting=async(e)=>{
  e.preventDefault();
  await axios.post(`http://localhost:8080/employeeProfile/addEmployeeProfile`,employeeProfile);
}

    return(
        <div>
        <h2>Create employee Profile</h2>
        <br></br>
        <body  class="grid gap-3">
        <form class="row g-3">
        <div class="row">
    <div class="col">
      <input type="text" class="form-control" onChange={(e)=>setFirstName(e.target.value)} placeholder="First name" aria-label="firstName"/>
    </div>
    <div class="col">
      <input type="text" class="form-control" onChange={(e)=>setMiddleName(e.target.value)} placeholder="Middle name" aria-label="middleName"/>
    </div>
    <div class="col">
      <input type="text" class="form-control" onChange={(e)=>setLastname(e.target.value)} placeholder="Last name" aria-label="lastName"/>
    </div>
    <div class="col">
      <input type="Number" class="form-control" onChange={(e)=>setAge(e.target.value)} placeholder="Age" aria-label="Age"/>
    </div>

  </div>
    <div class="col-md-6">
      <label for="inputEmail4" class="form-label">Email</label>
      <input type="email" class="form-control" onChange={(e)=>setEmail(e.target.value)} id="inputEmail4"/>
    </div>
    <div class="col-md-6">
      <label for="inputPassword4" class="form-label">Password</label>
      <input type="password" class="form-control" id="inputPassword4"/>
    </div>
    <div class="col-md-6">
      <label for="phoneNumber" class="form-label">Phone Number</label>
      <input type="text" class="form-control" onChange={(e)=>setPhoneNumber(e.target.value)} id="phoneNumber"/>
    </div>

    <div class="col-12">
      <input type="text" class="form-control" onChange={(e)=>setJobTitle(e.target.value)} placeholder="Job Title" aria-label="Job Title"/>
    </div>
    <div class="col-md-6">
      <label for="Date" class="form-label">Hire Date</label>
      <input type="date" class="form-control" onChange={(e)=>setHireDate(e.target.value)} id="hireDate"/>
    </div>
    <div class="col-12">
      <label for="inputAddress" class="form-label">Address</label>
      <input type="text" class="form-control" id="inputAddress" placeholder="1234 Main St"/>
    </div>
    <div class="col-12">
      <label for="inputAddress2" class="form-label">Address 2</label>
      <input type="text" class="form-control" id="inputAddress2" placeholder="Apartment, studio, or floor"/>
    </div>
    <div class="col-md-6">
      <label for="inputCity" class="form-label">City</label>
      <input type="text" class="form-control" id="inputCity"/>
    </div>
    <div class="col-md-4">
      <label for="inputState" class="form-label">State</label>
      <select id="inputState" class="form-select">
        <option selected>Choose...</option>
        <option>...</option>
        <option>Alabama</option>
    <option>Alaska</option>
    <optio>Arizona</optio>
    <option>New York</option>
    <option>New Jersey</option>
    <option>Pennsylvania</option>
    <option>Illinois</option>
    <option></option>
    <option></option>
      </select>
    </div>
    <div class="col-md-2">
      <label for="inputZip" class="form-label">Zip</label>
      <input type="text" class="form-control" id="inputZip"/>
    </div>
   
    <div class="col-12">
      <button type="submit" class="btn btn-primary" onClick={submitting}>Submit</button>
    </div>
  </form>
  </body>
  </div>
    );
}
export default EmployeeProfileForm;