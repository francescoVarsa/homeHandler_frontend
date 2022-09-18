import { Button as MuiButton, ButtonPropsColorOverrides } from "@mui/material";
import { SyntheticEvent } from "react";

type ButtonProps = {
  size?: "small" | "medium" | "large";
  text: string;
  type: "outlined" | "text" | "contained";
  color?: keyof ButtonPropsColorOverrides;
  onClick: (e: SyntheticEvent) => void;
};

export default function Button({
  text,
  type,
  size,
  color = "lightPurple",
  onClick,
}: ButtonProps) {
  return (
    <MuiButton onClick={onClick} size={size} variant={type} color={color}>
      {text}
    </MuiButton>
  );
}
