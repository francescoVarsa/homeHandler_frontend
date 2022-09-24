import { Button as MuiButton, ButtonPropsColorOverrides } from "@mui/material";
import { SyntheticEvent } from "react";

type ButtonProps = {
  size?: "small" | "medium" | "large";
  text: string;
  variant: "outlined" | "text" | "contained";
  color?: keyof ButtonPropsColorOverrides;
  onClick?: (e: SyntheticEvent) => void;
  type: "button" | "reset" | "submit";
};

export default function Button({
  text,
  type,
  size,
  variant,
  color = "lightPurple",
  onClick,
}: ButtonProps) {
  return (
    <MuiButton
      type={type}
      onClick={onClick}
      size={size}
      variant={variant}
      color={color}
    >
      {text}
    </MuiButton>
  );
}
