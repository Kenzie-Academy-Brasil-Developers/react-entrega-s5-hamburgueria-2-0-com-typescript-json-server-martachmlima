import { Flex } from "@chakra-ui/react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useState } from "react";
import { api } from "../../services/api";
import { useHistory } from "react-router-dom";
import { SignUpForm } from "./Form";
import { Side } from "./Side";
import toast from "react-hot-toast";

const signUpSchema = yup.object().shape({
  name: yup.string().required("Nome obrigatório"),
  email: yup.string().required("Email obrigatório").email("Email inválido"),
  password: yup.string().required("Senha obrigatória"),
  confirm_password: yup
    .string()
    .required("Confirmação de senha obrigatória")
    .oneOf([yup.ref("password")], "Senhas diferentes"),
});

interface SignUpData {
  email: string;
  password: string;
  name: string;
  confirm_password: string;
}

export const Signup = () => {
  const [loading, setLoading] = useState(false);

  const {
    formState: { errors },
    register,
    handleSubmit,
  } = useForm<SignUpData>({
    resolver: yupResolver(signUpSchema),
  });

  const handleSignUp = ({ name, email, password }: SignUpData) => {
    setLoading(true);

    api
      .post("/register", { name, email, password })
      .then((response) => {
        setLoading(false);
        toast.success("Cadastro finalizado com sucesso!");
      })
      .catch((err) => {
        setLoading(false);
        toast.error("Email já cadastrado!");
      });
  };

  const history = useHistory();

  return (
    <>
      <Flex
        justifyContent="center"
        alignItems="center"
        padding={["10px 15px", "10px 15px", "0px", "0px"]}
        color="white"
        height={["auto", "auto", "100vh"]}
      >
        <Side />
        <SignUpForm
          errors={errors}
          handleSignUp={handleSubmit(handleSignUp)}
          loading={loading}
          register={register}
        />
      </Flex>
    </>
  );
};
