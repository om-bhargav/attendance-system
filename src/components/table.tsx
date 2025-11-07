import { useNavigate } from "react-router-dom";
import SectionLoading from "./SectionLoading";
const table = ({ cols,loaded, data, edit_url, button_text }: any) => {
  const navigate = useNavigate();
  return (
    loaded ?
    <div className="w-full flex-col flex gap-5 justify-center">
      {data.length>0 ?
      <table>
        <thead>
          <tr>
            {cols.map((e: string, ind: number) => (
              <th key={ind} className="uppercase">
                {e}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((item: any, ind: number) => (
            <tr key={ind}>
              <td>{ind + 1}</td>
              <td className="capitalize">{item.name}</td>
              <td>
                <button onClick={() => navigate(`${edit_url}/${item.id}`)}>
                  {button_text}
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>:
        <div className="w-full font-semibold text-lg text-center">No Data Added Yet!</div>
      }
    </div>:<SectionLoading />
  );
};

export default table;
