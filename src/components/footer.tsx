import Link from "next/link";
import React from "react";
import {BsTwitter} from 'react-icons/bs'


const Footer = () => {
  return (
    <footer className=" mt-10 h-24 items-center justify-center text-center flex flex-col">
            <Link href={'https://twitter.com/abdeMohamett'} target="_blank"  className='flex items-center gap-2 text-center border mb-2 border-gray-300 rounded-[12px] transition hover:border-blue-700 hover:bg-blue-50 hover:text-blue-700 text-gray-500 py-2 px-4 text-sm font-medium'>
                <BsTwitter/>
                Follow me on Twitter
            </Link>
      <span>© 2023 Knowhance. All rights reserved.</span>
    </footer>
  );
};

export default Footer;