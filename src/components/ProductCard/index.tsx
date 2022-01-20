import {
  Box,
  Button,
  Center,
  Flex,
  Heading,
  HStack,
  Image,
  Text,
} from "@chakra-ui/react";
import { FaTrash } from "react-icons/fa";
import { useAuth } from "../../contexts/AuthContext";
import { theme } from "../../styles/theme";
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
}

export const ProductCard = ({ product }: CardProps) => {
  const { deleteProduct, addToCart } = useProducts();
  const { accessToken, user } = useAuth();

  return (
    <Box
      cursor="pointer"
      _hover={{ transform: "translateY(-7px)", borderColor: "gray.100" }}
      transition="border 0.2s, ease 0s, transform 0.2s"
      borderWidth="1px"
      borderColor="gray.50"
      boxShadow="base"
      padding="7"
      w={["80vw", "auto"]}
    >
      <Flex justify="space-between">
        <Box>
          <Image src={product.img} />
        </Box>
        <Heading as="h1" size="md">
          {product.name}
        </Heading>
        <Box w="100%" mt="4">
          <Text> {product.category} </Text>
          <Text>
            R{"$ "}
            {Number(product.price).toFixed(2)}
          </Text>
        </Box>
        <Button onClick={() => addToCart(product, accessToken)}>
          Adicionar ao carrinho
        </Button>

        <HStack spacing="4">
          <Center
            as="button"
            w="30px"
            h="30px"
            borderWidth="1px"
            borderRadius="5px"
            borderColor="gray.200"
            bgColor="white"
            onClick={() => deleteProduct(product.id, accessToken)}
          >
            <FaTrash color={theme.colors.gray[300]} />
          </Center>
        </HStack>
      </Flex>
    </Box>
  );
};
