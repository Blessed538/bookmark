import React from "react";
import { Box, Image } from "@chakra-ui/react";
const FooterLinks = () => {
  return (
    <Box
      display="flex"
      alignItems="center"
      my={["1.5rem", "unset"]}
      justifyContent="center"
      gap={8}
    >
      <Image src="/images/icon-facebook.svg" objectFit="cover" alt="facebook" />
      <Image src="/images/icon-twitter.svg" objectFit="cover" alt="twitter" />
    </Box>
  );
};

export default FooterLinks;
