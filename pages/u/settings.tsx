import { EmailAuthProvider, reauthenticateWithCredential, signOut} from "firebase/auth";
import toast from "react-hot-toast";
import {auth, db} from "../../lib/firebase";
import {ContextUser} from "../../context/userContext";
import {useNavigate} from "react-router-dom";
import {doc,updateDoc} from "firebase/firestore";
import SubmitButton from "../../components/SubmitButton";
import { updatePassword } from "firebase/auth";
const settings = () => {
  const {setUser,setIsLoggedIn,user}:any = ContextUser();
  const navigate = useNavigate();
  const submitHandler = async (form_data:FormData) => {
    const user_data = Object.fromEntries(form_data);
    setUser({...user,...user_data});
    await updateDoc(doc(db,"users",user.id),user_data);
    toast.success("Data Updated Successfully!");
  };
  const passwordHandler = async (form_data:FormData)=>{
    const {cpass,npass} = Object.fromEntries(form_data);
    try{
      const current_user:any = auth.currentUser;
      const credential = EmailAuthProvider.credential(user.email,cpass as string);
      await reauthenticateWithCredential(current_user,credential); 
      await updatePassword(current_user,npass as string);
      toast.success("Password Updated Successfully!");
    } 
    catch(err:any){
      toast.error(err.message.substr(10));  
    }
  };
  return (
    <>
    <title>Presentify - Settings</title>
    <div className='my-10 p-4 flex gap-5 flex-col items-center container mx-auto max-w-[1000px] lg:border rounded border-gray-400'>
        <div className='font-semibold text-xl'>Account Settings</div>
        <div><img src="/default.png" className='h-50 rounded-full'/></div>
        <form action={submitHandler} className='grid w-full gap-5'>
        <div className='grid md:grid-cols-2 gap-5'>
          <div className='grid'>
            <label>Your Name:</label>
            <input type="text" name="name" defaultValue={user.name} placeholder='Your Name:' />
            </div>
          <div className='grid'>
            <label>Your Email:</label>
            <input type="text" name="email" defaultValue={user.email} placeholder='Your Email:' />
            </div>
          <div className='grid'>
            <label>Your Phone No:</label>
            <input type="text" name="phone_no" defaultValue={user.phone_no} placeholder='Your Phone No:' />
            </div>
          <div className='grid'>
            <label>Your College Name:</label>
            <input type="text" name="college" defaultValue={user.college} placeholder='Your College Name:' />
            </div>
        </div>
          <SubmitButton text="Update Profile"/>
        </form>
        <div className='font-semibold text-xl'>Change Password</div>
        <form action={passwordHandler} className='grid md:grid-cols-3 w-full gap-5'>
          <input type="password" name="cpass" placeholder='Current Password'/>
          <input type="password" name="npass" placeholder='New Password'/>
          {/* <button className='p-3'>Change</button> */}
          <SubmitButton text="Change"/>
          </form>
        <button onClick={async ()=>{
          await signOut(auth);
          navigate("/login");
          setUser(null);
          setIsLoggedIn(false);
          toast.success("Logged Out Successfully!");
        }} className='w-full'>Logout from this device</button>
    </div>
        </>
  )
}

export default settings