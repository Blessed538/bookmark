import Image from "next/image";
import Link from "next/link";
import { Box } from "@chakra-ui/react";
import { useModal } from "../../context/NavbarContext";
const Logo = (): JSX.Element => {
  const { open } = useModal();
  return (
    <Box
      display={{ base: open ? "none" : "block" }}
      mr={{ sm: "auto", lg: 0 }}
      mb={{ base: "12px", sm: "unset" }}
      lineHeight="0"
    >
      <Link href="/">
        <Image
          src="/images/logo-bookmark.svg"
          height={25}
          width={144}
          alt="Audiophile logo - Home"
        />
      </Link>
    </Box>
  );
};

export default Logo;
