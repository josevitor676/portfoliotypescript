import {
  Button,
  Flex,
  Heading,
  Img,
  Link,
  List,
  ListItem,
  Text,
  VStack,
} from "@chakra-ui/react";
import {
  Provider,
  Carousel,
  LeftButton,
  RightButton,
} from "chakra-ui-carousel";
import { ReactNode } from "react";

interface ProjectsList {
  id: number;
  name: string;
  descricao: string;
  techs: string[];
  img: string;
  github: string;
  vercel: string;
}

interface ProjectsListProps {
  projects: ProjectsList[];
  // children?:ReactNode[];
}

export const Projects = ({ projects }: ProjectsListProps) => {
  return (
    <Flex
      flexDirection="column"
      h="100vh"
      justifyContent="space-around"
      _dark={{ background: "#0c0c0d", borderBottom: "2px solid #7f7f7f" }}
      borderBottom="2px solid #212529"
      id="projetos"
    >
      <Text
        textAlign="center"
        color="#1747A6"
        fontSize={["25px", "27px", "30px", "35px"]}
        fontWeight="bold"
      >
        Projetos
      </Text>
      <Provider>
        <Carousel gap={0.1}>
          {/* {children} */}
          {projects.map((project) => (
            <Flex
              key={project.id}
              flexDirection="column"
              justifyContent="right"
              overflow="hidden"
              rounded={5}
              flex={1}
              h={["420px","420px","425px","415px","auto"]}
              p={3}
              m={2}
              border="2px solid #212529"
              _dark={{ border: "2px solid #7f7f7f" }}
            >
              <Img
                src={project.img}
                alt={project.name}
                w={["70%","75%","75%","70%","75%"]}
                m="0 auto"
                borderRadius="10px"
                border="2px solid #212529"
                _dark={{ border: "2px solid #7f7f7f" }}
              />
              <Flex
                flexDirection="column"
                mt="5px"
                h="100%"
                justifyContent="space-around"
              >
                <Flex
                  flexDirection="column"
                  color="#212529"
                  _dark={{ color: "#7f7f7f" }}
                >
                  <Text fontWeight="bold" fontSize="16px">
                    Nome do Projeto: {project.name}
                  </Text>
                  <Text fontSize="14px">
                    <Text fontWeight="bold"fontSize="16px">Descrição:</Text>
                    {project.descricao}
                  </Text>
                  <Text fontSize="16px" fontWeight="bold">
                    Tecnologias Usadas:
                  </Text>
                  <List display="flex" flexDirection="row" flexWrap="wrap">
                    {project.techs.map((tech) => (
                      <ListItem m="3px" fontSize="14px">
                        {tech}.
                      </ListItem>
                    ))}
                  </List>
                </Flex>
                <Flex>
                  <Link
                    mr="20px"
                    p="4px"
                    borderRadius="10px"
                    background="#eeeeee"
                    color="#5b5b5b"
                    _hover={{ color: "#1747A6", transition: "ease 0.6s" }}
                    fontWeight="bold"
                    href={project.github}
                    isExternal
                  >
                    Git Hub
                  </Link>
                  <Link
                    ml="20px"
                    p="4px"
                    borderRadius="10px"
                    background="#eeeeee"
                    color="#5b5b5b"
                    _hover={{ color: "#1747A6", transition: "ease 0.6s" }}
                    fontWeight="bold"
                    href={project.vercel}
                    isExternal
                  >
                    Site
                  </Link>
                </Flex>
              </Flex>
            </Flex>
          ))}
        </Carousel>
        <Flex justifyContent="center">
          <LeftButton
            width="150px"
            background="#1747A6"
            color="white"
            _hover={{background: "#1747A6"}}
            _dark={{ background: "#1747A6" }}
            m="7px"
          />
          <RightButton
            width="150px"
            background="#1747A6"
            color="white"
            _hover={{background: "#1747A6"}}
            _dark={{ background: "#1747A6" }}
            m="7px"
          />
        </Flex>
      </Provider>
    </Flex>
  );
};
