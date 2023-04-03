import React from "react";
import { CrossIcon, PencilIcon } from "../../../imgs/icons";
import SubmitBtn from "../../forms/Buttons/SubmitBtn";
import { setEditerOpenedAC } from "../../../store/userSlice/userSlice";
import { useAppDispatch, useAppSelector } from "../../../store/store";

type cardEditerProps = {
  title: string;
  onOk: any;
  children: JSX.Element;
  data?: JSX.Element;
  isLoading: boolean;
};

const CardEditer = ({
  title,
  onOk,
  children,
  data,
  isLoading,
}: cardEditerProps) => {
  // const [opened, setOpened] = React.useState(false);
  const {editerOpened} = useAppSelector(state=>state.userSlice);
  const dispatch = useAppDispatch();

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
            onClick={() => dispatch(setEditerOpenedAC(!editerOpened))}
            className="flex flex-row items-center gap-x-2 editing__btn text-primery text-base"
          >
            {editerOpened ? <CrossIcon /> : <PencilIcon />}
            {editerOpened ? "Отмена" : "Изменить"}
          </button>
        </div>
      </div>
      <div>
        {editerOpened ? (
          <div>
            <div>{children}</div>
            <div>
              <SubmitBtn
                className={""}
                onClick={() => {
                  onOk();
                  // setOpened(false);
                }}
                txt="Сохранить изменения"
                disabled={isLoading}
                loading={isLoading}
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
