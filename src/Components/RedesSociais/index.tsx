import { Box, Flex, Link, Text } from "@chakra-ui/react"
import {FaLinkedin, FaTwitter, FaInstagram, FaWhatsapp} from "react-icons/fa"
export const RedesSociais = () => {
    return (
        <Flex flexDirection="column">
            <Text mb={["8px","15px"]} fontSize={["22px","28px"]} color="#1747A6" fontWeight='bold' textAlign="center">Minhas Redes Sociais</Text>
            <Flex justifyContent="center">
                <Link href="https://www.linkedin.com/in/jose-vitor-da-silva-santos-775671209/" isExternal mr="15px" >
                    <FaLinkedin fontSize="45px" color="#1747A6" />               
                </Link>
                <Link href="https://www.instagram.com/jose_vitorzss/" isExternal mr="15px" ml="15px">
                    <FaTwitter fontSize="45px" color="#1747A6"/>
                </Link>
                <Link href="https://twitter.com/JosVito94376254" isExternal ml="15px" mr="15px">
                    <FaInstagram fontSize="45px" color="#1747A6"/>
                </Link>
                <Link href="https://wa.me/5518991335192" isExternal ml="15px">
                    <FaWhatsapp fontSize="45px" color="#1747A6"/>
                </Link>
            </Flex>
        </Flex>
    )
}

//https://twitter.com/JosVito94376254
//https://wa.me/5518991335192