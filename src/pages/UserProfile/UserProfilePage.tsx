import { Segmented } from "antd";
import React from "react";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import Footer from "../../components/ui/Footer/Footer";

const UserProfilePage = () => {
  const [value, setValue] = React.useState<string | number>("/user/profile");
  const navigate = useNavigate();

  const location = useLocation();

  console.log("location", location);

  return (
    <div className="container min-h-screen" >
      
      <div className="flex flex-row justify-between" >
        <div className="mb-4 md:mb-6" >
          <h2 className="font-semibold text-2xl md:text-4xl">Мой аккаунт</h2>
        </div>
        <div className="hidden md:block" >
          <Segmented
            options={[
              {
                label: <div>История заказов</div>,
                value: "/user/profile/order_history",
              },
              {
                label: <div>Настройки</div>,
                value: "/user/profile",
              },
            ]}
            // value={value}
            value={location.pathname}
            onChange={(t: any) => {
              setValue(t);
              console.log(t);
              navigate(t);
            }}
            size={"large"}
          />
        </div>
      </div>
      <div>
        <Outlet />
      </div>
      
    </div>
  );
};

export default UserProfilePage;
