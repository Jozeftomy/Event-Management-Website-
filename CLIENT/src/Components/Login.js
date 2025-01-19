import React, { useState } from "react";
import { useNavigate } from 'react-router';
import "./Login.css";

const Login = () => {
  let navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent form submission if validation fails

    // Basic validation
    if (!formData.email.includes("@")) {
      alert("Please enter a valid email address!");
      return; // Stop further execution
    }

    if (formData.password.length < 6) {
      alert("Password must be at least 6 characters long!");
      return; // Stop further execution
    }

    console.log("Login details:", formData);
    alert("Login successful!");

    // Prepare headers and body for the API request
    
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    const raw = JSON.stringify({
      email: formData.email,
      password: formData.password,
    });

    const requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };

    // Make API call
    fetch("http://localhost:4000/users/login", requestOptions)
      .then((response) => response.json())
      .then((result) => {
        if (result.data) {
          console.log(result.data); // Token from server response
          localStorage.setItem("emw token", result.data); // Store token in local storage
          navigate("/dashboard"); // Redirect to dashboard
        } else {
          alert("Login Failed. Invalid credentials.");
        }
      })
      .catch((error) => {
        console.error("Login error:", error);
        alert("An error occurred. Please try again later.");
      });
  };

  return (
    <div className="login-container">
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Email:</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Enter your email"
            required
          />
        </div>
        <div className="form-group">
          <label>Password:</label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            placeholder="Enter your password"
            required
          />
        </div>
        <button type="submit" className="submit-button">Login</button>
      </form>
    </div>
  );
};

export default Login;
