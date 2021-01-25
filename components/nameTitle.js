import { 
    Box,  
    HStack, 
    Text,
    IconButton,
    VStack, 
    useDisclosure,
} from "@chakra-ui/react";


import {
    TriangleUpIcon,
    TriangleDownIcon,
} from '@chakra-ui/icons'

import {useState} from 'react'

const NameTitle = (props) => {
    const titles = ["Andin Farrel", "Web Developer", "Software Engineer", "Data Analyst", "Security Enthusiast"]
    const [titleNum, setTitleNum] = useState(0);
    const { isOpen, onToggle } = useDisclosure()
  
    const handleTitleNum = (arg) => {
      let newNum;
      switch(arg) {
        case 'next':
          newNum = ( titleNum + 1 ) % 5;
          setTitleNum(newNum);
          break;
        case 'prev':
          newNum = (( titleNum + 4)  % 5);
          setTitleNum(newNum);
          break;
      }
      onToggle
    }

    return (
        <VStack>
            <IconButton onClick={() => handleTitleNum('prev')} variant="ghost" aria-label="main-up" icon={<TriangleDownIcon />} />
            <Text transition="transform 0.2s" transform="rotate(360deg)" as="em" fontSize="5xl">{titles[titleNum]}</Text>
            <IconButton onClick={() => handleTitleNum('next')} variant="ghost" aria-label="main-up" icon={<TriangleUpIcon />} />
        </VStack>
    )
}

export default NameTitle;