import React from "react";
import {useRouter} from "next/router";

import {
  Box,
  Stack,
  Heading,
  Flex,
  Text,
  Link,
  Button,
  Image,
  useDisclosure,
} from "@chakra-ui/react";
import {HamburgerIcon} from "@chakra-ui/icons";
import {useState} from "react";

const Header = props => {
  const [navbar, setNavbar] = useState(false);

  const changeBackground = () => {
    if (window.scrollY >= 80) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };

  React.useEffect(() => {
    window.addEventListener("scroll", changeBackground);
  }, []);

  const {isOpen, onOpen, onClose} = useDisclosure();
  const handleToggle = () => (isOpen ? onClose() : onOpen());
  const router = useRouter();
  return (
    <>
      <Flex
        as='nav'
        align='center'
        justify='space-between'
        wrap='wrap'
        padding={2}
        width='100%'
        {...props}
        position='fixed'
        color='white'
        boxSizing='border-box'
        z-index={999}
        className={navbar ? "navbar-active" : "navbar"}
      >
        <style jsx>{`
          .navbar {
            background-color: blue;
          }
          .navbar-active {
            background-color: red;
          }
        `}</style>
        <Flex align='center'>
          <div onClick={() => router.push("/")}>
            <Box w='23' p={1}>
              {/* <Text
                cursor='pointer'
                fontSize='28px'
                fontWeight='extrabold'
                font
                letterSpacing='tighter'
                color='#1A202C'
                ml={[0, 5]}
              >
                Escuela Betel
              </Text> */}
              <Image
                ml={5}
                maxW='65px'
                src='https://res.cloudinary.com/dsjas6fvz/image/upload/v1660072677/Escuela%20Betel/logo_fondo_blanco_pdtgqz.png'
              />
            </Box>
          </div>
        </Flex>

        <Box display={{base: "block", md: "none"}} onClick={handleToggle}>
          <HamburgerIcon />
        </Box>

        <Stack
          mr={9}
          direction={{base: "column", md: "row"}}
          display={{base: isOpen ? "block" : "none", md: "flex"}}
          width={{base: "full", md: "auto"}}
          alignItems='center'
          columnGap={8}
          mt={{base: 4, md: 0}}
        >
          <div onClick={() => router.push("/programs")}>
            <Text
              cursor='pointer'
              fontWeight='semibold'
              fontSize={15}
              transitionDuration='400ms'
              _hover={{color: "#ffcdb2"}}
            >
              Como llegar
            </Text>
          </div>
          <div onClick={() => router.push("/projects")}>
            <Text
              cursor='pointer'
              _hover={{color: "#ffcdb2"}}
              fontWeight='semibold'
              transitionDuration='500ms'
              fontSize={15}
            >
              Quienes somos?
            </Text>
          </div>
          <div onClick={() => router.push("/contact")}>
            <Text
              cursor='pointer'
              _hover={{color: "#ffcdb2"}}
              fontWeight='extrabold'
              fontSize={14}
              transitionDuration='400ms'
            >
              CONTACTANOS!
            </Text>
          </div>
        </Stack>
      </Flex>
    </>
  );
};

export default Header;
