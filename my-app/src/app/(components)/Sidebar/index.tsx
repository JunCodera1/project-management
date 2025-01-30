'use client';

import { useAppDispatch, useAppSelector } from '@/app/redux';
import { Icon, Link, LockIcon, LucideIcon } from 'lucide-react';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import React, { useState } from 'react';

const Sidebar = () => {
    const [showProjects, setShowProjects] = useState(true);
    const [showPriority, setShowPriortity] = useState(true);
    const sideBarClassNames = `fixed flex flex-col h-[100%] justify-between shadow-xl
    transition-all duration-300 h-full z-40 dark:bg-black overflow-y-auto bg-white 
    w-64 md:w-64
  `;
    return (
        <div className={sideBarClassNames}>
            <div className='flex h-[100%] w-full flex-col justify-start'>
                <div className='z-50 flex min-h-[56px] w-64 items-center justify-between bg-white px-6 pt-3 dark:bg-black'>
                    {/* TOP LOGO */}
                    <div className='text-xl font-bold text-gray-800 dark:text-white'>JUNLIST</div>
                </div>
                {/* TEAM */}
                <div className='flex items-center gap-5 border-y-[1.5px] border-gray-200 px-8 py-4 dark:border-gray-700'>
                    <Image src={'/logo.png'} alt='logo' width={40} height={40} />
                    <div>
                        <h3 className='text-md font-bold tracking-wide dark:text-gray-200'>
                            JUN TEAM
                        </h3>
                        <div className='mt-1 flex items-start gap-2'>
                            <LockIcon className='mt-[0.1rem] h-3 w-3 text-gray-500 dark:text-gray-400' />
                            <p className='text-xs text-gray-500'>Private</p>
                        </div>
                    </div>
                </div>
            </div>
            {/* NAVBAR LINKS */}
        </div>
    );
};

interface SidebarLinkProps {
    href: string;
    icon: LucideIcon;
    label: string;
    isCollapsed: boolean;
}

const SidebarLink = ({ href, icon: Icon, label, isCollapsed }: SidebarLinkProps) => {
    const pathname = usePathname();
    const isActive = pathname === href || (pathname === '/' && href === '/dashboard');
    const screenWidth = window.innerWidth;

    const dispatch = useAppDispatch();
    const isSidebarCollapsed = useAppSelector((state) => state.global.isSidebarCollapsed);
    const isDarkMode = useAppSelector((state) => state.global.isDarkMode);

    return (
        <Link href={href} className='w-full'>
            <div
                className={`relative flex cursor-pointer items-center gap-3 transition-colors hover:bg-gray-100 dark:bg-black dark:hover:bg-gray-700 ${
                    isActive ? 'bg-gray-100 text-white dark:bg-gray-600' : ''
                } `}
            >
                {isActive && (
                    <div className='absolute left-0 top-0 h-[100%] w-[5px] bg-blue-200'></div>
                )}
                <Icon className='h-6 w-6 text-gray-800 dark:text-gray-100' />
            </div>
        </Link>
    );
};

export default Sidebar;
