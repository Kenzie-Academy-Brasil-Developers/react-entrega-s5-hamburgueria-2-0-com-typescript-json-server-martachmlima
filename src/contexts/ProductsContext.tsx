import { ReactNode, useCallback, useContext, useState } from "react";
import { createContext } from "react";
import { api } from "../services/api";
import { AxiosResponse } from "axios";
import { toast } from "react-hot-toast";

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
  addToCart: (data: Product, accessToken: string) => Promise<void>;
  searchProduct: (productName: string) => Promise<void>;
  notFound: boolean;
  productNotFound: string;
  loadCart: (accessToken: string) => Promise<void>;
  cart: Product[];
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
  const [cart, setCart] = useState<Product[]>([]);

  const loadProducts = useCallback(async () => {
    try {
      const response = await api.get("/products");
      setProducts(response.data);
    } catch (err) {
      console.log(err);
    }
  }, []);

  const searchProduct = useCallback(async (productName: string) => {
    const response = await api.get(`/products?name_like=${productName}`);

    if (!response.data.length) {
      setProductNotFound(productName);
      return setNotFound(true);
    }

    setNotFound(false);
    setProducts(response.data);
  }, []);

  const addToCart = useCallback(async (data: Product, accessToken: string) => {
    api
      .post("/cart", data, {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      })
      .then((response: AxiosResponse<Product>) => {
        setCart([...cart, response.data]);
        toast.success("Produto adicionado no carrinho com sucesso");
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const loadCart = useCallback(
    async (accessToken: string) => {
      api
        .get("/cart", {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        })
        .then((response: AxiosResponse<Product>) => {
          setCart([...cart, response.data]);
        })
        .catch((err) => console.log(err));
    },
    [cart]
  );

  /* const removeAllProducts = () => {
    
  } */

  const deleteProduct = useCallback(
    async (productId: string, accessToken: string) => {
      await api
        .delete(`/cart/${productId}`, {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        })
        .then((_) => {
          const filteredProducts = cart.filter(
            (product) => product.id !== productId
          );
          setCart(filteredProducts);
        })
        .catch((err) => console.log(err));
    },
    [cart]
  );

  return (
    <ProductContext.Provider
      value={{
        deleteProduct,
        notFound,
        loadProducts,
        productNotFound,
        products,
        searchProduct,
        addToCart,
        loadCart,
        cart,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};

export { useProducts, ProductProvider };
