import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { TextPlugin } from "gsap/TextPlugin";
gsap.registerPlugin(ScrollTrigger,TextPlugin);
// gsap.registerPlugin(SplitText)



const Hero = () => {
    useGSAP(() => {
        gsap.to(".box", {
            x: '30vw',
            // yoyo: true,
            // duration: 2,
            ease: "ease",
            scrollTrigger: {
                trigger: ".hero-parent",
                scrub: true,
            }
        });

        gsap.to(".hero-heading", {
            transform: "rotate3d(361, 291, 47, -66deg)",
            scrollTrigger: {
                trigger: ".hero-parent",
                markers: true,
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
        <div className="h-[300vh] relative hero-parent">
            <div className='flex justify-center items-center h-[100vh] sticky top-10'>
                <div></div>
                <div className='w-[1000px] text-white text-[144px] leading-[10rem] font-bold'>
                    <h1 className="hero-heading">MULTI-</h1>
                    <h1 className="hero-heading">DISCIPLINARY</h1>
                    <div className='flex gap-5'>
                        <h1 className="hero-heading">DESIGNER</h1>
                        <h5 className='text-lg'>CREATIVE THINKING AND PROBLEM SOLVING ARE WHERE MY MIND WANDERS, USING MY KNOWLEDGE AND PASSION FOR DESIGN AS MY MEDIUM</h5>
                    </div>
                    <div className="w-[100px] h-[100px] bg-lime-500 rounded-full box"></div>
                </div>
                <div>


                </div>
            </div>
        </div>
    );
};

export default Hero;