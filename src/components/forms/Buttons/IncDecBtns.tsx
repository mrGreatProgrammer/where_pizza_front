import React from "react";

const IncDecBtns = ({ count }: any) => {



  return (
    <div className="bg-lightPrimery w-[92px] h-8 grid grid-cols-3 rounded-md">
      <button className="text-primery  rounded-l-md">-</button>
      {/* <input
        className="text-center w-full bg-lightPrimery text-primery"
        type="number"
        value={count}
      /> */}
      <div className="text-center w-full bg-lightPrimery text-primery">{count}</div>
      <button className="text-primery  bg-lightPrimery rounded-r-md">+</button>
    </div>
  );
};

export default IncDecBtns;
