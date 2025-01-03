import { colorsTuple, createTheme, MantineColorsTuple } from "@mantine/core";

export const palette = {
  primary: "#2573F1",
  secondary: "#3DC5FF",
  cream: "#F3F9FF",
  positive: "#44546F",
  negative: "#CF3A4E",
  white: "#FFFFFF",
  disable: "#F5F5F5",
  "text-black": "#091E42",
  "text-gray": "#44546F",
  "text-white": "#FFFFFF",
  "stroke-gray": "#E1E4E8",
};

export const iconSize = {
  xs: 16,
  sm: 20,
  md: 24,
  lg: 32,
  xl: 40,
};

// https://mantine.dev/theming/colors/#add-custom-colors-types
export type AppColors =
  | "primary"
  | "secondary"
  | "cream"
  | "positive"
  | "negative"
  | "white"
  | "disable"
  | "text-black"
  | "text-gray"
  | "text-white";

declare module "@mantine/core" {
  export interface MantineThemeColorsOverride {
    colors: Record<AppColors, MantineColorsTuple>;
  }
}

export const theme = createTheme({
  /** Put your mantine theme override here */
  colors: {
    ...Object.fromEntries(
      Object.entries(palette).map(([key, value]) => [key, colorsTuple(value)])
    ),
  },
  primaryColor: "primary",
  fontFamily:
    "Roboto, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Ubuntu, Cantarell, sans-serif",

  components: {
    TextInput: {
      defaultProps: {
        radius: 8,
        size: "md",
      },
      classNames: {
        label: "text-sm font-sans font-semibold mb-sm",
        input: "p-lg",
      },
    },
    PasswordInput: {
      defaultProps: {
        radius: 8,
        size: "md",
      },
      classNames: {
        label: "text-sm font-sans font-semibold mb-sm",
        input: "p-lg",
      },
    },
    Button: {
      defaultProps: {
        radius: 8,
        size: "md",
      },
      classNames: {
        root: "font-sans text-md font-semibold",
      },
    },
  },
});
