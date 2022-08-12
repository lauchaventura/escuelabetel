import React from "react";
import {
  SimpleGrid,
  Text,
  Box,
  Button,
  IconButton,
  Input,
  Link,
  Icon,
  Grid,
  Center,
  Textarea,
} from "@chakra-ui/react";
import {AiFillMail} from "react-icons/ai";
import {
  FaMapMarkerAlt,
  FaPhone,
  FaInstagram,
  FaFacebook,
  FaYoutube,
} from "react-icons/fa";

const Contact = () => {
  return (
    <>
      <Box bg='#6d6875' color='white' mt={3}>
        <Text fontSize='40px' fontWeight={800} align='center' pt={5}>
          Contactanos
        </Text>
        <SimpleGrid
          ml={[5, 20]}
          mr={[5, 20]}
          columns={[1, 2]}
          align='center'
          mt={3}
        >
          <Box align='start' mt={[2, 9]}>
            <Box mb={6}>
              <Text fontWeight={700} fontSize='18px'>
                <Icon as={AiFillMail} cursor='pointer' />
                {""} escuelabetel@gmail.com
              </Text>
            </Box>

            <Text fontWeight={700} fontSize='18px'>
              <Icon as={FaMapMarkerAlt} cursor='pointer' />
              {""} Av. San Juan 1760, General Roca
            </Text>
            <Box mt={6}>
              <Text fontWeight={700} fontSize='18px'>
                <Icon as={FaPhone} cursor='pointer' />
                {""} +54 9 2984112233
              </Text>
            </Box>
            <Box>
              <Text fontWeight={900} mt={9} align='center'>
                SEGUINOS
              </Text>
              <Box align='center'>
                <SimpleGrid maxW={60} columns={3} mt={4} gap={4}>
                  <IconButton
                    colorScheme='pink'
                    aria-label='Send email'
                    _focus={{outline: "none"}}
                    icon={<FaInstagram />}
                  />
                  <IconButton
                    colorScheme='facebook'
                    aria-label='Send email'
                    _focus={{outline: "none"}}
                    icon={<FaFacebook />}
                  />
                  <IconButton
                    _focus={{outline: "none"}}
                    colorScheme='red'
                    aria-label='Send email'
                    icon={<FaYoutube />}
                  />
                </SimpleGrid>
              </Box>
            </Box>
          </Box>
          <Box p={[3, 7]} mt={[2, 0]}>
            <Input placeholder='Nombre' focusBorderColor='white' />
            <Input placeholder='Correo' mt={5} focusBorderColor='white' />
            <Input
              placeholder='Asunto'
              mt={5}
              color='white'
              focusBorderColor='white'
            />
            <Textarea
              mt={5}
              placeholder='Tu mensaje...'
              focusBorderColor='white'
            />
            <Button
              variant='outline'
              mt={4}
              _hover={{bg: "white", color: "gray"}}
              _focus={{outline: "none"}}
            >
              Enviar
            </Button>
          </Box>
        </SimpleGrid>
      </Box>
    </>
  );
};

export default Contact;
