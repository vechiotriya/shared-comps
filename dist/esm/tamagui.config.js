import { createTamagui } from "tamagui";
const config = createTamagui({
  tokens: {
    color: {
      white: "#fff",
      black: "#000",
      gray: "#ddd",
      background: "#fff",
      border: "#ddd"
    },
    size: {
      1: 4,
      2: 8,
      3: 12,
      4: 16,
      5: 20,
      true: 16
    },
    space: {
      1: 4,
      2: 8,
      3: 12,
      4: 16,
      5: 20,
      true: 16
    },
    radius: {
      0: 0,
      1: 2,
      2: 4,
      3: 8,
      4: 12
    }
  },
  themes: {
    light: {
      background: "#fff",
      borderColor: "#ddd",
      color: "#000"
    },
    dark: {
      background: "#000",
      borderColor: "#555",
      color: "#fff"
    }
  },
  defaultTheme: "light"
});
var tamagui_config_default = config;
export {
  tamagui_config_default as default
};
//# sourceMappingURL=tamagui.config.js.map
