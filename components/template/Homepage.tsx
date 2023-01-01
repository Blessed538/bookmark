import React from "react";
import Hero from "../organisms/Hero";
import { Box, Container } from "@chakra-ui/react";
import Features from "../organisms/Features";
import FAQs from "../organisms/FAQs";
import Contact from "../organisms/Contact";
import Questions from "../organisms/Questions";
const Homepage = () => {
  return (
    <Box>
      <Hero />
      <Features />
      <FAQs />
      <Questions />
      <Contact />
    </Box>
  );
};

export default Homepage;
