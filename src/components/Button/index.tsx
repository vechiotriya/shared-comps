import React from 'react'
import { styled } from '@tamagui/core'
import { Pressable, Text, PressableProps, View } from 'react-native-web'

/**
 * Styled container for the button implementing variants, sizes,
 * and interaction styles (hover, press, focus) via Tamagui.
 */
const StyledButton = styled(View, {
  name: 'Button',
  cursor: 'pointer',
  userSelect: 'none',
  alignItems: 'center',
  justifyContent: 'center',
  borderRadius: '$2',
  paddingHorizontal: '$4',
  paddingVertical: '$3',
  backgroundColor: '$primary',

  pressStyle: {
    backgroundColor: '$primaryActive',
  },

  hoverStyle: {
    backgroundColor: '$primaryHover',
  },

  focusStyle: {
    outlineWidth: 2,
    outlineColor: '$primary',
    outlineStyle: 'solid',
  },

  variants: {
    variant: {
      primary: {
        backgroundColor: '$primary',
        color: '$background',
        hoverStyle: {
          backgroundColor: '$primaryHover',
        },
        pressStyle: {
          backgroundColor: '$primaryActive',
        },
      },
      secondary: {
        backgroundColor: '$secondary',
        color: '$background',
        hoverStyle: {
          backgroundColor: '$secondaryHover',
        },
        pressStyle: {
          backgroundColor: '$secondaryActive',
        },
      },
      success: {
        backgroundColor: '$success',
        color: '$background',
        hoverStyle: {
          backgroundColor: '$successHover',
        },
      },
      warning: {
        backgroundColor: '$warning',
        color: '$background',
        hoverStyle: {
          backgroundColor: '$warningHover',
        },
      },
      danger: {
        backgroundColor: '$danger',
        color: '$background',
        hoverStyle: {
          backgroundColor: '$dangerHover',
        },
      },
      outline: {
        backgroundColor: 'transparent',
        color: '$primary',
        borderWidth: 1,
        borderColor: '$primary',
        hoverStyle: {
          backgroundColor: '$card',
        },
      },
      ghost: {
        backgroundColor: 'transparent',
        color: '$primary',
        hoverStyle: {
          backgroundColor: '$card',
        },
      },
    },

    size: {
      small: {
        paddingHorizontal: '$3',
        paddingVertical: '$2',
        fontSize: 14,
      },
      medium: {
        paddingHorizontal: '$4',
        paddingVertical: '$3',
        fontSize: 16,
      },
      large: {
        paddingHorizontal: '$6',
        paddingVertical: '$4',
        fontSize: 18,
      },
    },

    disabled: {
      true: {
        backgroundColor: '$disabled',
        color: '$textSecondary',
        cursor: 'not-allowed',
        pressStyle: {
          backgroundColor: '$disabled',
        },
        hoverStyle: {
          backgroundColor: '$disabled',
        },
      },
    },

    fullWidth: {
      true: {
        width: '100%',
      },
    },
  } as const,

  defaultVariants: {
    variant: 'outline',
  },
})

/**
 * Button Props extend styled button container's props and additional
 * pressable interaction props from React Native Web.
 */
export type ButtonProps = React.ComponentProps<typeof StyledButton> & PressableProps

/**
 * Button component supporting styling variants, sizes, disabled state,
 * full width, and handlers for press and click events.
 *
 * @param {React.PropsWithChildren<ButtonProps>} props - Button properties including children, event handlers, and styled-system props
 * @param {React.ReactNode} props.children - Content inside the button; string children are wrapped in Text component for styling.
 * @param {(event: PressableProps['onPress'])} [props.onPress] - Handler called when button is pressed or clicked on native and web
 * @returns {JSX.Element} Rendered button element with interaction support and accessibility role
 */
export const Button: React.FC<ButtonProps> = ({ children, onPress, onClick, ...props }) => {
  return (
    <StyledButton
      {...props}
      role="button"
      onPress={onPress}
      accessibilityRole="button"
    >
      <Pressable onPress={onPress}>
        {children}
      </Pressable>
    </StyledButton>
  )
}
