"use client";
import { RocketIcon } from "@radix-ui/react-icons";
import Link from "next/link";
import DarkModeButton from "./DarkModeButton";

function NavBar() {
  return (
    <nav className="flex justify-between items-center">
        <Link href="/" className="flex items-center gap-2">
        <h1 className="  text-3xl font-bold">
            AsratBuilds
        </h1>
        <RocketIcon className="w-5 h-5  animate-lanuch transition-all transform text-green-500" />
        </Link>
        <DarkModeButton/>

    </nav>
  )
}

export default NavBar