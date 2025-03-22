import { Box, Flex, Grid } from "@chakra-ui/react";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { CompanyCard } from "./companyCard";
import { AnimatedHeading } from "@/components/ui/animatedHeading";
import { companies_db } from "@/constants";

export const Companies = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-10% 0px" });

  return (
    <Box
      ref={ref}
      id="companies"
      className="companies"
      display="flex"
      flexDirection="column"
      gap={6}
      px={{ base: 6, md: 0 }}
      pt={{ base: 8, md: 24 }}
      pb={{ sm: 8, base: 20, md: 24 }}
    >
      <AnimatedHeading isInView={isInView} text=" Featured Web3 Companies" />

      <Flex
        backdropFilter="blur(10px)"
        backgroundColor="rgba(255,255,255,.08)"
        borderRadius="none"
        p={8}
        w="full"
      >
        {/* Grid Layout for Companies */}
        <Grid
          templateColumns={{ base: "repeat(1, 1fr)", md: "repeat(3, 1fr)" }}
          gap={0}
          w="full"
        >
          {companies_db.map((company) => (
            <CompanyCard key={company.id} {...company} isInView={isInView} />
          ))}
        </Grid>
      </Flex>
    </Box>
  );
};
