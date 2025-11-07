import { createTamagui } from 'tamagui'

export const config = createTamagui({
  tokens: {
    color: {
      background: '#fff',
      borderColor: '#ddd',
      // add your custom colors matching expected keys
    },
  },
  themes: {
    light: {
      background: '#fff',
      borderColor: '#ddd',
    },
  },
  // your other config
})
