import { useState, useRef, useEffect} from "react";
import Card from "../components/Card";
import ComitePrograma from "../components/ComitePrograma";
import { SlArrowDown} from "react-icons/sl";
import { BannerWASHES2024 } from "../components/bannerWASHES2024";
import { TopicoDeInteresse } from "../components/topicoDeInteresse";
import { ChamadaDeTrabalhos } from "../components/ChamadaDeTrabalhos";
import { Programacao } from "../components/Programacao";
import { dadosChamadaDeTrabalho } from "../data/dadosChamadaDeTrabalhos";
import { dadosProgramacao } from "../data/dadosProgramacao";
import { dadosMembros } from "../data/dadosMembros";
import { dadosCoordenadores } from "../data/dadosCoordenadores";

const Washes2024 = () => {
  
  const [isDropdownOpen, setDropdownOpen] = useState(false); // Controle do dropdown
  const contentRef = useRef(null); 

  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen); // Alterna entre abrir e fechar
  };

  useEffect(() => {
    if (isDropdownOpen && contentRef.current) {
      contentRef.current.style.maxHeight = `${contentRef.current.scrollHeight}px`;
    } else if (contentRef.current) {
      contentRef.current.style.maxHeight = '0px';
  }}, [isDropdownOpen]);

  return (
    <section>
      <BannerWASHES2024/>
      
      <div className="container mx-auto text-[#2f2f2f] flex flex-col lg:gap-5 gap-2 my-20">
        <h1 className="font-bold lg:text-3xl text-2xl">Programação</h1>
        {dadosProgramacao.map((dados, index) => (
          <Programacao
            key={index}
            data={dados.data}
            horarioDeInicio={dados.horarioDeInicio}
            apresentador={dados.apresentador}
            sessao={dados.sessao}
            programacao={dados.programacao}
          />
        ))}
      </div>
      <TopicoDeInteresse/>

      <div className="container my-16 mx-auto py-2 flex flex-col gap-5 text-[#2f2f2f]">
        <h1 className="font-bold lg:text-3xl text-2xl">Chamada de Trabalhos</h1>
        {dadosChamadaDeTrabalho.map((dados, index) => (
          <ChamadaDeTrabalhos
            key={index}
            titulo={dados.titulo}
            conteudo={dados.conteudo}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 py-10">
        
        {/* Membros Permanentes */}
        <h1 className="text-center text-2xl font-bold mb-8">Membros Permanentes</h1>
        <div className="flex flex-wrap justify-around gap-4 mb-10">
          {dadosMembros.map((member, index) => (
            <Card
              key={index}
              imgSrc={member.imgSrc}
              name={member.name}
              university={member.university}
              memberType={member.memberType}
              linkedinUrl={member.linkedinUrl}
              lattesUrl={member.lattesUrl}
            />
          ))}
        </div>

        {/* Coordenação 2024 */}
        <h2 className="text-center text-2xl font-bold mb-8">Coordenação 2024</h2>
        <div className="flex flex-wrap justify-center gap-20 mb-10">
          {dadosCoordenadores.map((coordinator, index) => (
            <Card
              key={index}
              imgSrc={coordinator.imgSrc}
              name={coordinator.name}
              university={coordinator.university}
              memberType={coordinator.memberType}
              linkedinUrl={coordinator.linkedinUrl}
              lattesUrl={coordinator.lattesUrl}
            />
          ))}
        </div>

        {/* Dropdown Comitê de Programa */}
        <div className="mt-8 text-center ">
          <div
            className="flex justify-center items-center cursor-pointer"
            onClick={toggleDropdown} // Alterna o dropdown ao clicar na div
          >
            <h2 className="text-2xl font-bold mx-2" >Comitê de Programa</h2>
            <div className={`transition-transform duration-500 ${isDropdownOpen ? 'rotate-180' : ''}`}>
              <SlArrowDown />

            </div>
          </div>

          {/* Transição suave do conteúdo do dropdown */}
          <div
            className={`transition-all duration-500 ease-in-out overflow-hidden `}
          >
            <div ref={contentRef} style={{ transition: 'max-height 0.5s ease-in-out' }}>
              <ComitePrograma />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Washes2024;
