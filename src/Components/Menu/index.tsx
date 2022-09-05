import { HamburgerIcon } from "@chakra-ui/icons";
import { Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import {Link} from "react-scroll/modules"

export const MenuOptions = () => {
  return (
    <Menu>
      <MenuButton as="button" aria-label="Options">
        <HamburgerIcon
          fontSize="35px"
          color="black"
          _dark={{ color: "#7f7f7f" }}
        />
      </MenuButton>
      <MenuList
        color="#212529"
        _dark={{color: "#7f7f7f", background: "#0c0c0d"}}
        
      >
        <Link to="sobre" spy smooth duration={500}>
          <MenuItem
          fontWeight="bold"
          fontSize="18px"
          _hover={{
            color: "#1747A6",
            transition: "ease 0.6s",
            opacity: "0.8",
          }}
          >
            Sobre
          </MenuItem>
        </Link>
        <Link to="tecnologia" spy smooth duration={500}>
          <MenuItem
          fontWeight="bold"
          fontSize="18px"
          _hover={{
            color: "#1747A6",
            transition: "ease 0.6s",
            opacity: "0.8",
          }}
          >
            Tecnologias
          </MenuItem>
        </Link>
        <Link to="projetos" spy smooth duration={500}>
          <MenuItem
          fontWeight="bold"
          fontSize="18px"
          _hover={{
            color: "#1747A6",
            transition: "ease 0.6s",
            opacity: "0.8",
          }}
          >
            Projetos
          </MenuItem>
        </Link>
        <Link to="contato" spy smooth duration={500}>
          <MenuItem
          fontWeight="bold"
          fontSize="18px"
          _hover={{
            color: "#1747A6",
            transition: "ease 0.6s",
            opacity: "0.8",
          }}
          >
            Contato
          </MenuItem>
        </Link>
      </MenuList>
    </Menu>
  );
};
