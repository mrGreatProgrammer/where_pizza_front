import { IProduct } from "../types/products";
import p1 from '../imgs/pizzas/Rectangle.png'
import p2 from '../imgs/pizzas/Rectangle1.png'
import p3 from '../imgs/pizzas/Rectangle7.png'
import p4 from '../imgs/pizzas/Rectangle8.png'

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
      "Огурцы маринованные"
  ],
  },
  {
    id: 2,
    productImage: { id: 1, src: p2, altTxt: "" },
    productLabelTxt: "new",
    productName: "EASY PEASY огуречный расколбас",
    productDiscount: 799,
    productPrice: 549,
    productReciepe: [
      "Курица",
      "Лук",
      "Соус Карбонара",
      "Сыр Моцарелла"
  ],
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
      "Томатный соус"
  ],
  },
  {
    id: 4,
    productImage: { id: 1, src: p3, altTxt: "" },
    productLabelTxt: "new",
    productName: "4 сезона  ",
    productDiscount: 399,
    productPrice: 249,
    productReciepe: [
      "Курица",
      "Лук",
      "Перец Халапеньо",
      "Сыр Моцарелла"
  ],
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
