import React from "react";
import { Link } from "react-router-dom";
import LoginForm from "../../../../components/forms/auth/LoginForm/LoginForm";

const Login = () => {
  return (
    <div>
      <div className="flex flex-col justify-center items-center">
        <h1 className="text-3xl font-semibold text-center">Вход в аккаунт</h1>
        <LoginForm />
        <div>
          <Link to={"/auth/register"}>Регистрация</Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
