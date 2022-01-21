import { Box, Grid, Flex } from "@chakra-ui/react";
import { ProductCard } from "../../components/ProductCard";

interface Product {
  id: string;
  name: string;
  category: string;
  userId: string;
  price: string;
  img: string;
}

interface ProductListProps {
  products: Product[];
}

export const ProductList = ({ products }: ProductListProps) => (
  <Box>
    <Flex
      flexWrap={["nowrap", "nowrap", "wrap"]}
      justifyContent={["start", "start", "space-evenly"]}
      w="98vw"
      overflow={["scroll", "scroll", "auto"]}
      paddingX="8"
      mt="8"
      mb="8"
      flexDirection="row"
    >
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </Flex>
  </Box>
);
