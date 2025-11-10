import { createTamagui } from 'tamagui'

const config = createTamagui({
  tokens: {
    color: {
      background: '#fff',
      borderColor: '#ddd',
    },
  },
  themes: {
    light: {
      background: '#fff',
      borderColor: '#ddd',
    },
  },
})
export default config;