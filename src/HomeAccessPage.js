import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useAuth } from './AuthContext';
import HomePage from './HomePage';

const HomeAccessPage = () => {
  const navigate = useNavigate();
  const { login } = useAuth(); // Ensure this is destructured correctly
  
  const [isValidated, setIsValidated] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const token = urlParams.get("token");
    const email = urlParams.get("email");

    const validateHomeAccess = async () => {
      try {
        const response = await axios.get(
          `http://localhost:8080/api/registration/validate?token=${token}&email=${email}`
        );

        console.log("Home Access Validation Response:", response.data);

        switch (response.data.status) {
          case "ALREADY_REGISTERED":
            // Check if login function exists before calling
            if (typeof login === 'function') {
              login({
                email: response.data.email,
                name: response.data.name
              });
            } else {
              console.error("Login is not a function");
              setError("Authentication error");
              return;
            }
            setIsValidated(true);
            break;

          case "INVALID_TOKEN":
            setError("Invalid or expired access link");
            break;

          default:
            setError("Unexpected error occurred");
        }
      } catch (err) {
        console.error("Validation Error:", err);
        setError(err.response?.data?.message || "Invalid or expired access link");
      }
    };

    validateHomeAccess();
  }, [login, navigate]);

  if (isValidated) {
    return <HomePage />;
  }

  return (
    <div className="mt-40 text-center">
      <h3>Home Page Access</h3>
      <div className="text-red-500">
        {error || "Validating access..."}
      </div>
    </div>
  );
};

export default HomeAccessPage;