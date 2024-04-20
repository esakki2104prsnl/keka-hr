import { useState } from "react";
import iOS from "../../assets/app-store.svg";
import playStore from "../../assets/google-play.svg";
import kekaLogo from "../../assets/keka-logo-black4.svg";

const LoginForm = () => {
  // let boolean = true;

  const [passwordShow, setPasswordShow] = useState(true);

  function openEyes() {
    setPasswordShow(!passwordShow);
  }

  return (
    <div className="flex items-center justify-center">
      <div className="">
        <img
          src="https://img.freepik.com/free-photo/executive-touching-icon-social-network_1232-158.jpg?w=1060&t=st=1713534339~exp=1713534939~hmac=8253c8d668c85f42b478cc86bc176801a4b6222d1c3fa96f60f4129c9f44fcf9"
          alt="keka-hr"
          className=" min-h-svh min-w-full object-fill"
        />
      </div>
      <div className="mx-20">
        <h1 className="font-bold text-3xl text-center">Login</h1>

        <form>
          <div className="flex flex-col justify-evenly gap-5 w-80 overflow-auto">
            <div>
              <label htmlFor="email" className="inline-flex">
                Domain Name
              </label>
              <div className="flex items-center justify-center ">
                <input
                  type="text"
                  name=""
                  id="email"
                  placeholder="Company domain name"
                  className="p-2 rounded-s-md outline-none border-black border-t border-l border-b w-full mt-1"
                />
                <span className="p-2 bg-gray-100 border-black border-t border-r border-b  rounded-e-md mt-1 ">
                  .keka.com
                </span>
              </div>
            </div>
            <div className="">
              <label htmlFor="userName">User Name</label>
              <input
                type="text"
                name=""
                id="userName"
                placeholder="Enter your Keka Username"
                className="p-2 rounded-md outline-none border-black border w-full mt-1"
              />
            </div>
            <div className="">
              <div className="flex items-center justify-between">
                <label htmlFor="password">Password</label>
                <a href="#" className="text-blue-500 text-sm font-semibold">
                  Forgot password?
                </a>
              </div>
              <div
                onClick={openEyes}
                className="p-2 rounded-md outline-none border-black border w-full mt-1 flex items-center  justify-between"
              >
                <input
                  type="password"
                  name=""
                  id="password"
                  placeholder="Enter your Keka Password"
                  className="w-full outline-none"
                />
                {passwordShow ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="1.3em"
                    height="1.3em"
                    viewBox="0 0 256 256"
                    className="cursor-pointer text-gray-500 hover:text-black"
                  >
                    <path
                      fill="currentColor"
                      d="M234.42 162a12 12 0 1 1-20.84 12l-16.86-29.5a127.19 127.19 0 0 1-30.17 13.86l5.29 31.64a12 12 0 0 1-9.87 13.8a11.22 11.22 0 0 1-2 .17a12 12 0 0 1-11.82-10l-5.15-30.8a136.5 136.5 0 0 1-30.06 0l-5.1 30.83A12 12 0 0 1 96 204a11.22 11.22 0 0 1-2-.17A12 12 0 0 1 84.16 190l5.29-31.72a127.19 127.19 0 0 1-30.17-13.86L42.42 174a12 12 0 1 1-20.84-12L40 129.85a159.73 159.73 0 0 1-17.31-18.31a12 12 0 0 1 18.65-15.08C57.38 116.32 85.44 140 128 140s70.62-23.68 86.66-43.54a12 12 0 0 1 18.67 15.08A159.73 159.73 0 0 1 216 129.85Z"
                    ></path>
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="1.3em"
                    height="1.3em"
                    viewBox="0 0 24 24"
                    className="cursor-pointer text-black"
                  >
                    <path
                      fill="currentColor"
                      d="M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5M12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5s5 2.24 5 5s-2.24 5-5 5m0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3s3-1.34 3-3s-1.34-3-3-3"
                    ></path>
                  </svg>
                )}
              </div>
            </div>
            <div className="flex items-center justify-between">
              <img
                src="https://www.learningsuccessblog.com/files/0aainput-black.gif"
                alt=""
                className="w-32"
              />
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="1.5em"
                height="1.5em"
                viewBox="0 0 24 24"
                className="cursor-pointer"
              >
                <path
                  fill="currentColor"
                  d="M12 20q-3.35 0-5.675-2.325T4 12t2.325-5.675T12 4q1.725 0 3.3.712T18 6.75V4h2v7h-7V9h4.2q-.8-1.4-2.187-2.2T12 6Q9.5 6 7.75 7.75T6 12t1.75 4.25T12 18q1.925 0 3.475-1.1T17.65 14h2.1q-.7 2.65-2.85 4.325T12 20"
                ></path>
              </svg>
              <input
                type="text"
                className="w-40 p-2 rounded-md outline-none border-black border"
              />
            </div>
            <button
              type="submit"
              className="bg-black p-2 text-white rounded-md"
            >
              Login{" "}
            </button>
          </div>
        </form>
        <div className="w-80">
          {/* gmail */}
          <div className="flex items-center gap-1 justify-center my-5  ">
            <span>. . . . . . . . . . </span>
            <span> Or sign in with email </span>
            <span>. . . . . . . . . .</span>
          </div>
          {/* Google Btn */}
          <div className="border border-black rounded-md p-2 cursor-pointer">
            <div className="flex items-center justify-center gap-2">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Google_%22G%22_logo.svg/768px-Google_%22G%22_logo.svg.png"
                alt="google-logo"
                className="w-4"
              />
              <span>Sign in with Google</span>
            </div>
          </div>

          {/* iOS & Playstore */}
          <div className="flex items-center justify-between mt-8 mx-4">
            <a
              href="https://apps.apple.com/in/app/keka-hr/id1448024119"
              target="_blank"
            >
              <img src={iOS} alt="appstore-logo" />
            </a>
            <a
              href="https://play.google.com/store/apps/details?id=com.keka.xhr&hl=en_IN"
              target="_blank"
            >
              <img src={playStore} alt="playstore-logo" />
            </a>
          </div>

          <div className="flex items-center justify-center gap-3 mt-5">
            <img src={kekaLogo} alt="keke-logo" className="" />
            <p className="text-xs text-gray-500">
              By logging in, you agree to Keka
              <a href="http://" className="underline">
                Terms of Use
              </a>
              {" and "}
              <a href="http://" className="underline">
                Privacy Policy
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
