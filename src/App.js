import './custom.scss';
import './App.css';
// import SignIn from './SignIn';
import EmployeeProfileForm from './EmployeeProfileForm';
// import FileUpload from './FileUpload';
import GetAllEmployees from './GetAllEmployees';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import FileUpload from './FileUpload';
function App() {

  const linkStyle = {
    textDecoration: "none", // Remove underline
    color: "white", // Set the link color
    fontSize: "16px", // Set the font size
    marginRight: "20px", // Add spacing between links
    fontWeight: "bold",        // Set font weight
    textTransform: "uppercase"
  };

  return (
    <Router class="container-fluid">
      <nav class="navbar navbar-expand-lg bg-body-tertiary">
        <div class="container-fluid">
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <Link to="/GetAllEmployees" style={linkStyle} className="btn btn-primary">Employees</Link>
              </li>
              <li class="nav-item">
                <Link to="/EmployeeProfileForm" style={linkStyle} className="btn btn-primary">Create Employee Profile</Link>
              </li>

            </ul>
            <form class="d-flex" role="search">
              <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
              <button class="btn btn-outline-success" type="submit">Search</button>
            </form>
          </div>
        </div>

      </nav>
      <Routes>
        <Route path="" element={<GetAllEmployees />}></Route>
        <Route path="/EmployeeProfileForm" element={<EmployeeProfileForm />}></Route>
        <Route path='/GetAllEmployees' element={<GetAllEmployees />}></Route>
        <Route path='/fileUpload/:employeeId' element={<FileUpload />} />
      </Routes>

    </Router>
  );
}

export default App;
