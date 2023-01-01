import React from "react";
import { Container, Box } from "@chakra-ui/react";
import Logo from "../atoms/Logo";
import NavLinks from "./NavLinks";
import MobileNav from "./MobileNav";

const Navbar = () => {
  return (
    <Container maxW="container.lg" px={6}>
      <Box>
        <NavLinks />
      </Box>
    </Container>
  );
};

export default Navbar;
