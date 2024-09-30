import { Link } from 'react-router-dom';

function HeroWashes2024() {
    return (
        <>
            <section id="heroQuemSomos" className="w-full flex flex-col items-center justify-center mt-8 mb-8 lg:my-24 lg:flex-row">
                <div className="max-w-screen-2xl flex flex-col gap-7 justify-center items-center lg:flex-row lg:gap-20">
                    <div className="flex flex-col items-center">
                        <img className="h-60 lg:hidden" src="../src/assets/imgs/banner-hero-home-washes2024.png" alt="Ilustração de pessoas trabalhando com dados e gráficos" />
                        <p className="text-sm text-[#6C757D] opacity-50 mt-2 lg:hidden">Washes 2024</p>
                    </div>
                    <div style={{width: "1600px"}} className="hidden lg:flex flex-col items-end">
                        <img src="../src/assets/imgs/banner-hero-home-washes2024.png" alt="Ilustração de pessoas trabalhando com dados e gráficos" className="lg:h-[300px] xl:h-[250px]" />
                        <p className="text-7xl text-[#6C757D] opacity-50 mt-2">Washes</p>
                        <p className="text-7xl text-[#6C757D] opacity-50 mt-2">2024</p>
                    </div>
                    <div className="flex flex-col items-center text-center mx-5 gap-7 lg:gap-8 lg:items-start lg:text-left">
                        <h1 className="text-3xl lg:text-4xl font-semibold text-[#0D6080]">WASHES 2024</h1>
                        <p className="text-lg font-light text-[#2F2F2F] lg:text-3xl">
                            O WASHES 2024 será realizado no formato presencial, como um evento satélite do <strong className="font-bold">44º Congresso da Sociedade Brasileira de Computação (SBC)</strong>, que será realizado nos dias 21 e 25 de julho de 2024.
                        </p>
                        <Link
                            to="/quem-somos"
                            className="px-4 py-2 flex justify-center bg-[#74C76B] hover:bg-white
                            text-base text-white hover:text-[#74C76B] hover:border hover:border-[#74C76B] cursor-pointer
                            rounded transition-colors duration-300 lg:px-5 lg:py-3 lg:text-2xl"
                        >
                            Saiba mais sobre o WASHES 2024!
                        </Link>
                    </div>
                </div>
            </section>
            <div className="flex lg:hidden w-full h-1 flex-row gap-3 justify-evenly">
                <div className="w-full h-1 bg-[#E72B78]"></div>
                <div className="w-full h-1 bg-[#36BCEE]"></div>
                <div className="w-full h-1 bg-[#66C75C]"></div>
            </div>
        </>
    );
}

export default HeroWashes2024;
