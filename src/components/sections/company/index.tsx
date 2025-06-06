import { Box, Flex, Grid } from "@chakra-ui/react";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { CompanyCard } from "./companyCard";
import { AnimatedHeading } from "@/components/ui/animatedHeading";
import { companiesT } from "@/types";

interface CompaniesSecT {
  data: companiesT;
}

export const Companies = ({ data }: CompaniesSecT) => {
  const { featuredCompanies, featuredCompaniesHeading } = data;
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
      px={{ base: 6, xl: 0 }}
      pt={{ base: 8, md: 24 }}
      pb={{ sm: 8, base: 20, md: 24 }}
    >
      <AnimatedHeading isInView={isInView} text={featuredCompaniesHeading} />

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
          {featuredCompanies.map((company) => (
            <CompanyCard
              key={company.id_number}
              {...company}
              isInView={isInView}
            />
          ))}
        </Grid>
      </Flex>
    </Box>
  );
};
