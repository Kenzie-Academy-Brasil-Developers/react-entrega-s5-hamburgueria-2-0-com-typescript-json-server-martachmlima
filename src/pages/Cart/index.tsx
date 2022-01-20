import { CartList } from "./CartList";
import { useEffect } from "react";
import { useProducts } from "../../contexts/ProductsContext";
import { useAuth } from "../../contexts/AuthContext";
import { useState } from "react";
import { Box, Text } from "@chakra-ui/react";

export const Cart = () => {
  const { cart, deleteProduct } = useProducts();
  const { user, accessToken } = useAuth();
  const [loading, setLoading] = useState(true);

  return (
    <Box>
      {!cart.length ? (
        <Text>Carrinho vazio</Text>
      ) : (
        <CartList loading={loading} products={cart} />
      )}
    </Box>
  );
};
