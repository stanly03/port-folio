import WebsiteImg1 from "../assets/ecommerce-websites.jpg"
import Web2 from '../assets/food-ecommerce.jpg'
import Web3 from '../assets/website-blog.jpg'
import Web4 from '../assets/Processing.jpg'



export default function Projects() {
    const config = {
        projects : [
            {
                images :WebsiteImg1,
                description : "ecom website "
            },
            {
                images :Web2,
                description : "ecom website like swiggy "
            },
            {
                images :Web3,
                description : "ecom website genaral"
            }, 
            {
                images :Web4,
                description : "Just wait processing "
            }
            
        ]
          

    }
    return (
        <section className="flex flex-col justify-center px-5 py-20 bg-secondary " id="project">
            <div className="w-full py-5 ">
                <div className=" flex flex-col px-10">
                    <h1 className="font-bold text-4xl text-black  w-[140px] mb-4 ">Projects</h1>
                    <h1>These are some my best projects. I have built these with React, Mern, Vinilla Css. Check out them </h1>
                </div>
            </div>

            <div className="w-full flex flex-col md:flex-row  px-10 gap-5 ">
                {config.projects.map((project)=>(
                      <div className="relative">
                      <img className="h-[200px] w-[500px]" src={project.images} alt="" />
                      <div className="project-desc">
                          <p className="text-center py-5 text-white font-bold text-lg  animate-bounce">{project.description}</p>
                      </div>
                  </div>

                ))}

                
             


            </div>
        </section>
    )
}

