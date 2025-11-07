// packages/ui/src/components/Button.tsx
import React from 'react'
import { styled, Text, YStack } from 'tamagui'

// Styled container using Tamagui primitives and tokens
const ButtonContainer = styled(YStack, {
  name: 'ButtonContainer',
  backgroundColor: '$background',
  padding: '$md',
  borderRadius: '$sm',
  alignItems: 'center',
  justifyContent: 'center',
  cursor: 'pointer',

  // Variants for size
  variants: {
    size: {
      small: { padding: 8 },
      large: { padding: 20 },
    },
    outlined: {
      true: {
        borderWidth: 1,
        borderColor: '$borderColor',
        backgroundColor: 'transparent',
      },
    },
  },

  // Default variants
  defaultVariants: {
    size: 'small',
    outlined: false,
  },
})

const ButtonText = styled(Text, {
  name: 'ButtonText',
  color: '$color', // uses theme color token
  fontWeight: 'bold',
  fontSize: 16,
  userSelect: 'none',
})

type ButtonProps = {
  size?: 'small' | 'large'
  outlined?: boolean
  children: React.ReactNode
  onPress?: () => void
}

export function Button({ size = 'small', outlined = false, children, onPress }: ButtonProps) {
  return (
    <ButtonContainer
      size={size}
      outlined={outlined}
      onPress={onPress}
      pressStyle={{ scale: 0.95 }}
      hoverStyle={{ scale: 1.05 }}
    >
      <ButtonText>{children}</ButtonText>
    </ButtonContainer>
  )
}
