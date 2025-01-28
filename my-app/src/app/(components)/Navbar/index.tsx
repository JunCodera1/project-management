import React from 'react'
import {Search} from "lucide-react";

type Props = {}

const Navbar = (props: Props) => {
  return (
    <div className='flex items-center justify-between bg-white px-4 py-3 dark:bg-black'> 
        {/* Search Bar */}
        <div className="flex items-center gap-8">
            <div className='relative flex h-min w-[200px]'>
                <Search></Search>
            </div>
        </div>
    </div>
  )
}

export default Navbar