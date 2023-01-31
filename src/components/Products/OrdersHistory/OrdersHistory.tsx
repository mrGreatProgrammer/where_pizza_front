import { Pagination } from "antd";
import React from "react";
import OrderItem from "./OrderItem/OrderItem";

const OrdersHistory = ({ orders, totalPag }: any) => {
  return (
    <div>
      <div>
        <OrderItem
          orderNumber={"130312"}
          orderDate={"22.06.21"}
          orderDeliveryAddress={
            "ул. Львовская 48/2, офис 301, 2 этаж, домофон 4801#"
          }
          orderStatus={"Обрабатывается"}
          orderPayed={"Картой"}
          orderSumPrice={399}
          orderTotalCount={1}
        />
        {orders ? (
          //@ts-ignore
          orders.map((o) => (
            <OrderItem
              key={o.id}
              orderNumber={o.id}
              orderDate={o.createdAt}
              orderDeliveryAddress={
                "ул. Львовская 48/2, офис 301, 2 этаж, домофон 4801#"
              }
              orderStatus={"Обрабатывается"}
              orderPayed={"Картой"}
              orderSumPrice={o.totalPrice}
              orderTotalCount={o.totalCount}
            />
          ))
        ) : (
          <div className="orderHistory__empty">empty</div>
        )}
      </div>
      <div className="my-8 flex justify-center">
        <Pagination
          defaultCurrent={1}
          // total={15}
          total={totalPag}
          hideOnSinglePage
          pageSize={5}
        />
      </div>
    </div>
  );
};

export default OrdersHistory;
