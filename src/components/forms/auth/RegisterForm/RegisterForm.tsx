import React from "react";
import { IRegisterForm } from "../../../../types/forms";
import Input from "../../Input/Input";
import { useForm } from "react-hook-form";
import SubmitBtn from "../../Buttons/SubmitBtn";

const RegisterForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IRegisterForm>({ mode: "onChange" });

  function handlerSubmit(data: any) {
    console.log(data);
  }

  return (
    <div className="flex justify-center mt-4">
      <form onSubmit={handleSubmit(handlerSubmit)}>
        <div className="w-[320px]">
          <Input
            className={""}
            elId={""}
            formController={register("fullName", {
              required: {
                value: true,
                message: "Обязательное поле",
              },
            })}
            inpName={"fullName"}
            inpType={"text"}
            defaultValue={""}
            errMsg={errors.fullName?.message}
            label={"Имя"}
          />
        </div>
        <div className="w-[320px]">
          <Input
            className={""}
            elId={""}
            formController={register("tel", {
              required: {
                value: true,
                message: "Обязательное поле",
              },
            })}
            inpName={"tel"}
            inpType={"tel"}
            defaultValue={""}
            errMsg={errors.tel?.message}
            label={"Номер телефона"}
          />
        </div>
        <div className="w-[320px]">
          <Input
            className={""}
            elId={""}
            formController={register("password", {
              required: {
                value: true,
                message: "Обязательное поле",
              },
            })}
            inpName={"password"}
            inpType={"password"}
            defaultValue={""}
            errMsg={errors.password?.message}
            label={"Пароль"}
          />
        </div>
        <div>
          <SubmitBtn
            className={""}
            onClick={""}
            txt={"Зарегистрироватся"}
            disabled={false}
            loading={false}
          />
        </div>
      </form>
    </div>
  );
};

export default RegisterForm;
