"use strict";
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/index.ts
var index_exports = {};
__export(index_exports, {
  Button: () => Button,
  tamaguiConfig: () => tamaguiConfig
});
module.exports = __toCommonJS(index_exports);

// src/components/Button/index.tsx
var import_tamagui = require("tamagui");
var import_jsx_runtime = require("react/jsx-runtime");
var ButtonContainer = (0, import_tamagui.styled)(import_tamagui.YStack, {
  name: "ButtonContainer",
  backgroundColor: "$background",
  padding: "$md",
  borderRadius: "$sm",
  alignItems: "center",
  justifyContent: "center",
  cursor: "pointer",
  // Variants for size
  variants: {
    size: {
      small: { padding: 8 },
      large: { padding: 20 }
    },
    outlined: {
      true: {
        borderWidth: 1,
        borderColor: "$borderColor",
        backgroundColor: "transparent"
      }
    }
  },
  // Default variants
  defaultVariants: {
    size: "small",
    outlined: false
  }
});
var ButtonText = (0, import_tamagui.styled)(import_tamagui.Text, {
  name: "ButtonText",
  color: "$color",
  // uses theme color token
  fontWeight: "bold",
  fontSize: 16,
  userSelect: "none"
});
function Button({ size = "small", outlined = false, children, onPress }) {
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
    ButtonContainer,
    {
      size,
      outlined,
      onPress,
      pressStyle: { scale: 0.95 },
      hoverStyle: { scale: 1.05 },
      children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ButtonText, { children })
    }
  );
}

// src/tamagui.config.ts
var import_tamagui2 = require("tamagui");
var tamaguiConfig = (0, import_tamagui2.createTamagui)({
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
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  Button,
  tamaguiConfig
});
//# sourceMappingURL=index.js.map