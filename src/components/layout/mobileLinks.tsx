import { FC } from "react";
import { Box, Flex, FlexProps, List, ListItem } from "@chakra-ui/react";
import { routes } from "@/utils/routes";
import Link from "next/link";

interface NavLinksProps
  extends Pick<FlexProps, "direction" | "alignItems" | "mt"> {
  onClose: () => void;
}

export const MobileNavLinks: FC<NavLinksProps> = ({ onClose, ...rest }) => {
  return (
    <Flex as="nav" alignItems="center" {...rest}>
      <List display="flex" flexDirection="column" alignItems="flex-end">
        {routes.map((rout) => {
          return (
            <ListItem key={rout.title} mb={3}>
              <Link href={rout.url} onClick={onClose}>
                <Box
                  color="neutral.300"
                  fontFamily="lighter"
                  fontWeight="600"
                  _active={{ bg: "transparent" }}
                  fontSize="button"
                >
                  {rout.title}
                </Box>
              </Link>
            </ListItem>
          );
        })}
      </List>
    </Flex>
  );
};
