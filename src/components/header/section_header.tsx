'use client'

import Link from 'next/link';
import { LiaGithub, LiaLinkedinIn  } from 'react-icons/lia';


export default function SectionHeader() {    
    return (
        <header id='header' className="h-20 w-full flex items-center justify-end px-20 border bg-neutral-color-silver-chalice-50 shadow-lg fixed z-50">
                <div className='w-full flex flex-row justify-between'>
                    <div className="flex flex-row gap-4 text-2xl text-neutral-color-silver-chalice-900 ">
                        <a href="https://github.com/Jdel-Campos" target="_blank"> <LiaGithub className="hover:text-neutral-color-silver-chalice-500 hover:border-b hover:border-neutral-color-silver-chalice-500"/> </a>
                        <a href="https://www.linkedin.com/in/jdel-campos/" target="_blank"> <LiaLinkedinIn className="hover:text-neutral-color-silver-chalice-500 hover:border-b hover:border-neutral-color-silver-chalice-500"/> </a>
                    </div>
                    <nav className="flex justify-end items-end z-50">
                        <ul className="flex flex-row gap-8 justify-end items-end text-text-color-masala-500 ">
                            <li className="border-neutral-color-silver-chalice-50 hover:text-neutral-color-silver-chalice-400 border-b hover:border-neutral-color-silver-chalice-400">
                                <Link href='#home'>
                                    <div> 
                                        <p> Home </p>
                                    </div>
                                </Link>
                            </li>
                            <li className="border-neutral-color-silver-chalice-50 hover:text-neutral-color-silver-chalice-400 border-b hover:border-neutral-color-silver-chalice-400">
                                <Link href='#about_skill'>
                                    <div> 
                                        <p> About me / Skill </p>
                                    </div>
                                </Link>
                            </li>
                            <li className="border-neutral-color-silver-chalice-50 hover:text-neutral-color-silver-chalice-400 border-b hover:border-neutral-color-silver-chalice-400">
                                <Link href='#project'>
                                    <div> 
                                        <p> Projects </p>
                                    </div>
                                </Link>
                            </li>
                        </ul>
                    </nav>
                </div>
        </header>
    );
};