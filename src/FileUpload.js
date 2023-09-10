import axios from "axios";
import { useState } from "react";
import { useParams } from "react-router-dom";

function FileUpload() {

  const {employeeId} = useParams();

  const [documentBase64String, setDocumentBase64String] = useState("");

  const convertFileToBase64=(event)=>{
    const file = event.target.files[0]; // Get the selected file
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        const base64String = e.target.result.split(",")[1]; // Extract the base64 string
        setDocumentBase64String(base64String);
      };
      reader.readAsDataURL(file); // Read the file as data URL
    }
  }

  const fileString={
     idDocx: documentBase64String
  }
  const submitEmployeeId = async () => {
    axios.post(`http://localhost:8080/employeeId/addId/${employeeId}`, fileString);
  }

  return (

    <div class="mb-3">
      <div>
        <label for="formFile" class="form-label">Employee Id</label>
        <br></br>
        <input class="form-control" type="file" onChange={(event)=>convertFileToBase64(event)} id="formFile" />
        <button type="submit" onClick={submitEmployeeId} class="btn btn-primary">Submit</button>
        
      </div>
      <div>
        <label for="formFile" class="form-label">Medical Evaluation Document</label>
        <input class="form-control" type="file" id="formFile" />
        <button type="submit" class="btn btn-primary">Submit</button>
      </div>
      <div>
        <label for="formFile" class="form-label">Training Document</label>
        <input class="form-control" type="file" id="formFile" />
        <button type="submit" class="btn btn-primary">Submit</button>
      </div>
      <div>
        <label for="formFile" class="form-label">HR Document</label>
        <input class="form-control" type="file" id="formFile" />
        <button type="submit" class="btn btn-primary">Submit</button>
      </div>
      <div>
        <label for="formFile" class="form-label">Payroll Document</label>
        <input class="form-control" type="file" id="formFile" />
        <button type="submit" class="btn btn-primary">Submit</button>
      </div>
      <div>
        <label for="formFile" class="form-label">Unemployment Claims Documents</label>
        <input class="form-control" type="file" id="formFile" />
        <button type="submit" class="btn btn-primary">Submit</button>
      </div>
      <div>
        <label for="formFile" class="form-label">Worker Compensation Document</label>
        <input class="form-control" type="file" id="formFile" />
        <button type="submit" class="btn btn-primary">Submit</button>
      </div>
      <div>
        <label for="formFile" class="form-label">Work Schedule Document</label>
        <input class="form-control" type="file" id="formFile" />
        <button type="submit" class="btn btn-primary">Submit</button>
      </div>

    </div>
  );
};
export default FileUpload;