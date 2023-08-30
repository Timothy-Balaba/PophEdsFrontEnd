function EmployeeProfileForm(){
    return(
        <div>
        <h1>Create employee Profile</h1>
        <br></br>
        <body  class="grid gap-3">
        <form class="row g-3">
        <div class="row">
    <div class="col">
      <input type="text" class="form-control" placeholder="First name" aria-label="First name"/>
    </div>
    <div class="col">
      <input type="text" class="form-control" placeholder="Middle name" aria-label="Middle name"/>
    </div>
    <div class="col">
      <input type="text" class="form-control" placeholder="Last name" aria-label="Last name"/>
    </div>
    <div class="col">
      <input type="Number" class="form-control" placeholder="Age" aria-label="Age"/>
    </div>

  </div>
    <div class="col-md-6">
      <label for="inputEmail4" class="form-label">Email</label>
      <input type="email" class="form-control" id="inputEmail4"/>
    </div>
    <div class="col-md-6">
      <label for="inputPassword4" class="form-label">Password</label>
      <input type="password" class="form-control" id="inputPassword4"/>
    </div>
    <div class="col-md-6">
      <label for="phoneNumber" class="form-label">Phone Number</label>
      <input type="text" class="form-control" id="phoneNumber"/>
    </div>

    <div class="col-12">
      <input type="text" class="form-control" placeholder="Job Title" aria-label="Job Title"/>
    </div>
    <div class="col-md-6">
      <label for="Date" class="form-label">Hire Date</label>
      <input type="date" class="form-control" id="hireDate"/>
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
      </select>
    </div>
    <div class="col-md-2">
      <label for="inputZip" class="form-label">Zip</label>
      <input type="text" class="form-control" id="inputZip"/>
    </div>
    <div class="col-12">
      <div class="form-check">
        <input class="form-check-input" type="checkbox" id="gridCheck"/>
        <label class="form-check-label" for="gridCheck">
          Check me out
        </label>
      </div>
    </div>
    <div class="col-12">
      <button type="submit" class="btn btn-primary">Submit</button>
    </div>
  </form>
  </body>
  </div>
    );
}
export default EmployeeProfileForm;