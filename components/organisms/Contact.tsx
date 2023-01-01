import React from "react";
import { Box, Button, Container, Input, Text } from "@chakra-ui/react";
const Contact = () => {
  return (
    <Box bg="softBlue" mt={{ base: "0", sm: "8rem" }}>
      <Container maxW="container.lg" py="3rem">
        <Container maxW={"450px"} textAlign={{ base: "center", sm: "center" }}>
          <Text fontSize="20px" color="white">
            35,000 + ALREADY JOINED
          </Text>
          <Text
            color="white"
            fontSize={{ base: "22px", sm: "30px" }}
            lineHeight={1.2}
            my="1.2rem"
          >
            Stay up to date with what we re doing
          </Text>
        </Container>
        <Container
          maxW={"450px"}
          display="flex"
          gap={4}
          flexDirection={{ base: "column", sm: "row" }}
          alignItems="center"
        >
          <Input
            placeholder="Enter your email address"
            size="md"
            py={5}
            borderRadius="md"
            px={5}
            borderColor="white"
            bg="white"
            color="gray"
          />
          <Button
            color="white"
            textTransform="capitalize"
            bg="red"
            w={{ base: "100%", sm: "40%" }}
            px="4"
            borderRadius="md"
          >
            Contact Us
          </Button>
        </Container>
      </Container>
    </Box>
  );
};

export default Contact;
