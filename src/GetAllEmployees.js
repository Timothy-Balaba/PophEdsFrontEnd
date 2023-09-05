import axios from "axios";
import { useEffect, useState } from "react";
import {useNavigate } from "react-router-dom";

function GetAllEmployees(){

  const[employees, getEmployees]=useState([]);
  const navigate=useNavigate();

  const renderFileUpload=()=>{
    navigate("/fileUpload");
  }

  const getAllEmployees=async()=>{
    const result=await axios.get(`http://localhost:8080/employeeProfile/getAllEmployees`)
    getEmployees(result.data);
  }

  useEffect(()=>{getAllEmployees()},[])

    return (
        <div className="container mt-4">

      <h5 className="mb-4">Employee Details</h5>

 

      <table className="table table-striped table-bordered">

        <thead className="bg-info text-white">

          <tr>

            <th>First Name</th>

            <th>Middle Name</th>

            <th>Last Name</th>

            <th>age</th>
            <th>email</th>
            <th>phoneNumber</th>
            <th>Job Title</th>
            <th>hired Date</th>

            {/* <th>Street</th>

            <th>City</th>

            <th>State</th>

            <th>Zip</th> */}
            <th>View Documents</th>{/* New column for viewing documents of an employee*/}

            <th>Add Documents</th> {/* New column for the Apply button */}

          </tr>

        </thead>

 

        <tbody>

          {employees.map((employee) => (

            <tr key={employee.id}>

              <td>{employee.firstname}</td>
              <td>{employee.middlename}</td>
              <td>{employee.lastname}</td>
              <td>{employee.age}</td>
              <td>{employee.email}</td>
              <td>{employee.phoneNumber}</td>
              <td>{employee.jobTitle}</td>
              <td>{employee.hireDate}</td>
              {/* <td>{job.address?.street}</td>
              <td>{job.address?.city}</td>
              <td>{job.address?.state}</td>
              <td>{job.address?.zip}</td> */}

              <td>

                <button className="btn btn-primary">View Documents</button>

              </td>
              <td>

                <button onClick={renderFileUpload} className="btn btn-primary">Add Documents</button>

              </td>

            </tr>

          ))}

        </tbody>

      </table>
      
      
    </div>
    );
};
export default GetAllEmployees;