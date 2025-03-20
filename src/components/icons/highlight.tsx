import { Icon, IconProps } from "@chakra-ui/react";
import { FC } from "react";

export const Highlight: FC<IconProps> = ({ ...rest }) => {
  return (
    <Icon viewBox="0 0 29 20" {...rest}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M0.125 0V20H18.875C24.3978 20 28.875 15.5228 28.875 10C28.875 4.47715 24.3979 0 18.875 0H0.125ZM17.8125 2.19607C13.9657 2.71486 11 6.01109 11 10C11 13.9889 13.9657 17.2851 17.8125 17.8039V2.19607ZM19.9375 17.8039C23.7843 17.2851 26.75 13.9889 26.75 10C26.75 6.01109 23.7843 2.71486 19.9375 2.19607V17.8039ZM12.7111 17.875C10.3757 16.0444 8.875 13.1975 8.875 10C8.875 6.80253 10.3757 3.95556 12.7111 2.125H2.25V17.875H12.7111Z"
        fill="currentColor"
      ></path>
    </Icon>
  );
};
