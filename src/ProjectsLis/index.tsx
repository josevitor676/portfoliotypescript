import Doit from "../Assets/doit.png"
import Formulario from "../Assets/formulario.png"
import Hamburgueria from "../Assets/hamburgueria.png"
import Kenziehub from "../Assets/kenziehub.png"
import Kenzieshop from "../Assets/kenzieShop.png"
import Travel from "../Assets/travel.png"
import Weather from "../Assets/weather.png"

export const ProjectsList = [
    {
        id:1,
        name: "Doit", 
        descricao: "Projeto de um gerenciador de tarefas",
        techs: ["Typescript","Chakra-UI", "React", "Axios", "React-hook-form","React-router-dom","Yup"],
        img: Doit,
        github: "https://github.com/josevitor676/doit_typescript",
        vercel: "https://do-it-type-script.vercel.app/",
    },
    {
        id:2,
        name: "Weather Now", 
        descricao: "Projeto que realiza a consulta do clima na sua cidade e mostra previsões para os próximos dias",
        techs: ["Typescript","Chakra-UI", "React", "Axios", "React-hook-form","React-router-dom","Yup"],
        img: Weather,
        github: "https://github.com/josevitor676/weather_typescript",
        vercel: "https://weather-jvss.vercel.app/",
    },
    {
        id:3,
        name: "Travel", 
        descricao: "Página de um site de viagens ",
        techs: ["React", "Styled-Components", "React-icons","React-scroll"],
        img: Travel,
        github: "https://github.com/josevitor676/travel",
        vercel: "https://travel-g6ifub7ar-josevitor676.vercel.app/",
    },
    {
        id:4,
        name: "Kenzie Shop Com Contenxt Api", 
        descricao: "Projeto Feito em React e Context API que simula uma loja Online",
        techs:  ["React", "JavaScript", "Context-API", "Styled-Components"],
        img: Kenzieshop,
        github: "https://github.com/Kenzie-Academy-Brasil-Developers/react-entrega-s3-kenzishop-com-context-api-josevitor676",
        vercel: "https://kenzishop-com-context-api-nine.vercel.app/",
    },
    {
        id:5,
        name: "Hamburgueria", 
        descricao: "Projeto Feito em React que simula uma loja de Fast Food",
        techs: ["React", "JavaScript","Styled-Components"],
        img: Hamburgueria,
        github: "https://github.com/Kenzie-Academy-Brasil-Developers/react-entrega-s1-hamburgueria-da-kenzie-josevitor676",
        vercel: "https://react-entrega-s1-hamburgueria-da-kenzie-parte03.vercel.app/",
    },
    {
        id:6,
        name: "Formulario de Cadastro", 
        descricao: "Projeto de um Formulario com validações feito com yup e react-hook-form",
        techs: ["React", "JavaScript","Styled-Components", "React-Router-Dom", "Yup", "React-Hook-Form"],
        img: Formulario,
        github: "https://github.com/Kenzie-Academy-Brasil-Developers/react-entrega-s2-formulario-de-cadastro-josevitor676",
        vercel: "https://react-entrega-s2-formulario-de-cadastro-peach.vercel.app/",
    },
    {
        id:7,
        name: "Kenzie Hub", 
        descricao: "Projeto feito para o usuario poder adicionar tarefas para cumprir, ele pode editar as tarefas e também excluir as tarefas",
        techs: ["React", "JavaScript", "React-Router-Dom", "Yup", "React-Hook-Form", "Axios", "Styled-Componets", "React-Modal"],
        img: Kenziehub,
        github: "https://github.com/Kenzie-Academy-Brasil-Developers/react-entrega-s2-kenzie-hub-josevitor676",
        vercel: "https://react-entrega-s2-kenzie-hub-tau.vercel.app/",
    },
]