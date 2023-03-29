import { Select } from "antd";
import React from "react";
import { Controller } from "react-hook-form";

const SelfDeliveryForm = ({ errors, register, control }:any) => {
  return (
    <div className="w-full my-4">
      <Controller 
      control={control}
      name={"restaurant"}
      render={({field})=><Select
      {...field}
      size="large"
        placeholder={"Выберите ресторан"}
        loading={false}
        className={"w-full"}
      >
        <Select.Option value={"1"} label={"ул Айни"}>
          {"ул Айни"}
        </Select.Option>
      </Select>}
      />
    </div>
  );
};

export default SelfDeliveryForm;
