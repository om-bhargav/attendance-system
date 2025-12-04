import SectionLoading from "./SectionLoading";
const calender = ({ month_index = new Date().getMonth() , buttonEvent = (date:string)=>{},holidays,loaded=true }: any) => {
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const current = new Date();
  const first_day_of_month = new Date(
    current.getFullYear(),
    month_index,
    1
  ).getDay();
  const days_of_month = new Date(
    current.getFullYear(),
    month_index,
    0
  ).getDate();
  return (
    <div className="shadow-lg flex flex-col gap-1 w-full lg:w-auto">
      <div className="p-3 text-center md:min-w-[350px] text-xl font-semibold bg-orange-500 text-white w-full uppercase">
        {months[month_index]}
      </div>
      <div className="p-3 grid grid-cols-7 gap-3">
        <div className="flex justify-center bg-orange-500 p-2 text-white text-center rounded">
          S
        </div>
        <div className="flex justify-center bg-orange-500 p-2 text-white text-center rounded">
          M
        </div>
        <div className="flex justify-center bg-orange-500 p-2 text-white text-center rounded">
          T
        </div>
        <div className="flex justify-center bg-orange-500 p-2 text-white text-center rounded">
          W
        </div>
        <div className="flex justify-center bg-orange-500 p-2 text-white text-center rounded">
          T
        </div>
        <div className="flex justify-center bg-orange-500 p-2 text-white text-center rounded">
          F
        </div>
        <div className="flex justify-center bg-orange-500 p-2 text-white text-center rounded">
          S
        </div>
        {loaded ?       
        <>
        {Array.from(Array(first_day_of_month), (e,i) => (
          <div key={i} className="invisible bg-green-800 p-2 text-white text-center rounded-full">
            0
          </div>
        ))}
        {[...Array(days_of_month)].map((item, index) => (
          <div
          key={index}
          data-sid={(first_day_of_month+index)}
          onClick={()=>buttonEvent((index+1)+"-"+(month_index+1)+"-"+current.getFullYear())}
          className={`${holidays!==undefined && (holidays.includes((index+1)+"-"+(month_index+1)+"-"+current.getFullYear()))? "bg-green-500! cursor-pointer" :[0,6].includes((first_day_of_month+index)%7)?"bg-gray-500! cursor-not-allowed pointer-events-none":"cursor-pointer bg-red-800!"} text-white p-2 text-center rounded flex justify-center`}
          >
            {index + 1}
          </div>
        ))}
        </>:<SectionLoading/>}
    </div>
      </div>
  );
};

export default calender;
