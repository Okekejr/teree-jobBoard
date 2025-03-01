import { Text, TextProps } from "@chakra-ui/react";
import { FC } from "react";

interface Props
  extends Pick<
    TextProps,
    "color" | "fontWeight" | "textAlign" | "fontSize" | "fontFamily"
  > {
  children: string | React.ReactNode;
}

export const CustomText: FC<Props> = ({ children, ...rest }) => {
  return (
    <Text
      fontFamily="texts"
      fontSize="md"
      lineHeight="1.25em"
      letterSpacing="0.12px"
      {...rest}
    >
      {children}
    </Text>
  );
};
