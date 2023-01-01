import { Box } from "@chakra-ui/react";
import React from "react";
import Navbar from "../molecules/Navbar";
const Header = () => {
  return (
    <Box
      as="header"
      bg="bg"
      py={10}
      borderColor="divider"
      borderBottom={["1px", "unset"]}
    >
      <Navbar />
    </Box>
  );
};

export default Header;
