import React from 'react'

const Navbar = () => {
    return (
        <div className='m-5'>
            <nav className='bg-main gap-4 flex mx-10 justify-between'>
                <div className='bg-main gap-4 flex mx-10 items-center'>
                    <div className='text-2xl text-slate-950 font-medium'>Hello, Manan</div>
                    <span className='text-orange-600 flex text-nowrap text-4xl font-semibold'>Good Afternoon !</span>
                </div>
                <div className='px-7'>
                    <span className='text-2xl text-slate-950 font-medium'>Time:</span>
                    <span className='text-xl text-orange-600 font-medium'>02:12:04 AM</span>
                </div>
            </nav>

        </div>
    )
}

export default Navbar
