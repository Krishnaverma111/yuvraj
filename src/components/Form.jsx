import React from 'react'

export default function Form() {
  return (
    <div className='bg-purple-500'>

      <div className='bg-white h-[400px] w-[300px] m-auto rounded-lg  text-white shadow-2xl shadow-black'>
  

        <div >
           <h1 className='font-bold text-2xl text-black text-center'> Login form</h1>

           
        </div>

         
         <div className='flex justify-around mt-5'>
         <button  className='bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% ..." p-2 rounded-lg ml-5 w-[100px]'>Login</button>
         <button className='bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% rounded-lg w-[100px]'>Sign up</button>
         </div>
         <form action="" className='flex flex-col gap-4 mt-6'>
            <div className='border-b-2 border-black mt-5 ml-5 mr-5'>
            <input className='border-none focus:outline-none focus:ring-0"' type="text" placeholder='full name' />

            </div>
            <div className='border-b-2 border-black mt-5 ml-5 mr-5'>
            <input className='border-none focus:outline-none focus:ring-0 ' type="text" placeholder='E mail' />
             
             
            </div>

            <h1 className='text-blue-500 ml-4'>forgot password</h1>

            <div className='m-auto'>
                <button className='bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% rounded-lg p-2 w-[200px]'>Login</button>
            </div>

            <h1 className='text-black flex'>choose an account?<span className='text-blue-500 flex'>login here</span></h1> 

         </form>

        
         
     





            

      </div>
    </div>
  )
}
