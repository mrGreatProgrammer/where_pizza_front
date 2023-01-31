import React from "react";
import EmptyOrdersHistory from "../../components/Products/OrdersHistory/EmptyOrdersHistory";
import OrdersHistory from "../../components/Products/OrdersHistory/OrdersHistory";
import { useGetAllOrdersQuery } from "../../http/services/ordersApi";

const UserHistoryOrders = () => {
  const { isError, isLoading, isFetching, data } = useGetAllOrdersQuery(1);

  return (
    <div>
      <div className="mb-5">
        <h3 className="font-semibold text-2xl md:text-3xl">История заказов</h3>
      </div>
      {isLoading ? (
        <div>loading ...</div>
      ) : (
        <div>
          {data ? (
            <OrdersHistory orders={data.rows} totalPag={data.count} />
          ) : (
            <EmptyOrdersHistory />
          )}
        </div>
      )}
    </div>
  );
};

export default UserHistoryOrders;
