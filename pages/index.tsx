import type { NextPage } from 'next'
import { useEffect, useState } from 'react'
import { Animator, ScrollContainer, ScrollPage, batch } from 'react-scroll-motion'

import Hero from '../components/Hero'
import { Button } from '@chakra-ui/react'

const Home: NextPage = () => {
  const [ text, setText ] = useState<string>()
  useEffect(() => {
    const Recognition = window.SpeechRecognition || window.webkitSpeechRecognition
    if(Recognition) {
      const recognition = new Recognition()
      recognition.lang = 'ko-KR'
      recognition.continuous = true
      recognition.onstart = () => {
        console.log('onstart')
      }
      recognition.onresult = (e: { results: { transcript: string }[][] }) => {
        const result = e.results[e.results.length - 1]
        const transcript = result[0].transcript
        setText(transcript)
    }
    recognition.start()
    return () => recognition.stop()
  }
  
 }, [])
  return <ScrollContainer>
    <ScrollPage>
      <Animator animation={batch()}>
        <Hero text={text} />
      </Animator>
    </ScrollPage>
  </ScrollContainer>
}

export default Home
