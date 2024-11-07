import React from 'react'
import { CgCalendar } from "react-icons/cg";
import { CgCalendarToday } from "react-icons/cg";

export default function(){
    return <>
        <div className='m-5 my-32 flex justify-center'>
            <div className='w-96 h-52 border border-gray-300 mx-5 p-10 rounded-md'>
                <CgCalendar size='60' style={{ color: 'rgb(231, 222, 190 )' }}/>
                <p className='text-2xl font-semibold my-1'>
                    Monday - Friday
                </p>
                <p className='text-lg text-blue-900'>10am - 6pm ET</p>
            </div>
            <div className='w-96 h-52 border border-gray-300 mx-5 p-10 rounded-md'>
                <CgCalendarToday size='60' style={{ color: 'rgb(231, 222, 190 )' }}/>
                <p className='text-2xl font-semibold my-1'>
                    Sunday
                </p>
                <p className='text-lg text-blue-900'>1pm - 5pm ET</p>
            </div>
        </div>
    </>
}