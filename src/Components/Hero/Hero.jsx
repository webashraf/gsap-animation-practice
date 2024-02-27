import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { TextPlugin } from "gsap/TextPlugin";
import "./Hero.css"
gsap.registerPlugin(ScrollTrigger, TextPlugin);



const Hero = () => {
    useGSAP(() => {
        gsap.to(".hero-heading", {
            // transform: "rotate3d(361, 291, 47, -66deg)",
            color: "white",
            scrollTrigger: {
                trigger: ".hero-parent",
                // markers: true,
                scrub: true,
                start: "top 10%",
                end: "bottom 90%"
            }
        });
        // var tl = gsap.timeline(),
        //     mySplitText = new SplitText("h1", { type: "lines" }),
        //     lines = mySplitText.lines; //an array of all the divs that wrap each character

        // gsap.set("h1", { perspective: 400 });

        // tl.from(lines, { duration: 1.5, opacity: 0, y: 60, rotationX: -90, transformOrigin: "0% 50% -50", ease: "power3.out", stagger: 0.15 }, "+=0");


    }, []);
    return (
        <div className="h-[200vh] relative hero-parent">
            <div className='flex flex-col items-center h-[100vh] sticky top-10 gap-5'>
                <div className="flex gap-5 items-center">
                    <div className="w-[20%]">
                        <h4 className="text-white text-xl uppercase font-mono">01//04 - scroll ↓</h4>
                    </div>

                    <div className='w-[80%] text-transparent text-[144px] leading-[10rem] font-bold'>
                        <h1 className="hero-heading">MULTI-</h1>
                        <h1 className="hero-heading">DISCIPLINARY</h1>
                        <div className='flex gap-5'>
                            <h1 className="hero-heading">DESIGNER</h1>
                            <h5 className='text-lg text-white'>CREATIVE THINKING AND PROBLEM SOLVING ARE WHERE MY MIND WANDERS, USING MY KNOWLEDGE AND PASSION FOR DESIGN AS MY MEDIUM</h5>
                        </div>
                    </div>
                </div>
            <div className="w-[100px] h-[100px]  rounded-full box sticky bottom-10 flex justify-center items-center filter stroke-inherit backdrop-blur border border-white"><span className="text-5xl text-white">↓</span></div>
            </div>
        </div>
    );
};

export default Hero;