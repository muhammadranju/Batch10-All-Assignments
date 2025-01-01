import { FcGoogle } from "react-icons/fc";
import { LuEye, LuEyeOff } from "react-icons/lu";
import { Link, useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet";
import { useContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
  updateProfile,
} from "firebase/auth";
import { auth } from "../../firebase/firebase.config";

import { AuthContext } from "../../context/AuthProvider/AuthProvider";
import toast from "react-hot-toast";
import { useForm } from "react-hook-form";

const Register = () => {
  const [eye, setEye] = useState(false);
  const { user, setLoading, setRefetch } = useContext(AuthContext);
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handlerRegister = async (data) => {
    const name = data.name;
    const email = data.email;
    const photo = data.photo;
    const password = data.password;

    try {
      const userData = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      await updateProfile(auth.currentUser, {
        displayName: name,
        photoURL: photo,
      });
      setRefetch(Date.now());

      if (userData) {
        navigate("/");
        setLoading(false);
        toast.success("User Created Successfully!");
      }
    } catch (error) {
      if (error.message.includes("auth/email-already-in-use")) {
        toast.error("Email already in use!");
      }
    }
  };

  useEffect(() => {
    if (user) {
      navigate("/");
    }
  }, [user, navigate]);

  const handelGoogleRegister = async () => {
    const googleProvider = new GoogleAuthProvider();
    try {
      await signInWithPopup(auth, googleProvider);
    } catch (error) {
      if (error.message.includes("auth/popup-closed-by-user")) {
        toast.error("Login Failed! Please try again.");
      }
    }
  };

  return (
    <div>
      <Helmet>
        <title>Register | Visa Navigator</title>
      </Helmet>

      <section className="bg-gray-1 py-20 ">
        <div className="container mx-auto">
          <div className=" flex flex-wrap">
            <div className="w-full px-4">
              <div className="relative mx-auto max-w-[525px] dark:border dark:border-slate-100/40 overflow-hidden shadow-lg  rounded-xl dark:bg-base px-10 py-16 sm:px-12 md:px-[60px] dark:bg-slate-800/50 dark:text-slate-100">
                <div className=" mb-10 text-3xl font-bold text-center">
                  Register Now
                </div>
                <form onSubmit={handleSubmit(handlerRegister)}>
                  <div className="mb-6">
                    <label>
                      Name<span className="text-red-500">*</span>
                    </label>
                    <input
                      type={"text"}
                      placeholder={"Enter your name"}
                      name={"name"}
                      className="w-full rounded-xl border border-stroke bg-transparent px-5 py-3 text-base text-body-color outline-none focus:border-indigo-500 focus-visible:shadow-none "
                      {...register("name", {
                        required: {
                          value: true,
                          message: "Name is required.",
                        },
                        minLength: {
                          value: 3,
                          message: "Name must be at least 3 characters.",
                        },
                      })}
                    />
                    {errors.name && (
                      <span className="text-red-500 text-xs block">
                        {errors.name.message}
                      </span>
                    )}
                  </div>
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
                  <div className="mb-6">
                    <label>
                      Photo URL<span className="text-red-500">*</span>
                    </label>
                    <input
                      type={"text"}
                      placeholder={"Photo URL"}
                      name={"photo"}
                      className="w-full rounded-xl border border-stroke bg-transparent px-5 py-3 text-base text-body-color outline-none focus:border-indigo-500 focus-visible:shadow-none "
                      {...register("photo", {
                        required: {
                          value: true,
                          message: "Photo URL is required",
                        },
                      })}
                    />
                    {errors.photo && (
                      <span className="text-red-500 text-xs block">
                        {errors.photo.message}
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
                          message: "Password is required",
                        },
                        minLength: {
                          value: 8,
                          message: "Password must be at least 8 characters",
                        },
                        pattern: {
                          value: /^(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])/,
                          message:
                            "Password must contain at least one uppercase letter, lowercase letter, and number",
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
                  </div>
                  <div className="mb-5">
                    <input
                      type="submit"
                      value="Register"
                      className="w-full cursor-pointer rounded-xl bg-gradient-to-r from-indigo-800  via-indigo-600 to-indigo-600  px-5 py-3 text-base font-medium text-white transition hover:bg-opacity-90"
                    />
                  </div>
                </form>
                <p className="mb-2 font-bold text-secondary-color text-center">
                  OR
                </p>

                <div className="flex flex-col justify-center items-center">
                  <button
                    onClick={handelGoogleRegister}
                    className="btn border border-indigo-500 bg-transparent hover:bg-transparent font-bold mb-5 shadow-none  w-full dark:text-slate-100   rounded-xl"
                  >
                    <FcGoogle className="w-10 h-8" /> Register with Google
                  </button>

                  <p className="text-base text-body-color ">
                    <span className="pr-0.5"> Already a member?</span>
                    <Link
                      to="/login"
                      className="text-primary hover:underline dark:text-slate-100 dark:hover:text-slate-400"
                    >
                      {" "}
                      Login Now!
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

export default Register;
