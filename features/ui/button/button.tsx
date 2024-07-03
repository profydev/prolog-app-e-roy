import * as React from "react";

import { ButtonHTMLAttributes } from "react";
import classNames from "classnames";
import styles from "./button.module.scss";

export enum ButtonColor {
  primary = "primary",
  secondary = "secondary",
  gray = "gray",
  empty = "empty",
  emptyGray = "emptyGray",
  error = "error",
  emptyError = "emptyError",
}

export enum ButtonSize {
  sm = "sm",
  md = "md",
  lg = "lg",
  xl = "xl",
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  color?: ButtonColor;
  size?: ButtonSize;
  disabled?: boolean;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ color, size, disabled = false, ...props }, ref) => {
    return (
      <button
        {...props}
        className={classNames(
          styles.button,
          styles[color!],
          styles[size!],
          props.className,
        )}
        ref={ref}
        disabled={disabled}
      >
        {props.children}
      </button>
    );
  },
);

Button.displayName = "Button";
