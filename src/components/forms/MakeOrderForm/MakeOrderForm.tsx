import { DatePicker, Form, InputNumber, Radio, Segmented } from "antd";
import React from "react";
import { Controller, useForm } from "react-hook-form";
import Input from "../Input/Input";
import { RadioChangeEvent, Input as Inp } from "antd";
import { useAppSelector } from "../../../store/store";
import SubmitBtn from "./../Buttons/SubmitBtn";
import DeliveryForm from "./DeliveryForm/DeliveryForm";
import SelfDeliveryForm from "./DeliveryForm/SelfDeliveryForm";
import dayjs from "dayjs";
import { RangePickerProps } from "antd/es/date-picker";
import { useAddOrderMutation } from "../../../http/services/ordersApi";
import { MaskedInput } from "antd-mask-input";
import { hasErrorClass } from "../../../utils/errHandler";
import showNotification from "../../../utils/showNotification";

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
  // disabledHours: () => range(4, 24).splice(1, 4),
  disabledHours: () => range(7, 24).splice(1, 9),
  disabledMinutes: () => range(60, 60),
  disabledSeconds: () => [55, 56],
});

const MakeOrderForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
  } = useForm({ mode: "onChange" });
  const [deliveryOption, setDeliveryOption] = React.useState<string | number>(
    1
  );
  const { user } = useAppSelector((state) => state.userSlice);
  const [addOrder, { isError, isLoading, isSuccess }] = useAddOrderMutation();
  const { totalPrice, totalCountProducts, products } = useAppSelector(
    (state) => state.cartSlice
  );
  const [valuePay, setValuePay] = React.useState("");
  const [valueChane, setValueChange] = React.useState();

  const [deliveryMode, setDeliveryMode] = React.useState(true);

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

  function onSubmit(data: any) {
    console.log(data);

    const dataReq = {
      totalPrice,
      totalCount:totalCountProducts,
      products,
      userFullName: data?.userFullName? user?.fullName:data?.userFullName,
      phoneNumber: data?.phoneNum?user?.tel:data.phoneNum,
      email:data.email,
      deliveryMode,
      street:data?.street,
      house: data?.house,
      proch: data?.porch,
      floor: data?.floor,
      apartment: data?.apartment,
      intercom: data?.intercom,
      restaurant: data?.restaurant,
      fastPrepareTheOrder: deliveryOption,
      timePrepareTheOrder: dayjs(data?.timePrepareTheOrder).format("YYYY-MM-DD HH:mm:ss"),
      paymentType: valuePay,
      withChange: valueChane,
      withChangeNum: data?.tips,
      userComments: data?.comment,
    }

    console.log("------\n------\n------\n------\n----->", dataReq)

    addOrder(dataReq);
  }

  React.useEffect(()=>{
    isSuccess?showNotification("success","Заказ принят","ваш заказ принят"):console.log("")
  },[isSuccess])

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
                  value: 3,
                  message: "Минимум 3 символов",
                },
                maxLength: {
                  value: 32,
                  message: "Максимум 32 сивола",
                },
              })}
              inpName={"userFullName"}
              inpType={"text"}
              defaultValue={user?.fullName}
              errMsg={errors.userFullName?.message}
              label={"Имя*"}
            />
          </div>
          <div>
            {/* <Controller
              name="phoneNum"
              control={control}
              render={({ field }) => (
                <Form.Item
                  label={<>Телефони мобилӣ:</>}
                  {...hasErrorClass("phoneNum", errors)}
                >
                  <MaskedInput
                    {...field}
                    mask={"+(992) 00-000-00-00"}
                    // mask={/^\d{3}-\d{3}-\d{4}$/}
                  />
                </Form.Item>
              )}
            /> */}

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
                  message: "Минимум 7 символов",
                },
                maxLength: {
                  value: 32,
                  message: "Максимум 32 сивола",
                },
              })}
              inpName={"phoneNum"}
              inpType={"tel"}
              defaultValue={user?.tel}
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
                pattern: {
                  message: "Майдон бояд формати email дошта бошад",
                  value: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g,
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
                  value:1,
                },
                {
                  label: <div>Самовывоз</div>,
                  value: 2,
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
            {deliveryOption === 1 ? (
              <DeliveryForm errors={errors} register={register} />
            ) : (
              <SelfDeliveryForm
                errors={errors}
                register={register}
                control={control}
              />
            )}
          </div>
          <div>
            <h5 className="text-txtGrey font-normal text-base mb-3 mt-1">
              Когда выполнить заказ?
            </h5>
            <div>
              {/* <Controller name=""
              render={({field})=> */}

              <Radio.Group onChange={onChangeDeliveryMode} value={deliveryMode}>
                <Radio value={true}>Как можно скорее</Radio>
                <Radio value={false}>По времени</Radio>
              </Radio.Group>
              {/* // }
              //   /> */}
              {deliveryMode === false && (
                // <div>
                <Controller
                  control={control}
                  name="timePrepareTheOrder"
                  render={({ field }) => (
                    <DatePicker
                      {...field}
                      format="YYYY-MM-DD HH:mm:ss"
                      disabledDate={disabledDate}
                      disabledTime={disabledDateTime}
                      showTime={{ defaultValue: dayjs("00:00:00", "HH:mm:ss") }}
                    />
                  )}
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
        <div className="flex flex-row">
          <div>
            <Radio.Group onChange={onChangeChange} value={valueChane}>
              <Radio value={false}>Без сдачи</Radio>
              <Radio value={true}>Сдача с</Radio>
            </Radio.Group>
          </div>
          <div>
            {valueChane == true && (
              <Controller
                control={control}
                name="tips"
                render={({ field }) => (
                  <InputNumber
                    {...field}
                    formatter={(value) =>
                      `₽ ${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, "'")
                    }
                    parser={(value) => value!.replace(/\₽\s?|('*)/g, "")}
                  />
                )}
              />
            )}
          </div>
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
          <Controller
          control={control}
          name="comment"
          render={({field})=><Inp.TextArea {...field} rows={8} placeholder="Есть уточнения?" />}
          />
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
            onClick={handleSubmit(onSubmit)}
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
