import { Grid, Heading, Flex, Text } from "@chakra-ui/react";
import { FiShoppingBag } from "react-icons/fi";
import { theme } from "../../styles/theme";
import { Balls } from "../Signup/Balls";

export const Side = () => (
  <Grid
    w={["100%", "100%", "50%", "50%"]}
    paddingLeft={["0px", "0px", "100px"]}
  >
    <Heading mt="4" as="h1" color="gray.600" marginBottom="4">
      Burguer{" "}
      <Text fontSize="2xl" display="inline-block" color="red.500">
        Kenzie
      </Text>
    </Heading>
    <Flex
      border="2px solid"
      borderColor="gray.0"
      borderRadius="5px"
      w="fit-content"
      padding="15px 15px"
      shadow="base"
    >
      <Flex
        borderRadius="5px"
        alignItems="center"
        justifyContent="center"
        w="60px"
        h="60px"
        bg="green.50"
        fontSize="4xl"
        mr="4"
      >
        <FiShoppingBag color={theme.colors.green[500]} />
      </Flex>
      <Text color="gray.400" maxW="350px">
        A vida é como um sanduíche, é preciso recheá-la com os <b>melhores</b>{" "}
        ingredientes.
      </Text>
    </Flex>
    <Balls />
    <Balls />
    <Balls />
  </Grid>
);
