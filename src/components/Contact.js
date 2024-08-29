import { AiOutlineMail, AiOutlinePhone } from "react-icons/ai"

export default function Contact() {
    return (
        <section className="flex flex-row px-5 py-20 bg-secondary " id="contact">
            <div className="w-full py-5 ">
                    <h1 className="font-bold text-4xl text-white   w-[140px] mb-4 ml-32">Contact</h1>
                    <p className='ml-32 text-2xl mb-4 text-white'> If you want discuss more in detail, please contact me</p>
                    <p className='ml-32 text-2xl flex gap-3 items-center text-white mb-4'><AiOutlinePhone size={30}/>7845042865</p>
                    <p className='ml-32 text-2xl flex gap-3 items-center text-white'><AiOutlineMail size={30}/>jesustan049@gmail.com</p>
            </div>
        </section>
    )
}
              
                    
















