// src/components/Button/index.tsx
import { styled } from "@tamagui/core";
import { Pressable, Text } from "react-native-web";
import { jsx } from "react/jsx-runtime";
var StyledButton = styled(Pressable, {
  name: "Button",
  cursor: "pointer",
  userSelect: "none",
  alignItems: "center",
  justifyContent: "center",
  borderRadius: "$2",
  paddingHorizontal: "$4",
  paddingVertical: "$3",
  backgroundColor: "$primary",
  pressStyle: {
    backgroundColor: "$primaryActive"
  },
  hoverStyle: {
    backgroundColor: "$primaryHover"
  },
  focusStyle: {
    outlineWidth: 2,
    outlineColor: "$primary",
    outlineStyle: "solid"
  },
  variants: {
    variant: {
      primary: {
        backgroundColor: "$primary",
        color: "$background",
        hoverStyle: {
          backgroundColor: "$primaryHover"
        },
        pressStyle: {
          backgroundColor: "$primaryActive"
        }
      },
      secondary: {
        backgroundColor: "$secondary",
        color: "$background",
        hoverStyle: {
          backgroundColor: "$secondaryHover"
        },
        pressStyle: {
          backgroundColor: "$secondaryActive"
        }
      },
      success: {
        backgroundColor: "$success",
        color: "$background",
        hoverStyle: {
          backgroundColor: "$successHover"
        }
      },
      warning: {
        backgroundColor: "$warning",
        color: "$background",
        hoverStyle: {
          backgroundColor: "$warningHover"
        }
      },
      danger: {
        backgroundColor: "$danger",
        color: "$background",
        hoverStyle: {
          backgroundColor: "$dangerHover"
        }
      },
      outline: {
        backgroundColor: "transparent",
        color: "$primary",
        borderWidth: 1,
        borderColor: "$primary",
        hoverStyle: {
          backgroundColor: "$card"
        }
      },
      ghost: {
        backgroundColor: "transparent",
        color: "$primary",
        hoverStyle: {
          backgroundColor: "$card"
        }
      }
    },
    size: {
      small: {
        paddingHorizontal: "$3",
        paddingVertical: "$2",
        fontSize: 14
      },
      medium: {
        paddingHorizontal: "$4",
        paddingVertical: "$3",
        fontSize: 16
      },
      large: {
        paddingHorizontal: "$6",
        paddingVertical: "$4",
        fontSize: 18
      }
    },
    disabled: {
      true: {
        backgroundColor: "$disabled",
        color: "$textSecondary",
        cursor: "not-allowed",
        pressStyle: {
          backgroundColor: "$disabled"
        },
        hoverStyle: {
          backgroundColor: "$disabled"
        }
      }
    },
    fullWidth: {
      true: {
        width: "100%"
      }
    }
  },
  defaultVariants: {
    variant: "outline"
  }
});
var Button = ({ children, onPress, onClick, ...props }) => {
  return /* @__PURE__ */ jsx(
    StyledButton,
    {
      ...props,
      role: "button",
      onPress,
      onClick,
      accessibilityRole: "button",
      children: typeof children === "string" ? /* @__PURE__ */ jsx(Text, { children }) : children
    }
  );
};

// src/components/Text/index.tsx
import { styled as styled2 } from "@tamagui/core";
import { Text as RNText } from "react-native";
var Text2 = styled2(RNText, {
  name: "Text",
  // @ts-ignore - Tamagui core types limitation with RN components
  color: "$text",
  fontSize: 16,
  variants: {
    variant: {
      body: {
        fontSize: 16,
        color: "$text"
      },
      heading: {
        fontSize: 24,
        fontWeight: "700",
        color: "$text"
      },
      subheading: {
        fontSize: 20,
        fontWeight: "600",
        color: "$text"
      },
      caption: {
        fontSize: 14,
        color: "$textSecondary"
      },
      label: {
        fontSize: 14,
        fontWeight: "600",
        color: "$text"
      }
    },
    size: {
      xs: {
        fontSize: 12
      },
      sm: {
        fontSize: 14
      },
      md: {
        fontSize: 16
      },
      lg: {
        fontSize: 18
      },
      xl: {
        fontSize: 20
      },
      "2xl": {
        fontSize: 24
      },
      "3xl": {
        fontSize: 30
      }
    },
    weight: {
      normal: {
        fontWeight: "400"
      },
      medium: {
        fontWeight: "500"
      },
      semibold: {
        fontWeight: "600"
      },
      bold: {
        fontWeight: "700"
      }
    },
    color: {
      primary: {
        color: "$primary"
      },
      secondary: {
        color: "$textSecondary"
      },
      success: {
        color: "$success"
      },
      warning: {
        color: "$warning"
      },
      danger: {
        color: "$danger"
      }
    },
    align: {
      left: {
        textAlign: "left"
      },
      center: {
        textAlign: "center"
      },
      right: {
        textAlign: "right"
      }
    }
  },
  defaultVariants: {
    variant: "body"
  }
});

