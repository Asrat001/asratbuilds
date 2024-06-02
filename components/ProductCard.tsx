import { emojis,rings } from "@/lib/constant";

function ProjectCard() {
    const { ring, bg } =rings[Math.floor(Math.random() * rings.length)];
	console.log(ring)
					
  return (
    <div className="relative group">
							<div className=" border border-zinc-600 rounded-md p-5 space-y-3 bg-zinc-100 dark:bg-zinc-800  group-hover:translate-x-3 group-hover:translate-y-3 transition-all relative h-[350px]">
								<div className="flex items-center gap-2">
									{/* <Image
										src={users?.avatar_url!}
										alt={users?.user_name!}
										width={40}
										height={40}
										className={`rounded-full ring-2 ${ring}`}
									/> */}
									<div>
										<h1 className=" text-base">
											Website
										</h1>
									</div>
								</div>

								<h1 className="text-2xl font-medium line-clamp-2">
								nwiueibwbie
								</h1>
								{/* {isExpire ? (
								// 	<Badge>Expired</Badge>
								// ) : (
								// 	<p className="tex-sm text-gray-400">
								// 		Until{" "}
								// 		{new Date(end_date).toDateString()}
								// 	</p>
								// )} */}

								<span className=" absolute -top-8 right-0 text-3xl">
                                {emojis[0]}
								</span>
							</div>
							<div
								className={` -z-10 absolute top-0 right-0 translate-x-3 translate-y-3 w-full h-full ring-1  rounded-md ${rings[2]} ${bg}  bg-opacity-10`}
							></div>
						</div>
  )
}

export default ProjectCard