import {Center, Box, Image, Divider} from "@chakra-ui/react";
import React from "react";

const AboutUs = () => {
  return (
    <div>
      <Center
        ml={[5, 20]}
        mr={[5, 20]}
        display={{base: "column", md: "flex", lg: "56px"}}
        alignItems='center'
        color='#0a100d'
        align='center'
      >
        <Box align='center' p={6}>
          <Image src='https://res.cloudinary.com/dsjas6fvz/image/upload/v1660072677/Escuela%20Betel/logo_fondo_blanco_pdtgqz.png' />
        </Box>
        <Box fontWeight={400} fontSize='20px'>
          <b>La Escuela Betel</b> es mas que un instituto, transmitimos de una
          forma diferente los valores de la musica.
        </Box>
      </Center>
    </div>
  );
};

export default AboutUs;
