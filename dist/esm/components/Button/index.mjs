import { styled, Text, YStack } from "tamagui";
import { jsx } from "react/jsx-runtime";
const ButtonContainer = styled(YStack, {
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
  ButtonText = styled(Text, {
    name: "ButtonText",
    color: "$color",
    // uses theme color token
    fontWeight: "bold",
    fontSize: 16,
    userSelect: "none"
  });
function Button({
  size = "small",
  outlined = !1,
  children,
  onPress
}) {
  return /* @__PURE__ */jsx(ButtonContainer, {
    size,
    outlined,
    onPress,
    pressStyle: {
      scale: 0.95
    },
    hoverStyle: {
      scale: 1.05
    },
    children: /* @__PURE__ */jsx(ButtonText, {
      children
    })
  });
}
export { Button };
//# sourceMappingURL=index.mjs.map
