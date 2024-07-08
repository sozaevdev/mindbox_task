import { ButtonHTMLAttributes, memo, ReactNode } from 'react';
import cls from './Button.module.scss';
import { classNames } from '@/shared/lib/classNames/classNames';

export type ThemeButton = 'clear' | 'outline' | 'background';
export type ButtonSize = 's' | 'm' | 'l' | 'xl';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  children: ReactNode;
  size?: ButtonSize;
  theme?: ThemeButton;
  'data-testId'?: string;
}

export const Button = memo((props: ButtonProps) => {
  const { className, children, size = '', theme = 'outline', onClick, 'data-testId': dataTestId } = props;

  const mods = {
    [cls[theme]]: true,
    [cls[size]]: true,
  };

  return (
    <button data-testid={dataTestId} onClick={onClick} type="button" className={classNames(cls.Button, mods, [className])}>
      {children}
    </button>
  );
});
