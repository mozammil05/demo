import { MouseEvent, ReactNode } from "react";

export interface CommonTab {
  defaultKey?: string;
  handleOderTabs?: any;
  type?: any;
  tabs: {
    id: number;
    eventKey: string;
    title: string | ReactNode;
    content: ReactNode;
  }[];
}

export interface CommonTables {
  children?: ReactNode;
  fields: { label: string | ReactNode; align?: string }[];
  setAscDscIndex?: any;
  ascDscIndex?: any;
  headerTransparent?: boolean;
  toggleData?:any
}

type variantType =
  | "bordered"
  | "small"
  | "xtra_small"
  | "danger"
  | "transparent"
  | "green"

export interface CommonButton {
  className?: string;
  icon?: ReactNode;
  // type?: "button" | "submit" | "reset" | "text";
  type?: any;
  heading?: string | ReactNode;
  fluid?: boolean;
  variant?: `${variantType} ${variantType}` | variantType;
  onClick?: (e: MouseEvent<HTMLButtonElement>) => any;
  rightIcon?: ReactNode;
  disabled?: boolean;
}

export interface CommonHeadings {
  className?: string;
  headingText?: string | ReactNode;
}

export interface TransactionData {
  show?: boolean;
  handleFunction?: any;
  handleClose?: () => void;
  modalData?: any;
}
export interface CommonInputs {
  label?: string | ReactNode;
  leftIcon?: ReactNode;
  type?: string;
  error?: string;
  rightIcon?: ReactNode;
  placeholder?: string;
  className?: string;
  disabled?: boolean;
  value?: number | string;
  onChange?: (e: any) => void;
  maxLength?: number;
  onKeyDown?: any;
  isEmail?:boolean
}

export interface CommonSelected {
  options: {
    id: number;
    isSelected: boolean;
    symbol?: string;
    label: string | ReactNode;
  }[];
  className?: string;
  id?: string;
  defaultValue?: any;
  dropIcon?: boolean;
  selectedField?: string;
  label?: string | ReactNode;
  lastItem?: string | ReactNode;
  SelectTokens?: any;
  selectedOption?: any;
}

export interface Errors {
  msg?: string | ReactNode;
  className?: string;
}

export interface Headers {
  active?: boolean;
  handleSidebar: () => void;
}
export interface CommonModals {
  show?: boolean;
  handleClose?: () => void;
  heading?: ReactNode;
  className?: string;
  variant?: "small" | "large";
  children?: ReactNode;
  backdropClassName?: string;
  backdrop?: any;
}
export interface GetWallets {
  setActive: (id: number) => void;
}

export interface ConnectWallets {
  show?: boolean;
  handleClose: () => void;
}
export interface LiquidityModals {
  show?: boolean;
  handleClose?: () => void;
  defaultActiveKey?: string;
  poolData?: Object;
  getFullPoolDetailsFunction?: any;
}

export interface shimmers {
  className?: string;
  fluid?: boolean;
  width?: number;
  height?: number;
  verticlyFluid?: boolean;
}

export interface Sidebars {
  lockSidebar?: boolean;
  handleLockSidebar?: () => void;
  handleSidebar: () => void;
  active?: boolean;
}

export interface MetamaskTab {
  rejected?: boolean;
  setRejected?: any;
  handleConnect?: any;
}

export interface LoaderComponent {
  className?: string;
}

export interface comingSoon {
  className?: string;
  middle?: boolean;
  icon?: any;
}
export interface customPeriodModal {
  show: boolean;
  handleClose: () => void;
  check?: any;
}
