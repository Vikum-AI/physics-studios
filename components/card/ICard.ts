interface ICard {
  title?: string;
  description?: string;
  secondary?: string;
  Icon?: React.ElementType;
  iconColor?: string;
  iconSize?: number;
  image?: string;
  extras?: string;
  button?: string;
  tertiary?: string;
  onClick?: (...params: any) => any;
}

export default ICard;
