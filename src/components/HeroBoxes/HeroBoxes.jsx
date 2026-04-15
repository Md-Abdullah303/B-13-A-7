import React from 'react';

const HeroBoxes = () => {
    return (
        <div className='grid grid-cols-4 gap-5 pt-7'>
            <div className=" flex items-center flex-col bg-white py-10 rounded-xl border border-gray-300">
                <h1 className='text-3xl font-semibold text-[#244D3F]'>10</h1>
                <p className='text-gray-600 text-[14px] mt-2'>Total Friends</p>
            </div>
            <div className=" flex items-center flex-col bg-white py-10 rounded-xl border border-gray-300">
                <h1 className='text-3xl font-semibold text-[#244D3F]'>3</h1>
                <p className='text-gray-600 text-[14px] mt-2'>On Track</p>
            </div>
            <div className=" flex items-center flex-col bg-white py-10 rounded-xl border border-gray-300">
                <h1 className='text-3xl font-semibold text-[#244D3F]'>6</h1>
                <p className='text-gray-600 text-[14px] mt-2'>Need Attention</p>
            </div>
            <div className=" flex items-center flex-col bg-white py-10 rounded-xl border border-gray-300">
                <h1 className='text-3xl font-semibold text-[#244D3F]'>12</h1>
                <p className='text-gray-600 text-[14px] mt-2'>Interactions This Month</p>
            </div>
        </div>
    );
};

export default HeroBoxes;