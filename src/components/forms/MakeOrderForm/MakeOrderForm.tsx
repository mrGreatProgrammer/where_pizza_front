import { DatePicker, Radio, Segmented } from "antd";
import React from "react";
import { useForm } from "react-hook-form";
import Input from "../Input/Input";
import { RadioChangeEvent, Input as Inp } from "antd";
import { useAppSelector } from "../../../store/store";
import SubmitBtn from "./../Buttons/SubmitBtn";
import DeliveryForm from "./DeliveryForm/DeliveryForm";
import SelfDeliveryForm from "./DeliveryForm/SelfDeliveryForm";
import dayjs from "dayjs";
import { RangePickerProps } from "antd/es/date-picker";

const range = (start: number, end: number) => {
  const result = [];
  for (let i = start; i < end; i++) {
    result.push(i);
  }
  return result;
};

const disabledDate: RangePickerProps["disabledDate"] = (current) => {
  // Can not select days before today and today
  return current && current < dayjs().endOf("day");
};
const disabledDateTime = () => ({
  disabledHours: () => range(0, 24).splice(4, 20),
  disabledMinutes: () => range(30, 60),
  disabledSeconds: () => [55, 56],
});

const MakeOrderForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ mode: "onChange" });
  const [deliveryOption, setDeliveryOption] = React.useState<string | number>(
    "delivery"
  );
  const { totalPrice, totalCountProducts } = useAppSelector(
    (state) => state.cartSlice
  );
  const [valuePay, setValuePay] = React.useState("");
  const [valueChane, setValueChange] = React.useState("");

  const [deliveryMode, setDeliveryMode] = React.useState(1);

  const onChangeDeliveryMode = (e: RadioChangeEvent) => {
    console.log("radio checked", e.target.value);
    setDeliveryMode(e.target.value);
  };

  const onChangePay = (e: RadioChangeEvent) => {
    console.log("radio checked", e.target.value);
    setValuePay(e.target.value);
  };
  const onChangeChange = (e: RadioChangeEvent) => {
    console.log("radio checked", e.target.value);
    setValueChange(e.target.value);
  };

  return (
    <div>
      <div className="border-b border-lineGray py-5">
        <h3 className="text-back font-semibold text-2xl mb-4">О вас</h3>
        <div className="grid grid-cols-3 gap-x-5">
          <div>
            <Input
              className={""}
              elId={""}
              formController={register("userFullName", {
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
              inpName={"userFullName"}
              inpType={"text"}
              defaultValue={""}
              errMsg={errors.userFullName?.message}
              label={"Имя*"}
            />
          </div>
          <div>
            <Input
              className={""}
              elId={""}
              formController={register("phoneNum", {
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
              inpName={"phoneNum"}
              inpType={"tel"}
              defaultValue={""}
              errMsg={errors.phoneNum?.message}
              label={"Номер телефона*"}
            />
          </div>
          <div>
            <Input
              className={""}
              elId={""}
              formController={register("email", {
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
              inpName={"email"}
              inpType={"mail"}
              defaultValue={""}
              errMsg={errors.email?.message}
              label={"Почта"}
            />
          </div>
        </div>
      </div>
      <div className="border-b border-lineGray py-5">
        <div className="flex flex-row justify-between">
          <div>
            <h3 className="text-back font-semibold text-2xl mb-4">Доставка</h3>
          </div>
          <div>
            <Segmented
              options={[
                {
                  label: <div>Доставка</div>,
                  value: "delivery",
                },
                {
                  label: <div>Самовывоз</div>,
                  value: "pickup",
                },
              ]}
              value={deliveryOption}
              onChange={(t: any) => {
                setDeliveryOption(t);
                console.log(t);
              }}
              size={"large"}
            />
          </div>
        </div>
        <div>
          <div>
            {deliveryOption === "delivery" ? (
              <DeliveryForm errors={errors} register={register} />
            ) : (
              <SelfDeliveryForm />
            )}
          </div>
          <div>
            <h5 className="text-txtGrey font-normal text-base mb-3 mt-1">
              Когда выполнить заказ?
            </h5>
            <div>
              <Radio.Group onChange={onChangeDeliveryMode} value={deliveryMode}>
                <Radio value={1}>Как можно скорее</Radio>
                <Radio value={2}>По времени</Radio>
              </Radio.Group>
              {deliveryMode === 2 && (
                // <div>
                  <DatePicker
                    format="YYYY-MM-DD HH:mm:ss"
                    disabledDate={disabledDate}
                    disabledTime={disabledDateTime}
                    showTime={{ defaultValue: dayjs("00:00:00", "HH:mm:ss") }}
                  />
                // </div>
              )}
            </div>
          </div>
        </div>
      </div>

      <div className="border-b border-lineGray py-5">
        <div>
          <div>
            <h3 className="text-back font-semibold text-2xl mb-4">Оплата</h3>
          </div>
        </div>
        <div>
          <Radio.Group onChange={onChangePay} value={valuePay}>
            <Radio value={1}>Наличными</Radio>
            <Radio value={2}>Картой</Radio>
            <Radio value={3}>Apple Pay</Radio>
          </Radio.Group>
        </div>
      </div>
      <div className="border-b border-lineGray py-5">
        <div>
          <div>
            <h3 className="text-back font-semibold text-2xl mb-4">Сдача</h3>
          </div>
        </div>
        <div>
          <Radio.Group onChange={onChangeChange} value={valueChane}>
            <Radio value={1}>Без сдачи</Radio>
            <Radio value={2}>Сдача с</Radio>
          </Radio.Group>
        </div>
      </div>
      <div className="border-b border-lineGray py-5">
        <div>
          <div>
            <h3 className="text-back font-semibold text-2xl mb-4">
              Комментарий
            </h3>
          </div>
        </div>
        <div>
          <Inp.TextArea rows={8} placeholder="Есть уточнения?" />
        </div>
      </div>
      <div className="flex flex-row justify-between items-center">
        <div>
          {/* <div>
            <span>Количество: </span>
            <span>{totalCountProducts}</span>
            <span>шт</span>
          </div> */}
          <div className="text-primery font-semibold text-xl">
            <span>Итого: </span>
            <span>{totalPrice}</span>
            <span> ₽</span>
          </div>
        </div>

        <div className="w-44">
          <SubmitBtn
            className={""}
            onClick={() => {
              console.log("h");
            }}
            txt={"Оформить заказ"}
            disabled={false}
            loading={false}
          />
        </div>
      </div>
    </div>
  );
};

export default MakeOrderForm;
