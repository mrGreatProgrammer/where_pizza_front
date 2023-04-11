import { Select } from "antd";
import React from "react";
import { Controller } from "react-hook-form";
import { useAppDispatch, useAppSelector } from "../../../../store/store";
import { getRestaurants } from "../../../../http/app";

const SelfDeliveryForm = ({ errors, register, control }: any) => {
  const { fetchingRestaurants, restaurants, errFetchRestaurants } =
    useAppSelector((state) => state.appSlice);

  const dispatch = useAppDispatch();

  React.useEffect(() => {
    dispatch(getRestaurants());
  }, []);

  return (
    <div className="w-full my-4">
      <Controller
        control={control}
        name={"restaurant"}
        render={({ field }) => (
          <Select
            {...field}
            size="large"
            placeholder={"Выберите ресторан"}
            loading={fetchingRestaurants}
            className={"w-full"}
          >
            {restaurants &&
              restaurants?.map((e: any) => (
                <Select.Option key={e.id} value={e.id} label={e.title}>
                  {e.title}
                </Select.Option>
              ))}
          </Select>
        )}
      />
    </div>
  );
};

export default SelfDeliveryForm;
