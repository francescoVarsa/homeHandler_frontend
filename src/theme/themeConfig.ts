import {
  createTheme,
  responsiveFontSizes,
  ThemeOptions,
} from "@mui/material/styles";

declare module "@mui/material/styles" {
  interface Theme {
    status: {
      danger: React.CSSProperties["color"];
    };
  }

  interface ThemeOptions {
    status: {
      danger: React.CSSProperties["color"];
    };
  }

  interface Palette {
    darkBlue: Palette["primary"];
    darkViolet: Palette["primary"];
    darkPurple: Palette["primary"];
    strongPurple: Palette["primary"];
    purple: Palette["primary"];
    lightPurple: Palette["primary"];
    megaLightPurple: Palette["primary"];
    ultraLightPurple: Palette["primary"];
    white: Palette["primary"];
  }
  interface PaletteOptions {
    darkBlue: PaletteOptions["primary"];
    darkViolet: PaletteOptions["primary"];
    darkPurple: PaletteOptions["primary"];
    strongPurple: PaletteOptions["primary"];
    purple: PaletteOptions["primary"];
    lightPurple: PaletteOptions["primary"];
    megaLightPurple: PaletteOptions["primary"];
    ultraLightPurple: PaletteOptions["primary"];
    white: PaletteOptions["primary"];
  }
}

declare module "@mui/material/Button" {
  interface ButtonPropsColorOverrides {
    darkBlue: true;
    darkViolet: true;
    darkPurple: true;
    strongPurple: true;
    purple: true;
    lightPurple: true;
    megalightPurple: true;
    ultraLightPurple: true;
    white: true;
  }
}

declare module "@mui/material/IconButton" {
  interface IconButtonPropsColorOverrides {
    darkBlue: true;
    darkViolet: true;
    darkPurple: true;
    strongPurple: true;
    purple: true;
    lightPurple: true;
    megalightPurple: true;
    ultraLightPurple: true;
    white: true;
  }
}
declare module "@mui/material/FormControl" {
  interface FormControlPropsColorOverrides {
    darkBlue: true;
    darkViolet: true;
    darkPurple: true;
    strongPurple: true;
    purple: true;
    lightPurple: true;
    megalightPurple: true;
    ultraLightPurple: true;
    white: true;
  }
}

declare module "@mui/material/CircularProgress" {
  interface CircularProgressPropsColorOverrides {
    darkBlue: true;
    darkViolet: true;
    darkPurple: true;
    strongPurple: true;
    purple: true;
    lightPurple: true;
    megalightPurple: true;
    ultraLightPurple: true;
    white: true;
  }
}
declare module "@mui/material/TextField" {
  interface TextFieldPropsColorOverrides {
    darkBlue: true;
    darkViolet: true;
    darkPurple: true;
    strongPurple: true;
    purple: true;
    lightPurple: true;
    megalightPurple: true;
    ultraLightPurple: true;
    white: true;
  }
}

declare module "@mui/material/Paper" {
  interface PaperPropsVariantOverrides {
    neumorphicDarkBlue: true;
    neumorphicDarkViolet: true;
    gradientLight: true;
    newItem: true;
  }
}

const configTheme: ThemeOptions = {
  status: {
    danger: "#e53e3e",
  },
  palette: {
    white: {
      main: "#FFF",
    },
    darkBlue: {
      main: "#10002B",
    },
    darkViolet: {
      main: "#240046",
    },
    darkPurple: {
      main: "#3C096C",
    },
    strongPurple: {
      main: "#5A189A",
    },
    purple: {
      main: "#7B2CBF",
    },
    lightPurple: {
      main: "#9D4EDD",
    },
    megaLightPurple: {
      main: "#C77DFF",
    },
    ultraLightPurple: {
      main: "#E0AAFF",
    },
  },

  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 900,
      lg: 1200,
      xl: 1536,
    },
  },

  typography: {
    fontFamily: ["Ubuntu"].join(),
  },

  components: {
    MuiCard: {
      variants: [
        {
          props: { variant: "neumorphicDarkBlue" },
          style: {
            borderRadius: "15px",
            background: "#10002B",
            boxShadow: "20px 20px 60px #0e0025, -20px -20px 60px #120031",
            color: "#9D4EDD",
          },
        },
        {
          props: { variant: "neumorphicDarkViolet" },
          style: {
            borderRadius: "15px",
            background: "#240046",
            boxShadow: "20px 20px 60px #1f003c, -20px -20px 60px #290050",
            color: "#9D4EDD",
          },
        },
        {
          props: { variant: "gradientLight" },
          style: {
            borderRadius: "15px",
            background:
              "linear-gradient(199deg, rgba(90,24,154,1) 11%, rgba(123,44,191,1) 54%, rgba(157,78,221,1) 100%)",
            color: "white",
          },
        },
        {
          props: { variant: "newItem" },
          style: {
            borderRadius: "15px",
            backgroundColor: "#10002B",
            border: "1px solid #9D4EDD",
            color: "#9D4EDD",
            transition: "0.5s",

            "&:hover": {
              boxShadow:
                "0px 0px 8px 5px #9D4EDD, inset 0 0 15px -4px rgb(255 255 255 / 20%)",
            },
          },
        },
      ],
    },
  },
};

let theme = createTheme(configTheme);
theme = responsiveFontSizes(theme);

export default theme;
