import { useNavigate } from "react-router-dom";
import SectionLoading from "./SectionLoading";
const MarkAttendanceTable = ({ cols,loading, data}:any) => {
  const navigate = useNavigate();
  return (
    loading ?
    <SectionLoading />:<div className="w-full flex-col flex gap-5 justify-center">
      <table>
        <thead>
          <tr>
            <th>#</th>
            {cols.map((e: string, ind: number) => (
              <th key={ind} className="uppercase">
                {e}
              </th>
            ))}
            <th>Present/Absent</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item: any, ind: number) => (
            <tr key={item.id}>
              <td className='hidden'><input name={`student-${ind}-id`} value={item.id} type="hidden" /></td>
                <td>{ind+1}</td>
                {
                    cols.map((e:string,ind:number)=>{
                        return (
                            <td key={ind}>{item[e]}</td>
                        )
                    })
                }
                <td>
                  <select name={`student-${ind}-status`} className='border px-3 py-2 rounded border-gray-400 outline-none' defaultValue="absent">
                    <option value="absent">Absent</option>
                    <option value="present">Present</option>
                  </select>
                </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>);
}

export default MarkAttendanceTable