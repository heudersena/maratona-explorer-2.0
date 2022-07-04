import { Box, Flex, Heading,Divider } from "@chakra-ui/react";
import type { NextPage } from "next";

const Home: NextPage = () => (
  <Flex
    bg="me.55"
    h="100vh"
    w="100vw"
    alignItems="start"
    justifyContent="center"
    m="auto"
    color="me.60"
  >
    <Heading>dsad</Heading>
    <Box>
    <Divider variant="dashed" h="50px" />
    </Box>

  </Flex>
);

export default Home;
