import React from "react";
import { useForm } from "react-hook-form";
import useAuth from "../Hooks/useAuth";
import './styles/register.css';
import { Link } from "react-router-dom";

const Register = () => {
  const { handleSubmit, register, reset } = useForm();

  const submit = (data) => {
    useAuth("/users", data);
    reset({
      email: "",
      firstName: "",
      lastName: "",
      password: "",
      phone: "",
    });
  };

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit(submit)} className="form">
        <p className="title">Register</p>
        <p className="message">Signup now and get full access to our app.</p>
        <div className="flex">
          <label htmlFor="firstName">
            <input
              {...register("firstName")}
              id="firstName"
              className="input"
              type="text"
              placeholder=""
              required
            />
            <span>Firstname</span>
          </label>

          <label htmlFor="lastName">
            <input
              {...register("lastName")}
              id="lastName"
              className="input"
              type="text"
              placeholder=""
              required
            />
            <span>Lastname</span>
          </label>
        </div>

        <label htmlFor="email">
          <input
            {...register("email")}
            id="email"
            className="input"
            type="email"
            placeholder=""
            required
          />
          <span>Email</span>
        </label>

        <label htmlFor="password">
          <input
            {...register("password")}
            id="password"
            className="input"
            type="password"
            placeholder=""
            required
          />
          <span>Password</span>
        </label>
        <label htmlFor="phone">
          <input
            {...register("phone")}
            id="phone"
            className="input"
            type="number"
            placeholder=""
            required
          />
          <span>Phone</span>
        </label>
        <button className="submit">Submit</button>
      </form>
      <p className="signin">
        Already have an account? <Link to="/login">Sign in</Link>
      </p>
    </div>
  );
};

export default Register;
