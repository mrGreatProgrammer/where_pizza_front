import React from "react";
import { IOrderItemProps } from "../../../../types/products";
import img1 from "../../../../imgs/pizzas/Rectangle7.png";
import moment from "moment";

const OrderItem: React.FC<IOrderItemProps> = ({
  orderDate,
  orderDeliveryAddress,
  orderNumber,
  orderPayed,
  orderStatus,
  orderSumPrice,
  orderTotalCount,
}: IOrderItemProps): JSX.Element => {
  return (
    <div className="max-w-[850px] border border-lineGray rounded-xl p-3 mb-5">
      <div>
        <div className="flex flex-row">
          <div className="order__line w-1 h-44 md:h-11 rounded-3xl bg-primery mr-3"></div>
          <div className="order__desc_txt w-full">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-x-9">
              {/* <div className="grid grid-cols-2 gap-x-16"> */}
              <div>
                <div className="label__order text-txtGrey text-xs mb-0.5">
                  Заказ
                </div>
                <div className="mb-3">
                  <span>№{orderNumber} </span>
                  <span className="text-txtGrey text-xs">
                    {moment(orderDate).format("YY.MM.DD")}
                  </span>
                </div>
              </div>
              <div>
                <div className="label__order text-txtGrey text-xs mb-0.5">
                  Сумма заказа
                </div>
                <div className="mb-3">
                  <span>{orderSumPrice}</span> <span>₽</span>
                </div>
              </div>
              {/* </div> */}
              {/* <div className="grid grid-cols-2 gap-x-16"> */}
              <div>
                <div className="label__order text-txtGrey text-xs mb-0.5">
                  Статус
                </div>
                <div className="mb-3">
                  <p>{orderStatus}</p>
                </div>
              </div>
              <div>
                <div className="label__order text-txtGrey text-xs mb-0.5">
                  Оплачено
                </div>
                <div className="mb-3">
                  <p>{orderPayed}</p>
                </div>
              </div>
              {/* </div> */}
            </div>
            <div className="block md:hidden">
              <div className="label__order text-txtGrey text-xs mb-0.5">
                Адрес
              </div>
              <div className="mb-3">
                <p>{orderDeliveryAddress}</p>
              </div>
            </div>
          </div>
        </div>

        <div>
            <div className="line border-b  border-lineGray my-3"></div>
          <div className="md:flex md:flex-row md:justify-between" >
            <div className="hidden md:block">
              <div className="label__order text-txtGrey text-xs mb-0.5">
                Адрес
              </div>
              <div className="mb-3">
                <p>{orderDeliveryAddress}</p>
              </div>
            </div>

            <div className="my-2 flex space-x-[-10px]">
              <div>
                <img
                  className="rounded-full"
                  src={img1}
                  alt=""
                  width={40}
                  height={40}
                />
              </div>
              <div>
                <img
                  className="rounded-full"
                  src={img1}
                  alt=""
                  width={40}
                  height={40}
                />
              </div>
              <div>
                <img
                  className="rounded-full"
                  src={img1}
                  alt=""
                  width={40}
                  height={40}
                />
              </div>
            </div>
          </div>
          <div className="line border-b border-lineGray my-3"></div>
          <div className="flex justify-between text-sm my-2 text-primery">
            <div>Повторить заказ</div>
            <div>Показть подробнее</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderItem;
