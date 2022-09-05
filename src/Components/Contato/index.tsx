import { Flex, Text } from "@chakra-ui/react"
import { ContatoEmail } from "../ContatoEmail"
import { RedesSociais } from "../RedesSociais"

export const Contato = () => {
    return (
        <Flex id="contato" h="100vh" flexDirection="column"  _dark={{background: "#0c0c0d", borderBottom: "2px solid #7f7f7f"}}
        borderBottom="2px solid #212529">
            <Text textAlign='center' mt={["10px","20px"]} fontWeight="bold" fontSize="30px" color="#1747A6">Contato</Text>
            <Flex w="100%" h="100vh" flexDirection={["column", "column", "row"]} justifyContent="space-around" alignItems="center">
                <ContatoEmail/>
                <RedesSociais/>
            </Flex>
            
        </Flex>
    )
}