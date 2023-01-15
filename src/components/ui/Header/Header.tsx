import { Popover } from "antd";
import React from "react";
import { Link } from "react-router-dom";
import { AccounIcon } from "../../../imgs/icons";
import FullLogo from "../../../imgs/Logo/FullLogo";
import { useAppDispatch, useAppSelector } from "../../../store/store";
import { logoutAC } from "../../../store/userSlice/userSlice";
// import Logo from "../../../imgs/Logo/Logo";
import CartBtn from "../../forms/Buttons/CartBtn";
import BurgerMenu from "../../NavBars/BurgerMenu/BurgerMenu";
import LocationHeader from "./LocationHeader/LocationHeader";
import WorkTime from "./WorkTime";

const Header = () => {
  const { user } = useAppSelector((state) => state.userSlice);
  const dispatch = useAppDispatch();

  const text = (
    <div className="font-semibold text-base text-primery py-2 border-b-lineGray border-b">
      <p>100 бонусов</p>
    </div>
  );

  const content = (
    <div className="text-black text-base">
      <p className="my-2">
        <Link to={"/user/profile/order_history"} className="my-2">
          История заказов
        </Link>
      </p>
      <p className="my-2">
        <Link to={"/user/profile"} className="my-2">
          Настройки
        </Link>
      </p>
      <button
        onClick={() => dispatch(logoutAC())}
        className="text-txtGrey border-t-lineGray border-t pt-2"
      >
        <p>Выход из аккаунта</p>
      </button>
    </div>
  );

  return (
    <header className="header bg-white fixed top-0 left-0 right-0 z-10">
      <div className="header__top-container border-b border-[#f0f0f0]">
        <div className="container">
          <div className="header__top md:flex md:flex-row md:justify-between py-2.5 text-xs md:text-sm">
            <LocationHeader />
            <div className="hidden md:flex flex-row items-center space-x-10">
              <WorkTime />
              <div className="header__account-container text-xs md:text-sm ">
                {user ? (
                  <Popover
                    placement="bottom"
                    title={text}
                    content={content}
                    trigger="hover"
                  >
                    <Link
                      to={"/user/profile"}
                      className={"flex flex-row space-x-2 items-center"}
                    >
                      <AccounIcon />
                      <span>{user?.fullName}</span>
                    </Link>
                  </Popover>
                ) : (
                  <Link
                    to={"/auth/login"}
                    className={"flex flex-row space-x-2 items-center"}
                  >
                    <AccounIcon />
                    <span>Войти в аккаунт</span>
                  </Link>
                )}
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
            <div className="block md:hidden">
              <BurgerMenu />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
