import React from "react";
import { Link } from "react-router-dom";
import RegisterForm from "../../../components/forms/auth/RegisterForm/RegisterForm";
import Input from "../../../components/forms/Input/Input";

const Register = () => {
  return (
    <div>
      <div className="flex flex-col justify-center items-center">
        <h1 className="text-3xl font-semibold text-center">Регистрация</h1>
        <RegisterForm />
        <div>
          Есть аккаунт? <Link to={"/auth/login"}>Войти</Link>
        </div>
      </div>
    </div>
  );
};

export default Register;
