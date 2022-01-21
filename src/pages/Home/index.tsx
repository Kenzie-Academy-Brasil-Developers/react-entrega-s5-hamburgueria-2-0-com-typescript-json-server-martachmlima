import { Header } from "../../components/Header";
import { useEffect } from "react";
import { useProducts } from "../../contexts/ProductsContext";
import { ProductList } from "./ProductList";
import { Search } from "../../components/Header/Search";
import { Box } from "@chakra-ui/react";

interface Product {
  id: string;
  name: string;
  category: string;
  userId: string;
  price: string;
  img: string;
}

export const Home = () => {
  const { products, loadProducts } = useProducts();

  useEffect(() => {
    loadProducts();
  }, []);

  return (
    <>
      <Header />
      <Box ml="2" display={["block", "none"]}>
        <Search />
      </Box>
      <ProductList products={products} />
    </>
  );
};
