import { Center, Flex } from "@chakra-ui/react";
import { useForm } from "react-hook-form";
import { FaSearch } from "react-icons/fa";
import { theme } from "../../styles/theme";
import { Input } from "../Input";
import { useProducts } from "../../contexts/ProductsContext";

interface SearchData {
  name: string;
}

export const Search = () => {
  const { searchProduct } = useProducts();

  const handleSearch = ({ name }: SearchData) => {
    searchProduct(name);
  };

  const { register, handleSubmit } = useForm<SearchData>();

  return (
    <Flex mt="5" w="100%" mr="6" position="relative">
      <Flex as="form" onSubmit={handleSubmit(handleSearch)}>
        <Input
          h="60px"
          placeholder="Digitar Pesquisa"
          w={["100%", "100%", "35vw"]}
          {...register("name")}
        ></Input>
        <Center
          borderRadius="8px"
          as="button"
          ml="2"
          w="50px"
          h="40px"
          fontSize="2xl"
          bg="green.500"
          position="absolute"
          top="18%"
          left={["71%", "78%"]}
        >
          <FaSearch color={theme.colors.white} />
        </Center>
      </Flex>
    </Flex>
  );
};
