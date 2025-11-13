"use client";

/**
 * @file TextInput.tsx
 * @description A customizable input component for React Native using Tamagui.
 */
import React from 'react';
import { styled } from '@tamagui/core';
import {
  TextInput as RNTextInput,
  TextInputProps as RNTextInputProps,
  View,
  Text as RNText,
} from 'react-native';

/**
 * Styled container for the text input wrapper
 */
const StyledInputContainer = styled(View, {
  name: 'InputContainer',
  marginBottom: '$4',
  width: '100%',
});

/**
 * Styled label text
 */
const StyledLabel = styled(RNText, {
  name: 'InputLabel',
  marginBottom: '$1',
  // @ts-ignore - Tamagui core types limitation with RN components
  color: '$text',
  fontFamily: '$body',
  fontWeight: '400',

  variants: {
    size: {
      small: {
        fontSize: '$2', // 14px
      },
      medium: {
        fontSize: '$3', // 16px
      },
      large: {
        fontSize: '$4', // 18px
      },
    },
  },

  defaultVariants: {
    size: 'medium',
  },
});

/**
 * Styled text input implementing variants, sizes, and states via Tamagui
 */
const StyledInput = styled(RNTextInput, {
  name: 'TextInput',
  // @ts-ignore - Tamagui core types limitation with RN components
  fontFamily: '$body',
  fontWeight: '400',
  borderWidth: 1,
  color: '$text',

  focusStyle: {
    borderColor: '$primary',
    outlineWidth: 2,
    outlineColor: '$primary',
    outlineStyle: 'solid',
  },

  variants: {
    size: {
      small: {
        fontSize: '$2', // 14px
        paddingHorizontal: '$3', // 12px
        paddingVertical: '$2', // 8px
        borderRadius: '$1', // 4px
      },
      medium: {
        fontSize: '$3', // 16px
        paddingHorizontal: '$4', // 16px
        paddingVertical: '$3', // 12px
        borderRadius: '$2', // 8px
      },
      large: {
        fontSize: '$4', // 18px
        paddingHorizontal: '$5', // 20px
        paddingVertical: '$4', // 16px
        borderRadius: '$3', // 12px
      },
    },

    variant: {
      default: {
        backgroundColor: '$background',
        borderColor: '$border',
      },
      filled: {
        backgroundColor: '$card',
        borderColor: 'transparent',
      },
      outlined: {
        backgroundColor: 'transparent',
        borderColor: '$border',
      },
    },

    state: {
      default: {},
      error: {
        borderColor: '$danger',
        focusStyle: {
          borderColor: '$danger',
          outlineColor: '$danger',
        },
      },
      success: {
        borderColor: '$success',
        focusStyle: {
          borderColor: '$success',
          outlineColor: '$success',
        },
      },
      disabled: {
        backgroundColor: '$disabled',
        color: '$textSecondary',
        opacity: 0.6,
        cursor: 'not-allowed',
      },
    },
  } as const,

  defaultVariants: {
    size: 'medium',
    variant: 'default',
    state: 'default',
  },
});

/**
 * Styled helper text
 */
const StyledHelperText = styled(RNText, {
  name: 'HelperText',
  // @ts-ignore - Tamagui core types limitation with RN components
  fontSize: '$2', // 14px
  marginTop: '$1', // 4px
  fontFamily: '$body',
  fontWeight: '400',

  variants: {
    state: {
      default: {
        color: '$textSecondary',
      },
      error: {
        color: '$danger',
      },
      success: {
        color: '$success',
      },
    },
  },

  defaultVariants: {
    state: 'default',
  },
});

/**
 * Props for the Text Input component.
 */
export interface TextInputProps extends RNTextInputProps {
  /** Label text displayed above the input */
  label?: string;

  /** Size variant for the input. @default "medium" */
  size?: 'small' | 'medium' | 'large';

  /** Visual style variant. @default "default" */
  variant?: 'default' | 'filled' | 'outlined';

  /** State variant (error, success, disabled). @default "default" */
  state?: 'default' | 'error' | 'success' | 'disabled';

  /** Helper text displayed below the input (e.g., error message) */
  helperText?: string;
}

/**
 * TextInput component supporting styling variants, sizes, states,
 * with labels and helper text.
 *
 * @param {TextInputProps} props - TextInput properties
 * @returns {JSX.Element} Rendered text input with label and helper text
 */
export const TextInput: React.FC<TextInputProps> = ({
  label,
  size = 'medium',
  variant = 'default',
  state = 'default',
  helperText,
  editable = true,
  ...rest
}) => {
  const finalState = !editable ? 'disabled' : state;

  return (
    <StyledInputContainer>
      {label && (
        <StyledLabel size={size}>
          {label}
        </StyledLabel>
      )}

      <StyledInput
        size={size}
        variant={variant}
        state={finalState}
        editable={editable}
        placeholderTextColor="$placeholder"
        {...rest}
      />

      {helperText && (
        <StyledHelperText state={finalState === 'disabled' ? 'default' : finalState}>
          {helperText}
        </StyledHelperText>
      )}
    </StyledInputContainer>
  );
};

export default TextInput;