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
        <Box pt={[14, 12, 4]}>
          <Text
            align='center'
            fontSize={[57, 66, 100, 120]}
            color='white'
            fontWeight={700}
            lineHeight={0.8}
            pt={40}
          >
            Inscripciones abiertas
          </Text>
        </Box>
        <Link
          href='https://l.instagram.com/?u=https%3A%2F%2Fdocs.google.com%2Fforms%2Fd%2Fe%2F1FAIpQLScb4ZSXMghNOEj1JsKtgKdSjGei9jUQAs9n7PFhIFY8IsfKXQ%2Fviewform%3Fusp%3Dsf_link&e=ATNxv0U_-4WQzJU3oL7ld_O1--5nHoPHfzLPcN4GNv6ecNHNvDw1LrmKMPFb4c7oc-gEdaw7mDPSZs6c_xkxCw&s=1'
          isExternal
          style={{textDecoration: "none"}}
        >
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
        </Link>
      </Box>
    </>
  );
};

export default Presentation;
