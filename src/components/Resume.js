import Resume1 from'../assets/resume.jpg'


export default function Resume() {
    const config = {
        link : "https://smallpdf.com/edit-pdf#r=annotate"
    }
    return (
        <section className="flex flex-col md:flex-row justify-center px-5 py-20 " id='resume'>
             <div className="w-full flex flex-col md:flex-row  px-10 gap-5  ">
                <div className='flex  justify-center mr-10'>
                    <img className="h-[300px] w-[500px] ml-28  " src={Resume1} alt="" />
               </div>
            </div>
            <div className="w-full py-5 ">
                <div className=" flex flex-col px-10 ">
                    <h1 className="font-bold text-4xl text-black   w-[140px] mb-4 ">Resume</h1>
                    <p className=' text-2xl'>You can download my resume <a  href={config.link}><button className=' px-5 py-2 font-bold border-2 hover:border-blue-900 rounded-full'>Download</button></a></p>
                </div>
            </div>
          
        </section>
    )
}
                

                    


