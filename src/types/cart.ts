export interface ICartItemProps {
  id: number | string;
  img: string;
  title: string;
  desc: string;
  price: string | number;
  discount: string | number;
  count: number;
}