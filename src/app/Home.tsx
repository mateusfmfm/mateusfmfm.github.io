
import Scaffold from "./components/layout/Scaffold";
import Education from "./components/sections/Education";
import Experiences from "./components/sections/Experiences";
import Intro from "./components/sections/Intro";
import Projects from "./components/sections/Projects";
import Skills from "./components/sections/Skills";
import SoftSkills from "./components/sections/SoftSkills";

export default function Home() {
    return (
        <Scaffold>

            {/* Seção 1: Hero / Introdução */}
            <Intro />

            {/* Seção 2: Skills */}
            <Skills />

            {/* Seção 3: Experiência Profissional (Onde colocaremos as abas depois) */}
            <Experiences />

            <Education />

            <SoftSkills />
            
            {/* Seção 4: Projetos em Destaque */}
            <Projects />
            
        </Scaffold>
    );
}