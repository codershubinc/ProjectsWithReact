import React from 'react'

function Header() {
    return (
        <div className='flex   p-1 rounded-lg bg-[#212121] '>
            <div className='flex border-solid border-2 border-gray-700  p-1 rounded-2xl gap-1 '>
                <img src="src\Components\Header\resources\RoBoico.png" className='h-10 w-10 rounded-[50%]' alt="" />
                <h2 className='text-3xl'>Basic Router</h2>
            </div>
            <div>
                <h1> </h1>
            </div>
        </div>
    )
}

export default Header
