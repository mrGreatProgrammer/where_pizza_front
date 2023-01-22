import React from "react";
import { Link } from "react-router-dom";
import { navFake } from "../../../fakeData/productsFake";
import { AccounIcon } from "../../../imgs/icons";
import { toggleBurgerMenuAC } from "../../../store/appSlice/app";
import { useAppDispatch, useAppSelector } from "../../../store/store";
import { logoutAC } from "../../../store/userSlice/userSlice";
import { INavLink } from "../../../types/app";
import SocialContainer from "../../ui/Footer/SocialContainer";
import WorkTime from "../../ui/Header/WorkTime";
import "./BurgerMenu.scss";

const BurgerMenu = () => {
  const dispatch = useAppDispatch();
  const { burgerOpened } = useAppSelector((state) => state.appSlice);
  const { user } = useAppSelector((state) => state.userSlice);

  return (
    <div className="a-relative flex justify-center items-center h-full">
      <button
        onClick={() => dispatch(toggleBurgerMenuAC(!burgerOpened))}
        className={`burger ${burgerOpened ? "burger_opened" : "burger_closed"}`}
      >
        <div className="burger_line"></div>
        <div className="burger_line"></div>
        <div className="burger_line"></div>
      </button>
      <nav
        className={`absolute w-full left-0 right-0 bg-white top-28  ${
          burgerOpened ? "h-screen" : "h-0 hidden"
        }`}
      >
        {user ? (
          // <Popover
          //   placement="bottom"
          //   title={text}
          //   content={content}
          //   trigger="hover"
          // >
          <>
            <div className="header__account-container text-base border-lineGray border-b-[1px] px-5 py-5">
              <Link
                to={"/user/profile"}
                className={"flex flex-row space-x-2 items-center"}
              >
                <AccounIcon />
                <span>{user?.fullName}</span>
              </Link>
            </div>
            <div className="text-base border-lineGray border-b-[1px] px-5 py-5">
              <ul className="space-y-5">
                <li>
                  <Link to={"/user/profile/order_history"}>
                    История заказов
                  </Link>
                </li>
                <li>
                  <Link to={"/user/profile"}>Настройки</Link>
                </li>
                <li className="text-txtGrey">
                  <button onClick={() => dispatch(logoutAC())}>
                    Выход из аккаунта
                  </button>
                </li>
              </ul>
            </div>
          </>
        ) : (
          // {/* </Popover> */}
          <div className="header__account-container text-base border-lineGray border-b-[1px] px-5 py-5">
            <Link
              to={"/auth/login"}
              className={"flex flex-row space-x-2 items-center"}
            >
              <AccounIcon /> <span>Войти в аккаунт</span>
            </Link>
          </div>
        )}
        <ul className="px-5 py-5 space-y-5 border-lineGray border-b-[1px]">
          {navFake.map((e: INavLink) => (
            <li className="text-base" key={e.id}>
              <Link to={"/"}>{e.title}</Link>
            </li>
          ))}
        </ul>
        <div className="px-5 py-5">
          <SocialContainer />
        </div>
        <div className=" px-5 py-5 border-lineGray border-t-[1px]">
          <WorkTime />
        </div>
      </nav>
    </div>
  );
};

export default BurgerMenu;
