import React, { useState } from "react";
import { Container, Text, Box, Heading, Button } from "@chakra-ui/react";
import { questions } from "../../utils/Links";
import Question from "../molecules/Question";
const Questions = () => {
  const [items] = useState(questions);
  return (
    <Box bg="white" my={{ base: "3rem", sm: "7rem" }}>
      <Container py="8" px={8} textAlign="center" maxW="container.lg">
        <Box textAlign="center">
          <Heading color="black" fontSize={{ base: "15px", sm: 25 }}>
            {" "}
            Frequently Asked Questions
          </Heading>
          <Text my={8}>
            Here is some our FAQs. If you have any questions you'd like answered
            please reach out to us
          </Text>
        </Box>
        <Box as="ul" mt={16} mb={6}>
          {items.map((item) => (
            <Question key={item.id} {...item} />
          ))}
        </Box>
        <Button
          m="auto"
          my={8}
          bg="softBlue"
          variant={"primary"}
          color="white"
          textAlign="center"
        >
          More Info
        </Button>
      </Container>
    </Box>
  );
};

export default Questions;
