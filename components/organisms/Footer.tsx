import React from "react";
import { Box, Container, Text, Stack, Flex } from "@chakra-ui/react";
import Logo from "../atoms/Logo";
import FooterLinks from "../molecules/FooterLinks";
import { links } from "../../utils/Links";
const Footer = () => {
  return (
    <Box as="footer" bg="black">
      <Container
        maxW="container.lg"
        pt={{ base: "3.25rem", sm: "3.75rem", lg: "4.6875rem" }}
        pb={["2rem"]}
        position="relative"
      >
        <Flex
          direction={{ base: "column", sm: "row" }}
          justifyContent={{ base: "center", sm: "space-between" }}
        >
          <Box
            display="flex"
            flexDirection={["column", "row", "row"]}
            alignItems="center"
            justifyContent={["space-between"]}
          >
            <Logo />
            <Box
              as="ul"
              mx={4}
              display="flex"
              flexDirection={["column", "row"]}
              alignItems="center"
              justifyContent={{ base: "center", sm: "space-between" }}
            >
              {links.map((link) => (
                <Box
                  as="li"
                  key={link.id}
                  textTransform="uppercase"
                  fontSize={["16px"]}
                  color="white"
                  my={["0.75rem", "unset"]}
                  px={{ base: "12px", sm: "18px" }}
                >
                  {link.text}
                </Box>
              ))}
            </Box>
          </Box>

          <FooterLinks />
        </Flex>
      </Container>
    </Box>
  );
};

export default Footer;
