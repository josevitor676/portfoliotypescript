import React from 'react';
import { Contato } from './Components/Contato';
import { Footer } from './Components/Footer';
import { Header } from './Components/Header';
import { Main } from './Components/Main';
import { Projects } from './Components/Projects';
import { SobreMim } from './Components/SobreMim';
import { Tecnlogias } from './Components/Tecnologias';
import { ProjectsList } from './ProjectsLis';
function App() {
  return (
    <>
    <Header/>
    <Main/>
    <SobreMim/>
    <Tecnlogias/>
    <Projects projects={ProjectsList}/>
    <Contato/>
    <Footer/>
    </>
  );
}

export default App;
