import React, { useState } from "react";

const LoginPage = () => {
  const [isFocused, setIsFocused] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const [statusMessage, setStatusMessage] = useState("");

  const handleSendEmail = async () => {
    if (!inputValue) {
      setStatusMessage("Please enter a valid email address.");
      return;
    }
  
    try {
      const response = await fetch("http://localhost:8080/api/email/send", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: inputValue,
          name: "User",
        }),
      });
  
      const data = await response.text(); // Get the response text
  
      if (response.ok) {
        setStatusMessage("Login link sent! Check your email.");
      } else {
        console.error("Server response:", data);
        setStatusMessage(`Failed to send login link: ${data}`);
      }
    } catch (error) {
      console.error("Error sending email:", error);
      setStatusMessage("An error occurred. Please try again.");
    }
  };

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

      {/* Login Form */}
      <div className="mt-20 absolute flex flex-row w-full">
        <div className="m-auto mx-5 sm:m-auto">
          <div className="rounded-xl bg-[#0000000f] border border-[#a6a6a67d] backdrop-blur-md shadow-xl">
            <div className="p-6 sm:p-12">
              <div className="relative flex flex-col items-center justify-center">
                <div className="flex flex-col justify-center max-w-md space-y-5">
                  {/* Heading */}
                  <div className="flex flex-col space-y-5">
                    <div className="text-left">
                      <h3 className="px-2 text-4xl font-bold text-white">
                        Login
                      </h3>
                      <p className="px-2 py-1 text-base font-light text-gray-300">
                        Sign in to register for our events or to access your
                        account
                      </p>
                    </div>
                  </div>

                  {/* Email Input */}
                  <div className="relative px-2 mt-5 sm:px-0">
                    <input
                      id="email-input"
                      type="email"
                      value={inputValue}
                      onChange={(e) => setInputValue(e.target.value)}
                      onFocus={() => setIsFocused(true)}
                      onBlur={() => setIsFocused(false)}
                      placeholder="Enter your Email Address"
                      className={`w-full bg-transparent border ${
                        isFocused ? "border-orange-500" : "border-gray-400"
                      } rounded-md py-4 pt-5 pl-5 pr-3 text-white outline-none focus:ring-2 focus:ring-orange-500
                        placeholder-transparent`}
                    />
                    <span
                      onClick={() =>
                        document.getElementById("email-input").focus()
                      }
                      className={`absolute left-5 cursor-text transition-all ${
                        isFocused || inputValue
                          ? "text-blue-600 text-xs top-1"
                          : "text-gray-400 text-lg top-4"
                      }`}
                    >
                      Enter your Email Address
                    </span>
                  </div>

                  {/* Send Login Link Button */}
                  <div
                    className="px-2 sm:px-0"
                    style={{ marginTop: "2rem" }}
                  >
                    <button
                      onClick={handleSendEmail}
                      className="text-white w-full bg-[#4285F4] hover:bg-[#4285F4]/90 focus:ring-4 focus:outline-none focus:ring-[#4285F4]/50 font-medium rounded-xl text-sm px-5 py-3 flex justify-center dark:focus:ring-[#4285F4]/55"
                    >
                      <div className="inline-flex items-center justify-between py-1">
                        {/* Mail Icon */}
                        <svg
                          className="w-4 h-4 mr-2 -ml-1"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path d="M20 4H4C2.897 4 2 4.897 2 6v12c0 1.103.897 2 2 2h16c1.103 0 2-.897 2-2V6c0-1.103-.897-2-2-2zM4 6h16l-8 5-8-5zm0 12V8l8 5 8-5v10H4z" />
                        </svg>
                        <b>Send Login Link</b>
                      </div>
                    </button>
                  </div>

                  <div className="flex items-center justify-center space-x-2 mt-5" style={{ marginTop: "2rem" }}>
                    <div className="h-0.5 w-full bg-white opacity-20"></div>
                    <span className="text-white text-medium px-2 opacity-90">OR</span>
                    <div className="h-0.5 w-full bg-white opacity-20"></div>
                  </div>

                  <div className="px-2 sm:px-0" style={{ marginTop: "2rem", marginBottom: "1rem" }}>
                    <a
                      type="button"
                      href="/auth/google"
                      className="text-[#4285F4] w-full bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-xl text-sm px-5 py-4 flex justify-center items-center"
                    >
                     {/* Google Logo */}
                      <img
                        src="/Google.png"
                        alt="Google Logo"
                        className="w-5 h-5 mr-2"
                      />
                     <b>Continue with Google</b>
                    </a>
                  </div>

                  <div className="h-full w-full mt-[10%] flex justify-center items-end px-11 text-center">
                    <p className="text-xs font-light text-gray-400 whitespace-nowrap">
                      By signing in, you agree to our{" "}
                      <a
                        href="/terms-service"
                        className="text-blue-500 underline"
                      >
                        Terms of Service
                      </a>{" "}
                      and{" "}
                      <a
                        href="/privacy-policy"
                        className="text-blue-500 underline"
                      >
                        Privacy Policy
                      </a>
                      .
                    </p>
                  </div>

                  {/* Status Message */}
                  {statusMessage && (
                    <p className="text-center text-sm text-white mt-4">
                      {statusMessage}
                    </p>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;