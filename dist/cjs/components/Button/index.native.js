"use strict";

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
var Button_exports = {};
__export(Button_exports, {
  Button: () => Button
});
module.exports = __toCommonJS(Button_exports);
var import_jsx_runtime = require("react/jsx-runtime"),
  import_react = require("react"),
  import_tamagui = require("tamagui"),
  ButtonContainer = (0, import_tamagui.styled)(import_tamagui.YStack, {
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
        small: {
          padding: 8
        },
        large: {
          padding: 20
        }
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
      outlined: !1
    }
  }),
  ButtonText = (0, import_tamagui.styled)(import_tamagui.Text, {
    name: "ButtonText",
    color: "$color",
    // uses theme color token
    fontWeight: "bold",
    fontSize: 16,
    userSelect: "none"
  });
function Button(param) {
  var {
    size = "small",
    outlined = !1,
    children,
    onPress
  } = param;
  return /* @__PURE__ */(0, import_jsx_runtime.jsx)(ButtonContainer, {
    size,
    outlined,
    onPress,
    pressStyle: {
      scale: 0.95
    },
    hoverStyle: {
      scale: 1.05
    },
    children: /* @__PURE__ */(0, import_jsx_runtime.jsx)(ButtonText, {
      children
    })
  });
}
//# sourceMappingURL=index.native.js.map
