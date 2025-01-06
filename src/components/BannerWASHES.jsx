import PropTypes from 'prop-types';

export function BannerWASHES({anoAtual, creditosDaImagem}){

  const backgroundBannerWASHES = {
    // 2026: 'md:bg-banner-hero-WASHES2026',
    2025: 'md:bg-banner-hero-WASHES2025',
    2024: 'md:bg-banner-hero-WASHES2024',
    2023: 'md:bg-banner-hero-WASHES2023',
    2022: 'md:bg-banner-hero-WASHES2022',
    2021: 'md:bg-banner-hero-WASHES2021',
    2020: 'md:bg-banner-hero-WASHES2020',
    2019: 'md:bg-banner-hero-WASHES2019',
    2018: 'md:bg-banner-hero-WASHES2018',
    2017: 'md:bg-banner-hero-WASHES2017',
    2016: 'md:bg-banner-hero-WASHES2016',
};

  const bg = backgroundBannerWASHES[anoAtual] || backgroundBannerWASHES.default;


  return(
    <section className={`${bg} bg-none bg-cover bg-bottom bg-no-repeat w-full md:h-[550px] h-[250px] relative`}>
        <div className="bg-gradient-to-r from-white from-40% w-full max-h-24 absolute bottom-[50px] flex items-center py-1.5 md:py-2.5 lg:py-5 lg md:pl-[200px] pl-[100px] z-20">                                                                      
          <h1 className="text-[#003358] font-bold lg:text-7xl md:text-6xl text-4xl">
            WASHES {anoAtual}
           </h1>
        </div>

        <div className="flex w-full h-full lg md:gap-4 gap-2 lg md:px-11 px-5">
          <div className="bg-gradient-to-b from-[#22CBE4] from-50% lg md:w-10 w-5 h-full z-20"></div>
          <div className="bg-gradient-to-b from-[#E72B78] from-50% lg md:w-10 w-5 h-full lg md:z-10 z-20"></div>
          <div className="bg-gradient-to-b from-[#74C76B] from-50% lg md:w-10 w-5 h-full z-20"></div>
        </div>

        <div className='w-full text-right pr-2 text-gray-500 text-sm md:block hidden'>
          {/* Adicione a referência da imagem aqui */}
          <span>{creditosDaImagem}</span>
        </div>

    </section>
  )
}

BannerWASHES.propTypes = {
  anoAtual: PropTypes.string.isRequired,
  creditosDaImagem: PropTypes.string.isRequired,
}