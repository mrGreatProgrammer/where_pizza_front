import React from "react";
import { Link } from "react-router-dom";
import { AccounIcon } from "../../../imgs/icons";
import FullLogo from "../../../imgs/Logo/FullLogo";
// import Logo from "../../../imgs/Logo/Logo";
import CartBtn from "../../forms/Buttons/CartBtn";
import BurgerMenu from "../../NavBars/BurgerMenu/BurgerMenu";
import LocationHeader from "./LocationHeader/LocationHeader";
import WorkTime from "./WorkTime";

const Header = () => {
  return (
    <header className="header bg-white fixed top-0 left-0 right-0 z-10">
      <div className="header__top-container border-b border-[#f0f0f0]">
        <div className="container">
          <div className="header__top md:flex md:flex-row md:justify-between py-2.5 text-xs md:text-sm">
            <LocationHeader />
            <div className="hidden md:flex flex-row items-center space-x-10">
              <WorkTime />
              <div className="header__account-container text-xs md:text-sm ">
                <Link
                  to={"/auth/login"}
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
            <div className="hidden md:block cart_btn__container">
              <CartBtn />
            </div>
            <div className="block md:hidden" >
              <BurgerMenu />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
