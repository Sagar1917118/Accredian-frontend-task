import crossIcon from "../assets/images/crossIcon.png"
import { useContext ,useEffect,useState} from "react";
import DataContext from '../AppContext/DataContext';
import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast"
import axios from "axios"
function ReferForm(){
    const {setShowForm}=useContext(DataContext);
    const [loading,setLoading]=useState(false);
    // form data
    const { register, handleSubmit, reset, formState: { errors, isSubmitSuccessful }, } = useForm()              //  useform is used to collect data of input box in object form (read from internet) 
     
   
  const submitContactForm = async (data) => { 
    setLoading(true);  
    const toastId = toast.loading("Loading...");
    try{
        const response=await axios.post(`${process.env.REACT_APP_BACKEND_URL}/add-referal`,data);
        console.log(response);
        const successToast=toast.success("Referral Successful");
        const email_toast=toast.success("Email Send Successfully");
        setTimeout(1000,()=>{
            toast.dismiss(successToast);
            toast.dismiss(email_toast);
        });
        
    } 
    catch (error) {
      console.log("ERROR MESSAGE - ", error.message);
      const failureToast=toast.error("Referral Unsuccessful");
      setTimeout(1000,()=>{toast.dismiss(failureToast)});

    }
    setLoading(false);
    toast.dismiss(toastId);
  } 

  useEffect(() => {
    if(isSubmitSuccessful){
      reset({  course_id: "", course_name: "",  sender_email: "",  sender_id: "", sender_name: "",target_email:"",target_id:"", target_name:"", target_phone:"" });
    }
  }, [reset, isSubmitSuccessful])
    // ---------
    return(
        <div class="rounded-lg absolute top-0  left-0 right-0  z-50 backdrop-blur-sm">
            <div>
     <div class="w-full max-w-3xl mx-auto p-8">
        <form class="bg-[#EEF5FF] p-8 rounded-lg shadow-md border dark:border-gray-700" onSubmit = {handleSubmit(submitContactForm)}>
            <div className="flex justify-between items-center">
            <h1 class="text-2xl font-bold text-[#0070f3]  mb-4">Refer form</h1>
            <img onClick={()=>{setShowForm(false)}} className="hover:scale-110 cursor-pointer" src={crossIcon} ></img>
            </div>
            {/* <!-- Shipping Address --> */}
            <div class="mb-6">
                <h2 class="text-xl font-semibold text-[#0070f3] mb-2">Referrer Details</h2>
                <div class="grid grid-cols-2 gap-4">
                    <div>
                        <label for="sender_name" class="block text-[#0070f3] mb-1">Name</label>
                        <input type="text" name="sender_name" id="sender_name" class="w-full rounded-lg border py-2 px-3 dark:bg-gray-700 dark:text-white dark:border-none" {...register("sender_name",{required:true})}></input>
                        {errors.sender_name && ( <span className="-mt-1 text-[12px] text-yellow-500">  Please enter your name. </span> )}
                    </div>
                    <div>
                        <label for="sender_id" class="block text-[#0070f3] mb-1">User ID/Username</label>
                        <input type="text" name="sender_id" id="sender_id" class="w-full rounded-lg border py-2 px-3 dark:bg-gray-700 dark:text-white dark:border-none" {...register("sender_id",)}></input>
                    </div>
                </div>

                <div class="mt-4">
                    <label for="sender_email" class="block text-[#0070f3] mb-1">Email</label>
                    <input type="text" name="sender_email" id="sender_email" class="w-full rounded-lg border py-2 px-3 dark:bg-gray-700 dark:text-white dark:border-none" {...register("sender_email",{required:true})}></input>
                    {errors.sender_email && ( <span className="-mt-1 text-[12px] text-yellow-500">  Please enter your email </span> )}
                </div>


            </div>

            {/* <!-- Payment Information --> */}
            <div>
                <h2 class="text-xl font-semibold text-[#0070f3] mb-2">Referee Details</h2>
                <div class="grid grid-cols-2 gap-4">
                    <div>
                        <label for="target_name" class="block text-[#0070f3] mb-1">Name</label>
                        <input type="text" name="target_name" id="target_name" class="w-full rounded-lg border py-2 px-3 dark:bg-gray-700 dark:text-white dark:border-none" {...register("target_name",{required:true})}></input>
                        {errors.target_name && ( <span className="-mt-1 text-[12px] text-yellow-500">  Please enter Referee Name </span> )}
                    </div>
                    <div>
                        <label for="target_id" class="block text-[#0070f3] mb-1">User ID/Username</label>
                        <input type="text" name="target_id" id="target_id" class="w-full rounded-lg border py-2 px-3 dark:bg-gray-700 dark:text-white dark:border-none" {...register("target_id",)}></input>
                    </div>
                </div>

                <div class="mt-4">
                    <label for="target_email" class="block text-[#0070f3] mb-1">Email</label>
                    <input type="text" name="target_email" id="target_email" class="w-full rounded-lg border py-2 px-3 dark:bg-gray-700 dark:text-white dark:border-none" {...register("target_email",{required:true})}></input>
                    {errors.target_email && ( <span className="-mt-1 text-[12px] text-yellow-500">  Please enter Referee Email </span> )}
                </div>

                <div class="mt-4">
                    <label for="target_phone" class="block text-[#0070f3] mb-1">Phone Number</label>
                    <input type="text" name="target_phone" id="target_phone" class="w-full rounded-lg border py-2 px-3 dark:bg-gray-700 dark:text-white dark:border-none" {...register("target_phone",{required:true})}></input>
                    {errors.target_phone && ( <span className="-mt-1 text-[12px] text-yellow-500">  Please enter Referee Phone Number </span> )}
                </div>

                <div class="grid grid-cols-2 gap-4 mt-4">
                    <div>
                        <label for="course_name" class="block text-[#0070f3] mb-1">Course Name</label>
                        <input type="text" name="course_name" id="course_name" class="w-full rounded-lg border py-2 px-3 dark:bg-gray-700 dark:text-white dark:border-none" {...register("course_name",{required:true})}></input>
                        {errors.course_name && ( <span className="-mt-1 text-[12px] text-yellow-500">  Please enter Course Name  </span> )}
                    </div>
                    <div>
                        <label for="course_id" class="block text-[#0070f3]  mb-1">Course Id</label>
                        <input type="text" name="course_id" id="course_id" class="w-full rounded-lg border py-2 px-3 dark:bg-gray-700 dark:text-white dark:border-none" {...register("course_id",{required:true})}></input>
                        {errors.course_id && ( <span className="-mt-1 text-[12px] text-yellow-500">  Please enter Course Id </span> )}
                    </div>
                </div>
            </div>
            <div class="mt-8 flex justify-end">
                <button type="submit" disabled={loading} class="bg-teal-500 text-white px-4 py-2 rounded-lg hover:bg-teal-700 dark:bg-teal-600 dark:text-white dark:hover:bg-teal-900">Refer</button>
            </div>
        </form>
    </div>
    </div>
</div>

    )
};
export default ReferForm;