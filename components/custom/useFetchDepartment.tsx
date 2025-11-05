import React, { useEffect, useState } from 'react'
import { db } from '../../lib/firebase';
import { getDoc,doc } from 'firebase/firestore';
const useFetchDepartment = (id:string) => {
  const [departments,setDepartments] = useState<any>([]);
  const [loaded,setLoaded] = useState<any>(false);
  useEffect(()=>{
    const cleanUp = async () => {
        const response = await getDoc(doc(db,"departments",id));
        const data = response.data();
        if(data?.departments){
            setDepartments(data.departments);
        }
        setLoaded(true);
    };
    return ()=>{cleanUp()};
  },[]);
  return [departments,setDepartments,loaded,setLoaded];
}

export default useFetchDepartment