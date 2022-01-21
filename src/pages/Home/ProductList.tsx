import { Box, Grid } from "@chakra-ui/react";
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
    <Grid
      wrap="wrap"
      w="100%"
      templateColumns="repeat(auto-fill, minmax(300px, 1fr))"
      gap={10}
      paddingX="8"
      mt="8"
      mb="8"
    >
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </Grid>
  </Box>
);
