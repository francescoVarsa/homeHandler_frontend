import { createTheme, responsiveFontSizes, ThemeOptions } from '@mui/material/styles';

declare module '@mui/material/styles' {
    interface Theme {
        status: {
            danger: React.CSSProperties['color'];
            };
        }

    interface ThemeOptions {
      status: {
        danger: React.CSSProperties['color'];
      };
    }

    interface Palette {
        darkBlue: Palette['primary'];
        darkViolet: Palette['primary'];
        darkPurple:Palette['primary'];
        strongPurple:Palette['primary'];
        purple:Palette['primary'];
        lightPurple:Palette['primary'];
        megaLightPurple:Palette['primary'];
        ultraLightPurple:Palette['primary'];
        white: Palette['primary']
      }
      interface PaletteOptions {
        darkBlue: PaletteOptions['primary'];
        darkViolet: PaletteOptions['primary'];
        darkPurple:PaletteOptions['primary'];
        strongPurple:PaletteOptions['primary'];
        purple:PaletteOptions['primary'];
        lightPurple:PaletteOptions['primary'];
        megaLightPurple:PaletteOptions['primary'];
        ultraLightPurple:PaletteOptions['primary'];
        white:PaletteOptions['primary'];
      }
  }

  declare module '@mui/material/Button' {
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

  const configTheme: ThemeOptions = {
    status: {
      danger: '#e53e3e',
    },
    palette: {
      white: {
          main: "#FFF"
      },
      darkBlue: {
          main: "#10002B",
      },
      darkViolet: {
          main: "#240046"
      },
      darkPurple: {
          main:  "#3C096C"
      },
      strongPurple: {
          main: "#5A189A"
      },
      purple: {
          main: "#7B2CBF"
      },
      lightPurple: {
          main: "#9D4EDD"
      },
      megaLightPurple: {
          main: "#C77DFF"
      },
      ultraLightPurple: {
          main: "#E0AAFF"
      }
    },
  
    breakpoints: {
      values: {
        xs: 0,
        sm: 600,
        md: 900,
        lg: 1200,
        xl: 1536,
      }
    },

    typography: {
      fontFamily: 
      [
        "Ubuntu",
      ].join()
    },
  }
  
let theme = createTheme(configTheme);
theme = responsiveFontSizes(theme)

export default theme







