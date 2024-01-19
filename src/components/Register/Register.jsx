import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";
import { sendEmailVerification } from "firebase/auth";

const Register = () => {
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const { user, createUser } = useContext(AuthContext);

  const handleRegister = (event) => {
    setSuccess("");
    setError("");
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    const confirmPassword = form.confirm.value;
    console.log(name, email, password);

    if (password !== confirmPassword) {
      setError("Your Pass did not match ");
      return;
    } else if (password.length < 6) {
      setError("password length must be 6 or longer");
      return;
    }

    createUser(email, password)
      .then((result) => {
        const loggedUser = result.user;
        console.log(loggedUser);
        setSuccess("user has been create successfully");
        varificationEmail(result.user);
      })
      .catch((error) => {
        console.error(error.message);
        setError(error.message);
      });
  };

  const varificationEmail = (user) => {
    sendEmailVerification(user)
      .then(() => {
        setVerificationSent(true);
        alert("Please varify email");
      })
      .catch((error) => {
        console.error(error.message);
        setError(error.message);
      });
  };

  return (
    <div>
      <div
        className="hero min-h-screen bg-base-200 "
        // style={{
        //   backgroundImage:
        //     "url(https://images.unsplash.com/reserve/bOvf94dPRxWu0u3QsPjF_tree.jpg?ixid=M3wxMjA3fDB8MXxzZWFyY2h8NHx8bmF0dXJhbHxlbnwwfHx8fDE3MDU1NjUxOTN8MA&ixlib=rb-4.0.3)",
        // }}
      >
        <div className="hero-content flex-col ">
          <div className="text-center lg:text-left mt-24">
            <h1 className="text-5xl font-bold">Create an Account!</h1>
          </div>
          <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form onSubmit={handleRegister} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="text"
                  name="name"
                  placeholder="name"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="email"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  name="password"
                  placeholder="password"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Confirm Password</span>
                </label>
                <input
                  type="password"
                  name="confirm"
                  placeholder="confirm password"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Create an Account</button>
              </div>
              <p>
                <small>
                  Already have an account?
                  <Link to="/login" className="text-yellow-400	">
                    Login
                  </Link>
                </small>
              </p>
            </form>
            <p className="text-rose-500">{error}</p>
            <p className="text-green-500">{success}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
