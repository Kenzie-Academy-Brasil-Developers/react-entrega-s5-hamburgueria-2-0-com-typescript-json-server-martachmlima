import { CartList } from "./CartList";
import { useEffect } from "react";
import { useProducts } from "../../contexts/ProductsContext";
import { useAuth } from "../../contexts/AuthContext";
import { Box, Text, Center, Flex } from "@chakra-ui/react";
import { FaHome } from "react-icons/fa";
import { useHistory } from "react-router-dom";
import { AsideTotal } from "./AsideTotal";

export const Cart = () => {
  const { cart, loadCart } = useProducts();
  const { accessToken } = useAuth();

  const history = useHistory();

  useEffect(() => {
    loadCart(accessToken);
  }, []);

  return (
    <>
      <Flex
        as="h1"
        w="100%"
        bg="green.500"
        color="white"
        fontSize={["lg", "lg", "3xl"]}
        padding="4"
      >
        <Box as="button" mr="8">
          <FaHome color="white" onClick={() => history.push("/dashboard")} />
        </Box>
        <Text>Carrinho de compras</Text>
      </Flex>
      <Box>
        {!cart.length ? (
          <Center h="60vh">
            <Flex
              flexDirection="column"
              w={["80%", "50%", "35%"]}
              padding="8"
              border="2px solid"
              borderColor="gray.100"
              borderRadius="5px"
              justifyContent="center"
              alignItems="center"
            >
              <Text color="gray.600" fontWeight="bold">
                Sua sacola está vazia
              </Text>
              <Text mt="4" color="gray.300">
                Adicione itens
              </Text>
            </Flex>
          </Center>
        ) : (
          <Box>
            <CartList products={cart} />
            <AsideTotal />
          </Box>
        )}
      </Box>
    </>
  );
};
