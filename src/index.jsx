import './style.css'
import ReactDOM from 'react-dom/client'
import App from './App'
import Intro from './Intro'
import { ChakraProvider } from '@chakra-ui/react'
import chakraTheme from '@chakra-ui/theme'

const root = ReactDOM.createRoot(document.querySelector('#root'))

const theme = {
    styles: {
      global: {
        'html, body': {
          color: 'gray.600',
          lineHeight: 'tall',
        },
        a: {
          color: 'teal.500',
        },
      },
    },
  }

root.render(
    <>
        <ChakraProvider theme={theme}>
        <Intro>
        <App/>
        </Intro>
        </ChakraProvider>
    </>
)