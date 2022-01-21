import { Grid, Heading, VStack, Text, Button, Flex } from "@chakra-ui/react";
import {
  DeepMap,
  FieldError,
  FieldValues,
  UseFormRegister,
} from "react-hook-form";
import { Input } from "../../components/Input";
import { useHistory } from "react-router-dom";

interface SignUpData {
  email: string;
  password: string;
  name: string;
  confirm_password: string;
}

interface SignUpFormProps {
  handleSignUp: () => void;
  errors: DeepMap<FieldValues, FieldError>;
  register: UseFormRegister<SignUpData>;
}

export const SignUpForm = ({
  handleSignUp,
  errors,
  register,
}: SignUpFormProps) => {
  const history = useHistory();

  return (
    <Grid
      onSubmit={handleSignUp}
      as="form"
      shadow="base"
      w={["100%", "100%", "40%", "40%"]}
      padding="40px 25px"
      border="2px solid"
      borderColor="gray.0"
      borderRadius="5px"
      bg="white"
      color="gray.900"
      mt={["4", "4", "0", "0"]}
    >
      <Flex justifyContent="end">
        <Text
          as="button"
          cursor="pointer"
          color="gray.400"
          fontWeight="bold"
          textDecorationLine="underline"
          onClick={() => history.push("/")}
        >
          Retornar para o login
        </Text>
      </Flex>
      <Heading size="lg" color="gray.600">
        Cadastro
      </Heading>
      <VStack spacing="5" mt="6">
        <Input {...register("name")} error={errors.name} placeholder="Nome" />
        <Input
          {...register("email")}
          type="email"
          error={errors.email}
          placeholder="Email"
        />

        <Input
          {...register("password")}
          error={errors.password}
          type="password"
          placeholder="Senha"
        />
        <Input
          {...register("confirm_password")}
          error={errors.confirm_password}
          type="password"
          placeholder="Confirmar senha"
        />
      </VStack>
      <Button
        mt="8"
        bg="gray.100"
        w="100%"
        color="gray.400"
        h="60px"
        borderRadius="8px"
        _hover={{
          background: "gray.300",
          color: "gray.100",
        }}
        type="submit"
      >
        Cadastrar
      </Button>
    </Grid>
  );
};
