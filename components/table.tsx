import React from "react";
import { useNavigate } from "react-router-dom";
const table = ({ cols, data,edit_url,button_text }: any) => {
  const navigate = useNavigate();
  return (
    <div className="w-full flex-col flex gap-5 justify-center">
      <table>
        <thead>
          <tr>
            {cols.map((e: string,ind) => (
              <th key={ind} className="uppercase">{e}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((item:any,ind:number)=><tr key={ind}>
            <td>{ind+1}</td>
            <td>{item.name}</td>
            <td><button onClick={()=>navigate(`${edit_url}/${item.id}`)}>{button_text}</button></td>
          </tr>)
          
          }</tbody>
      </table>
    </div>
  );
};

export default table;
