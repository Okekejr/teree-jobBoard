import { Highlight } from "@/components/icons/highlight";
import { MagnaLogo } from "@/components/icons/magna";
import { NebraLogo } from "@/components/icons/nebra";
import { OxLogo } from "@/components/icons/ox";
import { PolyhedraLogo } from "@/components/icons/polyhedra";
import { Sorella } from "@/components/icons/sorella";
import { IconProps } from "@chakra-ui/react";
import { FC } from "react";
import { IconType } from "react-icons";
import { FaLinkedin, FaGithub, FaBehanceSquare } from "react-icons/fa";

export const API_URL = "http://127.0.0.1:8000";

export const email = "dylanokeks@yahoo.com";

export type Companies_dbT = {
  id: string;
  name: string;
  desc: string;
  icon: FC<IconProps>;
}[];

export const companies_db: Companies_dbT = [
  {
    id: "01",
    name: "Magna",
    desc: "Magna develops a token vesting and DeFi investment management platform.",
    icon: MagnaLogo,
  },
  {
    id: "02",
    name: "Polyhedra",
    desc: "Develops a Web3 infrastructure platform through zero-knowledge-proof protocols.",
    icon: PolyhedraLogo,
  },
  {
    id: "03",
    name: "Hightlight",
    desc: "A platform for collecting, creating, and trading digital artifacts.",
    icon: Highlight,
  },
  {
    id: "04",
    name: "Nebra",
    desc: "NEBRA Labs is a blockchain services company, Bringing Proof Singularity to Blockchains",
    icon: NebraLogo,
  },
  {
    id: "05",
    name: "Sorella",
    desc: "Sorella Labs is developing tools to tackle Ethereum and Creating sustainable on-chain markets.",
    icon: Sorella,
  },
  {
    id: "06",
    name: "Ox",
    desc: "0x is an open protocol that enables peer-to-peer trading of assets.",
    icon: OxLogo,
  },
];

export type SocialLinksT = {
  name: string;
  link: string;
  icon: IconType;
}[];

export const SocialLinks: SocialLinksT = [
  {
    name: "Github",
    link: "https://github.com/Okekejr",
    icon: FaGithub,
  },
  {
    name: "Linkedin",
    link: "https://www.linkedin.com/in/emmanuel-okeke/",
    icon: FaLinkedin,
  },
  {
    name: "Behance",
    link: "https://www.behance.net/chukwuebukaokeke",
    icon: FaBehanceSquare,
  },
];
