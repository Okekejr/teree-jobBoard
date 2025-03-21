import { Link } from "@chakra-ui/react";
import { AnimatedIcon } from "./animatedIcon";
import { IconType } from "react-icons";

interface SocialsT {
  name: string;
  link: string;
  icon: IconType;
}

export const Socials = ({ name, link, icon }: SocialsT) => {
  return (
    <Link href={link} isExternal>
      <AnimatedIcon title={name} icon={icon} />
    </Link>
  );
};
