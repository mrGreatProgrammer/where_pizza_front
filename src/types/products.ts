type productImage = {
  id: number;
  src: string;
  altTxt: string;
};

export interface IProduct {
  id?: number | string;
  productLabelTxt?: string;
  img: any;
  name: string;
  about: string[];
  price: number;
  discount: number;
}

export interface IProductsGroupProps {
  title: string;
  loading: boolean;
  err: string;
  products: IProduct[] | null | undefined;
}

export interface IOrderItemProps {
  orderNumber: number | string;
  orderDate: string;
  orderSumPrice: number;
  orderStatus: string;
  orderPayed: string;
  orderDeliveryAddress: string;
}
