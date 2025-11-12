import React from 'react'
import { styled } from '@tamagui/core'
import { Pressable,Text } from 'react-native'

const StyledButton = styled(Pressable, {
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

export type ButtonProps = React.ComponentProps<typeof StyledButton> & {
  children?: React.ReactNode
  onPress?: () => void
}

export const Button: React.FC<ButtonProps> = ({ children, onPress, ...props }) => {
  return (
    <StyledButton
      {...props}
      // Explicitly ensure it’s clickable on web
      onPress={onPress}
      onClick={(e: any) => {
        e.stopPropagation()
        if (onPress) onPress()
      }}
      role="button"
      accessibilityRole="button"
    >
      {typeof children === 'string' ? <Text>{children}</Text> : children}
    </StyledButton>
  )
}
