type productImage = {
  id: number;
  src: string;
  altTxt: string;
};

export interface IProduct {
  id: number | string;
  productLabelTxt: string;
  productImage: productImage;
  productName: string;
  productReciepe: string[];
  productPrice: number;
  productDiscount: number;
}

export interface IProductsGroupProps {
  title: string;
  loading: boolean;
  err: string;
  products: IProduct[] | null;
}


export interface IOrderItemProps {
  orderNumber: number|string;
  orderDate: string;
  orderSumPrice: number;
  orderStatus: string;
  orderPayed: string;
  orderDeliveryAddress: string;
}