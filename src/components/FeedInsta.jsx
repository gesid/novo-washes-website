import { Link } from "react-router-dom";
import { FaInstagram } from "react-icons/fa";

function FeedInsta() {
    return (
        <>
            <section className="w-full h-fit py-3.5 px-5 flex flex-col items-center justify-center gap-5 lg:px-5">
                <p className="text-3xl mt-20 mb-14 lg:hidden">
                    Nos acompanhe no <span className="text-[#E72B78]">Instagram</span>
                </p>
                <p className="hidden text-4xl text-[#717275] mt-11 pl-11 mb-8 lg:w-full lg:flex">
                    Acompanhe-nos nas{" "}
                    <span className="pl-1 font-bold">Redes Sociais</span>!
                </p>
                <div className="w-full h-fit flex flex-row gap-2.5 lg:gap-9 lg:h-96">
                    <Link
                        to={"https://www.instagram.com/p/CvuaOlSOLaB/"}
                        target="_blank"
                        className="w-full h-32 bg-feed-insta-1 bg-no-repeat bg-cover bg-left rounded-lg shadow-[4px_6px_6px_0px_rgba(0,0,0,0.18)] lg:w-1/2 lg:h-96 lg:rounded-2xl"
                    />
                    <Link
                        to={"https://www.instagram.com/p/CvuaOlSOLaB/?img_index=2"}
                        target="_blank"
                        className="w-full h-32 bg-feed-insta-2 bg-no-repeat bg-cover bg-left-top rounded-lg shadow-[4px_6px_6px_0px_rgba(0,0,0,0.18)] lg:w-1/2 lg:h-96 lg:rounded-2xl"
                    />
                </div>
                <Link
                    to={"https://www.instagram.com/p/CvuaOlSOLaB/?img_index=2"}
                    target="_blank"
                    className="w-full h-44 bg-feed-insta-3 bg-no-repeat bg-cover bg-top rounded-lg shadow-[4px_6px_6px_0px_rgba(0,0,0,0.18)] lg:hidden"
                />
                <div className="w-full h-fit flex flex-row gap-2.5 lg:gap-9 lg:h-96">
                    <Link
                        to={"https://www.instagram.com/p/CvuaOlSOLaB/?img_index=2"}
                        target="_blank"
                        className="hidden bg-feed-insta-3 bg-no-repeat bg-cover bg-center rounded-lg shadow-[4px_6px_6px_0px_rgba(0,0,0,0.18)] lg:block lg:w-1/3 lg:h-96"
                    />
                    <Link
                        to={"https://www.instagram.com/p/C61p4o5unGk/"}
                        target="_blank"
                        className="w-1/2 h-52 bg-feed-insta-4 bg-no-repeat bg-cover bg-center rounded-lg shadow-[4px_6px_6px_0px_rgba(0,0,0,0.18)] lg:w-1/3 lg:h-96 lg:rounded-2xl"
                    />
                    <Link
                        to={"https://www.instagram.com/p/CvuaOlSOLaB/?img_index=5"}
                        target="_blank"
                        className="w-1/2 h-52 bg-feed-insta-5 bg-no-repeat bg-cover bg-center rounded-lg shadow-[4px_6px_6px_0px_rgba(0,0,0,0.18)] lg:w-1/3 lg:h-96 lg:rounded-2xl"
                    />
                </div>
                <Link
                    to={"https://www.instagram.com/washescommunity/"}
                    target="_blank"
                    className="flex items-center justify-center gap-2.5 px-4 py-2 my-9
                    bg-[#E72B78] rounded-lg shadow-[4px_6px_6px_0px_rgba(0,0,0,0.18)]
                    hover:border hover:border-spacing-[0.25px] hover:border-[#E72B78] hover:bg-white hover:text-[#E72B78]
                    cursor-pointer transition-colors duration-300
                    text-base text-white uppercase"
                >
                    <FaInstagram className="text-2xl lg:text-4xl" />
                    <p className="lg:text-4xl">@washescommunity</p>
                </Link>
            </section>
            <div className="flex lg:hidden w-full h-1 flex-row gap-3 justify-evenly">
                <div className="w-full h-1 bg-[#E72B78]"></div>
                <div className="w-full h-1 bg-[#36BCEE]"></div>
                <div className="w-full h-1 bg-[#66C75C]"></div>
            </div>
        </>
    );
}

export default FeedInsta;
