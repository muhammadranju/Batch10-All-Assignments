import {
  GoogleAuthProvider,
  signInWithEmailAndPassword,
  signInWithPopup,
} from "firebase/auth";
import { useContext, useState } from "react";
import { Helmet } from "react-helmet";
import toast from "react-hot-toast";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthProvider";
import { auth } from "../../firebase/firebase.config";
import Cookies from "js-cookie";

const Login = () => {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const { setLoading } = useContext(AuthContext);
  const navigate = useNavigate();

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };
  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { email, password } = formData;

    if (!email || !password) {
      toast.error("All fields are required!");
      return;
    }

    try {
      const isUser = await signInWithEmailAndPassword(auth, email, password);
      if (isUser) {
        setLoading(false);
        toast.success("User login Successfully!");
        navigate(location.state ? location.state : "/");
      } else {
        toast.error("Invalid Credentials Email/Password!");
      }
    } catch (error) {
      if (error.message.includes("auth/invalid-credential")) {
        toast.error("Invalid Credentials Email/Password!");
      }
    }
  };

  const handelGoogleLogin = async () => {
    const googleProvider = new GoogleAuthProvider();
    try {
      const googleUser = await signInWithPopup(auth, googleProvider);
      const { email, displayName, photoURL } = googleUser.user;

      if (googleUser) {
        const userData = await fetch(
          `${import.meta.env.VITE_BackendURL}/api/auth/login`,
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              email: email,
              name: displayName,
              photoURL: photoURL,
            }),
          }
        );
        const user = await userData.json();

        console.log(user);

        Cookies.set("token", user?.token, { expires: 15 });
        navigate(location.state ? location.state : "/");
      }
    } catch (error) {
      if (error.message.includes("auth/popup-closed-by-user")) {
        toast.error("Login Failed! Please try again.");
      }
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 via-white to-purple-100 flex items-center justify-center lg:px-0 px-3">
      <Helmet>
        <title>Login Page | Historical Artifacts</title>
      </Helmet>
      <div className="bg-white shadow-2xl rounded-lg max-w-lg w-full p-8 sm:p-12">
        {/* Logo */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-extrabold text-gray-800">
            Welcome Back to{" "}
            <span className="text-blue-600">Artifacts Tracker</span>
          </h1>
          <p className="text-gray-500 mt-2">Login to continue exploring.</p>
        </div>

        {/* Login Form */}
        <form onSubmit={handleSubmit}>
          {/* Email Field */}
          <div className="mb-6">
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              Email Address<span className="text-red-600">*</span>
            </label>
            <input
              type="email"
              id="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter your email"
              className="mt-2 w-full px-4 py-3 border rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500"
            />
          </div>

          {/* Password Field */}
          <div className="mb-6 relative">
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700"
            >
              Password<span className="text-red-600">*</span>
            </label>
            <input
              type={passwordVisible ? "text" : "password"}
              id="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Enter your password"
              className="mt-2 w-full px-4 py-3 border rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500"
            />
            <button
              type="button"
              onClick={togglePasswordVisibility}
              className="absolute inset-y-0 right-3 top-6 flex items-center text-gray-500 hover:text-blue-600"
            >
              {passwordVisible ? <FaRegEye /> : <FaRegEyeSlash />}
            </button>
          </div>

          {/* Submit Button */}
          <div className="mb-6">
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white py-3 rounded-lg shadow-lg hover:opacity-90"
            >
              Login
            </button>
          </div>
        </form>

        {/* Divider */}
        <div className="text-center my-4 text-gray-500">or</div>

        {/* Social Login */}
        <div className="flex justify-center items-center space-x-4">
          <button
            onClick={handelGoogleLogin}
            className="bg-gray-200  hover:bg-gray-300 w-full text-center text-gray-700 px-6 py-3 rounded-lg shadow-md flex items-center justify-center"
          >
            <img
              src="https://img.icons8.com/color/48/google-logo.png"
              alt="Google"
              className="w-6 h-6 mr-2"
            />
            Login with Google
          </button>
        </div>

        {/* Register Link */}
        <div className="text-center mt-6">
          <p className="text-gray-500">
            Don&apos;t have an account?{" "}
            <Link to="/register" className="text-blue-600 hover:underline">
              Register Now
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
