import React from "react";
import { useForm } from "react-hook-form";
import { useLocation, useNavigate } from "react-router-dom";
import { logInApi } from "../../../../http/user/user";
import { ILoginForm } from "../../../../types/forms";
import SubmitBtn from "../../Buttons/SubmitBtn";
import Input from "../../Input/Input";
import { useAppDispatch, useAppSelector } from "./../../../../store/store";

const LoginForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ILoginForm>({ mode: "onChange" });
  const dispatch = useAppDispatch();
  const { error, loading, token, user } = useAppSelector(
    (state) => state.userSlice
  );
  const navigate = useNavigate();
  const location = useLocation();

  const fromPage = location.state?.from?.pathname || "/";

  React.useEffect(()=>{
    if(user){
      navigate(fromPage, {replace: true });
    }
  }, [user])

  function handlerSubmit(data: any) {
    console.log(data);
    //  const res = dispatch(logInApi(data));
    dispatch(logInApi(data));
    //  console.log("res", res);
    //  navigate(fromPage, {replace: true })
  }
  // const handlerSubmit = async (data: any) => {
  //   console.log(data);
  //    const res = await dispatch(logInApi(data));
  //    console.log("res", res);
  //    navigate(fromPage, {replace: true })
  // }

  return (
    <div className="flex justify-center mt-4 flex-col">
    {error && <h3 className="text-red text-base font-bold" >{`${error}`}</h3> }

      <form onSubmit={handleSubmit(handlerSubmit)}>
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
                message: "Минимум 8 символов",
              },
              maxLength: {
                value: 32,
                message: "Максимум 32 сивола",
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
                  message: "Минимум 8 символов",
                },
                maxLength: {
                  value: 32,
                  message: "Максимум 32 сивола",
                },
                pattern: {
                  message: "Hello",
                  value: /^\S+$/g,
                  // value: /^(\S)([a-zA-Z])(\D)+$/g
                },
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
            loading={loading}
          />
        </div>
      </form>
    </div>
  );
};

export default LoginForm;
