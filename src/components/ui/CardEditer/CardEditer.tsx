import React from "react";
import { CrossIcon, PencilIcon } from "../../../imgs/icons";
import SubmitBtn from "../../forms/Buttons/SubmitBtn";

type cardEditerProps = {
  title: string;
  onOk: any;
  children: JSX.Element;
  data?: JSX.Element;
};

const CardEditer = ({ title, onOk, children, data }: cardEditerProps) => {
  const [opened, setOpened] = React.useState(false);

  return (
    <div className="max-w-[850px] py-6 px-8 border border-lineGray rounded-xl bg-white">
      <div className="flex flex-row justify-between mb-4">
        <div>
          <h3 className="font-semibold text-lg md:text-2xl text-black">
            {title}
          </h3>
        </div>
        <div>
          <button
            onClick={() => setOpened((prev) => !prev)}
            className="flex flex-row items-center gap-x-2 editing__btn text-primery text-base"
          >
            {opened ? <CrossIcon /> : <PencilIcon />}
            {opened ? "Отмена" : "Изменить"}
          </button>
        </div>
      </div>
      <div>
        {opened ? (
          <div>
            <div>{children}</div>
            <div>
              <SubmitBtn
                className={""}
                onClick={() => onOk()}
                txt="Сохранить изменения"
                disabled={false}
                loading={false}
              />
            </div>
          </div>
        ) : (
          <div>{data}</div>
        )}
      </div>
    </div>
  );
};

export default CardEditer;
