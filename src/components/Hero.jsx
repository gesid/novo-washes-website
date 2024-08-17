import { IoIosArrowRoundDown } from "react-icons/io";
import { Link } from "react-scroll";

function Hero() {
    return (
        <>
            <main className="w-full h-96 flex flex-col items-center justify-center lg:h-dvh lg:bg-baner-hero lg:bg-no-repeat lg:bg-cover lg:bg-center">
                <div className="flex flex-col items-center justify-center mx-5 gap-32">
                    <section className="max-w-screen-xl w-full flex flex-col items-center justify-between mx-5">
                        <h2 className="text-2xl mb-3 text-gray-500 font-semibold lg:hidden">
                            WASHES
                        </h2>
                        <h1 className="text-3xl font text-zinc-800 font-bold text-center mx-5 lg:text-7xl">
                            Workshop sobre Aspectos Sociais, Humanos e Econômicos de Software
                        </h1>
                        <h2 className="hidden lg:flex text-2xl mt-3 text-gray-500 font-semibold lg:text-6xl lg:mt-12">
                            WASHES
                        </h2>
                    </section>

                    <div className="hidden lg:flex items-center justify-center w-10 h-10 rounded-[40px] bg-cyan-400">
                        <Link
                            to="heroQuemSomos"
                            smooth={true}
                            duration={2000}
                            className="text font-semibold text-white hover:cursor-pointer"
                        >
                            <IoIosArrowRoundDown size={32} />
                        </Link>
                    </div>
                </div>
            </main>
            <div className="flex lg:hidden w-full h-1 flex-row gap-3 justify-evenly">
                <div className=" w-full h-1 bg-[#E72B78]"></div>
                <div className="w-full h-1 bg-[#36BCEE]"></div>
                <div className="w-full h-1 bg-[#66C75C]"></div>
            </div>
        </>
    );
}

export default Hero;
