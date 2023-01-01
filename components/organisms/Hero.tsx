import {
  Box,
  Container,
  Heading,
  Image,
  Text,
  Flex,
  Button,
} from "@chakra-ui/react";
import Link from "next/link";
import { motion } from "framer-motion";

const Hero = (): JSX.Element => {
  const MotionStack = motion(Flex);
  const MotionContainer = motion(Container);
  return (
    <MotionContainer
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: {
          delay: "1.5",
          duration: "2",
        },
      }}
      maxW="container.lg"
    >
      <MotionStack
        direction={{ base: "column-reverse", md: "row" }}
        justify="space-between"
        align="center"
        bg="white"
        pt={{ base: "6rem", sm: "8rem", lg: "10rem" }}
        pb={{ base: "3rem", sm: "none" }}
      >
        <Box
          mt={{ base: "3rem", sm: 0 }}
          textAlign={{ base: "center", lg: "left" }}
        >
          <Text
            as="strong"
            mb={{ base: "3rem", sm: "3rem" }}
            color="black"
            lineHeight="1.2"
            fontSize={["30px", "57px"]}
          >
            A Simple BookMark Manager
          </Text>

          <Text color="grey" fontSize="18px" mt={6} mb={10} maxW="45ch">
            A clean and simple interface to organize your favourites websites.
            Open a new browser tab and see your sites load instantly. Try it for
            free.
          </Text>
          <Link href="/headphones/xx99-mark-two-headphones" passHref>
            <Button as="a" cursor="pointer">
              See Product
            </Button>
          </Link>
        </Box>

        <Box pos="relative" zIndex={1}>
          <Image
            src="/images/illustration-hero.svg"
            width="100%"
            borderRadius="0.5rem"
            alt="illustration"
          />
          <Box
            zIndex={-1}
            sx={{
              position: "absolute",
              height: "300px",
              borderRadius: "200px 0 0 200px",
              width: "120%",
              right: "-40%",
              bottom: "0px",
              bgColor: "softBlue",
            }}
          ></Box>
        </Box>
      </MotionStack>
    </MotionContainer>
  );
};

export default Hero;
