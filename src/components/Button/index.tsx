import { styled } from '@tamagui/core';
import { Text } from 'react-native';

export const Button = styled(Text, {
  name: 'Button',
  // @ts-ignore - Tamagui core types limitation with RN components
  tag: 'button',
  
  paddingHorizontal: '$4',
  paddingVertical: '$3',
  borderRadius: '$2',
  backgroundColor: '$primary',
  color: '$background',
  fontSize: 16,
  fontWeight: '600',
  textAlign: 'center',
  cursor: 'pointer',
  userSelect: 'none',
  
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
    variant: 'primary',
    size: 'medium',
  },
});

export type ButtonProps = React.ComponentProps<typeof Button>;
