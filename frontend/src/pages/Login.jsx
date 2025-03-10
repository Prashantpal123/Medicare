import React, { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { BASE_URL } from "../config";
import { authContext } from "../context/Authcontext.jsx";

const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { dispatch } = useContext(authContext);

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const submitHandler = async (event) => {
    event.preventDefault();
    if (loading) return; // Prevent multiple clicks
    setLoading(true);

    try {
      const res = await fetch(`${BASE_URL}/api/v1/auth/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const result = await res.json();

      if (!res.ok) {
        throw new Error(result.message);
      }

      dispatch({
        type: "LOGIN_SUCCESS",
        payload: {
          user: result.data,
          token: result.token,
          role: result.role,
        },
      });

      console.log(result, "Login data");

      navigate("/home");
      window.location.reload();
    } catch (error) {
      console.error("Login error:", error);
      setLoading(false);
    }
  };

  return (
    <section className="md:px-5 px-2 lg:px-0 mt-16 mb-32 md:mt-24">
      <div className="w-full max-w-[570px] mx-auto rounded-lg shadow-md md:p-10">
        <h3 className="mx-2 text-slate-900 text-[22px] leading-9 font-bold md:mb-8">
          Hello! <span className="text-sky-600">Welcome</span> Back 🎉
        </h3>
        <form action="" className="py-4 px-3 md:py-0" onSubmit={submitHandler}>
          <div className="mb-5">
            <input
              type="email"
              placeholder="Enter Your Email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              className="w-full px-4 py-3 border-b border-[#0066ff61] rounded-md"
              required
            />
          </div>

          <div className="mb-5">
            <input
              type="password"
              placeholder="Password"
              name="password"
              value={formData.password}
              onChange={handleInputChange}
              className="w-full px-4 py-3 border-b border-[#0066ff61] rounded-md"
              required
            />
          </div>

          <div className="flex justify-center md:mt-8">
            <button
              type="submit"
              className="bg-blue-600 hover:bg-blue-700 text-white text-[20px] py-2 md:px-40 px-32 rounded-[10px] font-[600] flex items-center justify-center"
              disabled={loading} // Disable button when loading
            >
              {loading ? (
                <span className="flex items-center">
                  <svg
                    className="animate-spin h-5 w-5 mr-2 text-white"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    ></circle>
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8v8H4z"
                    ></path>
                  </svg>
                  Logging in...
                </span>
              ) : (
                "Login"
              )}
            </button>
          </div>

          <p className="mt-5 text-gray-500 text-center">
            Don't have an account?{" "}
            <Link to="/register" className="text-sky-600 font-medium ml-1">
              Register
            </Link>
          </p>
        </form>
      </div>
    </section>
  );
};

export default Login;
