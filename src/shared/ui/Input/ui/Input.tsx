import React, { InputHTMLAttributes, memo } from 'react';
import cls from './Input.module.scss';
import { classNames, Mods } from '@/shared/lib/classNames/classNames';

type HTMLInputProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'value' | 'onChange' | 'readonly'>;

interface InputProps extends HTMLInputProps {
  className?: string;
  value?: string | number;
  onChange?: (value: string) => void;
  readonly?: boolean;
  onKeyDown?: (e: React.KeyboardEvent<HTMLInputElement>) => void;
}

export const Input = memo(function Input(props: InputProps) {
  const { className, value, onChange, type = 'text', placeholder, readonly, onKeyDown, ...otherProps } = props;

  const onChangehandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange?.(e.target.value);
  };

  const mods: Mods = {
    [cls.readonly]: readonly,
    [cls.placeholder]: placeholder,
  };

  return (
    <div className={classNames(cls.InputWrapper, mods, [className])}>
      <input placeholder={placeholder} readOnly={readonly} type={type} value={value} onChange={onChangehandler} className={cls.input} onKeyDown={onKeyDown} {...otherProps} />
    </div>
  );
});
