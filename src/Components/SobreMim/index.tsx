import { Box, Flex, List, ListItem, Text } from "@chakra-ui/react"
export const SobreMim = () => {
    return (
        <Flex
        id="sobre"
        flexDirection={["column","column","row"]}
        justifyContent="space-around" 
        alignItems="center" 
        h="100vh" 
        background="#fff"
        _dark={{background: "#0c0c0d", borderBottom: "2px solid #7f7f7f"}}
        borderBottom="2px solid #212529"
        >
            <Box>
                <Text 
                as="h2"
                textAlign="center"
                mb="15px"
                color="#1747A6"
                fontSize={["25px","30px","40px"]}
                fontWeight="bold"
                >
                    Sobre mim
                </Text>
                <Text
                w={["300px", "350px","350px","500px"]}
                fontSize={["14px","16px","18px","18px"]}
                textAlign="justify"
                lineHeight={["22px","25px","27px","30px"]}
                color="#353535"
                _dark={{color: "#ffffff"}}
                >
                    Meu contato com tecnologia começou através do meu primo que já trabalhava na área e me mostrou como funcionava e a partir desse dia comecei a estudar programação e fazer cursos. Gosto da área porque com a programação posso mudar a vida de várias pessoas com meus softwares e aplicativos meus objetivos são resolver problemas e conseguir ajudar muitas pessoas através da programação.
                </Text>
            </Box>
            <Box>
                <List spacing={5}>
                    <ListItem fontSize={["15px","16px","18px","20px"]} fontWeight="bold" color="#353535" _dark={{color: "#ffffff"}}>
                        <Text><Text as="span" color="#1747A6">Nome:</Text> Jose Vitor da Silva Santos</Text>
                    </ListItem>
                    <ListItem fontSize={["15px","16px","18px","20px"]} fontWeight="bold" color="#353535" _dark={{color: "#ffffff"}}>
                        <Text><Text as="span" color="#1747A6">Idade:</Text> 20 Anos</Text>
                    </ListItem>
                    <ListItem fontSize={["15px","16px","18px","20px"]} fontWeight="bold" color="#353535" _dark={{color: "#ffffff"}}>
                        <Text><Text as="span" color="#1747A6">Endereço:</Text> Maringá, Paraná, Brasil</Text>
                    </ListItem>
                    <ListItem fontSize={["15px","16px","18px","20px"]} fontWeight="bold" color="#353535" _dark={{color: "#ffffff"}}>
                        <Text><Text as="span" color="#1747A6">Telefone:</Text> (18) 991335192</Text>
                    </ListItem>
                    <ListItem fontSize={["15px","16px","18px","20px"]} fontWeight="bold" color="#353535" _dark={{color: "#ffffff"}}>
                        <Text><Text as="span" color="#1747A6">E-mail:</Text> jvss1036@gmail.com</Text>
                    </ListItem>
                </List>
            </Box>
        </Flex>
    )
}