import Head from 'next/head'
import {
  Box, 
  Divider, 
  Flex, 
  Text,
} from '@chakra-ui/react'


import NameTitle from '../components/nameTitle'

import { useState } from 'react'

export default function Home() {


  return (
    <Box>
      <Flex 
      backgroundImage="url('Scattered-Forcefields.svg')" 
      backgroundPosition="center"
      bgAttachment="fixed"
      backgroundRepeat="repeat"
      bgSize="auto"
      color="teal.200" direction="column" align="center" justify="center" height="100vh">
        <NameTitle />
      </Flex>
      <Divider />
      <Flex align="center" justify="center" 
      backgroundImage="url('Abstract-Timekeeper.svg')"
      backgroundPosition="center"
      bgAttachment="fixed"
      backgroundRepeat="no-repeat"
      bgSize="cover"
      minH="100vh">
        <Box p={8} bg="teal.200" borderRadius="lg">
          <Text bg="transluscent" as="em" fontSize="5xl">Coming Soon</Text>

        </Box>
      </Flex>
    </Box>
  )
}
