import { DatePicker, Form } from "antd";
import React from "react";
import { Controller, useForm } from "react-hook-form";
import { useAppSelector } from "../../../../store/store";
import { hasErrorClass } from "../../../../utils/errHandler";
import locale from "antd/es/date-picker/locale/ru_RU";
import CardEditer from "../../../ui/CardEditer/CardEditer";
import Input from "../../Input/Input";
import TxtWithLabel from "./TxtWithLabel/TxtWithLabel";
import dayjs from "dayjs";
import { RangePickerProps } from "antd/es/date-picker";
import { useAppDispatch } from "./../../../../store/store";
import { editProfile } from "../../../../http/user/user";

const disabledDateYear: RangePickerProps["disabledDate"] = (current) => {
  //
  return current.year() > dayjs().year() - 14;
};

const EditUserProfile = () => {
  const { user } = useAppSelector((state) => state.userSlice);
  const disaptch = useAppDispatch();

  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
  } = useForm({ mode: "all" });

  function onSave(data: any) {
    console.log("onSave");
    console.log(data);
    //@ts-ignore
    disaptch(editProfile(data))
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
        <div className="grid md:grid-cols-3 gap-y-4 md:gap-x-6">
          <div>
            <Input
              elId=""
              formController={register("fullName")}
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
            <Controller
              name="birthDate"
              control={control}
              render={({ field }) => (
                <Form.Item
                  label={
                    <>
                      <span className="required_sign">*</span>Дата рождения
                    </>
                  }
                  {...hasErrorClass("birthDate", errors)}
                >
                  <DatePicker
                    placeholder=""
                    {...field}
                    // defaultPickerValue={dayjs(
                    //   `01-01-${dayjs().year() - 18}`,
                    //   "YYYY-MM-DD"
                    // )}
                    // defaultValue={
                    //   personalInfo?.birthDate
                    //     ? dayjs(personalInfo?.birthDate, dateFormat)
                    //     : undefined
                    // }
                    // locale={locale}
                    name="birthDate"
                    // onChange={getChangeHandlerWithValue("birthDate", setValue, {
                    //   isFunc: true,
                    //   func: () => {
                    //     clearProfessionTable();
                    //   },
                    // })}
                    defaultValue={
                      user?.birthDate
                        ? dayjs(user?.birthDate, "YYYY-MM-DD")
                        : undefined
                    }
                    // format={"YYYY-MM-DD"}
                    disabledDate={disabledDateYear}
                  />
                </Form.Item>
              )}
              rules={{
                required: {
                  message: "поле не должно пыть пустым!",
                  value: true,
                },
              }}
            />
            {/* <DatePicker
            
            /> */}
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
          <div>
            <Input
              elId=""
              formController={null}
              inpName="address"
              className={""}
              defaultValue={user?.address}
              errMsg={""}
              label={"Адрес"}
              inpType={"text"}
            />
          </div>
        </div>
      </CardEditer>
    </div>
  );
};

export default EditUserProfile;
