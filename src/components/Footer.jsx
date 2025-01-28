import React from 'react'
import { FaTwitter } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

export default function Footer() {
  return (
    <footer>

      <div>
        <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d55471.85623975071!2d77.05693716165973!3d29.662035095984947!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1737453063324!5m2!1sen!2sin"  className="h-[400px] w-full mt-5" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
      </div>

      <div className='bg-black text-white flex justify-between'>

        <div className='bg-black mb-4'>
          <h1></h1>
          <ul>
            <li className='font-bold hover:text-red-400'>About sephora</li>
            <li>careers</li>
            <li>Affiliates</li>
            <li>sitemap</li>
            <li>sephora global sites</li>
          </ul>
        </div>

        <div>
          <h1></h1>
          <ul>
            <li className='font-bold  hover:text-red-400'>My sephora</li>
            <li>My account</li>
            <li>Order staus</li>
            <li>Beauty insider</li>
            <li>Rewards bazzar</li>
          </ul>
        </div>

        <div>
          <h1></h1>
          <ul>
            <li className='font-bold  hover:text-red-400'>Help&FAQs</li>
            <li>Online ordering</li>
            <li>Shipping</li>
            <li>Return&Exchanges</li>
            <li>Billing</li>
          </ul>
        </div>

        <div>
          <h1></h1>
          <ul>
            <li className='font-bold  hover:text-red-400'>Ways to shop</li>
            <li>Just arrived</li>
            <li>Best sellers</li>
            <li>Beauty offer</li>
            <li>Gift cards</li>
          </ul>

        </div>

        <div className='mt-4' >
          <hr />
        </div>

        
        
      
      </div>

      <div className='bg-black text-white '>
        <hr />
        <div>
          <div className=' gap-2 text-white mt-4 flex justify-between items-center'>
            <div className='flex justify-between'> 
            <h1>sign up for sephora</h1> <div className='flex'><input className='p-2' type="text" name="" id="" placeholder='Emails' /> <button className='border-2 border-white'>sumbit</button>   </div> 

            </div>

            <div className=' flex justify-between'>

              <div className='  flex gap-4'>
              <FaFacebook className='h-[50px] w-[50px]' />
              {<FaTwitter className='h-[50px] w-[50px]' />}
              {<FaYoutube className='h-[50px] w-[50px]' />}
              <FaInstagram className='h-[50px] w-[50px]'/>
              </div>
            

            </div>

           

            <div>

            </div>

          </div>
        
        </div>
       
         </div>
    </footer>
  )
}
