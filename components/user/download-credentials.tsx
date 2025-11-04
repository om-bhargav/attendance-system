import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Table from "../table";
import { collection, doc, getDocs } from "firebase/firestore";
import { db } from "../../lib/firebase";
const downloadCredentials = () => {
  const { type } = useParams();
  const [data,setData] = useState([]);
  useEffect(()=>{
    const cleanUp = async () => {
        const users = await getDocs(collection(db,"users"));
        const newData:any = [];
        users.docs.forEach((item)=>{
            const item_data = item.data();
            if(item_data.role===type){
                newData.push(item_data);
            }
        });
        setData(newData);
    }
    return ()=>{cleanUp()};
  },[]);
  return (
    <div className="max-w-[1200px] flex-1 gap-2 flex flex-col items-center md:shadow-lg rounded mx-auto container my-12 p-5">
      <div className="text-2xl font-bold capitalize">{type}s Credentials</div>
      <div className="w-full flex-col flex gap-5 justify-center">
        <table>
          <thead>
            <tr>
              <th>#</th>
              <th>Email</th>
              <th>Password</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item: any, ind: number) => (
              <tr>
                <td>{ind + 1}</td>
                <td>{item.name}</td>
                <td>{item.password}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default downloadCredentials;
