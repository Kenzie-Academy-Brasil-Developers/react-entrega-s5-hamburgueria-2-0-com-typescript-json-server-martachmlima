import { Flex, Button, Text, Box } from "@chakra-ui/react";
import { useProducts } from "../../contexts/ProductsContext";

export const AsideTotal = () => {
  const { cart } = useProducts();
  const totalPrice = cart.reduce(
    (currentTotal, newValue) => currentTotal + Number(newValue.price),
    0
  );

  return (
    <Flex flexDirection="column" alignItems="center" justifyContent="center">
      <Box w="90%" h="3px" bg="gray.100" mt="6" />
      <Text
        fontSize={["lg", "lg", "xl"]}
        color="gray.600"
        fontWeight="bold"
        mt="6"
      >
        Total: R{"$ "}
        {totalPrice.toFixed(2)}
      </Text>
      {/* <Button
        mt="6"
        ml="3"
        color="white"
        bg="red.500"
        onClick={() => {}}
        _hover={{ bg: "red.600" }}
      >
        Remover todos
      </Button> */}
    </Flex>
  );
};
