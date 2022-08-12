import {
  ButtonGroup,
  Container,
  IconButton,
  Stack,
  Text,
  Link,
} from "@chakra-ui/react";
import * as React from "react";
import {FaYoutube, FaFacebook, FaInstagram} from "react-icons/fa";

const Footer = () => {
  return (
    <Stack
      bg='#6d6875'
      color='white'
      spacing={{
        base: "4",
        md: "5",
      }}
    >
      <Text fontSize='sm' color='subtle' align='center' p={5}>
        &copy; {new Date().getFullYear()} Escuela Betel by @lauchaventura. Todos
        los derechos reservados.
      </Text>
    </Stack>
  );
};

export default Footer;
