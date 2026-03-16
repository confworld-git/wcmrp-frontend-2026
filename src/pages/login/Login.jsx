import React from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import bg from "../../assets/login_bg.webp";
import { toaster } from "evergreen-ui";

const Login = () => {
  const navigate = useNavigate();
  const onSubmit = async (e) => {
    let res;
    try {
      e.preventDefault();
      const formData = new FormData(e.currentTarget);
      
      res = await axios.post(
        import.meta.env.VITE_API_URL + "/login",
        formData,
        { withCredentials: true }
      );
      if (res.status === 200) {
        navigate("/Dashboard");
        toaster.success(res.data.message);
      }
    } catch (error) {
      toaster.danger(error.response.data.message);
    }
  };

  return (
    <div
      className="flex justify-center items-center bg-cover bg-top w-full h-screen p-5"
      style={{ backgroundImage: `url(${bg})` }}
    >
      <div
        data-aos="fade-up"
        className="w-full max-w-md bg-white shadow-lg rounded-lg p-8"
      >
        <h1 className="text-2xl font-semibold text-gray-800 text-center mb-6">
          <span className="text-teal-500"> Login</span> to your account
        </h1>
        <form onSubmit={onSubmit} className="space-y-4">
          <input
            type="email"
            name="email"
            placeholder="Enter Your Email"
            required
            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
          />
          <input
            type="password"
            name="password"
            placeholder="Enter Your Password"
            required
            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
          />
          <button
            type="submit"
            className="w-full bg-teal-500 text-white py-3 rounded-md font-semibold hover:bg-teal-600 transition duration-300"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
