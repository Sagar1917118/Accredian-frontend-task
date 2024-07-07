import { Link } from 'react-router-dom';
import referimage from "../assets/images/image2.png";
import {useState,useContext} from 'react';
import note1 from "../assets/images/note1.png"
import DataContext from '../AppContext/DataContext';
const Hero = () => {
  const {setShowForm}=useContext(DataContext);
  return (
    <section id='hero' className='flex  flex-col items-center gap-4 relative'>
      {/* Flex Container */}
      <div className='flex  flex-wrap justify-evenly  w-[300px] md:w-[500px] bg-[#e6f0fc] p-2 text-[#4c4c4c] rounded-full font-semibold'>
                <div className='hover:text-[#1b74e8] cursor-pointer' onClick={()=>{setShowForm(true)}}>Refer</div>
                <div className='hover:text-[#1b74e8] cursor-pointer'>Benefits</div>
                <div className='hover:text-[#1b74e8] cursor-pointer'>FAQs</div>
                <div className='hover:text-[#1b74e8] cursor-pointer'>Support</div>
           </div>
      <div className=' relative w-[90%] md:w-[70%] flex flex-row    items-center gap-4 md:h-[592px]   bg-[#EEF5FF] rounded-lg  drop-shadow-[2px_4px_65px_1px_rgba(0, 7, 43, 0.21)]'>
            <div className='w-[60%] md:w-[40%] flex flex-col  gap-2 md:gap-8 px-8'>
              <span className=' text-[20px] leading-[20px] md:text-[35px] md:leading-[35px] lg:text-[78px] lg:leading-[78px] font-semibold'>Let's Learn & Earn</span>
              <span className='  text-[12px] leading-[12px] md:text-[30px] md:leading-[30px] lg:text-[35px] lg:leading-[40px] font-400'>Get a chance to win up-to <span className='font-bold md:text-[40px] lg:text-[45px] text-[#0070f3]'>Rs. 15,000</span></span>
              <button  onClick={()=>{setShowForm(true)}} className=" lg:mt-10 md:w-[192px] p-5    md:p-8 text-[10px] leading-[10px] md:text-[20px] font-400 shadow-[0_4px_14px_0_rgb(0,118,255,39%)] hover:shadow-[0_6px_20px_rgba(0,118,255,23%)] hover:bg-[rgba(0,118,255,0.9)] px-8 py-2 bg-[#0070f3] rounded-md text-white font-light transition duration-200 ease-linear">
              Refer Now
              </button>
            </div>
            <div className='w-[60%] h-full flex items-center justify-center  bg-cover bg-center'>
            <img className="object-fill  w-full h-full" src={referimage}></img>
            </div>
            <img  className="hidden lg:block w-[100px] h-[100px] absolute bottom-2 left-[40%] -rotate-45" src={note1}></img>
            <img  className="hidden lg:block w-[100px] h-[100px] absolute right-2 top[30%] " src={note1}></img>
            <img  className="hidden lg:block w-[100px] h-[100px] absolute left-2 top-2 " src={note1}></img>
            <img  className="hidden lg:block w-[100px] h-[100px] absolute right-2 top-2 -rotate-45 " src={note1}></img>
            <img  className="hidden lg:block w-[100px] h-[100px] absolute left-[60%] top-1 " src={note1}></img>


        </div>
    </section>
  );
};
export default Hero;
