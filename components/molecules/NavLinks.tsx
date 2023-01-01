import React from "react";
import { Box, Stack, Image } from "@chakra-ui/react";
import LoginButton from "../LoginButton";
import Logo from "../atoms/Logo";
import { useModal } from "../../context/NavbarContext";
const NavLinks = () => {
  const { open, toggle } = useModal();
  return (
    <Box
      as="nav"
      display="flex"
      justifyContent="space-between"
      alignItems="center"
    >
      <Logo />
      <Box
        display={{ base: "block", sm: "flex" }}
        as="nav"
        p={{ base: "30px", sm: "unset" }}
        zIndex={{ base: "modal", md: "auto" }}
        opacity={{ base: "0", md: "100" }}
        sx={{
          transition: open
            ? "transform .5s ease-in-out, opacity .5s ease-in-out"
            : "unset",
          zIndex: open ? "modal" : "unset",
          borderBottomRadius: open ? "0.5rem" : "unset",
          position: open ? "fixed" : "unset",
          bg: open ? "grayishBlue" : "unset",
          top: open ? "0" : "unset",
          left: open ? "0" : "unset",
          bottom: open ? "0" : "unset",
          right: open ? "0" : "unset",
          visibility: open ? "visible" : "unset",
          opacity: open ? "1" : "unset",
        }}
      >
        <Box
          display={{ base: open ? "flex" : "none", sm: "none" }}
          justifyContent="space-between"
          alignItems="center"
        >
          <Image src="/images/logo-bookmark.svg" />
          <Image src="/images/icon-hamburger.svg" onClick={() => toggle()} />
        </Box>
        <Box as="div" mb={open ? "7rem" : "0"}>
          <Stack
            as="ul"
            display={{ base: open ? "flex" : "none", sm: "flex" }}
            align="center"
            mt={{ base: "5rem", sm: "unset" }}
            direction={{ base: "column", sm: "row" }}
            justify={{ base: "center", sm: "space-between" }}
            spacing={{ base: 3, md: 6 }}
            listStyleType="none"
          >
            <Box
              as="li"
              py={{ base: "3", sm: "0" }}
              w={{ base: "100%" }}
              textAlign={{ base: "center" }}
              borderTop={{ base: "1px", sm: "0px" }}
              borderColor={{ base: "white", sm: "unset" }}
              fontSize={{ sm: "9px", md: "sm" }}
              fontWeight="bold"
              _hover={{ color: "accent" }}
              letterSpacing="0.125rem"
              color={{ base: "white", sm: "grey" }}
              textTransform="uppercase"
            >
              features
            </Box>
            <Box
              as="li"
              py={{ base: "3", sm: "0" }}
              w={{ base: "100%" }}
              textAlign={{ base: "center" }}
              borderTop={{ base: "1px", sm: "0px" }}
              borderColor={{ base: "white", sm: "unset" }}
              fontSize={{ sm: "9px", md: "sm" }}
              fontWeight="bold"
              _hover={{ color: "accent" }}
              letterSpacing="0.125rem"
              color={{ base: "white", sm: "grey" }}
              textTransform="uppercase"
            >
              pricing
            </Box>
            <Box
              as="li"
              py={{ base: "3", sm: "0" }}
              w={{ base: "100%" }}
              textAlign={{ base: "center" }}
              borderTop={{ base: "1px", sm: "0px" }}
              borderColor={{ base: "white", sm: "unset" }}
              fontSize={{ sm: "9px", md: "sm" }}
              fontWeight="bold"
              _hover={{ color: "accent" }}
              letterSpacing="0.125rem"
              color={{ base: "white", sm: "grey" }}
              textTransform="uppercase"
            >
              contact
            </Box>
            <Box
              as="li"
              fontSize={{ sm: "9px", md: "sm" }}
              fontWeight="bold"
              _hover={{ color: "accent" }}
              letterSpacing="0.125rem"
              width={"100%"}
              color={{ base: "white", sm: "grey" }}
              textTransform="uppercase"
            >
              <LoginButton />
            </Box>
          </Stack>
        </Box>

        <Box
          as="ul"
          display={{ base: open ? "flex" : "none", sm: "none" }}
          justifyContent="center"
          alignItems="center"
          gap={6}
          mt={6}
        >
          <Box as="li">
            <Image src="/images/icon-facebook.svg" />
          </Box>
          <Box as="li">
            <Image src="/images/icon-twitter.svg" />
          </Box>
        </Box>
      </Box>

      <Box display={{ base: open ? "none" : "block", sm: "none" }}>
        <Image src="/images/icon-hamburger.svg" onClick={() => toggle()} />
      </Box>
    </Box>
  );
};

export default NavLinks;
