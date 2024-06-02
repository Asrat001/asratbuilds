import {
    Card,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"
  import { Service } from "@/lib/type"
  import { Badge } from "@/components/ui/badge"

function ServiceCard({Service}:{Service:Service}) {
  return (
    <div>
    <Card className=" ">
  <CardHeader>
    <CardTitle className="text-center text-balance">{Service.name}</CardTitle>
    <CardDescription className=" text-balance text-center">{Service.discription}</CardDescription>
  </CardHeader>
  <CardFooter className=" place-content-center ">
    {Service.framework.split(",").map((val,indec)=>{
        return(
            <Badge className=" w-fit ml-1  bg-black  text-white   border-[2px]  border-dashed border-gray-300 ">
                <p className="text-[13px] font-extrabold">
                {val}
                </p>
            </Badge>
        )
    })}
  </CardFooter>
</Card>

    </div>
  )
}

export default ServiceCard