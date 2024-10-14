import { useState } from "react";
import Card from "../components/Card";
import ComitePrograma from "../components/ComitePrograma";
import { SlArrowDown, SlArrowUp } from "react-icons/sl";
import { BannerWASHES2024 } from "../components/bannerWASHES2024";
import { TopicoDeInteresse } from "../components/topicoDeInteresse";

const Washes2024 = () => {
  
  const [isDropdownOpen, setDropdownOpen] = useState(false); // Controle do dropdown

  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen); // Alterna entre abrir e fechar
  };

  const members = [
    {
      imgSrc: "src/assets/imgs/rodrigo_santos.jpg",
      name: "Rodrigo Santos",
      university: "Universidade Federal do Estado do Rio de Janeiro-UNIRIO",
      memberType: "Membro Permanente",
      linkedinUrl: "https://www.linkedin.com/in/profrodrigosantos/",
      lattesUrl: "http://lattes.cnpq.br/8613736894676086",
    },
    {
      imgSrc: "src/assets/imgs/Igor Steinmacher.jpg",
      name: "Igor Steinmacher",
      university: "Northern Arizona University-NAU",
      memberType: "Membro Permanente",
      linkedinUrl: "https://www.linkedin.com/in/igorsteinmacher/",
      lattesUrl: "http://lattes.cnpq.br/5529725593221391",

    },
    {
      imgSrc: "src/assets/imgs/Davi Viana.jpeg",
      name: "Davi Viana",
      university: "Universidade Federal do Maranhão-UFMA",
      memberType: "Membro Permanente",
      linkedinUrl: "https://www.linkedin.com/in/davi-viana-73032a55/",
      lattesUrl: "http://lattes.cnpq.br/9297257833779277",
    },
    {
      imgSrc: "src/assets/imgs/Awdren Fontão.jpg",
      name: "Awdren Fontão",
      university: "Universidade Federal do Mato Grosso do Sul-UFMS",
      memberType: "Membro Permanente",
      linkedinUrl: "https://www.linkedin.com/in/awdren-font%C3%A3o-5087b121/",
      lattesUrl: "http://lattes.cnpq.br/0597440372595970"
    },
  ];

  const coordinators = [
    {
      imgSrc: "src/assets/imgs/Allyson Allex.jpeg",
      name: "Allysson Allex Araújo",
      university: "Universidade Federal do Cariri-UFCA",
      memberType: "Coordenador",
      linkedinUrl: "https://www.linkedin.com/in/allyssonaraujo/",
      lattesUrl: "http://lattes.cnpq.br/1768955171390815"
    },
    {
      imgSrc: "src/assets/imgs/Anna Beatriz.jpg",
      name: "Anna Beatriz",
      university: "Universidade Federal do Ceará-UFC",
      memberType: "Coordenadora",
      linkedinUrl: "https://www.linkedin.com/in/anna-beatriz-marques/",
      lattesUrl: "http://lattes.cnpq.br/5522150204610320",
    },
  ];

  return (
    <section>
      <BannerWASHES2024/>
      <TopicoDeInteresse/>
      <div className="container mx-auto px-4 py-10">
        {/* Membros Permanentes */}
        <h1 className="text-center text-2xl font-bold mb-8">Membros Permanentes</h1>
        <div className="flex justify-center flex-wrap gap-6 mb-12">
          {members.map((member, index) => (
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
        <div className="flex justify-center gap-2">
          {coordinators.map((coordinator, index) => (
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
        <div className="mt-8 text-center">
          <div
            className="flex justify-center items-center cursor-pointer"
            onClick={toggleDropdown} // Alterna o dropdown ao clicar na div
          >
            <h2 className="text-2xl font-bold mx-2">Comitê de Programa</h2>
            {isDropdownOpen ? <SlArrowUp /> : <SlArrowDown />}
          </div>

          {/* Transição suave do conteúdo do dropdown */}
          <div
            className={`transition-all duration-500 ease-in-out overflow-hidden ${
              isDropdownOpen ? "max-h-full opacity-100" : "max-h-0 opacity-0"
            }`}
          >
            <div className={`mt-4 ${isDropdownOpen ? "block" : "hidden"}`}>
              <ComitePrograma />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Washes2024;
