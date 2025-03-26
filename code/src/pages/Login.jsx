import React from "react";
import Button from "../components/Button";

const Login = () => {
  return (
    <>
      <body className="login-page">
        {/*CONTAINER*/}
        <div className="h-full flex justify-center items-center">
          <div className="w-80 h-96 bg-white border-[1px] border-gray-950 shadow-2xl rounded-sm">
            {/*TEXT*/}
            <div className="flex justify-center items-center flex-col">
              <img
                src="./imgs/warp-logo-black.png"
                alt="Warp logo"
                className="h-[30px] w-[70px] mt-4"
              />
              <h1 className="heading-black mt-4">Login</h1>
            </div>

            {/*FORM*/}
            <div className="flex justify-center items-center flex-col">
              <br />
              <input
                type="text"
                id="username"
                name="username"
                placeholder="Jméno"
                className="login-input mt-4"
              />
              <br />
              <input
                type="password"
                id="password"
                name="password"
                placeholder="Heslo"
                className="login-input"
              />
              <br />
              <Button
                label="Přihlásit se"
                className="login-button mt-4"
              />
            </div>
          </div>
        </div>
      </body>
    </>
  );
};

export default Login;
