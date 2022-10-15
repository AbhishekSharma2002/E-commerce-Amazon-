import React from 'react'

const mr_com = new URL("./image/mr com.in.png", import.meta.url)



export default function Login() {
    return (
       
        <div className=''>
            <div className='flex justify-center mt-6'>
                <img className='h-12' src={mr_com} alt=''></img>
            </div>
            <div className='h-80 w-80 border rounded-lg border-black mx-auto mt-3 p-4'>
                <p className='text-2xl ml-2 '>Sign in</p>
                <hr></hr>
                <p className=' font-bold mt-2'>Email or mobile phone number:</p>

                <input className='w-64 h-8 pl-3 border-2 mt-2 border-orange-400 rounded-lg' placeholder='Enter here'></input>
                <button className='w-64 h-8 mt-3 bg-orange-400 rounded-md cursor-not-allowed hover:bg-orange-300'>Continue</button>
                <p className='text-xs mt-2'>By continuing, you agree to mr com<small>.in</small> <a className='text-blue-600' href='google.com'>Conditions</a> of Use and <a className='text-blue-600' href='google.com'>Privacy Notice.</a></p>
                <p className='text-blue-700 cursor-not-allowed hover:underline mt-16 inline-block'> - Need help?</p>
            </div>
            <div className=''>
                <p className='text-xs text-center mt-5'>New to MR COM.in ?</p>
            </div>
            <div className='flex justify-center'>
                <button className='bg-gray-300 w-72 h-10 rounded-md mt-4 hover:bg-gray-400 '>Create your mr com Account</button>
            </div>
        </div>
      
    )
}
