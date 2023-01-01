import React from "react";
import {
  Box,
  Container,
  Image,
  Heading,
  SimpleGrid,
  Text,
  Flex,
  Button,
} from "@chakra-ui/react";
const FAQs = () => {
  return (
    <Container maxW="container.lg" my={{ base: "1rem", sm: "6rem" }}>
      <Box textAlign={{ base: "center", sm: "center" }}>
        <Heading
          as="strong"
          mb={8}
          fontSize={{ base: "20px", sm: "30px" }}
          color="black"
        >
          Download the extension
        </Heading>
        <Text fontSize="20px" lineHeight="1.6" mb={14}>
          We ve got more browsers in the pipeline, please let us know if you ve
          got a favourite you d like us to prioritize
        </Text>
      </Box>
      <SimpleGrid columns={[1, 2, 3]} gap={8} mb="5rem">
        <Box
          bg="white"
          textAlign="center"
          border="1px"
          borderColor="grey.300"
          alignItems={"center"}
          p={{ base: "32px", sm: "32px" }}
          borderRadius="md"
        >
          <Image
            src="/images/logo-chrome.svg"
            width="40%"
            m="auto"
            borderRadius="0.5rem"
            alt="illustration"
            mb="1rem"
          />
          <Heading
            fontSize={"18px"}
            textTransform="capitalize"
            py="2"
            color="black"
          >
            Add to opera
          </Heading>
          <Text color="grey" mb={4}>
            Minimunm version 62
          </Text>
          <Button
            color="white"
            textTransform="capitalize"
            bg="softBlue"
            borderRadius="lg"
            px={{ base: "16px", sm: "16px" }}
            py="4"
          >
            Add & Install Extension
          </Button>
        </Box>
        <Box
          bg="white"
          textAlign="center"
          border="1px"
          borderColor="grey.300"
          boxShadow="xs"
          p="6"
          rounded="md"
          alignItems={"center"}
          borderRadius="md"
          sx={{
            "@media screen and (min-width: 62em)": {
              transform: "translateY(2.5rem)",
            },
          }}
        >
          <Image
            src="/images/logo-firefox.svg"
            width="40%"
            m="auto"
            borderRadius="0.5rem"
            alt="illustration"
            mb={8}
          />
          <Heading
            fontSize={"18px"}
            textTransform="capitalize"
            py="2"
            color="black"
          >
            Add to opera
          </Heading>
          <Text color="grey" mb={4}>
            Minimunm version 62
          </Text>
          <Button
            color="white"
            textTransform="capitalize"
            bg="softBlue"
            borderRadius="lg"
            px={{ base: "16px", sm: "16px" }}
            py="4"
          >
            Add & Install Extension
          </Button>
        </Box>
        <Box
          bg="white"
          textAlign="center"
          border="1px"
          borderColor="grey.300"
          boxShadow="outline"
          p="6"
          rounded="outline"
          alignItems={"center"}
          borderRadius="md"
          sx={{
            "@media screen and (min-width: 62em)": {
              transform: "translateY(5rem)",
            },
          }}
        >
          <Image
            src="/images/logo-opera.svg"
            width="40%"
            m="auto"
            objectFit="cover"
            borderRadius="0.5rem"
            alt="illustration"
            mb={8}
          />
          <Heading
            fontSize={"18px"}
            textTransform="capitalize"
            py="2"
            color="black"
          >
            Add to opera
          </Heading>
          <Text color="grey" mb={4}>
            Minimunm version 62
          </Text>
          <Button
            color="white"
            textTransform="capitalize"
            bg="softBlue"
            borderRadius="lg"
            px={{ base: "16px", sm: "16px" }}
            py="4"
          >
            Add & Install Extension
          </Button>
        </Box>
      </SimpleGrid>
    </Container>
  );
};

export default FAQs;
