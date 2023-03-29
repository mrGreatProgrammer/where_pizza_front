import { DatePicker } from "antd";
import React from "react";
import { useForm } from "react-hook-form";
import { useAppSelector } from "../../../../store/store";
import CardEditer from "../../../ui/CardEditer/CardEditer";
import Input from "../../Input/Input";
import TxtWithLabel from "./TxtWithLabel/TxtWithLabel";

const EditUserProfile = () => {
  const { user } = useAppSelector((state) => state.userSlice);

  const {register, handleSubmit} = useForm({mode:"all"})


  function onSave(data:any) {
    console.log("onSave");
    console.log(data);
    
  }

  return (
    <div>
      <CardEditer
        data={
          <div className="grid md:grid-cols-4 gap-y-4 md:gap-x-8">
            <TxtWithLabel label="Имя" txt={user?.fullName} required={true} />
            <TxtWithLabel
              label="Номер телефона"
              txt={user?.tel}
              required={true}
            />
            <TxtWithLabel label="Почта" txt={""} required={false} />
            <TxtWithLabel label="Дата рождения" txt={""} required={false} />
            <TxtWithLabel label="Адрес" txt={""} required={false} />
          </div>
        }
        title="Личные данные"
        onOk={handleSubmit(onSave)}
      >
        <div className="grid md:grid-cols-3 gap-y-4 md:gap-x-6" >
          <div>
            <Input
              elId=""
              formController={register('fullName')}
              inpName="fullName"
              className={""}
              defaultValue={user?.fullName}
              errMsg={""}
              label={"Имя*"}
              inpType={"text"}

            />
          </div>
          <div>
            <Input
              elId=""
              formController={register("tel")}
              inpName="tel"
              className={""}
              defaultValue={user?.tel}
              errMsg={""}
              label={"Номер телефона*"}
              inpType={"tel"}
            />
          </div>
          <div>
            <Input
              elId=""
              formController={register("email")}
              inpName="email"
              className={""}
              defaultValue={user?.email}
              errMsg={""}
              label={"Почта"}
              inpType={"mail"}
            />
          </div>
          <div>
            <DatePicker
            
            />
            {/* <Input
              elId=""
              formController={null}
              inpName="birthDate"
              className={""}
              defaultValue={user?.birthDate}
              errMsg={""}
              label={"Дата рождения"}
              inpType={"text"}
            /> */}
          </div>
          {/* <div>
            <Input
              elId=""
              formController={null}
              inpName="address"
              className={""}
              defaultValue={user?.address}
              errMsg={""}
              label={"Дата рождения"}
              inpType={"text"}
            />
          </div> */}
        </div>
      </CardEditer>
    </div>
  );
};

export default EditUserProfile;
