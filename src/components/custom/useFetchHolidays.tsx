import React, { useEffect, useState } from 'react'
import {db} from '../../firebase';
import { getDoc,doc } from 'firebase/firestore';
const useFetchHolidays = (id:string) => {
  const [holidays,setHolidays] = useState<any>([]);
  const [isLoaded,setIsLoaded] = useState<Boolean>(false);
  useEffect(()=>{
    const cleanUp = async ()=>{
        if(id){
          const marked_holidays:any = (await getDoc(doc(db,"holidays",id))).data();
          setHolidays(marked_holidays["holidays"]);
          setIsLoaded(true);
        }
      };
      cleanUp()
  },[id]);
  return [holidays,setHolidays,isLoaded,setIsLoaded];
}

export default useFetchHolidays