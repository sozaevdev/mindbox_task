import React, { memo } from 'react';

import cls from './Checkbox.module.scss';
import { classNames } from '@/shared/lib/classNames/classNames';

interface CheckboxProps {
  className?: string;
  checked: boolean;
  onChange: (checked: boolean) => void;
  label?: string;
  [key: string]: any;
}

export const Checkbox = memo(function Checkbox(props: CheckboxProps) {
  const { className, checked, onChange, label, ...otherProps } = props;

  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange?.(e.target.checked);
  };

  return (
    <label className={classNames(cls.checkboxWrapper, {}, [className])}>
      <input type="checkbox" checked={checked} onChange={onChangeHandler} className={cls.checkbox} {...otherProps} />
      <span className={cls.checkboxMark}></span>
      {label && <span className={cls.label}>{label}</span>}
    </label>
  );
});
