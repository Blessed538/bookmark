import React from "react";
import { Button } from "@chakra-ui/react";
import { useModal } from "../context/NavbarContext";

const LoginButton = () => {
  const { open } = useModal();
  return (
    <div>
      <Button
        variant="primary"
        fontWeight="bold"
        bg={open ? "" : "softRed"}
        border={open ? "1px" : ""}
        borderRadius={open ? "md" : ""}
        borderColor={open ? "white" : ""}
        width={"100%"}
        fontSize={{ sm: "9px", md: "sm" }}
        textTransform="capitalize"
        m="0"
        px={{ base: 6, sm: 2, md: 6 }}
        _hover={{
          color: "white",
        }}
      >
        LOGIN
      </Button>
    </div>
  );
};

export default LoginButton;
