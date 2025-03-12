import { FC } from "react";
import { Box, Flex, FlexProps, HStack } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { routes } from "@/utils/routes";
import Link from "next/link";

interface NavLinksProps extends FlexProps {
  onClose: () => void;
}

export const NavLinks: FC<NavLinksProps> = ({ onClose, ...rest }) => {
  const { pathname } = useRouter();

  return (
    <Flex
      as="nav"
      alignItems="center"
      border="1px solid rgba(31, 46, 100, 0.50)"
      {...rest}
    >
      <HStack spacing={4}>
        {routes.map((rout) => {
          return (
            <Link href={rout.url} key={rout.title}>
              <Box
                color={pathname === rout.url ? "#fff" : "#9b9b9b"}
                _hover={{
                  textDecoration: "none",
                }}
                fontWeight="600"
                borderRadius="15px"
                fontFamily="lighter"
              >
                {rout.title}
              </Box>
            </Link>
          );
        })}
      </HStack>
    </Flex>
  );
};
