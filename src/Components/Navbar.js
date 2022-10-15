import React from 'react'
import { Link } from 'react-router-dom'
// const thisPicture = new URL("./image/mr com.png",import.meta.url)
const Search = new URL("./image/images(1).png",import.meta.url)
const profile_icon = new URL("./image/profile-icon.png",import.meta.url)

export default function Navbar() {
    return (
        <>
            <div className="flex justify-between bg-slate-800 h-16 items-center sticky top-0">
                <div className='ml-9'>
                    {/* <img className='h-20 w-20 rounded-full' src={thisPicture} alt=''></img> */}
                    <p className='text-orange-600 font-extrabold text-xl'>MR COM<small>.in</small></p>
                </div>
                <div className=''>
                    <div class="input-group relative flex flex-row items-stretch w-96 mb-4 mt-3">
                        <input type="search" class="form-control relative flex-auto min-w-0 block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" placeholder="Search" aria-label="Search" aria-describedby="button-addon2"/>
                           <img className='h-10 rounded-tr-md w-10' src={Search} alt=''></img>
                    </div>
                </div>
                <div className='flex flex-row mr-5 space-x-2'>
                    <p className='text-white font-semibold mt-2 mr-4'><Link to="Home">Home</Link></p>
                    <p className='mt-2 text-white font-extrabold'><Link to='Login'>Login</Link></p>
                    <img className='h-10 w-10' src={profile_icon} alt=''></img>
                </div>
            </div>
        </>
    )
}
