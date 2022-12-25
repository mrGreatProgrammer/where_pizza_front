import { Radio } from "antd";
import React from "react";
import { IRadioBtnProps } from "../../../types/forms";
import './RadioBtns.scss';

type radioBtnsProps = {
  title: string;
  btns: IRadioBtnProps[];
  onchange: any;
  defaultValue?: number| string|null|undefined;
  currentValue?: number| string|null|undefined;
};

const RadioBtns: React.FC<radioBtnsProps> = ({
  title,
  btns,
  onchange,
  defaultValue,
  currentValue
}: radioBtnsProps): JSX.Element => {
  return (
    <div className="my-7" >
      <h6 className="text-txtGrey text-base" >{title}</h6>
      <div className="mt-4" >
        <Radio.Group value={currentValue} onChange={onchange} defaultValue={defaultValue} buttonStyle="solid" className="flex flex-row flex-wrap gap-x-2 gap-y-2" >
          {btns.map((e) => (
            <Radio.Button className={`radioBtn rounded-md`} style={{borderInlineStartWidth: '1px'}} value={e.id}>{e.title}</Radio.Button>
          ))}
        </Radio.Group>
      </div>
    </div>
  );
};

export default RadioBtns;
