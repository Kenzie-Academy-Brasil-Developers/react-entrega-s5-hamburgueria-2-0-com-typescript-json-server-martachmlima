import { Header } from "../../components/Header";
import { useState } from "react";
import { useEffect } from "react";
import { useAuth } from "../../contexts/AuthContext";
import { useProducts } from "../../contexts/ProductsContext";
import { ProductList } from "./ProductList";

interface Product {
  id: string;
  name: string;
  category: string;
  userId: string;
  price: string;
  img: string;
}

export const Home = () => {
  const [loading, setLoading] = useState(true);
  const { user, accessToken } = useAuth();
  const { products, searchProduct, loadProducts, deleteProduct } =
    useProducts();

  useEffect(() => {
    loadProducts().then((res) => setLoading(false));
  }, []);

  return (
    <>
      <Header />
      <ProductList loading={loading} products={products} />
    </>
  );
};
