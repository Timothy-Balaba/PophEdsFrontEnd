import './custom.scss';
import './App.css';
// import SignIn from './SignIn';
import EmployeeProfileForm from './EmployeeProfileForm';
// import FileUpload from './FileUpload';
import GetAllEmployees from './GetAllEmployees';
import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom';
function App() {
  return (
    <Router>
      <nav>
      <h1 className="text-center mb-4">Samaritan Homecare Services</h1>
      <Link to="/EmployeeProfileForm" style={{ marginRight: '20px' }}>Create Employee Profile</Link>
      <Link to="/GetAllEmployees">Get All Employees</Link>
    </nav>
    <Routes>
      <Route path="" element={<GetAllEmployees/>}></Route>
      <Route path="/EmployeeProfileForm" element={<EmployeeProfileForm/>}></Route>
      <Route path='/GetAllEmployees' element={<GetAllEmployees/>}></Route>
      </Routes>
      
  </Router>
  );
}

export default App;
