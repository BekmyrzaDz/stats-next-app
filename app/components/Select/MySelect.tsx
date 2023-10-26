import { ChangeEvent, FC } from "react";
import { SelectProps } from "./MySelect.props";
import { clsx } from "clsx";

import styles from "./MySelect.module.scss";

const MySelect: FC<SelectProps> = ({
  options,
  className,
  setValue,
  value,
  ...props
}) => {
  const handleSelectChange = (event: ChangeEvent<HTMLSelectElement>) => {
    setValue(event.target.value);
    localStorage.setItem("selectValue", event.target.value);
  };

  return (
    <div className={clsx(styles.wrapper, className)}>
      <select
        className={styles.select}
        {...props}
        onChange={handleSelectChange}
        value={value}
      >
        {options &&
          options.map((option, index) => {
            return (
              <option key={index} value={option.value as string}>
                {option.key}
              </option>
            );
          })}
      </select>
    </div>
  );
};

export default MySelect;
