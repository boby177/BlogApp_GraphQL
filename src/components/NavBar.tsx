import { Box, Button, Flex, Link } from "@chakra-ui/react";
import React from "react";
import NextLink from "next/link";
import { useMeQuery } from "../gql/graphql";

type Props = {};

export const NavBar = (props: Props) => {
  const [{ data, fetching }] = useMeQuery();
  let body = null;

  //   Data is Loading
  if (fetching) {
    // user not Logged in
    console.log(data?.me?.user?.username);
  } else if (data?.me?.user) {
    body = (
      <>
        <NextLink href="/login">
          <Link color={"black"} mr={2}>
            Login
          </Link>
        </NextLink>
        <NextLink href="/register">
          <Link color={"black"} mr={4}>
            Register
          </Link>
        </NextLink>
      </>
    );

    // User is logged in
  } else {
    console.log(data?.me?.user);

    body = (
      <Flex>
        <Box mr={2}>{data?.me?.user?.username}</Box>
        <Button variant={"link"}>Logout</Button>
      </Flex>
    );
  }
  return (
    <Flex bg="teal.400" p={4} ml="auto">
      <Box ml={"auto"}>{body}</Box>
    </Flex>
  );
};
