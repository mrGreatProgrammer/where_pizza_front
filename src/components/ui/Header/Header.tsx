import React from "react";
import { Link } from "react-router-dom";
import { AccounIcon } from "../../../imgs/icons";
import FullLogo from "../../../imgs/Logo/FullLogo";
// import Logo from "../../../imgs/Logo/Logo";
import CartBtn from "../../forms/Buttons/CartBtn";
import LocationHeader from "./LocationHeader/LocationHeader";

const Header = () => {
  return (
    <header className="header bg-white fixed top-0 left-0 right-0">
      <div className="header__top-container border-b border-[#f0f0f0]">
        <div className="container">
          <div className="header__top flex flex-row justify-between py-2.5 text-sm">
            <LocationHeader />
            <div className="flex flex-row items-center space-x-10">
              <div>Время работы: с 11:00 до 23:00</div>
              <div className="header__account-container text-sm ">
                <Link
                  to={"/loginВойти в аккаунт"}
                  className={"flex flex-row space-x-2 items-center"}
                >
                  <AccounIcon /> <span>Войти в аккаунт</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="header__bottom-container border-b border-[#f0f0f0]">
        <div className="container">
          <div className="header_bottom py-3 flex flex-row justify-between">
            <div className="logo__container">
              <FullLogo />
            </div>
            <div className="cart_btn__container">
              <CartBtn />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
