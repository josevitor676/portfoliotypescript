import { Box, Flex, Text } from "@chakra-ui/react"
import { CardTecs } from "../CardTecs"
import {FaReact } from "react-icons/fa"
import {SiTypescript, SiJavascript, SiCss3, SiHtml5, SiGithub, SiRedux, SiStyledcomponents} from 'react-icons/si'


export const Tecnlogias = () => {
    return (
        <Flex id="tecnologia" flexDirection="column" h={["auto","auto", "auto", "auto", "100vh"]} justifyContent="space-around" _dark={{background: "#0c0c0d", borderBottom: "2px solid #7f7f7f"}} borderBottom="2px solid #212529">

            <Text fontSize={["25px","30px","40px"]} fontWeight="bold" color="#1747A6" textAlign="center" mt="20px">Tecnologias</Text>


            <Box mt="15px" display="flex" flexDirection='row' flexWrap="wrap" justifyContent="center">
                <CardTecs nameTec="React" valorProgress={100} icon={FaReact} descTec="O React é uma biblioteca JavaScript de código aberto com foco em criar interfaces de usuário em páginas web."/>

                <CardTecs nameTec="TypeScript" valorProgress={85} icon={SiTypescript} descTec="TypeScript é uma linguagem de programação de código aberto desenvolvida pela Microsoft."/>

                <CardTecs nameTec="JavaScript" valorProgress={100} icon={SiJavascript} descTec="JavaScript é uma linguagem de programação interpretada estruturada, de script em alto nível com tipagem dinâmica fraca e multiparadigma."/>

                <CardTecs nameTec="CSS3" valorProgress={95} icon={SiCss3} descTec="Cascading Style Sheets é um mecanismo para adicionar estilo a um documento web."/>

                <CardTecs nameTec="HTML5" valorProgress={100} icon={SiHtml5} descTec="HTML é uma linguagem de marcação utilizada na construção de páginas na Web"/>

                <CardTecs nameTec="Git" valorProgress={80} icon={SiGithub} descTec="Git é um sistema de controle de versões distribuído, usado principalmente no desenvolvimento de software."/>

                <CardTecs nameTec="Redux" valorProgress={70} icon={SiRedux} descTec="Redux é uma biblioteca JavaScript de código aberto para gerenciar o estado do aplicativo."/>

                <CardTecs nameTec="Styled-components" valorProgress={100} icon={SiStyledcomponents} descTec="Styled components é uma biblioteca que possibilita escrever códigos CSS dentro do JavaScript"/>

            </Box>
        </Flex>
    )
}
