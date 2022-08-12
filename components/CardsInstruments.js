import {SimpleGrid, Text, Box, Image, Badge} from "@chakra-ui/react";
import React from "react";
import {motion} from "framer-motion";

const CardsInstruments = () => {
  return (
    <>
      <Box align='center' mt={1}>
        <Box pt={2}>
          <Text fontSize='30px' fontWeight={700} mt={2}>
            Elegi tu destino
          </Text>
        </Box>

        <Text fontWeight={500} p={[2, 1]}>
          3 clases semanales donde abordaremos cada contenido puntual
        </Text>
        <SimpleGrid columns={[1, 2, 3, 4]} p={3} spacing={3}>
          <Box
            borderRadius='3xl'
            maxW='400px'
            backgroundImage='url("https://res.cloudinary.com/dsjas6fvz/image/upload/v1660078863/Escuela%20Betel/BPBR5TQ6QZAQTHHQCISHCHPLUQ_criwmx.jpg") !important'
            backgroundSize={450}
            backgroundPosition='center'
          >
            <Box mt={56}>
              <Box
                borderBottom='8px'
                borderTop='1px'
                bg='white'
                mixBlendMode='screen'
              >
                <Text fontWeight={900}>VIOLIN</Text>
              </Box>
            </Box>
          </Box>
          <Box
            maxW='400px'
            backgroundImage='url("https://res.cloudinary.com/dsjas6fvz/image/upload/v1660093758/Escuela%20Betel/guitarras-principiante-1024x683_gkmpgh.jpg") !important'
            backgroundSize={450}
            backgroundPosition='center'
            borderRadius='3xl'
          >
            <Box mt={56}>
              <Box
                borderBottom='8px'
                borderTop='1px'
                bg='white'
                mixBlendMode='screen'
              >
                <Text fontWeight={900}>GUITARRA</Text>
              </Box>
            </Box>
          </Box>
          <Box
            maxW='400px'
            backgroundImage='url("https://res.cloudinary.com/dsjas6fvz/image/upload/v1660093576/Escuela%20Betel/violonchelo_lyck2f.jpg") !important'
            backgroundSize={450}
            backgroundPosition='center'
            borderRadius='3xl'
          >
            <Box mt={56}>
              <Box
                borderBottom='8px'
                borderTop='1px'
                bg='white'
                mixBlendMode='screen'
              >
                <Text fontWeight={900}>VIOLONCHELO</Text>
              </Box>
            </Box>
          </Box>
          <Box
            maxW='400px'
            backgroundImage='url("https://res.cloudinary.com/dsjas6fvz/image/upload/v1660093864/Escuela%20Betel/comprar-bajo-electrico-madrid_qolimb.jpg") !important'
            backgroundSize={450}
            backgroundPosition='center'
            borderRadius='3xl'
          >
            <Box mt={56}>
              <Box
                borderBottom='8px'
                borderTop='1px'
                bg='white'
                mixBlendMode='screen'
              >
                <Text fontWeight={900}>BAJO ELECTRICO</Text>
              </Box>
            </Box>
          </Box>
          <Box
            maxW='400px'
            backgroundImage='url("https://res.cloudinary.com/dsjas6fvz/image/upload/v1660166393/Escuela%20Betel/esmar-international-trombone-academy_rcasaa.jpg") !important'
            backgroundSize={450}
            backgroundPosition='center'
            borderRadius='3xl'
          >
            <Box mt={56}>
              <Box
                borderBottom='8px'
                borderTop='1px'
                bg='white'
                mixBlendMode='screen'
              >
                <Text fontWeight={900}>TROMBON</Text>
              </Box>
            </Box>
          </Box>
          <Box
            maxW='400px'
            backgroundImage='url("https://res.cloudinary.com/dsjas6fvz/image/upload/v1660166492/Escuela%20Betel/j8v-M8l-Trompetas-0-1585655_m-768x511_kvgfue.jpg") !important'
            backgroundSize={450}
            backgroundPosition='center'
            borderRadius='3xl'
          >
            <Box mt={56}>
              <Box
                borderBottom='8px'
                borderTop='1px'
                bg='white'
                mixBlendMode='screen'
              >
                <Text fontWeight={900}>TROMPETA</Text>
              </Box>
            </Box>
          </Box>
          <Box
            maxW='400px'
            backgroundImage='url("https://res.cloudinary.com/dsjas6fvz/image/upload/v1660166557/Escuela%20Betel/saxo_tmbbbe.jpg") !important'
            backgroundSize={450}
            backgroundPosition='center'
            borderRadius='3xl'
          >
            <Box mt={56}>
              <Box
                borderBottom='8px'
                borderTop='1px'
                bg='white'
                mixBlendMode='screen'
              >
                <Text fontWeight={900}>SAXOFON</Text>
              </Box>
            </Box>
          </Box>
          <Box
            maxW='400px'
            backgroundImage='url("https://res.cloudinary.com/dsjas6fvz/image/upload/v1660167822/Escuela%20Betel/pexels-karyme-fran%C3%A7a-1516903_pvs2pb.jpg") !important'
            backgroundSize={450}
            backgroundPosition='center'
            borderRadius='3xl'
          >
            <Box mt={56}>
              <Box
                borderBottom='8px'
                borderTop='1px'
                bg='white'
                mixBlendMode='screen'
              >
                <Text fontWeight={900}>PIANO</Text>
              </Box>
            </Box>
          </Box>
          <Box
            maxW='400px'
            backgroundImage='url("https://res.cloudinary.com/dsjas6fvz/image/upload/v1660167131/Escuela%20Betel/xbateria-810x540.jpg.pagespeed.ic.OM8_uWYpE-_nlobtc.webp") !important'
            backgroundSize={450}
            backgroundPosition='center'
            borderRadius='3xl'
          >
            <Box mt={56}>
              <Box
                borderBottom='8px'
                borderTop='1px'
                bg='white'
                mixBlendMode='screen'
              >
                <Text fontWeight={900}>BATERIA</Text>
              </Box>
            </Box>
          </Box>
          <Box
            maxW='400px'
            backgroundImage='url("https://res.cloudinary.com/dsjas6fvz/image/upload/v1660167311/Escuela%20Betel/8px-SHl-acordeon-0-107683856_m-1024x683_lforxq.jpg") !important'
            backgroundSize={450}
            backgroundPosition='center'
            borderRadius='3xl'
          >
            <Box mt={56}>
              <Box
                borderBottom='8px'
                borderTop='1px'
                bg='white'
                mixBlendMode='screen'
              >
                <Text fontWeight={900}>ACORDEON</Text>
              </Box>
            </Box>
          </Box>
          <Box
            maxW='400px'
            backgroundImage='url("https://res.cloudinary.com/dsjas6fvz/image/upload/v1660167212/Escuela%20Betel/flauta-traversa1_e2cjcr.jpg") !important'
            backgroundSize={450}
            backgroundPosition='center'
            borderRadius='3xl'
          >
            <Box mt={56}>
              <Box
                borderBottom='8px'
                borderTop='1px'
                bg='white'
                mixBlendMode='screen'
              >
                <Text fontWeight={900}>FLAUTA TRAVERSA</Text>
              </Box>
            </Box>
          </Box>
          <Box
            maxW='400px'
            backgroundImage='url("https://res.cloudinary.com/dsjas6fvz/image/upload/v1660167454/Escuela%20Betel/5-puntos-para-escoger-la-mejor-consola-de-audio-digital-005_hqco1c.jpg") !important'
            backgroundSize={450}
            backgroundPosition='center'
            borderRadius='3xl'
          >
            <Box align='center' mt={56}>
              <Box
                borderBottom='8px'
                borderTop='1px'
                bg='white'
                mixBlendMode='screen'
              >
                <Text fontWeight={900}>SONIDO</Text>
              </Box>
            </Box>
          </Box>
          <Box
            maxW='400px'
            backgroundImage='url("https://res.cloudinary.com/dsjas6fvz/image/upload/v1660167516/Escuela%20Betel/photo-1597169428801-7c1adf2623bd_cdaij5.jpg") !important'
            backgroundSize={450}
            backgroundPosition='center'
            borderRadius='3xl'
            _hover={{
              translateY: "-15px",
              boxShadow: "2xl",
              transition: " all 0.5s",
            }}
            cursor='pointer'
          >
            <Box mt={56}>
              <Box
                borderBottom='8px'
                borderTop='1px'
                bg='white'
                mixBlendMode='screen'
              >
                <Text fontWeight={900}>CANTO</Text>
              </Box>
            </Box>
          </Box>
        </SimpleGrid>
      </Box>
    </>
  );
};

export default CardsInstruments;
