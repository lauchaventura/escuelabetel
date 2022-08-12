import {
  Box,
  chakra,
  SimpleGrid,
  Text,
  AspectRatio,
  Link,
  Button,
  Image,
  Container,
  Center,
} from "@chakra-ui/react";
import {GrMapLocation, GrPlay, Heading} from "react-icons/gr";
import React from "react";

import styles from "../styles/AudioPlayer.module.scss";
import {motion} from "framer-motion";
const Presentation = () => {
  return (
    <>
      <Box
        bgImage="url('https://res.cloudinary.com/dsjas6fvz/image/upload/v1660070763/Escuela%20Betel/fondo_de_pantalla_jxx6vm.jpg')"
        h='100vh'
        w='100%'
        alignItems='center'
        align='center'
      >
        <Box pt={[14, 4]}>
          <Text
            align='center'
            fontSize={[60, 80, 100, 120]}
            color='white'
            fontWeight={700}
            lineHeight={0.8}
            pt={40}
          >
            Inscripciones abiertas
          </Text>
        </Box>
        <Button
          _hover={{bg: "white", color: "black"}}
          size='lg'
          variant='outline'
          mt={7}
          color='white'
          _focus={{outline: "none"}}
        >
          Quiero anotarme
        </Button>
      </Box>
    </>
  );
};

export default Presentation;
