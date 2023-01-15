import React from "react";

type TxtWithLabelProps = {
  label: string;
  txt: string | null | undefined;
  required?: boolean;
};

const TxtWithLabel = ({ label, txt, required }: TxtWithLabelProps) => {
  return (
    <div>
      <div className="label text-sm text-txtGrey">
        {label}
        {required ? "*" : ""}
      </div>
      <div className="text-sm md:text-base mt-2 md:mt-1">{txt}</div>
    </div>
  );
};

export default TxtWithLabel;
