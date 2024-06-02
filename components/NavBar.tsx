"use client";
import { RocketIcon,LinkedInLogoIcon,GitHubLogoIcon ,InstagramLogoIcon} from "@radix-ui/react-icons";

import Link from "next/link";
import DarkModeButton from "./DarkModeButton";
import CustomLink from "./CustomLink";

function NavBar() {
  return (
    <nav className="flex justify-between items-center relative">
        <Link href="/" className="flex items-center gap-2">
        <h1 className="  text-3xl font-bold">
            AsratBuilds
        </h1>
        <RocketIcon className="w-5 h-5  animate-lanuch transition-all transform text-green-600 dark:text-yellow-600" />
        </Link>
        <div className="flex items-center gap-3 justify-center">
       <CustomLink href="https://www.linkedin.com/in/asrat-adane-50a521240/" SocialIcon={<LinkedInLogoIcon className="w-6 h-6 "/>}/>
       <CustomLink href="/" SocialIcon={<GitHubLogoIcon className="w-6 h-6 "/>}/>
       <CustomLink href="/" SocialIcon={<InstagramLogoIcon className="w-6 h-6 "/>}/>
        <DarkModeButton/>
        </div>

    </nav>
  )
}

export default NavBar