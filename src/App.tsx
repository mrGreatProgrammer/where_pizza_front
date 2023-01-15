import React from "react";
import { Route, Routes } from "react-router-dom";
import "./App.scss";
import Footer from "./components/ui/Footer/Footer";
import Header from "./components/ui/Header/Header";
import Login from "./pages/Auth/Register/Login/Login";
import Register from "./pages/Auth/Register/Register";
import BasketPage from "./pages/BasketPage";
import MainPage from "./pages/MainPage";
import UserProfilePage from "./pages/UserProfile/UserProfilePage";
import UserSettings from "./pages/UserProfile/UserSettings";
import { useAppSelector } from "./store/store";
import UserHistoryOrders from "./pages/UserProfile/UserHistoryOrders";
import RequireAuth from "./hoc/RequireAuth";

function App() {
  const { user } = useAppSelector((state) => state.userSlice);

  return (
    <div className="App">
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<MainPage />}></Route>
          {/* {user ? (
            <>
              <Route path="/basket" element={<BasketPage />} />

              <Route path="/user/profile" element={<UserProfilePage />}>
                <Route
                  path="/user/profile/settings"
                  element={<UserSettings />}
                ></Route>
                <Route
                  path="/user/profile/order_history"
                  element={<UserHistoryOrders />}
                ></Route>
              </Route>
            </>
          ) : (
            <>
              <Route path="/auth/register" element={<Register />}></Route>
              <Route path="/auth/login" element={<Login />}></Route>
            </>
          )} */}

          <Route
            path="/basket"
            element={
              <RequireAuth>
                <BasketPage />
              </RequireAuth>
            }
          />

          <Route
            path="/user/profile"
            element={
              <RequireAuth>
                <UserProfilePage />
              </RequireAuth>
            }
          >
            <Route
            index
              // path="/user/profile/settings"
              element={
                <RequireAuth>
                  <UserSettings />
                </RequireAuth>
              }
            ></Route>
            <Route
              path="/user/profile/order_history"
              element={
                <RequireAuth>
                  <UserHistoryOrders />
                </RequireAuth>
              }
            ></Route>
          </Route>

          <Route path="/auth/register" element={<Register />}></Route>
          <Route path="/auth/login" element={<Login />}></Route>
        </Routes>
      </main>
    </div>
  );
}

export default App;
