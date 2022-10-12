import { AppProps } from 'next/app'
import { ChakraProvider } from '@chakra-ui/react'

import './stairs.css'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider>
      <Component {...pageProps} />
    </ChakraProvider>
  )
}

export default MyApp