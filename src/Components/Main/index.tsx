import { Flex, Img } from "@chakra-ui/react"
import { Apresentation } from "../Apresentation"
import { Header } from "../Header"
import Developer from "../../Assets/developer.png"


export const Main = () => {
    return (
        <Flex flexDirection='column' h="100vh" _dark={{background: "#0c0c0d", borderBottom: "2px solid #7f7f7f"}} borderBottom="2px solid #212529">
          <Flex 
          h="100vh"
          flexDirection={["column", "column", "row", "row"]} 
          justifyContent="space-around" 
          alignItems="center"
          >
            <Apresentation/>
            <Img src={Developer} alt="Pessoa Programando" w={["200px","200px","300px", "400px", "500px"]}/>
          </Flex> 
        </Flex>
        
    )
}