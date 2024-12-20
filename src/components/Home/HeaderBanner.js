import { ChevronRight, Sparkles } from 'lucide-react'
import React from 'react'

function HeaderBanner() {
    return (
        <>
            <div className='bg-[#e2d9fa] flex p-4 justify-center gap-5 md:gap-x-8'>
                <div className='flex md:gap-2'>
                    <div >
                        <span ><Sparkles className='text-[#6e43e5] font-bold' /></span>
                    </div>
                    <div className='text-[#6e43e5] md:font-bold font-roboto'>Plus</div>
                </div>
                <div className='flex gap-4 md:gap-8 justify-center items-center'>
                    <div>
                        <p className='text-[#321c6d] md:font-semibold font-urbanist'>Save 10% on every service at ₹249</p>
                    </div>
                    <div><ChevronRight className='text-[#321c6d] cursor-pointer' size={18} /></div>
                </div>
            </div>
        </>
    )
}

export default HeaderBanner
