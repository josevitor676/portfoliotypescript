import { Button, ButtonProps, Flex } from "@chakra-ui/react";
import {BsMoonStarsFill, BsSun} from "react-icons/bs"

interface DarkModeProps extends ButtonProps {
    colorMode: string;
    toggleColorMode: () => void;
}

export const DarkMode = ({colorMode, toggleColorMode, ...rest}: DarkModeProps) => {
  return (
    <Flex>
      <Button
        aria-label="Toggle Color Mode"
        onClick={toggleColorMode}
        _focus={{ boxShadow: "none" }}
        w="fit-content"
        background="transparent"
        _hover={{background: "transparent"}}
        {...rest}
      >
        {colorMode === "light" ? <BsMoonStarsFill color="#212529"/> : <BsSun color="#7f7f7f" />}
      </Button>
    </Flex>
  );
};
