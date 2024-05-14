import ServiceCard from "./ServiceCard"
import { service } from "@/lib/constant"


function Service() {
    
  return (
    <section className="my-6">
        <h1 className='text-center font-medium text-2xl'>
            Service i provide
        </h1>
        <div className="my-6 grid grid-cols-4  grid-flow-dense gap-2  w-full">
         {
         service.map((item,index)=>{
          return(
         <ServiceCard/>
          
          )
         })
         }
         </div>
    </section>
  )
}

export default Service