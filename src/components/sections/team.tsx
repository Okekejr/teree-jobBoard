import { Flex, Stack } from "@chakra-ui/react";
import { CustomText } from "../ui/customText";
import { CustomHeader } from "../ui/animatedHeading";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { TeamT } from "@/types";
import { TeamCard } from "./teamCard";

interface TeamMembersT {
  data: TeamT;
}

export const Team = ({ data }: TeamMembersT) => {
  const { teamContent, teamFooterNote, teamTitle, Members } = data;

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-10% 0px" });

  return (
    <Stack ref={ref} my={4} gap={6}>
      <CustomHeader text={teamTitle} />

      <Flex flexDirection="column" gap={6} mb={4} zIndex={1}>
        <CustomText fontFamily="body">{teamContent}</CustomText>

        <CustomText fontFamily="body">{teamFooterNote}</CustomText>
      </Flex>

      <motion.div
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : {}}
        transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
        style={{ width: "100%", display: "flex" }}
      >
        {Members.map((member) => {
          return <TeamCard data={member} key={member._id} />;
        })}
      </motion.div>
    </Stack>
  );
};
