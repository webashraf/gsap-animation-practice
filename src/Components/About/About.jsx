import { useGSAP } from "@gsap/react";
import {gsap,} from "gsap";

const About = () => {
    useGSAP(()=>{
        gsap.to(".moving-text", {
            x: "0vw",
            repeat: -1,
            duration: 10,
            // stagger: 0.5,
            ease: "none",
        })
    }, [])
    return (
        <div className="relative  max-w-screen-2xl overflow-hidden">
            <div className="h-[1px] bg-white w-full mb-3"></div>
            <div className="text-white uppercase flex justify-between text-xl font-se">
                <h4>02/</h4>
                <h4>about</h4>
                <h4>EMAIL / INSTAGRAM / TWITTER / LINKEDIN</h4>
                <h4>04/</h4>
            </div>
            <div>
            </div>

            <div className="py-24 flex gap-5">
                <div className="w-[25%]">
                    <h4 className="text-white">
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; HELLO, MY NAMES CHRIS, I'M A SENIOR
                        DESIGNER AT ENVOY WHERE I CREATE
                        PRODUCTS, WEBSITES, AND BRANDS.</h4>
                </div>
                <div className="w-[70%] mx-auto">
                    <img src="/public/profile-pic.jpg" className="w-[700px] h-[800px] object-cover object-center rounded-3xl" alt="" srcset="" />
                </div>
                <div></div>
            </div>

            <div className="absolute bottom-0 w-[5000px] flex flex-row flex-wrap moving-text -translate-x-[2315px]">
                <h2 className="text-white text-[170px] uppercase font-mono ">Ali ashraf - ali ashraf -</h2>
                <h2 className="text-white text-[170px] uppercase font-mono ">Ali ashraf - ali ashraf -</h2>
            </div>
        </div>
    );
};

export default About;