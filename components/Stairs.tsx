import { Box, List, ListItem } from '@chakra-ui/react'

const Stairs = ({ texts }: { texts: string[] }) => 
  <List>
    {texts.map((text, i) => (
      <ListItem key={i} className='stair'>{text}</ListItem>
    ))}
  </List>


export default Stairs