import { Box, Button, Grid, Heading, Text, VStack } from "@chakra-ui/react";
import { DeepMap, FieldError, UseFormRegister } from "react-hook-form";
import { FieldValues } from "react-hook-form";
import { useHistory } from "react-router-dom";
import { Input } from "../../components/Input";

interface SignInData {
  email: string;
  password: string;
}

interface LoginFormProps {
  handleSignIn: () => void;
  errors: DeepMap<FieldValues, FieldError>;
  register: UseFormRegister<SignInData>;
  loading: boolean;
}

export const LoginForm = ({
  handleSignIn,
  errors,
  register,
  loading,
}: LoginFormProps) => {
  const history = useHistory();
  return (
    <Grid
      onSubmit={handleSignIn}
      as="form"
      shadow="base"
      padding="30px 15px"
      border="2px solid"
      borderColor="gray.0"
      borderRadius="5px"
      bg="white"
      color="gray.900"
      ml={["0px", "0px", "100px"]}
      mt={["4", "4", "0"]}
      w={["100%", "100%", "40%", "40%"]}
    >
      <Text fontSize="2xl" color="gray.600" fontWeight="bold">
        Login
      </Text>
      <VStack mt="6" spacing="5">
        <Box w="100%">
          <Input
            placeholder="Digite seu email"
            type="name"
            error={errors.email}
            {...register("email")}
          />
        </Box>
        <Input
          type="password"
          placeholder="Digite sua senha"
          error={errors.password}
          {...register("password")}
        />
      </VStack>
      <VStack mt="4" spacing="5">
        <Button
          isLoading={loading}
          bg="green.500"
          w="100%"
          color="white"
          h="60px"
          borderRadius="8px"
          _hover={{
            background: "green.50",
          }}
          type="submit"
        >
          Logar
        </Button>
        <Text color="gray.400">
          Crie sua conta para saborear muitas delícias e <br />
          matar sua fome!
        </Text>
        <Button
          bg="gray.100"
          w="100%"
          color="gray.400"
          h="60px"
          borderRadius="8px"
          onClick={() => history.push("/signup")}
          _hover={{
            background: "gray.300",
            color: "gray.100",
          }}
        >
          Cadastrar
        </Button>
      </VStack>
    </Grid>
  );
};
