import { Center, Flex, Heading, Text } from "@chakra-ui/react";
import { FaCartPlus, FaSignOutAlt } from "react-icons/fa";
import { theme } from "../../styles/theme";
import { useAuth } from "../../contexts/AuthContext";
import { useHistory } from "react-router-dom";
import { Search } from "./Search";

export const Header = () => {
  const { user, signOut } = useAuth();

  const history = useHistory();

  return (
    <Flex h="90px" bg="gray.0" justifyContent="space-between" shadow="base">
      <Flex align="center" ml="8">
        <Heading mt="4" as="h1" color="gray.600" marginBottom="4">
          Burguer{" "}
          <Text fontSize="2xl" display="inline-block" color="red.500">
            Kenzie
          </Text>
        </Heading>
      </Flex>
      <Flex justifyContent="end">
        <Search />
        <Center
          mt="4"
          ml="auto"
          as="button"
          fontSize="2rem"
          onClick={() => history.push("/cart")}
          paddingRight="30px"
        >
          <FaCartPlus color={theme.colors.gray[300]} />
        </Center>
        <Center
          mt="4"
          ml="auto"
          as="button"
          fontSize="2rem"
          onClick={signOut}
          paddingRight="30px"
        >
          <FaSignOutAlt color={theme.colors.gray[300]} />
        </Center>
      </Flex>
    </Flex>
  );
};
