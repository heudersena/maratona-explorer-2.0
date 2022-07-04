import { Flex, Image, Button, Box, VStack, Stack } from "@chakra-ui/react";
import type { NextPage } from "next";
import Head from "next/head";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  return (
    <Flex
      bg="me.55"
      h="100vh"
      w="100vw"
      alignItems="start"
      justifyContent="center"
      m="auto"
      color="me.60"
    >
      <h1>Maratona Explorer 2.0</h1>
    </Flex>
  );
};

export default Home;
