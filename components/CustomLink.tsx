
import React from 'react'
import Link from 'next/link';

interface CustomLinkProps{
    href: string;
    SocialIcon:React.ReactNode;
}

const CustomLink:React.FC<CustomLinkProps> = ({href,SocialIcon}) => {
  return (
    <Link href={`${href}`} className=" w-10  h-10 items-center justify-center flex border-gray-700 border-[1px] rounded-md">
    {SocialIcon}
    </Link> 
  )
}
export default React.memo(CustomLink)