export interface IRadioBtnProps {
  id: number | string;
  title: string;
  // onclick: any;
}

type inpType = "text" | "tel" | "mail" | "password";

export interface IInputProps {
  elId: string;
  inpName: string;
  inpType: inpType;
  label?: string;
  defaultValue?: string;
  formController: any;
  errMsg?: any;
  className?: any;
}

export interface ISubmitBtnProps {
  txt: string;
  onClick: any;
  disabled?: boolean;
  loading?: boolean;
  className: any;
}


export interface ILoginForm {
  tel: string;  
  password: string;
}

export interface IRegisterForm {
  fullName: string;
  tel: string;
  password: string;
}

export interface IUserData {
  id: number;
  fullName: string;
  tel: string;
  role: string;
  email: string;
  birthDate: any;
}
