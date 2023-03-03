import { Box, Image, Heading, Flex } from "@chakra-ui/react";
import '../images/phonebook.jpg';

export default function Home() {
  return (
    <Flex>
      <Box w='50%'>
        <Image src={require('../images/phonebook.jpg')} alt="phonebook"/>
      </Box>
      <Box textAlign={"center"} my='auto' px='4'>
        <Heading as='h1' size='2xl' noOfLines={1} textTransform={"uppercase"} mb='16'>
          Feel free to get
          <Box as='span' size='2xl' noOfLines={1} textTransform={"uppercase"}>your phone book!</Box>
        </Heading>
        <Heading as='h2' size='xl' noOfLines={1}>Register and create new contacts,
        <Box as='span' size='xl' noOfLines={1}> edit, delete!</Box></Heading>
      </Box>
    </Flex>
  );
}
//
//