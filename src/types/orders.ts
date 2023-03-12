import { IProduct } from "./products";

export interface IOrder {
  id: number | string;
  totalPrice: number;
  totalCount: number;
  products: any;
}

export type orderHistoryProps = {
  data: IOrder;
};

export type deliverMode = "delivery" | "pickup"

export interface IMakeOrderForm {
  userFullName: string;
  phoneNum: string | number;
  email?: string;

  deliveryMode: deliverMode | boolean;
  street?: string;
  house?: string;
  porch?: string;
  floor?: string;
  apartment?: string;
  intercom?: string;

  restaurant?: string|number;

  fastPrepareTheOrder: boolean;
  timePrepareTheOrder?: any;
  
  paymentType: number;

  withChange: boolean;
  withChangeNum?: string;

  comments?: string;

  totalPrice: any;
  
  products: IProduct[] | any;

}
