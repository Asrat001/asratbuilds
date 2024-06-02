import Projects from "@/components/Projects";
import Service from "@/components/Service";



export default function Home() {
  return (
    <main className=" min-h-screen    p-24">
  
      <h1 className="text-6xl text-center  text-[#627254] dark:text-yellow-700  font-semibold">
      Welcome to Asrat Builds!
      </h1>
    <p className=" text-xl   text-balance text-center font-medium  my-6 ">
      Hi , My Name Is <span className=" text-green-600 dark:text-yellow-600 font-bold">Asrat Adane </span> Software Developer from Ethiopia,
      I specialize in crafting dynamic and engaging digital experiences. Whether you're looking to elevate your
       online presence with a stunning <span className="text-green-600 dark:text-yellow-600 font-bold">website,</span>  launch a
       powerful <span className="text-green-600 dark:text-yellow-600 font-bold">mobile application,</span>  or optimize your <span className="text-green-600 dark:text-yellow-600 font-bold">backend</span> infrastructure for peak performance, I've got you covered.
     </p>
     <Service/>
     <Projects/>
    
    </main>
  );
}