// src/tamagui.config.ts
import { createTamagui, createTokens, createFont } from "@tamagui/core";
var bodyFont = createFont({
  family: "System",
  size: {
    1: 12,
    2: 14,
    3: 16,
    4: 18,
    5: 20,
    6: 24,
    7: 30,
    8: 36,
    9: 48,
    10: 64
  },
  lineHeight: {
    1: 16,
    2: 20,
    3: 24,
    4: 28,
    5: 32,
    6: 36,
    7: 42,
    8: 48,
    9: 60,
    10: 72
  },
  weight: {
    4: "400",
    5: "500",
    6: "600",
    7: "700"
  },
  letterSpacing: {
    4: 0,
    5: 0,
    6: 0,
    7: 0
  }
});
var tokens = createTokens({
  size: {
    0: 0,
    1: 4,
    2: 8,
    3: 12,
    4: 16,
    5: 20,
    6: 24,
    8: 32,
    10: 40,
    12: 48,
    14: 56,
    16: 64,
    true: 16
  },
  space: {
    0: 0,
    1: 4,
    2: 8,
    3: 12,
    4: 16,
    5: 20,
    6: 24,
    8: 32,
    10: 40,
    12: 48,
    true: 16
  },
  radius: {
    0: 0,
    1: 4,
    2: 8,
    3: 12,
    4: 16,
    true: 8
  },
  zIndex: {
    0: 0,
    1: 100,
    2: 200,
    3: 300,
    4: 400,
    5: 500
  },
  color: {
    primary: "#007AFF",
    primaryHover: "#0051D5",
    primaryActive: "#0040A8",
    secondary: "#5856D6",
    secondaryHover: "#4240B0",
    secondaryActive: "#2F2D8A",
    success: "#34C759",
    successHover: "#248A3D",
    warning: "#FF9500",
    warningHover: "#C77700",
    danger: "#FF3B30",
    dangerHover: "#C4261D",
    background: "#FFFFFF",
    foreground: "#000000",
    card: "#F2F2F7",
    border: "#C6C6C8",
    text: "#000000",
    textSecondary: "#6E6E73",
    disabled: "#AEAEB2",
    placeholder: "#8E8E93"
  }
});
var config = createTamagui({
  tokens,
  fonts: {
    body: bodyFont
  },
  themes: {
    light: {
      primary: tokens.color.primary,
      primaryHover: tokens.color.primaryHover,
      primaryActive: tokens.color.primaryActive,
      secondary: tokens.color.secondary,
      secondaryHover: tokens.color.secondaryHover,
      secondaryActive: tokens.color.secondaryActive,
      success: tokens.color.success,
      successHover: tokens.color.successHover,
      warning: tokens.color.warning,
      warningHover: tokens.color.warningHover,
      danger: tokens.color.danger,
      dangerHover: tokens.color.dangerHover,
      background: tokens.color.background,
      foreground: tokens.color.foreground,
      card: tokens.color.card,
      border: tokens.color.border,
      text: tokens.color.text,
      textSecondary: tokens.color.textSecondary,
      disabled: tokens.color.disabled,
      placeholder: tokens.color.placeholder
    },
    dark: {
      primary: "#0A84FF",
      primaryHover: "#409CFF",
      primaryActive: "#0051D5",
      secondary: "#5E5CE6",
      secondaryHover: "#7D7AFF",
      secondaryActive: "#4240B0",
      success: "#30D158",
      successHover: "#32D74B",
      warning: "#FF9F0A",
      warningHover: "#FFB340",
      danger: "#FF453A",
      dangerHover: "#FF6961",
      background: "#000000",
      foreground: "#FFFFFF",
      card: "#1C1C1E",
      border: "#38383A",
      text: "#FFFFFF",
      textSecondary: "#98989D",
      disabled: "#48484A",
      placeholder: "#98989D"
    }
  }
});
var tamagui_config_default = config;
export {
  Button,
  Text2 as Text,
  tamagui_config_default as config
};
//# sourceMappingURL=index.mjs.map