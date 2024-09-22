import { useState } from "react";
import Card from "../components/Card";
import ComitePrograma from "../components/ComitePrograma";
import { SlArrowDown, SlArrowUp } from "react-icons/sl";

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
    },
    {
      imgSrc: "",
      name: "",
      university: "",
      memberType: "Membro Permanente",
    },
    {
      imgSrc: "",
      name: "",
      university: "",
      memberType: "Membro Permanente",
    },
    {
      imgSrc: "",
      name: "",
      university: "",
      memberType: "Membro Permanente",
    },
  ];

  const coordinators = [
    {
      imgSrc: "",
      name: "Allysson Allex Araújo",
      university: "UFRJ",
      memberType: "Coordenador",
    },
    {
      imgSrc: "",
      name: "Anna Beatriz",
      university: "Universidade Federal do Ceará-UFC.",
      memberType: "Coordenadora",
    },
  ];

  return (
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
  );
};

export default Washes2024;
