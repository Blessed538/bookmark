import React from "react";
import { Box, Image } from "@chakra-ui/react";
import { useModal } from "../../context/NavbarContext";
const MobileNav = () => {
  const { open, toggle } = useModal();
  console.log("toggling", open);
  return (
    <Box display={{ base: "block", md: "none" }}>
      <Image src="/images/icon-hamburger.svg" onClick={() => toggle()} />
    </Box>
  );
};

export default MobileNav;
