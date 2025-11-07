import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Download } from "lucide-react";
import { collection, doc, getDocs } from "firebase/firestore";
import { db } from "../src/firebase";
import SectionLoading from "./SectionLoading";
import { useRef } from "react";
import {jsPDF} from "jspdf";
import html2canvas from "html2canvas";
import { ContextUser } from "../context/userContext";
const downloadAttendanceReport = () => {
  const {user}:any = ContextUser();
  const { type } = useParams();
  const [data,setData] = useState([]);
  const [loaded,setLoaded] = useState<Boolean>(false);
  const elementRef = useRef(null);

  useEffect(()=>{
    const cleanUp = async () => {
        const users = await getDocs(collection(db,"users"));
        const newData:any = [];
        users.docs.forEach((item)=>{
            const item_data = item.data();
            if(item_data.role==="student" && item_data.college_id===user.college_id){
                newData.push(item_data);
            }
        });
        setData(newData);
        setLoaded(true);
    }
    return ()=>{cleanUp()};
  },[]);
  const generatePDF = async () => {
    const element = elementRef.current;
    if (!element) return;

    const canvas = await html2canvas(element, {
      scale: 2,
      useCORS: true,
      logging: false,
    });

    const imgData = canvas.toDataURL("image/png");
    const pdf = new jsPDF("p", "mm", "a4");

    const imgWidth = 210; // A4 width in mm
    const pageHeight = 297;
    const imgHeight = (canvas.height * imgWidth) / canvas.width;

    let heightLeft = imgHeight;
    let position = 0;

    pdf.addImage(imgData, "PNG", 0, position, imgWidth, imgHeight, undefined, "FAST");
    heightLeft -= pageHeight;

    while (heightLeft > 0) {
      position = heightLeft - imgHeight;
      pdf.addPage();
      pdf.addImage(imgData, "PNG", 0, position, imgWidth, imgHeight, undefined, "FAST");
      heightLeft -= pageHeight;
    }

    pdf.save(`${type}s-credentials.pdf`);
  };
  return (
    <div className="max-w-[1200px] flex-1 gap-2 flex flex-col md:shadow-lg rounded mx-auto container my-12 p-5">
      <title>{type}'s Credentials</title>
      <button type="button" onClick={generatePDF} className="self-end"><Download/></button>
      <div ref={elementRef} className="w-full px-12 mx-auto flex flex-col gap-4 items-center justify-center">

      <div className="text-2xl font-bold capitalize">Students Attendance Report</div>
      {
        loaded ? 
        <div className="mx-auto">
        <table className="border-collapse border-black border-1 w-full text-black!">
          <thead className="bg-black!">
            <tr>
              <th className="rounded-none! border-r border-b px-4 py-2">#</th>
              <th className="rounded-none! border-r border-b px-4 py-2">Email</th>
            </tr>
          </thead>
          <tbody>
            {
              data.map((item:any,index)=>{
                return <tr key={index} >
                  <td className="border-r border-b border-black! px-4 py-2">{index+1}</td>
                  <td className="border-r border-b border-black! px-4 py-2">{item.email}</td>
                  <td className="border-b border-black! px-4 py-2">{item.password}</td>
                      </tr>
              })
            }
          </tbody>
        </table>
      </div>:<SectionLoading/>
      }
    </div>
    </div>
  );
};

export default downloadAttendanceReport;
