import { Box, Flex, Text, useColorMode } from "@chakra-ui/react"
import { DarkMode } from "../DarkMode"
import { MenuOptions } from "../Menu"

export const Header = () => {

    const {colorMode, toggleColorMode} = useColorMode();

    return (
        <Flex 
        w="100%"
        justifyContent="space-between"
        borderBottom="2px solid #212529"
         _dark={{background: "#0c0c0d", borderBottom: "2px solid #7f7f7f"}}
        h="70px"
        alignItems="center"
        >
            <Text 
            marginLeft="30px"
            fontSize={["22px","37px"]} 
            fontWeight="bold"
            _hover={{
                color: "#1747A6", 
                transition: "ease 0.6s",
                opacity: "0.8",
            }}
            >
                Jose Vitor
            </Text>
            <Box display="flex" marginRight="30px">
                <MenuOptions/>
                <DarkMode colorMode={colorMode} toggleColorMode={toggleColorMode} marginLeft="15px"/>
            </Box>
        </Flex>
    )
}