import React from "react";
import "./SeoTextContainer.scss";

const SeoTextContainer = () => {
  const [showAllTxt, setShowAllTxt] = React.useState(false);

  return (
    <div>
      <div className="container">
        <div className="flex justify-center">
          <div>
            <h2 className="font-semibold text-3xl">Доставка пиццы в Москве</h2>
            <div
              className={`seo_txt-container relative overflow-hidden w-[850px] ${
                showAllTxt ? "h-auto seo_txt-opened" : "h-72 seo_txt-closed"
              }`}
            >
              <p className="my-2 text-base">
                Захотелось чего-то вкусного и сытного? Желание простое и
                понятное, только в холодильнике все не то, и до магазина идти
                лень. Все пропало? Нет. Недорого заказать пиццу в Москве очень
                просто! Вам на помощь спешит супергерой – Domino’s Pizza! Как у
                всякого супергероя, у Domino’s Pizza есть свои суперсилы:
                восхитительный вкус продукции из отборных ингредиентов; широкий
                ассортимент, включающий легендарные, фирменные и классические
                виды, для вегетарианцев и любителей экспериментировать; быстрая
                и бесплатная доставка пиццы в течение 30 минут, чтобы вкусное и
                ароматное блюдо не успевало остыть.
              </p>
              <h4 className="mt-4 mb-1 text-lg font-bold">Как сделать заказ</h4>
              <p className="mt-1 mb-2 text-base">
                Доставка пиццы от Domino’s – это когда Вам не нужно никуда ехать
                или звонить, ведь есть Интернет. Никогда еще заказ пиццы на дом
                в Москве не был таким простым! Чтобы заказать пиццу онлайн, Вам
                необходимо: выбрать понравившийся вариант и количество порций;
                положить желаемое в «Корзину»; не уходить далеко, так как
                вкусная пицца на заказ с доставкой уже мчится к Вам из ближайшей
                пиццерии Domino’s. И не забудьте оплатить заказ курьеру!
              </p>
            </div>

            <div className="my-5">
              <button
                onClick={() => setShowAllTxt((prev) => !prev)}
                className="font-semibold text-base text-primery"
              >
                {showAllTxt ? "Свернуть" : "Показать полностью"}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SeoTextContainer;
