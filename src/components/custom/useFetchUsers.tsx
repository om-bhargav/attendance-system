import { collection, getDocs } from 'firebase/firestore';
import { useEffect, useState } from 'react';
import { db } from '../../firebase';
const useFetchUsers = (type:string) => {
    const [users,setUsers] = useState<any>([]);
    const [loaded,setLoaded] = useState<any>(false);
    useEffect(()=>{
        const cleanUp = async () => {
            const data = await getDocs(collection(db,"users"));
            const users_data:any = [];
            data.docs.forEach((item)=>{
                const details:any = {...item.data(),id:item.id};
                if(details?.role===type){
                    users_data.push(details);
                }
            });
            setUsers(users_data);
            setLoaded(true);
        };
        return ()=>{cleanUp()};
    },[]);
    return [users,setUsers,loaded,setLoaded];
}

export default useFetchUsers;