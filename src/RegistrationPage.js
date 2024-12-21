import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useAuth } from './AuthContext';

const RegistrationPage = () => {
  const navigate = useNavigate();
  const { login } = useAuth();
  
  const [token, setToken] = useState("");
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [gender, setGender] = useState("");
  const [designation, setDesignation] = useState("");
  const [organisation, setOrganisation] = useState("");
  const [address, setAddress] = useState("");
  const [status, setStatus] = useState("");
  const [error, setError] = useState("");
  const [isLinkValid, setIsLinkValid] = useState(false);
  const [isRegistering, setIsRegistering] = useState(false);

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const tokenParam = urlParams.get("token");
    const emailParam = urlParams.get("email");
  
    const validateLink = async () => {
      try {
        const response = await axios.get(
          `http://localhost:8080/api/registration/validate?token=${tokenParam}&email=${emailParam}`
        );
    
        console.log("Validation Response:", response.data);
    
        switch (response.data.status) {
          case "ALREADY_REGISTERED":
            // Redirect to home page for already registered users
            setError("This account is already registered. Please log in.");
            navigate('/');
            return;
    
          case "VALID_TOKEN":
            setToken(tokenParam);
            setEmail(emailParam);
            setIsLinkValid(true);
            break;
    
          case "NO_USER":
            setError("No user found. Please register first.");
            setIsLinkValid(false);
            break;
    
          case "INVALID_TOKEN":
            setError("Invalid or expired registration link");
            setIsLinkValid(false);
            break;
    
          default:
            console.error("Unexpected status:", response.data.status);
            setError("An unexpected error occurred");
            setIsLinkValid(false);
        }
      } catch (err) {
        console.error("Validation Error:", err);
        setError(err.response?.data?.message || "Invalid or expired registration link");
        setIsLinkValid(false);
      }
    };    
  
    validateLink();
  }, [navigate]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsRegistering(true);
    setError("");

    if (
      !name.trim() ||
      !phone.trim() ||
      !gender ||
      !designation.trim() ||
      !organisation.trim() ||
      !address.trim()
    ) {
      setError("All fields are required");
      setIsRegistering(false);
      return;
    }

    try {
      const response = await axios.post(
        "http://localhost:8080/api/registration/register",
        {
          email,
          token,
          name: name.trim(),
          phone: phone.trim(),
          gender,
          designation: designation.trim(),
          organisation: organisation.trim(),
          address: address.trim(),
        }
      );

      login({
        email: email,
        name: name.trim()
      });

      console.log("Response from registration:", response.data);

      setStatus("Registration successful!");
      
      setTimeout(() => {
        navigate('/');
      }, 1000);

    } catch (err) {
      setError(err.response?.data || "Registration failed");
      setIsRegistering(false);
    }
  };

  if (!isLinkValid) {
    return (
      <div className="mt-40">
        <h3>Registration</h3>
        <div className="text-red-500">
          {error || "Invalid or expired registration link"}
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center justify-center h-screen relative">
      {/* Background Image */}
      <img
        alt="Background"
        src="/Campus-login.jpeg"
        className="absolute inset-0 object-cover w-full h-full"
      />
      {/* Overlay */}
      <div className="absolute w-full h-full bg-black opacity-70"></div>

      {/* Registration Form */}
      <div className="absolute flex flex-row w-full">
        <div className="m-auto mx-5 sm:m-auto">
          <div className="rounded-xl bg-[#0000000f] border border-[#a6a6a67d] backdrop-blur-md shadow-xl">
            <div className="p-6 sm:p-12">
              <div className="relative flex flex-col items-center justify-center">
                <div className="flex flex-col justify-center max-w-md space-y-5">
                  <div className="text-left">
                    <h3 className="px-2 text-4xl font-bold text-white">
                      Registration
                    </h3>
                    <p className="px-2 py-1 text-base font-light text-gray-300">
                      Fill in your details to get started
                    </p>
                  </div>
                  {error && (
                    <p className="text-red-500 text-center">{error}</p>
                  )}
                  {status && (
                    <p className="text-green-500 text-center">{status}</p>
                  )}

                  <form onSubmit={handleSubmit} className="space-y-5">
                    {/* Name Field */}
                    <input
                      type="text"
                      placeholder="Full Name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      required
                      className="w-full bg-transparent border border-gray-400 rounded-md py-3 pl-5 pr-3 text-white outline-none focus:ring-2 focus:ring-orange-500"
                      disabled={isRegistering}
                    />

                    {/* Other Fields in Two Columns */}
                    <div className="grid grid-cols-2 gap-4">
                      <input
                        type="email"
                        value={email}
                        readOnly
                        disabled
                        className="w-full bg-transparent border border-gray-400 rounded-md py-4 pl-5 pr-3 text-white outline-none focus:ring-2 focus:ring-orange-500"
                      />
                      <input
                        type="text"
                        placeholder="Mobile Number"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        required
                        className="w-full bg-transparent border border-gray-400 rounded-md py-3 pl-5 pr-3 text-white outline-none focus:ring-2 focus:ring-orange-500"
                        disabled={isRegistering}
                      />
                      <select
                        value={gender}
                        onChange={(e) => setGender(e.target.value)}
                        required
                        className="w-full bg-transparent border border-gray-400 rounded-md py-3 pl-5 pr-3 text-white outline-none focus:ring-2 focus:ring-orange-500"
                        disabled={isRegistering}
                      >
                        <option value="" disabled>
                          Select Gender
                        </option>
                        <option value="Male">Male</option>
                        <option value="Female">Female</option>
                        <option value="Other">Other</option>
                      </select>
                      <select
                        value={designation}
                        onChange={(e) => setDesignation(e.target.value)}
                        required
                        className="w-full bg-transparent border border-gray-400 rounded-md py-3 pl-5 pr-3 text-white outline-none focus:ring-2 focus:ring-orange-500"
                        disabled={isRegistering}
                      >
                        <option value="" disabled>
                          Select Designation
                        </option>
                        <option value="Student">Student</option>
                        <option value="Faculty">Faculty</option>
                        <option value="Scientist">Scientist</option>
                        <option value="Industrialist">Industrialist</option>
                      </select>
                      <input
                        type="text"
                        placeholder="University or Company Name"
                        value={organisation}
                        onChange={(e) => setOrganisation(e.target.value)}
                        required
                        className="w-full bg-transparent border border-gray-400 rounded-md py-3 pl-5 pr-3 text-white outline-none focus:ring-2 focus:ring-orange-500"
                        disabled={isRegistering}
                      />
                      <input
                        type="text"
                        placeholder="Address"
                        value={address}
                        onChange={(e) => setAddress(e.target.value)}
                        required
                        className="w-full bg-transparent border border-gray-400 rounded-md py-3 pl-5 pr-3 text-white outline-none focus:ring-2 focus:ring-orange-500"
                        disabled={isRegistering}
                      />
                    </div>

                    {/* Register Button */}
                    <button
                      type="submit"
                      className={`w-auto px-6 py-2 bg-blue-500 flex justify-center text-white rounded-lg 
                        ${isRegistering ? 'opacity-50 cursor-not-allowed' : 'hover:bg-blue-600'} mx-auto`}
                      disabled={isRegistering}
                    >
                      {isRegistering ? "Registering..." : "Register"}
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegistrationPage;