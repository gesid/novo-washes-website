import FeedInsta from "../components/FeedInsta";
import Hero from "../components/Hero";
import HeroQuemSomos from "../components/HeroQuemSomos";
import HeroWashes2024 from "../components/HeroWashes2024";

function Home() {
    return (
        <div className="">
            <Hero />
            <HeroQuemSomos />
            <HeroWashes2024 />
            <FeedInsta />
        </div>
    );
};

export default Home;