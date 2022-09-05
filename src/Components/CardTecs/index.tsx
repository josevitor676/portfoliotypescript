import { Box, Flex, Progress, Text } from "@chakra-ui/react";
import { IconType } from "react-icons/lib";

interface CardTecsProps {
  nameTec: string;
  descTec: string;
  icon: IconType;
  valorProgress: number;
}

export const CardTecs = ({
  descTec,
  nameTec,
  valorProgress,
  icon: Icon,
}: CardTecsProps) => {
  return (
    <Flex
      flexDirection="column"
      width="270px"
      padding="10px"
      borderRadius="5px"
      border="2px solid #212529"
      height="200px"
      justifyContent="space-between"
      margin="8px"
      _dark={{border: "2px solid #7f7f7f"}}
      _hover={{ transform: "translateY(-7px)", borderColor: "#212529"}}
      transition="border 0.2s, ease 0s, transform 0.2s"
      boxShadow="base"
    >
      <Box 
      display="flex"
      justifyContent="space-between"
      alignContent="center"
      color="#212529"
      _dark={{color: "#7f7f7f"}}
      >
        <Text fontSize="22px" fontWeight="bold" >{nameTec}</Text>
        <Icon fontSize="24px"/>
      </Box>
      <Text 
      fontSize="13px" 
      textAlign="justify" 
      color="#212529"
      _dark={{color: "#7f7f7f"}}
      >
        {descTec}
      </Text>
      <Box>
        {
            valorProgress <= 30 ?
            <Text color="#212529"
            _dark={{color: "#7f7f7f"}}>Nivel Iniciante</Text>
            : valorProgress >= 30 && valorProgress <= 60 ?
            <Text color="#212529"
            _dark={{color: "#7f7f7f"}}>Nivel Intermediário</Text>
            :
            <Text color="#212529"
            _dark={{color: "#7f7f7f"}}>Nivel Avançado</Text>
            
        }
        <Progress mt="1.5" value={valorProgress} colorScheme="facebook" _dark={{colorScheme:"facebook"}} borderRadius="10px" />
      </Box>
    </Flex>
  );
};
