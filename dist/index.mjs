// src/components/Button/index.tsx
import { styled, Text, YStack } from "tamagui";
import { jsx } from "react/jsx-runtime";
var ButtonContainer = styled(YStack, {
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
var ButtonText = styled(Text, {
  name: "ButtonText",
  color: "$color",
  // uses theme color token
  fontWeight: "bold",
  fontSize: 16,
  userSelect: "none"
});
function Button({ size = "small", outlined = false, children, onPress }) {
  return /* @__PURE__ */ jsx(
    ButtonContainer,
    {
      size,
      outlined,
      onPress,
      pressStyle: { scale: 0.95 },
      hoverStyle: { scale: 1.05 },
      children: /* @__PURE__ */ jsx(ButtonText, { children })
    }
  );
}

// src/tamagui.config.ts
import { createTamagui } from "tamagui";
var tamaguiConfig = createTamagui({
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
export {
  Button,
  tamaguiConfig
};
//# sourceMappingURL=index.mjs.map