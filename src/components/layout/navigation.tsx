import { useMounted } from "@/hooks/mounted";
import { Flex, Heading, useDisclosure } from "@chakra-ui/react";
import { NavLinks } from "./navLinks";
import { MobileToggle } from "./mobileToggle";
import { MobileDrawer } from "./mobileDrawer";
import Link from "next/link";

export const Navbar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { hasMounted } = useMounted();

  return hasMounted ? (
    <Flex
      py={{ base: 3, md: 2 }}
      zIndex="sticky"
      left="0"
      position="fixed"
      top="0"
      w="100%"
      justify="center"
      mt="7px"
      _before={{
        content: "''",
        width: "100%",
        height: "100%",
        position: "absolute",
        top: 0,
        left: 0,
      }}
      transition="all 200ms ease-in-out"
    >
      <Flex
        justifyContent="space-between"
        alignItems="center"
        maxW="container.xl"
        w="100%"
        px={{ base: 6, lg: 8 }}
        zIndex={1}
      >
        <Flex flex="1 1" justifyContent="flex-start">
          <Link aria-label="treeJob logo" href="/">
            <Heading>TreeJobs</Heading>
          </Link>
        </Flex>

        <NavLinks
          onClose={onClose}
          display={{ base: "none", lg: "flex" }}
          borderRadius="1.25rem"
          height="2.5rem"
          padding="0 1.5rem"
          mx=""
          gap={{ base: "1.2rem", md: "1rem", lg: "0.5rem" }}
        />

        <Flex justifyContent="flex-end" flex="1 1">
          <Flex gap={4}></Flex>
        </Flex>

        <MobileToggle
          isOpen={isOpen}
          onClick={onOpen}
          marginInlineStart={{ base: "1rem" }}
          mr={-4}
        />

        <MobileDrawer isOpen={isOpen} onClose={onClose} />
      </Flex>
    </Flex>
  ) : null;
};
