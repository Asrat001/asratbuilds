import ServiceCard from "./ServiceCard"
import { service } from "@/lib/constant"


function Service() {
    
  return (
    <section className="my-14">
        <h1 className='text-center font-bold text-2xl text-[#627254] dark:text-yellow-700 '>
            What i Offer
        </h1>
        <div className="my-6 grid grid-cols-4  grid-flow-dense gap-2  w-full">
         {
         service.map((item,index)=>{
          return(
         <ServiceCard Service={item}/>
          
          )
         })
         }
         </div>
    </section>
  )
}

export default Service