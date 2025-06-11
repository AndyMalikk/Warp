import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../components/Button";
import { useAuth } from "../context/AuthContext2";

const Login = () => {
  const [formValue, setFormValue] = useState({ username: "", password: "" });
  const { login } = useAuth();
  const navigate = useNavigate();
  const [loginError, setLoginError] = useState(false);

  const handleInput = (e) => {
    const { name, value } = e.target;
    setFormValue({ ...formValue, [name]: value });
    setLoginError(false);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoginError(false);
    const res = await fetch(`http://localhost:3000/login/user`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formValue),
    });

    if (res.status === 200) {
      login(); // Update auth state
      navigate("/admin/dashboard/home"); // Navigate after login
    } else {
      console.error("Login failed");
      setLoginError(true);
      setFormValue({ ...formValue, password: "" }); // clears password field
    }
  };

  return (
    <>
      <body className="login-page">
        {/*CONTAINER*/}
        <div className="h-full flex justify-center items-center">
          <div className="w-80 h-96 bg-white border-[1px] border-gray-950 shadow-2xl rounded-sm">
            {/*TEXT*/}
            <div className="flex justify-center items-center flex-col">
              <img
                src="/imgs/warp-logo-black.png"
                alt="Warp logo"
                className="h-[30px] w-[70px] mt-4"
              />
              <h1 className="heading-black mt-4">Login</h1>
            </div>

            {/*FORM*/}
            <form
              className="flex justify-center items-center flex-col"
              onSubmit={handleSubmit}
            >
              <br />
              <input
                type="text"
                id="username"
                name="username"
                placeholder="Jméno"
                className="login-input mt-4"
                value={formValue.username}
                onChange={handleInput}
              />
              <br />
              <input
                type="password"
                id="password"
                name="password"
                placeholder="Heslo"
                className="login-input"
                value={formValue.password}
                onChange={handleInput}
              />
              <br />
              {/*login error message*/}
              {loginError && <p className="text-red-500 text-sm text-center">Uživatelské jméno nebo heslo je nesprávné.</p>}
              <Button
                label="Přihlásit se"
                className="login-button mt-4"
                type="submit"
              />
            </form>
          </div>
        </div>
      </body>
    </>
  );
};

export default Login;
