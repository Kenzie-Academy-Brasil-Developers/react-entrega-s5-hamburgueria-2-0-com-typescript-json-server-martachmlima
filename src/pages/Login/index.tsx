import { Flex } from "@chakra-ui/react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useAuth } from "../../contexts/AuthContext";
import { LoginForm } from "./Form";
import { Side } from "./Side";

const signInSchema = yup.object().shape({
  email: yup.string().required("Email obrigatório").email("Email inválido"),
  password: yup.string().required("Senha obrigatória"),
});

interface SignInData {
  email: string;
  password: string;
}

export const Login = () => {
  const { signIn } = useAuth();

  const {
    formState: { errors },
    register,
    handleSubmit,
  } = useForm<SignInData>({
    resolver: yupResolver(signInSchema),
  });

  const handleSignIn = (data: SignInData) => {
    signIn(data);
  };

  return (
    <Flex
      flexDirection={["column-reverse", "column-reverse", "row", "row"]}
      justifyContent="center"
      alignItems="center"
      padding={["10px 15px", "10px 15px", "0px", "0px"]}
      color="white"
      height={["auto", "auto", "100vh"]}
    >
      <LoginForm
        errors={errors}
        handleSignIn={handleSubmit(handleSignIn)}
        register={register}
      />
      <Side />
    </Flex>
  );
};
