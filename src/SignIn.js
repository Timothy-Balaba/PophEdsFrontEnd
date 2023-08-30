function SignIn() {
  return (
    <div className="d-flex justify-content-center align-items-center vh-100">
      <form className="w-50">
        <div className="mb-3">
          <label htmlFor="inputEmail3" className="form-label">Email</label>
          <input type="email" className="form-control" id="inputEmail3" />
        </div>
        <div className="mb-3">
          <label htmlFor="inputPassword3" className="form-label">Password</label>
          <input type="password" className="form-control" id="inputPassword3" />
        </div>
        <button type="submit" className="btn btn-primary">Sign in</button>
      </form>
    </div>
  );
}

export default SignIn;
