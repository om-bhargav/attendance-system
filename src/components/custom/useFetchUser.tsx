import React, { useEffect, useState } from 'react'
import {db} from '../../firebase';
import { getDoc,doc } from 'firebase/firestore';
const useFetchUser = (id:string) => {
  const [user,setUser] = useState<any>({});
  const [loaded,setLoaded] = useState<boolean>(false);
  useEffect(()=>{
    const cleanUp = async () => {
        if(id){
            const data = (await getDoc(doc(db,"users",id)));
            const user_data = {id:data.id,...data.data()}
            setUser(user_data);
            setLoaded(true);
        }
    };
    return ()=>{cleanUp()};
  },[]);
  return [user,setUser,loaded,setLoaded];
}

export default useFetchUser