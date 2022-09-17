import { createContext, useState } from "react";

type ThemeContextWrapperProps = {
  children: JSX.Element | JSX.Element[];
};

export type Theme = {
  theme: {
    colors: {
      dark: string;
      darkviolet: string;
      darkpurple: string;
      strongPurple: string;
      purple: string;
      lightPurple: string;
      megaLightPurple: string;
      ultraLightPurple: string;
    };
    titleSize: {
      xxl: string;
      xl: string;
      l: string;
      m: string;
      s: string;
      xs: string;
    };
    textSize: {
      xxl: string;
      xl: string;
      l: string;
      m: string;
      s: string;
      xs: string;
    };
  };
  setTheme: (theme: "dark" | "light") => void;
};

const themes = {
  dark: {
    colors: {
      dark: "#10002B",
      darkviolet: "#240046",
      darkpurple: "#3C096C",
      strongPurple: "#5A189A",
      purple: "#7B2CBF",
      lightPurple: "#9D4EDD",
      megaLightPurple: "#C77DFF",
      ultraLightPurple: "#E0AAFF",
    },
    titleSize: {
      xxl: "84px",
      xl: "72px",
      l: "60px",
      m: "48px",
      s: "36px",
      xs: "30px",
    },
    textSize: {
      xxl: "24px",
      xl: "18px",
      l: "16px",
      m: "14px",
      s: "12px",
      xs: "10px",
    },
  },
  light: {
    colors: {
      dark: "#10002B",
      darkviolet: "#240046",
      darkpurple: "#3C096C",
      strongPurple: "#5A189A",
      purple: "#7B2CBF",
      lightPurple: "#9D4EDD",
      megaLightPurple: "#C77DFF",
      ultraLightPurple: "#E0AAFF",
    },
    titleSize: {
      xxl: "84px",
      xl: "72px",
      l: "60px",
      m: "48px",
      s: "36px",
      xs: "30px",
    },
    textSize: {
      xxl: "24px",
      xl: "18px",
      l: "16px",
      m: "14px",
      s: "12px",
      xs: "10px",
    },
  },
};

export const ThemeContext = createContext<Theme | null>(null);

const useTheme = () => {
  const [theme, setTheme] = useState<"dark" | "light">("dark");

  return { theme: themes[theme], setTheme };
};

export const ThemeContextWrapper = ({ children }: ThemeContextWrapperProps) => {
  const theme = useTheme();

  return (
    <ThemeContext.Provider value={theme}>{children}</ThemeContext.Provider>
  );
};
