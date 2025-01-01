import { Helmet } from "react-helmet";
import { FcGoogle } from "react-icons/fc";
import { Link, NavLink, useLocation, useNavigate } from "react-router-dom";
import { auth } from "../../firebase/firebase.config";
import {
  signInWithEmailAndPassword,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";
import { AuthContext } from "../../context/AuthProvider";
import { useContext, useRef, useState } from "react";
import { LuEye, LuEyeOff } from "react-icons/lu";
import toast from "react-hot-toast";
import Cookies from "js-cookie";

const Login = () => {
  const navigate = useNavigate();
  // login email password
  const [eye, setEye] = useState(false);
  const { setLoading, setIsEmail } = useContext(AuthContext);
  const emailRef = useRef(null);
  const location = useLocation();

  const handlerLogin = async (e) => {
    e.preventDefault();
    const email = e.target.elements.email.value;
    const password = e.target.elements.password.value;

    if (email.length === 0 || password.length === 0) {
      toast.error("All fields are required!");
    }

    try {
      await signInWithEmailAndPassword(auth, email, password);

      setLoading(false);
      toast.success("User login Successfully!");
      Cookies.set("isShown", true);
      navigate(location.state ? location.state : "/");
    } catch (error) {
      if (error.message.includes("auth/invalid-credential")) {
        toast.error("Invalid Credential email or password!");
        return;
      }
    }
  };

  const handelGoogleLogin = async () => {
    const googleProvider = new GoogleAuthProvider();
    try {
      await signInWithPopup(auth, googleProvider);
      toast.success("User login Successfully!");
      Cookies.set("isShown", true);
      navigate(location.state ? location.state : "/");
    } catch (error) {
      console.log(error);
    }
  };

  const handelIsEmail = () => {
    setIsEmail(emailRef.current.value);
  };

  return (
    <div>
      <Helmet>
        <title>Login | Lingo Bingo</title>
      </Helmet>

      <section className="bg-gray-1 py-20 ">
        <div className="container mx-auto">
          <div className="-mx-4 flex flex-wrap">
            <div className="w-full px-4">
              <div className="relative mx-auto max-w-[525px] overflow-hidden border rounded-xl bg-white px-10 py-16 sm:px-12 md:px-[60px]">
                <div className=" mb-10 text-center">
                  <NavLink
                    to={"/"}
                    className="btn btn-ghost font-bold text-4xl hover:bg-transparent underline"
                  >
                    Lingo<span className="text-teal-500 -ml-3">Bingo</span>
                  </NavLink>
                </div>
                <form onSubmit={handlerLogin}>
                  <div className="mb-6">
                    <label>Email</label>
                    <input
                      type={"email"}
                      onChange={handelIsEmail}
                      ref={emailRef}
                      placeholder={"Enter your email"}
                      name={"email"}
                      className="w-full rounded-full border border-stroke bg-transparent px-5 py-3 text-base text-body-color outline-none focus:border-teal-500 focus-visible:shadow-none "
                    />
                  </div>
                  <div className="mb-6 relative">
                    <label>Password</label>
                    <input
                      type={`${eye ? "text" : "password"}`}
                      placeholder={"Enter your password"}
                      name={"password"}
                      className="w-full rounded-full border border-stroke bg-transparent px-5 py-3 text-base text-body-color outline-none focus:border-teal-500 focus-visible:shadow-none "
                    />
                    <button
                      onClick={() => setEye(!eye)}
                      type="button"
                      className="absolute top-8 right-2 p-2 text-gray-500 hover:text-gray-700 focus:outline-none"
                    >
                      {eye ? <LuEyeOff /> : <LuEye />}
                    </button>
                    <Link
                      to="/reset-password"
                      className=" inline-block text-xs font-medium text-dark hover:text-primary hover:underline "
                    >
                      Forget Password?
                    </Link>
                    <span className="text-xs block text-gray-500 mb-2">
                      If you want to reset your password then fill the email
                      field.
                    </span>
                  </div>
                  <div className="mb-5">
                    <input
                      type="submit"
                      value="Login Now"
                      className="w-full cursor-pointer rounded-full bg-teal-500 px-5 py-3 text-base font-medium text-white transition hover:bg-opacity-90"
                    />
                  </div>
                </form>
                <p className="mb-2 font-bold text-secondary-color text-center">
                  OR
                </p>

                <div className="flex flex-col justify-center items-center">
                  <button
                    onClick={handelGoogleLogin}
                    className="btn border border-teal-500 bg-transparent hover:bg-transparent font-bold mb-5 shadow-none  w-full  rounded-full"
                  >
                    <FcGoogle className="w-10 h-8" /> Login with Google
                  </button>

                  <p className="text-base text-body-color ">
                    <span className="pr-0.5">Not a member yet?</span>
                    <Link
                      to="/register"
                      className="text-primary hover:underline"
                    >
                      Register Now!
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

export default Login;
