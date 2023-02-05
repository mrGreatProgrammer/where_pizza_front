import { Radio, Segmented } from "antd";
import React from "react";
import { useForm } from "react-hook-form";
import Input from "../Input/Input";
import { RadioChangeEvent, Input as Inp } from "antd";
import { useAppSelector } from "../../../store/store";
import SubmitBtn from "./../Buttons/SubmitBtn";

const MakeOrderForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ mode: "onChange" });
  const [value, setValue] = React.useState<string | number>("delivery");
  const { totalPrice, totalCountProducts } = useAppSelector(
    (state) => state.cartSlice
  );

  const [deliveryMode, setDeliveryMode] = React.useState(1);

  const onChange = (e: RadioChangeEvent) => {
    console.log("radio checked", e.target.value);
    setValue(e.target.value);
  };

  return (
    <div>
      <div className="border-b border-lineGray py-5">
        <h3 className="text-back font-semibold text-2xl mb-4">О вас</h3>
        <div className="grid grid-cols-3 gap-x-5" >
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
              value={value}
              onChange={(t: any) => {
                setValue(t);
                console.log(t);
              }}
              size={"large"}
            />
          </div>
        </div>
        <div>
          <div>
            <Input
              className={""}
              elId={""}
              formController={register("street", {
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
              inpName={"street"}
              inpType={"text"}
              defaultValue={""}
              errMsg={errors.street?.message}
              label={"Улица*"}
            />
          </div>
          <div className="grid grid-cols-5 gap-x-5" >
            <div>
              <Input
                className={""}
                elId={""}
                formController={register("house", {
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
                inpName={"house"}
                inpType={"text"}
                defaultValue={""}
                errMsg={errors.house?.message}
                label={"Дом"}
              />
            </div>
            <div>
              <Input
                className={""}
                elId={""}
                formController={register("porch", {
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
                inpName={"porch"}
                inpType={"text"}
                defaultValue={""}
                errMsg={errors.porch?.message}
                label={"Подъезд"}
              />
            </div>
            <div>
              <Input
                className={""}
                elId={""}
                formController={register("floor", {
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
                inpName={"floor"}
                inpType={"text"}
                defaultValue={""}
                errMsg={errors.floor?.message}
                label={"Этаж"}
              />
            </div>
            <div>
              <Input
                className={""}
                elId={""}
                formController={register("intercom", {
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
                inpName={"intercom"}
                inpType={"text"}
                defaultValue={""}
                errMsg={errors.intercom?.message}
                label={"Квартира"}
              />
            </div>
            <div>
              <Input
                className={""}
                elId={""}
                formController={register("intercom", {
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
                inpName={"intercom"}
                inpType={"text"}
                defaultValue={""}
                errMsg={errors.intercom?.message}
                label={"Домофон"}
              />
            </div>
          </div>
          <div>
            <h5 className="text-txtGrey font-normal text-base mb-3 mt-1">
              Когда выполнить заказ?
            </h5>
            <Radio.Group onChange={onChange} value={value}>
              <Radio value={1}>Как можно скорее</Radio>
              <Radio value={2}>По времени</Radio>
            </Radio.Group>
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
          <Radio.Group onChange={onChange} value={value}>
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
          <Radio.Group onChange={onChange} value={value}>
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
