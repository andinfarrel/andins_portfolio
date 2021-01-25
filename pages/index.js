import Head from 'next/head'
import {
  Box, 
  Divider, 
  Flex, 
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
      backgroundRepeat="no-repeat"
      bgSize="100%"
      color="teal.200" direction="column" align="center" justify="center" height="100vh">
        <NameTitle />
      </Flex>
      <Divider />
      <Box 
      backgroundImage="url('Abstract-Timekeeper.svg')"
      backgroundPosition="center"
      bgAttachment="fixed"
      backgroundRepeat="no-repeat"
      bgSize="100%"
      minH="100vh">

      </Box>
    </Box>
  )
}
