import { createContext, useState, useMemo } from "react";
import { createTheme } from "@mui/material/styles";

// color design tokens
export const tokens = (mode) => ({
  ...(mode === 'dark'
    ? {
      grey: {
        100: "#091113",
        200: "#122227",
        300: "#1b343a",
        400: "#24454e",
        500: "#2d5661",
        600: "#D9D9D9",
        700: "#819aa0",
        800: "#abbbc0",
        900: "#d5dddf",
      },
      primary: {
        900: "#122023",
        800: "#233f45",
        700: "#355f68",
        600: "#467e8a",
        500: "#589ead",
        400: "#79b1bd",
        300: "#9bc5ce",
        200: "#bcd8de",
        100: "#deecef",
      },
      redAccent: {
        900: "#20000b",
        800: "#400015",
        700: "#610020",
        600: "#81002a",
        500: "#a10035",
        400: "#b4335d",
        300: "#c76686",
        200: "#d999ae",
        100: "#ecccd7",
      },
      greenAccent: {
        900: "#17000c",
        800: "#2d0018",
        700: "#440025",
        600: "#5a0031",
        500: "#71003d",
        400: "#8d3364",
        300: "#aa668b",
        200: "#c699b1",
        100: "#e3ccd8",
      },
      blueAccent: {
        900: "#332713",
        800: "#664e26",
        700: "#98743a",
        600: "#cb9b4d",
        500: "#fec260",
        400: "#fece80",
        300: "#fedaa0",
        200: "#ffe7bf",
        100: "#fff3df",
      },
    } : {
      grey: {
        100: "#ffffff",
        200: "#abbbc0",
        300: "#819aa0",
        400: "#577881",
        500: "#2d5661",
        600: "#24454e",
        700: "#1b343a",
        800: "#122227",
        900: "#091113"
      },
      primary: {
        100: "#deecef",
        200: "#bcd8de",
        300: "#9bc5ce",
        400: "#79b1bd",
        500: "#589ead",
        600: "#467e8a",
        700: "#355f68",
        800: "#233f45",
        900: "#122023"
      },
      redAccent: {
        100: "#ecccd7",
        200: "#d999ae",
        300: "#c76686",
        400: "#b4335d",
        500: "#a10035",
        600: "#81002a",
        700: "#610020",
        800: "#400015",
        900: "#20000b"
      },
      greenAccent: {
        100: "#e3ccd8",
        200: "#c699b1",
        300: "#aa668b",
        400: "#8d3364",
        500: "#71003d",
        600: "#5a0031",
        700: "#440025",
        800: "#2d0018",
        900: "#17000c"
      },
      blueAccent: {
        100: "#fff3df",
        200: "#ffe7bf",
        300: "#fedaa0",
        400: "#fece80",
        500: "#fec260",
        600: "#cb9b4d",
        700: "#98743a",
        800: "#664e26",
        900: "#332713"
      },
    })
})


// mui theme settings
export const themeSettings = (mode) => {
  const colors = tokens(mode);

  return {
    palette: {
      mode: mode,
      ...(mode === 'dark'
        ? {
          primary: {
            main: colors.primary[500],
          },
          secondary: {
            main: colors.greenAccent[500]
          },
          neutral: {
            dark: colors.grey[700],
            main: colors.grey[500],
            light: colors.grey[100],
          },
          background: {
            default: colors.primary[600],
          }
        } :
        {
          primary: {
            main: colors.primary[100],
          },
          secondary: {
            main: colors.greenAccent[300]
          },
          neutral: {
            dark: colors.grey[100],
            main: colors.grey[100],
            light: colors.grey[400],
          },
          background: {
            default: colors.primary[100],
          }
        }
      ),
    },
    typography: {
      fontFamily: ["Source Sans 3", "sans-serif"].join(","),
      fontSize: 12,
      h1: {
        fontFamily: ["Source Sans 3", "sans-serif"].join(","),
        fontSize: 40,
      },
      h2: {
        fontFamily: ["Source Sans 3", "sans-serif"].join(","),
        fontSize: 32,
      },
      h3: {
        fontFamily: ["Source Sans 3", "sans-serif"].join(","),
        fontSize: 24,
      },
      h4: {
        fontFamily: ["Source Sans 3", "sans-serif"].join(","),
        fontSize: 20,
      },
      h5: {
        fontFamily: ["Source Sans 3", "sans-serif"].join(","),
        fontSize: 16,
      },
      h6: {
        fontFamily: ["Source Sans 3", "sans-serif"].join(","),
        fontSize: 14,
      }
    }
  }
}

// context for color mode

export const ColorModeContext = createContext({ toggleColorMode: () => { } });

export const useMode = () => {
  const [mode, setMode] = useState("dark");
  const colorMode = useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode) => (prevMode === "light" ? "dark" : "light"));
      }
    }),
    []
  );
  const theme = useMemo(() => createTheme(themeSettings(mode)), [mode]);
  return [theme, colorMode];
}

