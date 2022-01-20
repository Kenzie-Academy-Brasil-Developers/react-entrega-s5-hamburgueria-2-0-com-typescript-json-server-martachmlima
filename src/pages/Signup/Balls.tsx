import { Flex, Box } from "@chakra-ui/react";

export const Balls = () => {
  return (
    <Flex
      w="50%"
      justifyContent="space-around"
      mt="6"
      display={["none", "none", "flex"]}
    >
      <Box h="11px" w="11px" bg="#f2f2f2" borderRadius="100%" />
      <Box h="11px" w="11px" bg="#f2f2f2" borderRadius="100%" />
      <Box h="11px" w="11px" bg="#f2f2f2" borderRadius="100%" />
      <Box h="11px" w="11px" bg="#f2f2f2" borderRadius="100%" />
      <Box h="11px" w="11px" bg="#f2f2f2" borderRadius="100%" />
      <Box h="11px" w="11px" bg="#f2f2f2" borderRadius="100%" />
    </Flex>
  );
};
