interface IEnrolData {
  id: number;
  title: string;
  description?: string;
  secondary: string;
  tertiary: string;
  button: string;
  Icon?: React.ElementType;
  image?: string;
  extras?: string;
}

export default IEnrolData;
