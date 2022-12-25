import moment from "moment";
import React from "react";
import { Link } from "react-router-dom";
import {
  FacebookIcon,
  InstagrammIcon,
  LocationIcon,
  PhoneIcon,
} from "../../../imgs/icons";
import FullLogo from "../../../imgs/Logo/FullLogo";
// import Logo from "../../../imgs/Logo/Logo";

const footerDataWherePizza = [
  { id: 1, txt: "О компании", link: "" },
  { id: 2, txt: "Пользовательское соглашение", link: "" },
  { id: 3, txt: "Условия гарантии", link: "" },
];
const footerDataHelps = [
  { id: 1, txt: "Ресторан", link: "" },
  { id: 2, txt: "Контакты", link: "" },
  { id: 3, txt: "Поддержка", link: "" },
  { id: 4, txt: "Поддержка", link: "" },
];

const footerDataContacts = [
  { id: 1, icon: <PhoneIcon />, txt: "+7 (926) 223-10-11", link: "" },
  {
    id: 2,
    icon: <LocationIcon />,
    txt: "Москва, ул. Юных Ленинцев, д.99",
    link: "",
  },
];
const footerDataSocials = [
  { id: 1, icon: <FacebookIcon />, txt: "Facebok", link: "" },
  { id: 2, icon: <InstagrammIcon />, txt: "Instagram", link: "" },
];

const Footer = () => {
  return (
    <footer className="footer bg-white w-full mt-12">
      <div className="container">
        <div className="flex flex-row justify-between py-8">
          <div className="flex flex-col justify-between" >
            <div className="logo__container" >
              <FullLogo />
            </div>
            {/* <div className="flex flex-row space-x-2 items-center" >
              <Logo /> <h4 className="text-base font-bold">Куда пицца</h4>
            </div> */}
            <div>
              <p>
                © Copyright <time>{moment().format("YYYY")}</time> — Куда Пицца
              </p>
            </div>
          </div>
          <div>
            <h6 className="text-xl font-semibold mb-1">Куда пицца</h6>
            <ul className="text-base">
              {footerDataWherePizza.map((e) => (
                <li className="my-3" key={e.id}>
                  <Link to={e.link}>{e.txt}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h6 className="text-xl font-semibold mb-1">Помощь</h6>
            <ul className="text-base">
              {footerDataHelps.map((e) => (
                <li className="my-3" key={e.id}>
                  <Link to={e.link}>{e.txt}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h6>Контакты</h6>
            <div>
              <ul>
                {footerDataContacts.map((e) => (
                  <li className="my-4" key={e.id}>
                    <a className="flex flex-row space-x-3" href={e.link}>
                      {e.icon}
                      <span>{e.txt}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div className="social__container">
              <ul className="flex flex-row space-x-6">
                {footerDataSocials.map((e) => (
                  <li>
                    <a className="flex flex-row space-x-3" href={e.link}>
                      {e.icon}
                      <span>{e.txt}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
