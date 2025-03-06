import { FC, useEffect } from "react";
import { JobsType } from "@/types";
import {
  Box,
  Button,
  Flex,
  Heading,
  Link,
  ListItem,
  Stack,
  UnorderedList,
} from "@chakra-ui/react";
import { CustomText } from "../ui/customText";
import { JobSection } from "../ui/jobSection";
import { motion } from "framer-motion";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

interface JobPageType {
  data: JobsType | undefined;
}

const JobPage: FC<JobPageType> = ({ data }) => {
  const firstHalf = data?.skills?.slice(0, data.skills.length / 2);
  const secondHalf = data?.skills?.slice(data.skills.length / 2);

  useEffect(() => {
    // Animate the job title using staggered animation
    gsap.from(".job-title span", {
      opacity: 0,
      y: 30,
      stagger: 0.1,
      duration: 1,
      ease: "back.out(1.7)",
    });

    // Job description and skills animation
    gsap.from(".job-description", {
      opacity: 0,
      y: 50,
      duration: 1,
      stagger: 0.2,
      ease: "power2.out",
    });

    // Scroll-triggered animations for sections
    ScrollTrigger.create({
      trigger: ".job-section",
      start: "top 80%",
      end: "top 50%",
      scrub: 1,
      onEnter: () => {
        gsap.to(".job-section", {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power3.out",
        });
      },
    });

    // Button hover effect using GSAP
    gsap.to(".apply-button", {
      scale: 1.1,
      duration: 0.3,
      ease: "power1.inOut",
      repeat: -1,
      yoyo: true,
    });
  }, []);

  return (
    <Box display="flex" flexDirection="column" px={4} gap={8}>
      <Flex justifyContent="space-between" alignContent="center">
        <Flex alignItems="flex-end" gap="5px" className="job-title">
          <Heading>
            {data?.title.split(" ").map((word, index) => (
              <span key={index}>{word} </span>
            ))}
          </Heading>
          <Box pb="3px">
            <CustomText fontSize="20px"> @ {data?.company}</CustomText>
          </Box>
        </Flex>

        <motion.div
          className="apply-button"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          <Button
            as={Link}
            borderRadius="full"
            width="100px"
            color="#000"
            _hover={{
              bgColor: "#FBD38D",
              color: "#000",
              textDecoration: "none",
            }}
            href={data?.link}
            isExternal
          >
            <CustomText fontFamily="lighter">Apply</CustomText>
          </Button>
        </motion.div>
      </Flex>

      <Box display="flex" justifyContent="center" flexDirection="column">
        <Stack gap={8}>
          <JobSection
            title="🌍 Location"
            data={data?.location}
            className="job-section job-description"
          />

          <JobSection
            title="📌 Job Description"
            data={data?.description}
            className="job-section job-description"
          />

          <Stack direction="column" gap="10px">
            <CustomText
              fontSize={{ base: "md", md: "lg" }}
              fontFamily="heading"
              fontWeight="bold"
              className="job-section job-description"
            >
              ✅ Skills & Qualifications:
            </CustomText>

            <Flex
              flexDirection={{ base: "column", md: "row" }}
              justifyContent="space-between"
            >
              <Box
                display={{ base: "none", md: "flex" }}
                flexDirection="column"
                maxWidth="450px"
                className="job-section job-description"
              >
                {firstHalf &&
                  firstHalf.length > 0 &&
                  firstHalf.map((skill, i) => {
                    return (
                      <UnorderedList key={i}>
                        <ListItem>
                          <CustomText>{skill}</CustomText>
                        </ListItem>
                      </UnorderedList>
                    );
                  })}
              </Box>

              <Box
                display={{ base: "none", md: "flex" }}
                flexDirection="column"
                maxWidth="450px"
                className="job-section job-description"
              >
                {secondHalf &&
                  secondHalf.length > 0 &&
                  secondHalf.map((skill, i) => {
                    return (
                      <UnorderedList key={i}>
                        <ListItem>
                          <CustomText>{skill}</CustomText>
                        </ListItem>
                      </UnorderedList>
                    );
                  })}
              </Box>

              <Box
                display={{ md: "none" }}
                flexDirection="column"
                maxWidth="450px"
                className="job-section job-description"
              >
                {firstHalf && firstHalf.length > 0 ? (
                  firstHalf.map((skill, i) => {
                    return (
                      <UnorderedList key={i}>
                        <ListItem>{skill}</ListItem>
                      </UnorderedList>
                    );
                  })
                ) : (
                  <CustomText>No skills found.</CustomText>
                )}
              </Box>
            </Flex>
          </Stack>
        </Stack>
      </Box>
    </Box>
  );
};

export default JobPage;
