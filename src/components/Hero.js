import HeroImg from "../assets/hero.png"
import { AiOutlineInstagram, AiOutlineLinkedin, AiOutlinePhone } from "react-icons/ai";



export default function Hero() {
    const config = {
        instagram : "https://www.instagram.com/stanehhh/?hl=en",
        linkedin : "https://www.linkedin.com/in/stan03/",
        phone : "https://onlinenotepad.org/notepad",
    }
    return (
        <section className="flex flex-col md:flex-row px-5 py-32 bg-secondary justify-center" >
            <div className="md:w-1/2 flex flex-col">
                <h1 className=" text-white text-8xl font-hero-font">HI,<br /> <span className="text-pink-600">I'm Stanly</span>
                    <p className="text-2xl">I'm a front-end Developer</p>
                </h1>
                <div className="flex py-10 gap-6">
                    <a href={config.instagram} className="hover:text-white "><AiOutlineInstagram size={50}/></a>
                    <a href={config.linkedin} className="hover:text-white "> <AiOutlineLinkedin size={50}/></a>
                    <a href={config.phone} className="hover:text-white "><AiOutlinePhone size={50}/></a>
                    
                </div>
            </div>
            <img src={HeroImg} className="md:w-1/3" />

        </section>
    )
}