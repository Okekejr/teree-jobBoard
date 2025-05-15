import { CustomText } from "@/components/ui/customText";
import { Stack, Link } from "@chakra-ui/react";

export default function NotFoundPage() {
  return (
    <Stack
      align="center"
      as="section"
      h="screen-h"
      justify="center"
      p={4}
      textAlign="center"
      mt={{ base: "3rem", md: "7.5rem" }}
    >
      <CustomText fontSize="30px">Error 404</CustomText>
      <CustomText>
        The current page is not available.{" "}
        <Link color="#FFF" href="/" textDecoration="underline">
          Head over to home page.
        </Link>
      </CustomText>
    </Stack>
  );
}
