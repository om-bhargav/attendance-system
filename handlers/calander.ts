import { db } from "../lib/firebase";
import { getDoc,doc } from "firebase/firestore";
export const fetchHolidays = async (id:string)=>{
    const marked_holidays:any = (await getDoc(doc(db,"holidays",id))).data();
    return marked_holidays["holidays"];
}
