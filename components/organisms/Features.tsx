import React, { useState } from "react";
import { Container, Text, Box, Button, Image, Flex } from "@chakra-ui/react";
import { motion } from "framer-motion";

const data = [
  {
    id: 1,
    title: "Bookmark in one click",
    desc: "Organize your bookmarks however you like. Our simple drag-and-drop interface gives you complete control over how you manage your favourite sites.",
    link: "More Info",
    button: "Simple Bookmarking",
    image: "./images/illustration-features-tab-1.svg",
  },
  {
    id: 2,
    title: "Intelligent search",
    desc: "Our powerful search feature will help you find saved sites in no time at all. No need to trawl through all of your bookmarks.",
    link: "More Info",
    button: "Speedy Searching",
    image: "./images/illustration-features-tab-2.svg",
  },
  {
    id: 3,
    title: "Share your bookmarks",
    desc: "Easily share your bookmarks and collections with others. Create a shareable link that you can send at the click of a button.",
    link: "More Info",
    button: "Easy Sharing",
    image: "./images/illustration-features-tab-3.svg",
  },
];

const Features = () => {
  const [tabs] = useState(data);
  const [value, setValue] = useState(0);

  const { image, title, desc, link } = tabs[value];
  const MotionContainer = motion(Container);
  const MotionBox = motion(Box);
  return (
    <MotionContainer maxW="container.lg">
      <MotionBox textAlign={{ base: "center", lg: "center" }}>
        <Text
          as="strong"
          mb={{ base: "3rem", sm: "3rem" }}
          color="black"
          lineHeight="1.2"
          fontSize={["36px", "40px"]}
        >
          Features
        </Text>
        <Container maxW={{ sm: "600" }} w="100%" mt={6}>
          <Text lineHeight={1.8} fontSize="18px" mb={8}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras
            ultrices elit at tortor eleifend, eu blandit libero aliquam. Donec
            dapibus ligula ut massa pharetra,
          </Text>
        </Container>
      </MotionBox>

      <Box
        as="ul"
        mt={{ base: 25, sm: 28 }}
        mb={28}
        pb={4}
        w="100%"
        display={"flex"}
        flexDirection={{ base: "column", sm: "row" }}
        alignItems={{ base: "center", sm: "center" }}
        justifyContent="center"
      >
        {tabs.map((item, index) => (
          <Box
            as="li"
            key={index}
            borderColor="gray.200"
            _last={{
              borderTop: "0",
            }}
            borderTop={{ base: "1px", sm: "0" }}
            borderBottom="1px"
          >
            <Text
              onClick={() => setValue(index)}
              as="button"
              px={{ base: "80px", sm: "35px" }}
              py={{ base: "20px" }}
              pb="20px"
              borderBottom={index === value ? "2px" : "0"}
              borderColor={index === value ? "red" : "0"}
            >
              {item.button}
            </Text>
          </Box>
        ))}
      </Box>
      <Container maxW="container.lg" mb={15}>
        <Box
          zIndex={1}
          mb={20}
          gap={30}
          display="flex"
          justifyContent={{ base: "center", sm: "space-between" }}
          alignItems="center"
          flexDirection={{ base: "column", sm: "row" }}
        >
          <Box position="relative" flex={1}>
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
                borderRadius: "0 200px 200px 0",
                width: "120%",
                right: "0%",
                left: "-40%",
                bottom: "0px",
                bgColor: "softBlue",
              }}
            ></Box>
          </Box>
          <Box textAlign={{ base: "center", sm: "left" }} flex="1">
            <Text
              mt={{ base: "20px", sm: "25px" }}
              fontWeight="bold"
              fontSize={{ base: "20px", sm: "30px" }}
              color="black"
            >
              {title}
            </Text>
            <Text as="p" mb={10}>
              {desc}
            </Text>
            <Text
              as="button"
              bg="softBlue"
              color="white"
              py={3}
              px={4}
              borderRadius="md"
            >
              {link}
            </Text>
          </Box>
        </Box>
      </Container>
    </MotionContainer>
  );
};

export default Features;
