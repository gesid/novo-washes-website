import { TfiWorld } from "react-icons/tfi";
import { LuBook } from "react-icons/lu";
import PropTypes from 'prop-types';

export const CardEdicoesAnteriores = ({imagem, local, edicao, anoDaEdicao,linkWebsite,linkAnalEvento, }) =>{
  return(
      <div className="transition lg:hover:-translate-y-1.5 lg:hover:shadow-2xl max-w-[350px] text-center mx-2 my-7 pb-2 shadow-md rounded-xl flex flex-col gap-1">
        <img src={imagem} alt={local} className="rounded-t-xl max-h-[162px]"/>
        <h1 className="lg:text-xl md:text-lg sm:text-base"> {edicao} </h1>
        <p className="lg:text-xl md:text-lg sm:text-base"> {local} {anoDaEdicao} </p>

        <nav className="flex justify-center gap-4">
          <div className="flex items-center gap-1">
            <TfiWorld />
            <a  className="lg:text-xl md:text-lg sm:text-base underline" href={linkWebsite} target="_blank">Website</a>  
          </div>
          <div className="flex items-center gap-1">
            <LuBook />
            <a className="lg:text-xl md:text-lg sm:text-base underline" href={linkAnalEvento} target="_blank">Anais</a>
          </div>
        </nav>
      </div>
  )
}

CardEdicoesAnteriores.propTypes = {
  imagem: PropTypes.string.isRequired,
  local: PropTypes.string.isRequired,
  edicao: PropTypes.string.isRequired,
  anoDaEdicao: PropTypes.string.isRequired,
  linkWebsite: PropTypes.string.isRequired,
  linkAnalEvento: PropTypes.string.isRequired,
};

// export default CardEdicoesAnteriores;