import React from "react";
import { useForm } from "react-hook-form";
import { ILoginForm } from "../../../../types/forms";
import SubmitBtn from "../../Buttons/SubmitBtn";
import Input from "../../Input/Input";

const LoginForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ILoginForm>({mode: "onChange"});

  function handlerSubmit(data:any) {
    console.log(data)
  }

  return (
    <div className="flex justify-center mt-4">
      <form onSubmit={handleSubmit(handlerSubmit)} >
        <div className="w-[320px]">
          <Input
            className={""}
            elId={""}
            formController={register("tel", {
              required: {
                value: true,
                message: "Обязательное поле",
              },
              minLength: {
                value: 6,
                message: "Минимум 8 символов"
              },
              maxLength:{
                value: 32,
                message: "Максимум 32 сивола"
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
            formController={{
              ...register("password", {
                required: {
                  value: true,
                  message: "Обязательное поле",
                },
                minLength: {
                  value: 8,
                  message: "Минимум 8 символов"
                },
                maxLength:{
                  value: 32,
                  message: "Максимум 32 сивола"
                },
                pattern: {
                  message: "Hello",
                  value: /^\S+$/g
                  // value: /^(\S)([a-zA-Z])(\D)+$/g
                  
                  
                }
              }),
            }}
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
            txt={"Войти"}
            disabled={false}
            loading={false}
          />
        </div>
      </form>
    </div>
  );
};

export default LoginForm;
