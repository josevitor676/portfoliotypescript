import { extendTheme, theme as ChakraTheme } from "@chakra-ui/react";

export const theme = extendTheme({
    fonts: {
        heading: 'Readex Pro',
        body: 'Readex Pro', 
    },
    colors: {
        grey: {
            100: "#7f7f7f",
            200: "#474559",
            300: "#212529",
        },
        bg: {
            light: "#ffffff",
            dark: "#0c0c0d",
        },
        blue: {
            100: "#1747A6"
        }
    }
})