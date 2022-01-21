import { Center, Flex, Heading, Text } from "@chakra-ui/react";
import { FaCartPlus, FaSignOutAlt } from "react-icons/fa";
import { theme } from "../../styles/theme";
import { useAuth } from "../../contexts/AuthContext";
import { useHistory } from "react-router-dom";
import { Search } from "./Search";
import { useProducts } from "../../contexts/ProductsContext";

export const Header = () => {
  const { signOut } = useAuth();
  const { cart } = useProducts();

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
        <Flex
          flexDirection="column"
          mt="7"
          ml="auto"
          as="button"
          fontSize="2rem"
          onClick={() => history.push("/cart")}
          paddingRight="30px"
        >
          <Text
            fontSize="sm"
            w="20px"
            bg="green.500"
            color="white"
            borderRadius="100%"
            ml="8px"
            mb="-10px"
          >
            {cart.length}
          </Text>
          <FaCartPlus color={theme.colors.gray[300]} />
        </Flex>
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
