import { Select } from "antd";
import React from "react";

const SelfDeliveryForm = () => {
  return (
    <div className="w-full my-4">
      <Select
      size="large"
        placeholder={"Выберите ресторан"}
        loading={false}
        className={"w-full"}
      >
        <Select.Option value={"1"} label={"1"}>
          {"1"}
        </Select.Option>
      </Select>
    </div>
  );
};

export default SelfDeliveryForm;
