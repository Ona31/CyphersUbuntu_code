//Home page 

import AboutCom from "../Components/About/AboutCom";
import ChallengesSection from "../Components/Avies/AviesCom";

import Footer from "../Components/footer/FooterCom";
import HeroSection from "../Components/Hero/Hero";
import LangagesSection from "../Components/Langues/LanguesCom";
import MethodeSection from "../Components/Methode/MethodeCom";

export default function HomePage(){
    return(
        <main>
            <HeroSection/>
            <AboutCom/>
            <LangagesSection/>
            <MethodeSection/>
            <ChallengesSection/>
            <Footer/>
        </main>
    )
}