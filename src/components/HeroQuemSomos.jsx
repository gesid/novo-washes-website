import { Link } from 'react-router-dom';

function HeroQuemSomos() {
    return <>
        <main id="heroQuemSomos" className="w-full flex items-center justify-center mt-7 mb-7 lg:h-dvh lg:mt-24">
            <section className="max-w-screen-xl flex flex-col gap-7 justify-center items-center lg:flex-row lg:gap-40">
                <img className="h-60 lg:hidden" src="../src/assets/imgs/banner-hero-home-quemSomos.png" alt="Ilustração de pessoas trabalhando com dados e gráficos" />
                <div className="flex flex-col items-start mx-5 gap-7 lg:gap-9">
                    <h1 className="text-3xl lg:text-5xl font-semibold text-[#0D6080]">QUEM SOMOS?</h1>
                    <p className="text-lg font-light text-[#2F2F2F] lg:text-4xl">
                        O WASHES é um workshop que aborda a interação entre fatores <strong className="font-bold">humanos</strong>, <strong className="font-bold">sociais</strong> e <strong className="font-bold">econômicos</strong> na <strong className="font-bold">Engenharia de Software</strong>, promovendo discussões sobre seu impacto no desenvolvimento e uso de software, bem como colaborações com a indústria.
                    </p>
                    <Link
                        to="/quem-somos"
                        className="px-3 py-1 flex justify-center bg-[#36BCEE] hover:bg-white
                        text-base text-white hover:text-[#36BCEE]  hover:border-[0.5px] hover:border-[#36BCEE] hover:cursor-pointer
                        rounded transition-colors duration-300 lg:px-5 lg:py-3 lg:text-3xl"
                    >Saiba mais!</Link>
                </div>
                <img src="../src/assets/imgs/banner-hero-home-quemSomos.png" alt="Logo" className="hidden lg:flex h-[632px] mr-2" />
            </section>
        </main>
        <div className="flex lg:hidden w-full h-1 flex-row gap-3 justify-evenly">
            <div className=" w-full h-1 bg-[#E72B78]"></div>
            <div className="w-full h-1 bg-[#36BCEE]"></div>
            <div className="w-full h-1 bg-[#66C75C]"></div>
        </div>
    </>
}

export default HeroQuemSomos;