import { ReactNode, useCallback, useContext, useState } from "react";
import { createContext } from "react";
import { api } from "../services/api";

interface ProductProviderProps {
  children: ReactNode;
}

interface Product {
  id: string;
  name: string;
  category: string;
  userId: string;
  price: string;
  img: string;
}

interface ProductContextData {
  products: Product[];
  loadProducts: () => Promise<void>;
  deleteProduct: (productId: string, accessToken: string) => Promise<void>;
  searchProduct: (productName: string) => Promise<void>;
  notFound: boolean;
  productNotFound: string;
}

const ProductContext = createContext<ProductContextData>(
  {} as ProductContextData
);

const useProducts = () => {
  const context = useContext(ProductContext);

  if (!context) {
    throw new Error("useTasks must be used within an ProductProvider");
  }
  return context;
};

const ProductProvider = ({ children }: ProductProviderProps) => {
  const [products, setProducts] = useState<Product[]>([]);
  const [notFound, setNotFound] = useState(false);
  const [productNotFound, setProductNotFound] = useState("");

  const loadProducts = useCallback(async () => {
    try {
      const response = await api.get("/products");
      setProducts(response.data);
    } catch (err) {
      console.log(err);
    }
  }, []);

  const deleteProduct = useCallback(
    async (productId: string, accessToken: string) => {
      await api
        .delete(`/cart/${productId}`, {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        })
        .then((_) => {
          const filteredProducts = products.filter(
            (product) => product.id !== productId
          );
          setProducts(filteredProducts);
        })
        .catch((err) => console.log(err));
    },
    [products]
  );

  const searchProduct = useCallback(async (productName: string) => {
    const response = await api.get(`/products?name_like=${productName}`);

    if (!response.data.length) {
      setProductNotFound(productName);
      return setNotFound(true);
    }

    setNotFound(false);
    setProducts(response.data);
  }, []);

  return (
    <ProductContext.Provider
      value={{
        deleteProduct,
        notFound,
        loadProducts,
        productNotFound,
        products,
        searchProduct,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};

export { useProducts, ProductProvider };
