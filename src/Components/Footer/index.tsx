import { Flex, Text } from "@chakra-ui/react";
import { FaCopyright } from "react-icons/fa";

export const Footer = () => {
  return (
    <Flex
      h="60px"
      justifyContent="flex-start"
      alignItems="center"
      p="5px"
      _dark={{ background: "#0c0c0d" }}
    >
      <FaCopyright fontSize="20px" />
      <Text
        ml={["10px", "15px"]}
        fontSize={["14px", "16px", "18px", "20px"]}
        color="#212529"
        _dark={{color: "#7f7f7f"}}
      >
        Todos os direitos reservados - Jose Vitor{" "}
      </Text>
    </Flex>
  );
};
