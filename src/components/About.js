import AboutImg from "../assets/about.png"
export default function About() {
     const config = {
        line1 :" Hi, My name is Stanly. I am a Full Stack web developer. I built beautiful Websites with React.js and Tailwindcss + Bootstrap ",
        line2 :"I am procicient in Front-end skills likr React.js,Redux,Redux Tool Kit, Axios,Tailwind CSS,SaSS,Css3 and many more",
        line3 :"In back-end i konw Node.js,Mongo db,Express.js and Mongooes"
     }


    return (
    <section className="flex flex-col  md:flex-row bg-primary" id="about">

            <div className=" py-5 md:w-1/2">
                <img src={AboutImg} alt="" />
            </div>

            <div className="m-5 md:w-1/2 flex justify-center ">
              <div className="justify-center flex flex-col">
              <h1 className="font-bold text-4xl text-white border-b-4 w-[170px] mb-4">About Me</h1>
              <p className=" text-white pb-6 text-2xl font-hero-font">{config.line1}</p>
              <p className="pb-6 text-white text-2xl font-hero-font ">{config.line2}</p>
              <p className="pb-6 text-white text-2xl font-hero-font">{config.line3} </p>
            </div>

            </div>
        </section>
    )

}
