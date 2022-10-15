import React from 'react'
import { Link } from 'react-router-dom'
const K50i = new URL("./mobile/K50i 5G.jpg", import.meta.url)
const OnePlus = new URL("./mobile/OnePlus 10R 5G.jpg", import.meta.url)
const Galax = new URL("./mobile/Galax M13.jpg", import.meta.url)
const lite = new URL("./mobile/Lite.jpg", import.meta.url)
const realme = new URL("./mobile/realme.jpg", import.meta.url)
const Samsung = new URL("./mobile/Samsung.jpg", import.meta.url)
//bed imports
const bed_1 = new URL("./mobile/bed-1.jpg", import.meta.url)
const bed_2 = new URL("./mobile/bed-2.jpg", import.meta.url)
const bed_3 = new URL("./mobile/bed-3.jpg", import.meta.url)
const bed_4 = new URL("./mobile/bed-4.jpg", import.meta.url)
const bed_5 = new URL("./mobile/bed-5.jpg", import.meta.url)
const bed_6 = new URL("./mobile/bed-6.jpg", import.meta.url)
//Home pics
const Home_1 = new URL("./mobile/Home_1.jpg", import.meta.url)
const Home_2 = new URL("./mobile/Home_2.jpg", import.meta.url)
const Home_3 = new URL("./mobile/Home_3.jpg", import.meta.url)
const Home_4 = new URL("./mobile/Home_4.jpg", import.meta.url)
const Home_5 = new URL("./mobile/Home_5.jpg", import.meta.url)
const Home_6 = new URL("./mobile/Home_6.jpg", import.meta.url)
//EMI
const EMI = new URL("./mobile/EMI.jpg", import.meta.url)

export default function () {
    return (
        <>
            <div className=' m-8 h-72 '>
                <h1 className='font-semibold text-2xl p-2 '>Up to 40% off | Festive deals on Smartphones<small className='ml-4 text-sm text-blue-600 cursor-not-allowed'>see all offers</small></h1>
                <div className='grid grid-cols-6'>
                    <div className='p-2'><img src={K50i} alt=''></img><button className='text-blue-600 hover:text-red-600 hover:underline ml-12'>more Details</button></div>
                    <div className='p-2'><img src={OnePlus} alt=''></img><button className='text-blue-600 hover:text-red-600 hover:underline ml-12'>more Details</button></div>
                    <div className='p-2'><img src={Galax} alt=''></img><p className='text-blue-600 hover:text-red-600 hover:underline ml-12'><Link to='more Details'>more Details</Link></p></div>
                    <div className='p-2'><img src={lite} alt=''></img><button className='text-blue-600 hover:text-red-600 hover:underline ml-12'>more Details</button></div>
                    <div className='p-2'><img src={realme} alt=''></img><button className='text-blue-600 hover:text-red-600 hover:underline ml-12'>more Details</button></div>
                    <div className='p-2'><img src={Samsung} alt=''></img><button className='text-blue-600 hover:text-red-600 hover:underline ml-12'>more Details</button></div>
                </div>
            </div>
            <div className='m-8 h-72'>
                <p className='font-semibold text-2xl p-2'>Home furnishing products for festive season<small className='ml-4 text-sm text-blue-600 cursor-not-allowed'>see all offers</small></p>
                <div className='grid grid-cols-6'>
                    <div className='p-2'><img src={bed_1} alt=''></img><button className='text-blue-600 hover:text-red-600 hover:underline ml-12'>more Details</button></div>
                    <div className='p-2'><img src={bed_2} alt=''></img><button className='text-blue-600 hover:text-red-600 hover:underline ml-12'>more Details</button></div>
                    <div className='p-2'><img src={bed_3} alt=''></img><p className='text-blue-600 hover:text-red-600 hover:underline ml-12'><Link to='more Details'>more Details</Link></p></div>
                    <div className='p-2'><img src={bed_4} alt=''></img><button className='text-blue-600 hover:text-red-600 hover:underline ml-12'>more Details</button></div>
                    <div className='p-2'><img src={bed_5} alt=''></img><button className='text-blue-600 hover:text-red-600 hover:underline ml-12'>more Details</button></div>
                    <div className='p-2'><img src={bed_6} alt=''></img><button className='text-blue-600 hover:text-red-600 hover:underline ml-12 mt-14'>more Details</button></div>
                </div>s
            </div>
            <div className='m-8 h-72'>
                <p className='font-semibold text-2xl p-2'>Up to 60% off | Home picks from small businesses<small className='ml-4 text-sm text-blue-600 cursor-not-allowed'>see all offers</small></p>
                <div className='grid grid-cols-6'>
                    <div className='p-2'><img src={Home_1} alt=''></img><button className='text-blue-600 hover:text-red-600 hover:underline ml-12'></button></div>
                    <div className='p-2'><img src={Home_2} alt=''></img><button className='text-blue-600 hover:text-red-600 hover:underline ml-12'></button></div>
                    <div className='p-2'><img src={Home_3} alt=''></img><p className='text-blue-600 hover:text-red-600 hover:underline ml-12'><Link to='more Details'></Link></p></div>
                    <div className='p-2'><img src={Home_4} alt=''></img><button className='text-blue-600 hover:text-red-600 hover:underline ml-12'></button></div>
                    <div className='p-2'><img src={Home_5} alt=''></img><button className='text-blue-600 hover:text-red-600 hover:underline ml-12'></button></div>
                    <div className='p-2'><img src={Home_6} alt=''></img><button className='text-blue-600 hover:text-red-600 hover:underline ml-12 mt-14'></button></div>
                </div>
            </div>
            <din className='flex justify-center'>
                <img src={EMI} alt=''></img>
            </din>
        </>
    )
}
