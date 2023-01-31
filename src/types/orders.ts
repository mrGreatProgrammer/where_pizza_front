export interface IOrder {
  id: number | string;
  totalPrice: number;
  totalCount: number;
  products: any;
}

export type orderHistoryProps = {
  data: IOrder
}