
import {
    Tabs,
    TabsContent,
    TabsList,
    TabsTrigger,
  } from "@/components/ui/tabs"
import ProjectCard from "./ProductCard"
function Projects() {
  return (
<>
<div className="flex justify-center items-center flex-col">
<h1 className="text-5xl text-[#627254] text-center  dark:text-yellow-700  font-semibold">Cool things I have built and collaborated on </h1>
</div>
<Tabs defaultValue="mobile-apps" className="w-full mt-10">
      <TabsList className="grid w-full grid-cols-3  bg-black text-gray-400">
        <TabsTrigger value="mobile-apps" className="">Mobile-Apps</TabsTrigger>
        <TabsTrigger value="websites">Websites</TabsTrigger>
        <TabsTrigger value="side-projects">Side-projects</TabsTrigger>
      </TabsList>
      <TabsContent value="mobile-apps" className="mt-10">
      <div className="grid w-full grid-cols-3 gap-8">
      <ProjectCard/>
      <ProjectCard/>
      <ProjectCard/>
      <ProjectCard/>
      <ProjectCard/>
      <ProjectCard/>
      </div>
      </TabsContent>
      <TabsContent value="websites">
     
      </TabsContent>
      <TabsContent value="Side projects">
     
      </TabsContent>
    </Tabs>
</>
  )
}

export default Projects