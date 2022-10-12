import { Box, Text } from "@chakra-ui/react"
import Stairs from "./Stairs"

const Hero = ({ text }:{ text?: string }) => {
  return <Box h='100vh' bg='gray.900' p={{ base: 12, lg: 28 }} pos='relative' zIndex={0}>
    <Box color='gray.100'>
      <Text fontWeight='extrabold' fontSize='7xl'>한글,</Text>
      <Text mt={-4} fontWeight='extrabold' fontSize='4xl' >세상에서 가장 아름다운 글자.</Text>
      <Text color='gray.200' fontSize='lg'>한글은 유일하게 탄생 기록을 가지고 있으며, 제자원리가 매우 과학적이고 체계적인 문자입니다.</Text>
      <Box color='blue.500' >
        <Box pos='absolute' bottom={20} right={20} zIndex={-100} fontSize={{ base: 60, lg: 92 }}>
          <Stairs texts={['ㄱ ㄴ ㄷ ㄹ ㅁ', 'ㅂ ㅅ ㅇ ㅈ ㅊ', 'ㅋ ㅌ ㅍ ㅎ']} />
        </Box>
      </Box>
    </Box>
  </Box>
}

export default Hero