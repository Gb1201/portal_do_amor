import React, { useState } from "react";

function Login() {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  function logando(event) {
    event.preventDefault();

    console.log("Email:", email);
    console.log("Senha:", senha);

    if (email === "gabriel@gmail.com" && senha === "123") {
      alert("Login realizado com sucesso!");
    } else {
      alert("Login ou senha inválidos!");
    }
  }

  return (
    <div className="d-flex align-items-center py-4 bg-body-tertiary" style={{ minHeight: "100vh" }}>
      <main className="form-signin w-100 m-auto" style={{ maxWidth: "330px" }}>
        <form onSubmit={logando}>
          <img
            className="mb-4"
            src="https://getbootstrap.com/docs/5.3/assets/brand/bootstrap-logo.svg"
            alt="Bootstrap"
            width="72"
            height="57"
          />

          <h1 className="h3 mb-3 fw-normal text-center">
            Please sign in
          </h1>

          <div className="form-floating mb-2">
            <input
              type="email"
              className="form-control"
              id="floatingInput"
              placeholder="name@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <label htmlFor="floatingInput">Email address</label>
          </div>

          <div className="form-floating mb-3">
            <input
              type="password"
              className="form-control"
              id="floatingPassword"
              placeholder="Password"
              value={senha}
              onChange={(e) => setSenha(e.target.value)}
              required
            />
            <label htmlFor="floatingPassword">Password</label>
          </div>

          <div className="form-check text-start my-3">
            <input
              className="form-check-input"
              type="checkbox"
              value="remember-me"
              id="checkDefault"
            />
            <label className="form-check-label" htmlFor="checkDefault">
              Remember me
            </label>
          </div>

          <button className="btn btn-primary w-100 py-2" type="submit">
            Sign in
          </button>

          <p className="mt-5 mb-3 text-body-secondary text-center">
            &copy; 2017–2025
          </p>
        </form>
      </main>
    </div>
  );
}

export default Login;