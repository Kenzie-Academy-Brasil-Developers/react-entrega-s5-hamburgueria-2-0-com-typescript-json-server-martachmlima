import { Box, Button, Flex, Heading, Image, Text } from "@chakra-ui/react";
import { useAuth } from "../../contexts/AuthContext";
import { useProducts } from "../../contexts/ProductsContext";

interface Product {
  id: string;
  name: string;
  category: string;
  userId: string;
  price: string;
  img: string;
}

interface CardProps {
  product: Product;
  isRemovable?: boolean;
}

export const ProductCard = ({ product, isRemovable = false }: CardProps) => {
  const { deleteProduct, addToCart } = useProducts();
  const { accessToken } = useAuth();

  return (
    <Box
      cursor="pointer"
      _hover={{ transform: "translateY(-7px)", borderColor: "green.500" }}
      transition="border 0.2s, ease 0s, transform 0.2s"
      borderWidth="2px solid"
      borderColor="gray.100"
      boxShadow="base"
      w={["270px", "300px"]}
      h="346px"
    >
      <Flex flexDirection="column" w="100%">
        <Flex bg="gray.0" w="100%" h="150px" justifyContent="center">
          <Image src={product.img} h="157px" />
        </Flex>
        <Heading ml="3" as="h1" size="md" mt="4" color="gray.600">
          {product.name}
        </Heading>
        <Box w="100%" mt="4" ml="3">
          <Text color="gray.300"> {product.category} </Text>
          <Text mt="4" color="green.500" fontWeight="bold">
            R{"$ "}
            {Number(product.price).toFixed(2)}
          </Text>
        </Box>
        {!isRemovable && (
          <Button
            mt="4"
            ml="3"
            color="white"
            bg="gray.400"
            w="106px"
            onClick={() => addToCart(product, accessToken)}
            _hover={{ bg: "green.500" }}
          >
            Adicionar
          </Button>
        )}
        {isRemovable && (
          <Button
            mt="4"
            ml="3"
            color="white"
            bg="gray.400"
            w="106px"
            onClick={() => deleteProduct(product.id, accessToken)}
            _hover={{ bg: "red.600" }}
          >
            Remover
          </Button>
        )}
      </Flex>
    </Box>
  );
};
