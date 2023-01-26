import React from "react";
import EmptyOrdersHistory from "../../components/Products/OrdersHistory/EmptyOrdersHistory";
import OrdersHistory from "../../components/Products/OrdersHistory/OrdersHistory";

const UserHistoryOrders = () => {
  return (
    <div>
      <div className="mb-5">
        <h3 className="font-semibold text-2xl md:text-3xl">История заказов</h3>
      </div>
      <div>{false ? <EmptyOrdersHistory /> : <OrdersHistory />}</div>
    </div>
  );
};

export default UserHistoryOrders;
