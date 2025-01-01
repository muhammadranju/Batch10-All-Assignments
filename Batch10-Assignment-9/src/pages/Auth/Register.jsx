import { useContext, useEffect, useRef, useState } from "react";
import { Helmet } from "react-helmet";
import { FcGoogle } from "react-icons/fc";
import { LuEye, LuEyeOff } from "react-icons/lu";
import { Link, NavLink, useNavigate } from "react-router-dom";
import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
  updateProfile,
} from "firebase/auth";
import { auth } from "../../firebase/firebase.config";
import toast from "react-hot-toast";
import { AuthContext } from "../../context/AuthProvider";
import Cookies from "js-cookie";

const Register = () => {
  const [eye, setEye] = useState(false);
  const [isError, setIsError] = useState("");
  const navigate = useNavigate();
  const passwordRef = useRef(null);
  const acceptRef = useRef(null);
  const { user, setLoading, setRefetch } = useContext(AuthContext);

  const handlerRegister = async (e) => {
    e.preventDefault();

    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const photo = form.photo.value;
    const password = form.password.value;

    if (!name || !email || !photo || !password) {
      return toast.error("All fields are required!");
    }

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
        form.reset();
        navigate("/");
        setLoading(false);
        Cookies.set("isShown", true);
        toast.success("User Created Successfully!");
      }
    } catch (error) {
      if (error.message.includes("auth/email")) {
        toast.error("Email already in use!");
      } else if (error.message.includes("auth/invalid")) {
        toast.error("Invalid email!");
      }
    }
  };

  const handelGoogleRegister = async () => {
    const googleProvider = new GoogleAuthProvider();
    try {
      await signInWithPopup(auth, googleProvider);
      Cookies.set("isShown", true);
    } catch (error) {
      console.log(error);
    }
  };

  const handelPassword = async () => {
    const uppercaseLetter = /(?=.*[A-Z])/;
    const lowercaseLetter = /(?=.*[a-z])/;
    const digitLetter = /(?=.*[0-9])/;
    const specialLetter = /(?=.*[\W])/;

    const validatePassword = (password, accept) => {
      if (password.length < 6)
        return "Password should be at least 6 characters!";
      if (!uppercaseLetter.test(password))
        return "Password must add at least one Uppercase letter!";
      if (!lowercaseLetter.test(password))
        return "Password must be at least one Lowercase letter!";
      if (!digitLetter.test(password))
        return "You must be provide at least one Number!";
      if (!specialLetter.test(password))
        return "Special character must be provided!";
      if (!accept)
        return "You must accept the terms and conditions to register!";

      return "";
    };
    const errorMessage = validatePassword(
      passwordRef.current.value,
      acceptRef.current.checked
    );
    if (errorMessage) {
      setIsError(errorMessage);
      return;
    }
  };

  useEffect(() => {
    if (user) {
      navigate("/");
    }
  }, [user, navigate]);

  const handelEye = () => setEye(!eye);
  return (
    <div>
      <Helmet>
        <title>Register | Lingo Bingo</title>
      </Helmet>
      <section className="bg-gray-1 py-20 ">
        <div className="container mx-auto">
          <div className="-mx-4 flex flex-wrap">
            <div className="w-full px-4">
              <div className="relative mx-auto max-w-[525px] overflow-hidden  bg-white px-10 py-16 sm:px-12 md:px-[60px] border rounded-xl">
                <div className=" mb-10 text-center">
                  <NavLink
                    to={"/"}
                    className="btn btn-ghost font-bold text-4xl hover:bg-transparent underline"
                  >
                    Lingo<span className="text-teal-500 -ml-3">Bingo</span>
                  </NavLink>
                </div>
                <form onSubmit={handlerRegister}>
                  <div className="mb-6">
                    <label>Name</label>
                    <input
                      type={"text"}
                      placeholder={"Enter your name"}
                      name={"name"}
                      className="w-full rounded-full border border-stroke bg-transparent px-5 py-3 text-base text-body-color outline-none focus:border-teal-500 focus-visible:shadow-none "
                    />
                  </div>

                  <div className="mb-6">
                    <label>Email</label>
                    <input
                      type={"email"}
                      placeholder={"Enter your email"}
                      name={"email"}
                      className="w-full rounded-full border border-stroke bg-transparent px-5 py-3 text-base text-body-color outline-none focus:border-teal-500 focus-visible:shadow-none "
                    />
                  </div>

                  <div className="mb-6">
                    <label>Photo URL</label>
                    <input
                      type={"text"}
                      placeholder={"Photo URL"}
                      name={"photo"}
                      className="w-full rounded-full border border-stroke bg-transparent px-5 py-3 text-base text-body-color outline-none focus:border-teal-500 focus-visible:shadow-none "
                    />
                  </div>

                  <div className="mb-6 relative">
                    <label>Password</label>
                    <input
                      type={`${eye ? "text" : "password"}`}
                      placeholder={"Enter your password"}
                      name={"password"}
                      ref={passwordRef}
                      onChange={handelPassword}
                      className="w-full rounded-full border border-stroke bg-transparent px-5 py-3 text-base text-body-color outline-none focus:border-teal-500 focus-visible:shadow-none "
                    />
                    <button
                      onClick={handelEye}
                      type="button"
                      className="absolute top-8 right-2 p-2 text-gray-500 hover:text-gray-700 focus:outline-none"
                    >
                      {eye ? <LuEyeOff /> : <LuEye />}
                    </button>
                  </div>
                  {!isError.includes("accept") && (
                    <span className="text-red-500 text-sm">{isError}</span>
                  )}

                  <div className="flex items-center mb-2 ">
                    <input
                      type="checkbox"
                      name="accept"
                      ref={acceptRef}
                      className="checkbox checkbox-success"
                    />
                    <label className="label">
                      <span className="lt">
                        Accept the terms and conditions
                      </span>
                    </label>
                  </div>
                  <div className="mb-4">
                    {isError.includes("accept") && (
                      <span className="text-red-500 text-sm  mb-10">
                        {isError}
                      </span>
                    )}
                  </div>
                  {/* <span className="text-red-500 text-sm">{isError}</span> */}

                  <div className="mb-5">
                    <input
                      type="submit"
                      value="Register Now"
                      className="w-full cursor-pointer rounded-full bg-teal-500 px-5 py-3 text-base font-medium text-white transition hover:bg-opacity-90"
                    />
                  </div>
                </form>
                <p className="mb-2 font-bold text-secondary-color text-center">
                  OR
                </p>

                <div className="flex flex-col justify-center items-center">
                  <button
                    onClick={handelGoogleRegister}
                    className="btn border border-teal-500 bg-transparent hover:bg-transparent font-bold mb-5 shadow-none  w-full  rounded-full"
                  >
                    <FcGoogle className="w-10 h-8" /> Register with Google
                  </button>
                  <p className="text-base text-body-color ">
                    <span className="pr-0.5">Already a member?</span>
                    <Link to="/login" className="text-primary hover:underline">
                      Login Now!
                    </Link>
                  </p>
                </div>

                <div>
                  <span className="absolute right-1 top-1">
                    <svg
                      width="40"
                      height="40"
                      viewBox="0 0 40 40"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <circle
                        cx="1.39737"
                        cy="38.6026"
                        r="1.39737"
                        transform="rotate(-90 1.39737 38.6026)"
                        fill="#3056D3"
                      />
                      <circle
                        cx="1.39737"
                        cy="1.99122"
                        r="1.39737"
                        transform="rotate(-90 1.39737 1.99122)"
                        fill="#3056D3"
                      />
                      <circle
                        cx="13.6943"
                        cy="38.6026"
                        r="1.39737"
                        transform="rotate(-90 13.6943 38.6026)"
                        fill="#3056D3"
                      />
                      <circle
                        cx="13.6943"
                        cy="1.99122"
                        r="1.39737"
                        transform="rotate(-90 13.6943 1.99122)"
                        fill="#3056D3"
                      />
                      <circle
                        cx="25.9911"
                        cy="38.6026"
                        r="1.39737"
                        transform="rotate(-90 25.9911 38.6026)"
                        fill="#3056D3"
                      />
                      <circle
                        cx="25.9911"
                        cy="1.99122"
                        r="1.39737"
                        transform="rotate(-90 25.9911 1.99122)"
                        fill="#3056D3"
                      />
                      <circle
                        cx="38.288"
                        cy="38.6026"
                        r="1.39737"
                        transform="rotate(-90 38.288 38.6026)"
                        fill="#3056D3"
                      />
                      <circle
                        cx="38.288"
                        cy="1.99122"
                        r="1.39737"
                        transform="rotate(-90 38.288 1.99122)"
                        fill="#3056D3"
                      />
                      <circle
                        cx="1.39737"
                        cy="26.3057"
                        r="1.39737"
                        transform="rotate(-90 1.39737 26.3057)"
                        fill="#3056D3"
                      />
                      <circle
                        cx="13.6943"
                        cy="26.3057"
                        r="1.39737"
                        transform="rotate(-90 13.6943 26.3057)"
                        fill="#3056D3"
                      />
                      <circle
                        cx="25.9911"
                        cy="26.3057"
                        r="1.39737"
                        transform="rotate(-90 25.9911 26.3057)"
                        fill="#3056D3"
                      />
                      <circle
                        cx="38.288"
                        cy="26.3057"
                        r="1.39737"
                        transform="rotate(-90 38.288 26.3057)"
                        fill="#3056D3"
                      />
                      <circle
                        cx="1.39737"
                        cy="14.0086"
                        r="1.39737"
                        transform="rotate(-90 1.39737 14.0086)"
                        fill="#3056D3"
                      />
                      <circle
                        cx="13.6943"
                        cy="14.0086"
                        r="1.39737"
                        transform="rotate(-90 13.6943 14.0086)"
                        fill="#3056D3"
                      />
                      <circle
                        cx="25.9911"
                        cy="14.0086"
                        r="1.39737"
                        transform="rotate(-90 25.9911 14.0086)"
                        fill="#3056D3"
                      />
                      <circle
                        cx="38.288"
                        cy="14.0086"
                        r="1.39737"
                        transform="rotate(-90 38.288 14.0086)"
                        fill="#3056D3"
                      />
                    </svg>
                  </span>
                  <span className="absolute bottom-1 left-1">
                    <svg
                      width="29"
                      height="40"
                      viewBox="0 0 29 40"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <circle
                        cx="2.288"
                        cy="25.9912"
                        r="1.39737"
                        transform="rotate(-90 2.288 25.9912)"
                        fill="#3056D3"
                      />
                      <circle
                        cx="14.5849"
                        cy="25.9911"
                        r="1.39737"
                        transform="rotate(-90 14.5849 25.9911)"
                        fill="#3056D3"
                      />
                      <circle
                        cx="26.7216"
                        cy="25.9911"
                        r="1.39737"
                        transform="rotate(-90 26.7216 25.9911)"
                        fill="#3056D3"
                      />
                      <circle
                        cx="2.288"
                        cy="13.6944"
                        r="1.39737"
                        transform="rotate(-90 2.288 13.6944)"
                        fill="#3056D3"
                      />
                      <circle
                        cx="14.5849"
                        cy="13.6943"
                        r="1.39737"
                        transform="rotate(-90 14.5849 13.6943)"
                        fill="#3056D3"
                      />
                      <circle
                        cx="26.7216"
                        cy="13.6943"
                        r="1.39737"
                        transform="rotate(-90 26.7216 13.6943)"
                        fill="#3056D3"
                      />
                      <circle
                        cx="2.288"
                        cy="38.0087"
                        r="1.39737"
                        transform="rotate(-90 2.288 38.0087)"
                        fill="#3056D3"
                      />
                      <circle
                        cx="2.288"
                        cy="1.39739"
                        r="1.39737"
                        transform="rotate(-90 2.288 1.39739)"
                        fill="#3056D3"
                      />
                      <circle
                        cx="14.5849"
                        cy="38.0089"
                        r="1.39737"
                        transform="rotate(-90 14.5849 38.0089)"
                        fill="#3056D3"
                      />
                      <circle
                        cx="26.7216"
                        cy="38.0089"
                        r="1.39737"
                        transform="rotate(-90 26.7216 38.0089)"
                        fill="#3056D3"
                      />
                      <circle
                        cx="14.5849"
                        cy="1.39761"
                        r="1.39737"
                        transform="rotate(-90 14.5849 1.39761)"
                        fill="#3056D3"
                      />
                      <circle
                        cx="26.7216"
                        cy="1.39761"
                        r="1.39737"
                        transform="rotate(-90 26.7216 1.39761)"
                        fill="#3056D3"
                      />
                    </svg>
                  </span>
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
