import hero2img from "../assets/images/image.png"
import DataContext from '../AppContext/DataContext';
import { useContext } from "react";
function Hero2(){
    const {setShowForm}=useContext(DataContext);
    return(
        <div className=" w-full my-8 p-8 flex flex-col items-center bg-[#EEF5FF]">
            <span className="font-600 leading-[43px] text-[27.66px]">How do i <span className="text-[#0070f3]">Refer ?</span></span>
            <img  className ="lg:w-[75%]" src={hero2img}></img>
            <button onClick={()=>{setShowForm(true)}} className=" lg:mt-10 md:w-[192px] md:h-[54px] text-[20px] font-400 shadow-[0_4px_14px_0_rgb(0,118,255,39%)] hover:shadow-[0_6px_20px_rgba(0,118,255,23%)] hover:bg-[rgba(0,118,255,0.9)] px-8 py-2 bg-[#0070f3] rounded-md text-white font-light transition duration-200 ease-linear">
              Refer Now
              </button>
        </div>
    )
}
export default Hero2;