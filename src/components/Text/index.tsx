import { styled } from '@tamagui/core';
import { Text as RNText } from 'react-native';

export const Text = styled(RNText, {
  name: 'Text',
  
  // @ts-ignore - Tamagui core types limitation with RN components
  color: '$text',
  fontSize: 16,
  
  variants: {
    variant: {
      body: {
        fontSize: 16,
        color: '$text',
      },
      heading: {
        fontSize: 24,
        fontWeight: '700',
        color: '$text',
      },
      subheading: {
        fontSize: 20,
        fontWeight: '600',
        color: '$text',
      },
      caption: {
        fontSize: 14,
        color: '$textSecondary',
      },
      label: {
        fontSize: 14,
        fontWeight: '600',
        color: '$text',
      },
    },
    
    size: {
      xs: {
        fontSize: 12,
      },
      sm: {
        fontSize: 14,
      },
      md: {
        fontSize: 16,
      },
      lg: {
        fontSize: 18,
      },
      xl: {
        fontSize: 20,
      },
      '2xl': {
        fontSize: 24,
      },
      '3xl': {
        fontSize: 30,
      },
    },
    
    weight: {
      normal: {
        fontWeight: '400',
      },
      medium: {
        fontWeight: '500',
      },
      semibold: {
        fontWeight: '600',
      },
      bold: {
        fontWeight: '700',
      },
    },
    
    color: {
      primary: {
        color: '$primary',
      },
      secondary: {
        color: '$textSecondary',
      },
      success: {
        color: '$success',
      },
      warning: {
        color: '$warning',
      },
      danger: {
        color: '$danger',
      },
    },
    
    align: {
      left: {
        textAlign: 'left',
      },
      center: {
        textAlign: 'center',
      },
      right: {
        textAlign: 'right',
      },
    },
  } as const,
  
  defaultVariants: {
    variant: 'body',
  },
});

export type TextProps = React.ComponentProps<typeof Text>;