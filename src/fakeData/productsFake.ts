import { IProduct } from "../types/products";
import p1 from "../imgs/pizzas/Rectangle.png";
import p2 from "../imgs/pizzas/Rectangle1.png";
import p3 from "../imgs/pizzas/Rectangle7.png";
import p4 from "../imgs/pizzas/Rectangle8.png";
import { CheeseIcon } from "./../imgs/icons";
import { productTagCardProps } from "../components/ui/ProductTagCard/ProductTagCard";
import { INavLink } from "../types/app";

export const fakeProducts: IProduct[] = [
  {
    id: 1,
    productImage: { id: 1, src: p1, altTxt: "" },
    productLabelTxt: "new",
    productName: "Чикен Сладкий Чили",
    productDiscount: 499,
    productPrice: 399,
    productReciepe: [
      "Бекон",
      "Ветчина",
      "Грибы",
      "Курица",
      "Лук",
      "Маслины",
      "Огурцы маринованные",
    ],
  },
  {
    id: 2,
    productImage: { id: 1, src: p2, altTxt: "" },
    productLabelTxt: "new",
    productName: "EASY PEASY огуречный расколбас",
    productDiscount: 799,
    productPrice: 549,
    productReciepe: ["Курица", "Лук", "Соус Карбонара", "Сыр Моцарелла"],
  },
  {
    id: 3,
    productImage: { id: 1, src: p4, altTxt: "" },
    productLabelTxt: "new",
    productName: "EASY PEASY чикен а-ля хрен",
    productDiscount: 1999,
    productPrice: 899,
    productReciepe: [
      "Курица",
      "Лук",
      "Перец Халапеньо",
      "Сыр Моцарелла",
      "Томатный соус",
    ],
  },
  {
    id: 4,
    productImage: { id: 1, src: p3, altTxt: "" },
    productLabelTxt: "new",
    productName: "4 сезона  ",
    productDiscount: 399,
    productPrice: 249,
    productReciepe: ["Курица", "Лук", "Перец Халапеньо", "Сыр Моцарелла"],
  },
  {
    id: 5,
    productImage: { id: 1, src: p3, altTxt: "" },
    productLabelTxt: "new",
    productName: "4 сезона",
    productDiscount: 1999,
    productPrice: 899,
    productReciepe: [
      "Курица",
      "Лук",
      "Перец Халапеньо",
      "Сыр Моцарелла",
      "Томатный соус",
    ],
  },
  {
    id: 6,
    productImage: { id: 1, src: p4, altTxt: "" },
    productLabelTxt: "new",
    productName: "EASY PEASY чикен а-ля хрен",
    productDiscount: 1999,
    productPrice: 899,
    productReciepe: [
      "Курица",
      "Лук",
      "Перец Халапеньо",
      "Сыр Моцарелла",
      "Томатный соус",
    ],
  },
  {
    id: 7,
    productImage: { id: 1, src: p1, altTxt: "" },
    productLabelTxt: "new",
    productName: "EASY PEASY огуречный расколбас",
    productDiscount: 1999,
    productPrice: 899,
    productReciepe: [
      "Курица",
      "Лук",
      "Перец Халапеньо",
      "Сыр Моцарелла",
      "Томатный соус",
    ],
  },
  {
    id: 8,
    productImage: { id: 1, src: p2, altTxt: "" },
    productLabelTxt: "new",
    productName: "Чикен Сладкий Чили",
    productDiscount: 1999,
    productPrice: 899,
    productReciepe: [
      "Курица",
      "Лук",
      "Перец Халапеньо",
      "Сыр Моцарелла",
      "Томатный соус",
    ],
  },
];

export const productTagReciepCardData: productTagCardProps[] = [
  {
    id: 1,
    // icon: <CheeseIcon />,
    title: "Моцарелла",
  },
  {
    id: 2,
    // icon: <CheeseIcon />,
    title: "Моцарелла",
  },
  {
    id: 3,
    // icon: <CheeseIcon />,
    title: "Моцарелла",
  },
  {
    id: 4,
    // icon: <CheeseIcon />,
    title: "Моцарелла",
  },
];



export const navFake:INavLink[] = [
  {
    id: 1, 
    title: "Акции",
    link: "/"
  },
  {
    id: 2, 
    title: "О компании",
    link: "/"
  },
  {
    id: 3, 
    title: "Пользовательское соглашение",
    link: "/"
  },
  {
    id: 4, 
    title: "Условия гарантии",
    link: "/"
  },
  {
    id: 5, 
    title: "Ресторан",
    link: "/"
  },
  {
    id: 6, 
    title: "Контакты",
    link: "/"
  },
  {
    id: 7, 
    title: "Поддержка",
    link: "/"
  },
  {
    id: 8, 
    title: "Отследить заказ",
    link: "/"
  },
]