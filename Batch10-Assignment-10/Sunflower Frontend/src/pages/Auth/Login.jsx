import { FcGoogle } from "react-icons/fc";
import { LuEye, LuEyeOff } from "react-icons/lu";
import { Link, useLocation, useNavigate } from "react-router-dom";

import { useContext, useState } from "react";
import {
  GoogleAuthProvider,
  signInWithEmailAndPassword,
  signInWithPopup,
} from "firebase/auth";
import { auth } from "../../firebase/firebase.config";

import { AuthContext } from "../../context/AuthProvider/AuthProvider";
import { Helmet } from "react-helmet";
import toast from "react-hot-toast";
import { useForm } from "react-hook-form";

const Login = () => {
  const [eye, setEye] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const { setLoading } = useContext(AuthContext);

  const handlerLogin = async (data) => {
    const email = data.email;
    const password = data.password;

    try {
      await signInWithEmailAndPassword(auth, email, password);
      setLoading(false);
      toast.success("User login Successfully!");
      navigate(location.state ? location.state : "/");
    } catch (error) {
      if (error.message.includes("auth/invalid-credential")) {
        toast.error("Invalid Credentials Email/Password!");
      }
    }
  };

  const handelGoogleLogin = async () => {
    const googleProvider = new GoogleAuthProvider();
    try {
      await signInWithPopup(auth, googleProvider);
      navigate(location.state ? location.state : "/");
    } catch (error) {
      if (error.message.includes("auth/popup-closed-by-user")) {
        toast.error("Login Failed! Please try again.");
      }
    }
  };

  return (
    <div>
      <Helmet>
        <title>Login | Visa Navigator</title>
      </Helmet>

      <section className="bg-gray-1 py-20 ">
        <div className="container mx-auto">
          <div className=" flex flex-wrap">
            <div className="w-full px-4">
              <div className="relative mx-auto max-w-[525px] dark:border dark:border-slate-100/40 overflow-hidden  shadow-lg rounded-xl dark:bg-slate-800/50 dark:text-slate-100 bg-white px-10 py-16 sm:px-12 md:px-[60px]">
                <div className=" mb-10 text-3xl font-bold text-center">
                  Login Now
                </div>
                <form onSubmit={handleSubmit(handlerLogin)}>
                  <div className="mb-6">
                    <label>
                      Email<span className="text-red-500">*</span>
                    </label>
                    <input
                      type={"email"}
                      placeholder={"Enter your email"}
                      name={"email"}
                      className="w-full rounded-xl border border-stroke bg-transparent px-5 py-3 text-base text-body-color outline-none focus:border-indigo-500 focus-visible:shadow-none "
                      {...register("email", {
                        required: {
                          value: true,
                          message: "Email is required.",
                        },
                        pattern: {
                          value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                          message: "Invalid email address.",
                        },
                      })}
                    />
                    {errors.email && (
                      <span className="text-red-500 text-xs block">
                        {errors.email.message}
                      </span>
                    )}
                  </div>
                  <div className="mb-6 relative">
                    <label>
                      Password<span className="text-red-500">*</span>
                    </label>
                    <input
                      type={`${eye ? "text" : "password"}`}
                      placeholder={"Enter your password"}
                      name={"password"}
                      className="w-full rounded-xl border border-stroke bg-transparent px-5 py-3 text-base text-body-color outline-none focus:border-indigo-500 focus-visible:shadow-none "
                      {...register("password", {
                        required: {
                          value: true,
                          message: "Password is required.",
                        },
                      })}
                    />
                    <button
                      onClick={() => setEye(!eye)}
                      type="button"
                      className="absolute top-8 right-2 p-2 text-gray-500 hover:text-gray-700 focus:outline-none"
                    >
                      {eye ? (
                        <LuEyeOff className="dark:text-slate-100" />
                      ) : (
                        <LuEye className="dark:text-slate-100" />
                      )}
                    </button>
                    {errors.password && (
                      <span className="text-red-500 text-xs block">
                        {errors.password.message}
                      </span>
                    )}
                    <Link
                      to="/reset-password"
                      className=" inline-block text-xs font-medium text-dark hover:text-primary hover:underline "
                    >
                      Forget Password?
                    </Link>
                    <span className="text-xs block dark:text-slate-400 text-gray-500 mb-2">
                      If you want to reset your password then fill the email
                      field.
                    </span>
                  </div>
                  <div className="mb-5">
                    <input
                      type="submit"
                      value="Login"
                      className="w-full cursor-pointer rounded-xl bg-gradient-to-r from-indigo-800  via-indigo-600 to-indigo-600  px-5 py-3 text-base font-medium text-white transition hover:bg-opacity-90"
                    />
                  </div>
                </form>
                <p className="mb-2 font-bold text-secondary-color text-center">
                  OR
                </p>

                <div className="flex flex-col justify-center items-center">
                  <button
                    onClick={handelGoogleLogin}
                    className="btn border border-indigo-500 dark:text-slate-100 bg-transparent hover:bg-transparent font-bold mb-5 shadow-none  w-full  rounded-xl"
                  >
                    <FcGoogle className="w-10 h-8" /> Login with Google
                  </button>

                  <p className="text-base text-body-color ">
                    <span className="pr-0.5">Not a member yet?</span>
                    <Link
                      to="/register"
                      className="text-primary dark:hover:text-slate-400 dark:text-slate-100 hover:underline"
                    >
                      {" "}
                      Register Now!
                    </Link>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Login;
