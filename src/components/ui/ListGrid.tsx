import { List } from "@chakra-ui/react";
import { FC } from "react";

interface ListGrid {
  children: React.ReactNode;
}

export const ListGrid: FC<ListGrid> = ({ children }) => {
  return (
    <List
      display="grid"
      gap={4}
      gridTemplateColumns={{
        base: "1fr",
        md: "1fr 1fr",
      }}
    >
      {children}
    </List>
  );
};
