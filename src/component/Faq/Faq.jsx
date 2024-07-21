import FaqComponent from "./FaqComponent";

export default function Faq() {
  return (
    <section>
        <div className="flex flex-col lg:gap-96 md:gap-32 justify-center mt-10 gap-20 lg:flex-row  w-full overflow-hidden">
            <div>
                <h1 className="font-bold text-3xl md:text-5xl pl-5">Frequently <br /> <span className="text-[#FFA500] md:text-black">Ask Questions</span></h1>
            </div>
            <div className="flex flex-col items-center justify-center">
              <FaqComponent />  
            </div>    
        </div>        
        <div className="mt-10 flex flex-col items-center justify-center">
            <div>
              <p className="font-bold text-2xl">Have More Questions</p>
            </div>
            <div>
              <p  className="font-bold text-2xl text-[#FFA500]">Kindly Send us a message</p>
            </div>
            <div>
              <button type="button" className="bg-[#FFA500] text-white px-5 py-1 rounded-lg mt-5">Contact Us</button>
            </div>
        </div>
    </section>
  )
}
