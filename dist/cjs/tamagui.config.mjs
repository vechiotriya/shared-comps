var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
    for (var name in all) __defProp(target, name, {
      get: all[name],
      enumerable: !0
    });
  },
  __copyProps = (to, from, except, desc) => {
    if (from && typeof from == "object" || typeof from == "function") for (let key of __getOwnPropNames(from)) !__hasOwnProp.call(to, key) && key !== except && __defProp(to, key, {
      get: () => from[key],
      enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable
    });
    return to;
  };
var __toCommonJS = mod => __copyProps(__defProp({}, "__esModule", {
  value: !0
}), mod);
var tamagui_config_exports = {};
__export(tamagui_config_exports, {
  default: () => tamagui_config_default
});
module.exports = __toCommonJS(tamagui_config_exports);
var import_tamagui = require("tamagui");
const config = (0, import_tamagui.createTamagui)({
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
//# sourceMappingURL=tamagui.config.mjs.map
