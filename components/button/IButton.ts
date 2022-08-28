interface IButton {
  label?: string;
  icon?: JSX.Element;
  extras?: string;
  varient?: string;
  onClick?: (...params: any) => any;
}

export default IButton;
