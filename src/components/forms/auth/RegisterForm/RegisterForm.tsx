import React from "react";
import { IRegisterForm } from "../../../../types/forms";
import Input from "../../Input/Input";
import { useForm } from "react-hook-form";
import SubmitBtn from "../../Buttons/SubmitBtn";
import { useAppDispatch, useAppSelector } from "../../../../store/store";
import { registerApi } from "../../../../http/user/user";
import { useLocation, useNavigate } from "react-router-dom";

const RegisterForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IRegisterForm>({ mode: "onChange" });
  const dispatch = useAppDispatch();
  const { error, loading, token, user } = useAppSelector(
    (state) => state.userSlice
  );

  const navigate = useNavigate();
  const location = useLocation();

  const fromPage = location.state?.from?.pathname || "/";

  React.useEffect(() => {
    if (user) {
      navigate(fromPage, { replace: true });
    }
  }, [user]);

  function handlerSubmit(data: any) {
    // console.log(data);

    dispatch(registerApi(data));
  }

  return (
    <div className="flex justify-center mt-4 flex-col">
      {/* <button onClick={()=>localStorage.clear()} >clear</button> */}
      {error && <h3 className="text-red text-base font-bold" >{`${error}`}</h3> }
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
            loading={loading}
          />
        </div>
      </form>
    </div>
  );
};

export default RegisterForm;
