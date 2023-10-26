import { DetailedHTMLProps, SelectHTMLAttributes, SetStateAction } from "react";

export interface Option {
  key: string;
  value: string | number | boolean;
}

export interface SelectProps
  extends DetailedHTMLProps<
    SelectHTMLAttributes<HTMLSelectElement>,
    HTMLSelectElement
  > {
  name: string;
  options: Option[];
  className?: string;
  setValue: React.Dispatch<SetStateAction<string>>;
  value: string;
}
