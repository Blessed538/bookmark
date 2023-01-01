import React, { useState } from "react";
import { Text, Box, Stack, Image, Container } from "@chakra-ui/react";

type Props = {
  id: number;
  question: string;
  answer: string;
};
const Question = ({ answer, question, id }: Props) => {
  const [show, setShow] = useState(false);
  return (
    <Container as="li" borderY="1px" px={0} borderColor="gray" maxW={800}>
      <Box
        py={5}
        flexDirection="row"
        cursor="pointer"
        display="flex"
        alignItems="center"
        justifyContent="space-between"
        onClick={() => setShow(!show)}
      >
        <Text fontSize={{ base: "13px", md: "18px" }}> {question}</Text>

        {show ? (
          <Image src="/images/icon-arrow.svg" alt="arrow" />
        ) : (
          <Image src="/images/icon-arrow.svg" alt="arrow" />
        )}
      </Box>
      {show && (
        <Box
          lineHeight={[1.6]}
          textAlign={["left"]}
          fontSize={["13px", "18px"]}
          pb={4}
        >
          {answer}
        </Box>
      )}
    </Container>
  );
};

export default Question;
