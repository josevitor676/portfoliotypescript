import {
  Box,
  Button,
  Flex,
  HStack,
  Input,
  Text,
  Textarea,
  useToast,
  VStack,
} from "@chakra-ui/react";
import emailjs from "@emailjs/browser";

export const ContatoEmail = () => {
  const toast = useToast();

  

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "gmailMessage",
        "template_fgqkbtp",
        e.target,
        "286lCB8Z9KEyjJMVm"
      )
      .then(
        (result) => {
          toast({
            title: "Email enviado com sucesso",
            status: "success",
            duration: 2000,
            isClosable: true,
            position: "top",
          });
        },
        (error) => {
          toast({
            title: "Opss Algo deu errado!",
            status: "error",
            duration: 2000,
            isClosable: true,
            position: "top",
          });
        }
      );
    e.target.reset();
  };

  return (
    <Flex
      as="form"
      onSubmit={sendEmail}
      flexDirection="column"
      p="12px"
      border="2px solid"
      w={["90%", "80%", "50%", "40%"]}
      borderRadius="10px"
      borderColor="#1747A6"
    >
      <Text
        textAlign="center"
        mb="20px"
        fontSize="25px"
        color="#1747A6"
        fontWeight="bold"
      >
        Mande um Email
      </Text>
      <Flex flexDirection="column" spacing={3}>
        <Input
          type="text"
          placeholder="Nome"
          name="name"
          color="#1747A6"
          focusBorderColor="#1747A6"
          borderColor="#1747A6"
          border="2px solid"
          _hover={{ borderColor: "#1747A6" }}
          _placeholder={{ color: "#1747A6" }}
          mb={["12px", "15px"]}
        />
        <Input
          type="text"
          placeholder="Email"
          name="email"
          color="#1747A6"
          focusBorderColor="#1747A6"
          borderColor="#1747A6"
          border="2px solid"
          _hover={{ borderColor: "#1747A6" }}
          _placeholder={{ color: "#1747A6" }}
          mb={["12px", "15px"]}
        />

        <Textarea
          placeholder="Digite sua mensagem"
          name="message"
          color="#1747A6"
          focusBorderColor="#1747A6"
          borderColor="#1747A6"
          border="2px solid"
          _hover={{ borderColor: "#1747A6" }}
          _placeholder={{ color: "#1747A6" }}
          mb={["12px", "15px"]}
        />

        <Button
          type="submit"
          w="100%"
          background="#1747A6"
          color="white"
          _hover={{ background: "#1747A6", color: "white" }}
        >
          Enviar
        </Button>
      </Flex>
    </Flex>
  );
};
