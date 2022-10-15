
import React from 'react'


const Galax_page = new URL("./mobile/g.jpg", import.meta.url)
const returns = new URL("./mobile/return.png", import.meta.url)
const delivered = new URL("./mobile/delivery.png", import.meta.url)
const warranty = new URL("./mobile/warranty.png", import.meta.url)
const final = new URL("./mobile/final.png", import.meta.url)

export default function Galax() {
  return (
    <>
      <body className=''>
        <div className='flex flex-row'>
          <div className='' >
            <img className='h-[32rem]' src={Galax_page} alt=''></img>
          </div>
          <div className='mt-6'>
            <p className='w-96 text-2xl font-semibold'>OnePlus 10R 5G Prime Edition (Prime Blue, 8GB RAM, 128GB Storage, 80W SuperVOOC)</p>
            <hr className='mt-6'></hr>
            <div className='mt-4'>
              <p className='ml-16'>M.R.P.:	₹38,999</p>
              <p className=''>Deal of the Day:	₹32,999</p>
              <p className='ml-28 text-red-800'>Ends in 3 days</p>
              <p className='ml-12'>You Save:	₹6,000 (15%)</p>
              <p className='ml-28'>Inclusive of all taxes</p>
              <p className='flex'>Colour : <p className='ml-2 font-medium'> prime blue</p></p>
              <p>Size name: <b>8GB RAM, 128GB Storage</b></p>
            </div>
            <hr></hr>
            <div>
              <table className='table-caption '>
                <tbody>
                  <tr>
                    <td className='font-bold'>Brand</td>
                    <td>Malcolm Lockyer</td>
                  </tr>

                  <tr>
                    <td className='font-bold'>Model Name</td>
                    <td>The Eagles</td>
                  </tr>

                  <tr>
                    <td className='font-bold'>Network service</td>
                    <td>Samsung</td>
                  </tr>

                  <tr>
                    <td className='font-bold'>OS</td>
                    <td>OxygenOS</td>
                  </tr>

                  <tr>
                    <td className='font-bold'>Cellulary Technology</td>
                    <td>5G</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <hr></hr>
            <div className='flex flex-row space-x-5 mt-4'>
              <div><img className='h-16 w-h-16' src={returns} alt=''></img>
                <p className='text-orange-600 text-sm'> 7 days</p>
                <p className='text-orange-600 text-sm'>Replacement</p>
              </div>
              <div><img className='h-16 w-h-16' src={delivered} alt=''></img>
                <p className='text-orange-600 text-sm'>mr com<small>.in</small></p>
                <p className='text-orange-600 text-sm'>delivered</p>
              </div>
              <div><img className='h-16 w-h-16' src={warranty} alt=''></img>
                <p className='text-orange-600 text-sm'> 1 year warranty</p>

              </div>
              <div><img className='h-16 w-h-16' src={final} alt=''></img>
                <p className='text-orange-600 text-sm'> No Contact</p>
                <p className='text-orange-600 text-sm'>Delivery</p>
              </div>
            </div>
            <hr></hr>
            <div className='mt-3'>
              <p><b>All about item</b></p>
              <div className="w-96">
                <h2>

                  jkjsdljf;l dskjf;lsdjdsfjd slfkjds ;flsdj;lf sdjfosd jfisdj fdsjfe oirhw eowef dsl;f jdsklf jdso;fwe oejkfs djf  klejf skod  jfsd lfjweo ifjwe ofjsd lkfj sdl; fjsd; fj eoi fjd lfj sdof jerwp fdsfds fdsfd fd fdfdsf fdfds fdf fdfds fdfds fdsfdsfd fdfdf fdfd

                </h2>
              </div>
            </div>
          </div>
        </div>
      </body>
    </>
  )
}
